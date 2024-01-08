<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ClinicMaster;
use App\Models\Clinics;
use App\Models\ClinicsMaster;
use App\Models\Course;
use App\Models\Info;
use App\Models\Practitioner;
use App\Models\Practitioners;
use App\Models\PractitionerSubmission;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Mail;
use TestMonitor\ActiveCampaign\Exceptions\ValidationException;

class QuestionController extends Controller
{
    public $current_session_id;

    // Array for Questions

    public $default_questions = [
        'q_naturopath' => "Are you a Naturopathic Doctor ?",
        'q_name' => "Name.",
        'q_area' => "Area(s) of Focus (Pick only THREE)",
        'q_services' => "I provide these services",
        'q_website' => "Website Address (if any)",
        'q_email' => "Email",
        'q_associations' => "Associations",
        'q_session' => "I am willing to offer 15-min Free Discovery Session to HealthBuddha leads",
        'q_year' => "Year of getting license to practice.",
        'q_awarness' => "Help us grow Naturopathic awareness and contribute to the growth of the industry.",
        'q_content' => "I would like to sign up as a Content Expert.",
        'q_leads' => "Consent: You may use this info to in ads to drive traffic to my profile page on HealthBuddha",
        'q_upload' => "Upload Profile.",
        'q_cname' => "Clinic Name",
        'q_vcname' => "Virtual Practice Clinic Name",
        'q_vcemail' => "Virtual Practice Clinic Email",
        'q_vcplace_id' => "Virtual Practice Clinic Place ID",
        'q_vclatitude' => "Virtual Practice Clinic Latitude",
        'q_vclongitude' => "Virtual Practice Clinic Longitude",
        'q_vc_postal' => "Virtual Practice Clinic Address",
        'q_vc_working_hours' => "Virtual Practice Working Hours",
    ];

    // Getting Session ID here
    private function getCurrentSessionID()
    {
        $ls = Session::getId();
        // Getting session Id for current time
        $ct = now();
        return md5($ls . $ct);
    }

    // Saving cookie with md5 to backend
    private function saveCookie($md5)
    {
        return setcookie('md5', $md5, time() + (86400 * 30), "/");
    }

    private function getCookie()
    {
        if (isset($_COOKIE['md5'])) {
            return $_COOKIE['md5'];
        }

        return false;
    }
    private function getCourseCookie()
    {
        if (isset($_COOKIE['course'])) {
            return $_COOKIE['course'];
        }

        return false;
    }
    public function deleteCookie()
    {
        if (isset($_COOKIE['md5'])) {
            unset($_COOKIE['md5']);
            unset($_COOKIE['course']);
            Session::forget('course_id');
            setcookie('md5', '', time() - 3600, '/');
            setcookie('course', '', time() - 3600, '/');
        }
    }
    public function join(Request $request)
    {

        if ($this->getCookie()) {
            if ($this->getCourseCookie()) {
                $course = $this->getCookie();
            }
            $md5 = $this->getCookie();
        } else {
            $md5 = $this->getCurrentSessionID();
            $this->saveCookie($md5);
        }

        $q_id = $this->getCurrentQuestionID();
        return view('form', ['qid' => $q_id]);
        // return view('practitioners', ['qid' => $q_id]);
    }

    private function getCurrentQuestionID()
    {
        $q = PractitionerSubmission::where('session_id', $this->getCookie())->orderBy('id', 'desc')->first();

        if ($q) {
            $qid = Str::after($q->question_id, '_');

            $qid++;
            return $qid;
        }

        return null;
    }
    public function getQuestions()
    {
        $questions = "";
        return $questions;
    }

    public function store(Request $req)
    {
        // Log::info("data on line number " . __LINE__ . " in file" . __FILE__, $req->all());
        $questions = $req->all();
        $session_id = $this->getCookie();
        session_start();
        foreach ($questions as $qid => $ans) {
            if($qid == 'q_awarness'){
                Log::info("Refereal Email Added");               
                $this->sendMailToReferalPract($session_id,$ans);                
            }
            if ($qid == 'q_name') {
                $_SESSION['pract_name'] = $ans;
            }
            if ($qid == 'q_naturopath') {
                $data = [
                    'session_id' => $this->getCookie(),
                    'is_completed' => 0];
                if (isset($_COOKIE['course'])) {
                    $course_id = $this->getCourseCookie();
                    $data['course_id'] = $course_id;
                }
                Practitioner::create($data);
                if ($qid == 'q_naturopath' && $ans == 'No') {
                    $this->deleteCookie();
                    error_log('Cookie deleted with Not Naturopath!');
                    Log::info("Cookie Deleted with Not Naturopath ");
                }
            }
            $path = false;
            if ($qid == "q_upload") {
                $file = $ans;     
                $practitioners_name = $_SESSION['pract_name'];         
                if($file){
                    $name = $file->hashName(); // Generate a unique, random name...
                    $fileName = str_replace(' ', '-', strtolower($practitioners_name)) .'-'.time(). '.' .$file->extension();
                    $img = \Image::make($file->getRealPath());
                    $img->resize(500, 500, function ($constraint) {
                        $constraint->aspectRatio();                 
                    });
        
                    $img->stream(); // <-- Key point
                    $currentDate = new \DateTime();
                    $year = $currentDate->format('Y');
                    $month = $currentDate->format('F');
                    // $date = $currentDate->format('d');
                    $folderPath = "Test/$year/$month";
                    if (!\Storage::disk('do')->exists($folderPath)) {
                        \Storage::disk('do')->makeDirectory($folderPath, 0777, true);
                    }
                    $path1 = \Storage::disk('do')->put($folderPath. '/' .$fileName, $img, 'public');
                    $do_url = "https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/$folderPath/$fileName";
                    // $path1 = \Storage::disk('do')->put('Test'.'/' .$fileName, $img, 'public');
                    // $do_url = "https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/$fileName";
                    // $path1 = Storage::disk('do')->putFile('Test', $file, 'public');
                    $questions[$qid] = $do_url;
                    // $do_url = "https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/$questions[$qid]";
                    $ans = $do_url;
                    $practitioner_submission_model = new PractitionerSubmission;
                    $practitioner_submission_model->answer = $ans;
                    unset($_SESSION['pract_name']);

                }else{
                    $do_url ="https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/default_pract_image.png";
                    $questions[$qid] = $do_url;
                    $ans = $do_url;
                    $practitioner_submission_model = new PractitionerSubmission;
                    $practitioner_submission_model->answer = $ans;
                }   
                
            }

            $submission = PractitionerSubmission::where(
                [
                    ['session_id', '=', $this->getCookie()],
                    ['question_id', '=', $qid],
                ]
            );

            Log::info([
                $this->getCookie(), $qid,
            ]);

            if ($submission->exists()) {

                Log::info([
                    $submission->first(),
                ]);

                $submission->first()->update(
                    [
                        'answer' => $ans,
                    ]
                );
            } else {

                $practitioner_submission_model = new PractitionerSubmission;
                $practitioner_submission_model->session_id = $this->getCookie();
                $practitioner_submission_model->question_id = $qid;

                if (array_key_exists($qid, $questions)) {
                    $practitioner_submission_model->question_title = $this->default_questions[$qid];
                }

                $practitioner_submission_model->answer = $ans;
                $practitioner_submission_model->save();
            }
        }

        // Cookie code - Delete
        if ($qid == 'q_cname') {
            $this->deleteCookie();
            error_log('Cookie deleted!');
            Log::info("Cookie Deleted!");
        }
    }

    // Search by clinic name or clinic city

    public function badRequestStatus($message = null)
    {
        return response()->json([
            "status" => 400,
            "message" => $message ? $message : "bad request",
            "data" => [],
        ], 200);
    }

    public function notFoundStatus()
    {
        return response()->json([
            "status" => 404,
            "data" => [],
            "message" => "not found",
        ], 200);
    }

    public function success($response = [])
    {
        return response()->json([
            "status" => 200,
            "message" => "success",
            "data" => $response,
        ], 200);
    }
    public function serverErrorStatus($message = null)
    {
        return response()->json([
            "status" => 500,
            "message" => $message,
            "data" => [],
        ], 200);
    }
    public function addVirtualPractice(request $request)
    {
        $session_id = $this->getCookie();
        Log::info("data", $request->all());
        Practitioner::where('session_id', '=', $session_id)->update(['is_virtual'=>1]);
        $submission = PractitionerSubmission::where(
            [
                ['session_id', '=', $session_id],
                ['question_id', '=', 'q_cname'],
            ]
        )->get();
        if( $submission){
            $clinic_name = "Private Virtual Practice of ".$request['cname'];
            $cworking_hours = json_encode($request['cworking_hours']);            
            $data = [
                ['session_id' => $session_id, 'question_id' => 'q_vcname', 'question_title' => $this->default_questions['q_vcname'], 'answer' => $clinic_name, 'created_at' => date("Y-m-d h:i:s"),
                'updated_at' => date("Y-m-d h:i:s")], 
                ['session_id' => $session_id, 'question_id' => 'q_vcemail', 'question_title' => $this->default_questions['q_vcemail'], 'answer' => $request['vcemail'], 'created_at' => date("Y-m-d h:i:s"),
                'updated_at' => date("Y-m-d h:i:s")], 
                ['session_id' => $session_id, 'question_id' => 'q_vcplace_id', 'question_title' => $this->default_questions['q_vcplace_id'], 'answer' => trim($request['place_id']),'created_at' => date("Y-m-d h:i:s"),
                'updated_at' => date("Y-m-d h:i:s")],
                ['session_id' => $session_id, 'question_id' => 'q_vclatitude', 'question_title' => $this->default_questions['q_vclatitude'], 'answer' => trim($request['clinic_address_latitude']),'created_at' => date("Y-m-d h:i:s"),
                'updated_at' => date("Y-m-d h:i:s")],
                ['session_id' => $session_id, 'question_id' => 'q_vclongitude', 'question_title' => $this->default_questions['q_vclongitude'], 'answer' => trim($request['clinic_address_longitude']),'created_at' => date("Y-m-d h:i:s"),
                'updated_at' => date("Y-m-d h:i:s")],
                ['session_id' => $session_id, 'question_id' => 'q_vc_postal', 'question_title' => $this->default_questions['q_vc_postal'], 'answer' => trim($request['caddress']),'created_at' => date("Y-m-d h:i:s"),
                'updated_at' => date("Y-m-d h:i:s")],
                ['session_id' => $session_id, 'question_id' => 'q_vc_working_hours', 'question_title' => $this->default_questions['q_vc_working_hours'], 'answer' => $cworking_hours,'created_at' => date("Y-m-d h:i:s"),
                'updated_at' => date("Y-m-d h:i:s") ],
            ];
            $added_virtual = PractitionerSubmission::insert($data);
            if ($added_virtual) {
                return $this->success([
                    "status" => 200,
                    "message" => "Clinic Added Successfully! You can search select from here!",

                ]);
            } else {
                return $this->success([
                    "status" => 500,
                    "message" => "After then !",

                ]);
            }
        }           
    }
    public function addclinic(request $request)
    {
        // $clinic_master_check = ClinicMaster::where('session_id',  $this->getCookie());
        $session_id = $this->getCookie();
        $clinic_master = ClinicMaster::create([
            'session_id' => $this->getCookie(),
            'is_completed' => 1,
        ]);

        $address = explode(',', $request['caddress']);
        $province = $city = $country = '';
        // echo count($address);
        if (count($address) == 2) {

            $province = explode(' ', $address[1]);
            $city = $address[0] . ', ' . $province[1];
            $country = $address[1];

        } elseif (count($address) == 3) {
            $province = explode(' ', $address[1]);
            $city = $address[0] . ', ' . $province[1] . ',' . $address[2];
            $country = $address[2];
        } else {

            $province = explode(' ', $address[2]);
            $city = $address[1] . ', ' . $province[1] . ',' . $address[3];
            $country = $address[3];
        }

        if ($request['cvirtual'] == true) {
            $request['cvirtual'] = 1;
        } else {
            $request['cvirtual'] = 0;
        }

        $clinic_added = Clinics::create([
            'session_id' => $this->getCookie(),
            'clinic_name' => trim($request['cname']),
            'clinic_email' => trim($request['cemail']),
            'clinic_address' => trim($request['caddress']),
            'clinic_city' => trim($city),
            'clinic_address_longitude' => trim($request['clinic_address_longitude']),
            'clinic_address_latitude' => trim($request['clinic_address_latitude']),
            'clinic_placeID' => trim($request['place_id']),
            'clinic_virtual' => $request['cvirtual'],
        ]);
        if ($clinic_added) {
            $clinics = trim($request['cname']).", ".trim($city);
            $submission = PractitionerSubmission::where(
                [
                    ['session_id', '=', $session_id],
                    ['question_id', '=', 'q_cname'],
                ]
            )->get();
            if ($submission->isEmpty()) {
                $data = array('session_id' => $session_id, 'question_id' => 'q_cname', 'question_title' => $this->default_questions['q_cname'], 'answer' => $clinics);
            }
            $updated_new = Practitioner::where('session_id', '=', $this->getCookie())->update(['is_new_clinic' => 1]);
            if ($updated_new) {
                return $this->success([
                    "status" => 200,
                    "message" => "Clinic Added Successfully! You can search select from here!",
                    "added_clinic"=>$clinics

                ]);
            } else {
                return $this->success([
                    "status" => 500,
                    "message" => "After then !",

                ]);
            }
        }

        $city = $address[1] . ', ' . $address[2] . ', ' . $address[3];
        $province = $address[2];
        $country = $address[3];
        Clinics::create([
            'session_id' => $this->getCookie(),
            'clinic_name' => $request['cname'],
            'clinic_email' => $request['cemail'],
            'clinic_address' => $request['caddress'],
            'clinic_city' => $city,
        ]);
        //Log::info("data", $request->all());
    }
    public function searchClinicByNameOrCity()
    {
        if (request()->has(['search_phrase'])) {
            // echo "Try before";   
            Log::info('Try before');
            \DB::enableQueryLog();
            try {
                $search_phrase = request()->get('search_phrase');
                $search_record = ClinicsMaster::query()
                    ->where('clinic_name', 'like', '%' . $search_phrase . '%')
                    ->orWhere(function ($query) use ($search_phrase) {
                        $query->where('clinic_city', 'like', '%' . $search_phrase . '%');
                    });
                Log::info(json_encode($search_record));
                Log::info(\DB::getQueryLog());
                $unapproved_clinic_session_ids = ClinicMaster::query()
                    ->where('is_approved', '=', 0);

                $unapproved_clinic_session_ids = $unapproved_clinic_session_ids
                    ->select(
                        'session_id'
                    )->get();
                $unapproved_clinic_session_ids = $unapproved_clinic_session_ids->toArray();
                $add_record = Clinics::query()
                    ->whereIn('session_id', $unapproved_clinic_session_ids)
                    ->where('clinic_name', 'like', '%' . $search_phrase . '%')
                    ->orWhere(function ($query) use ($search_phrase) {
                        $query->where('clinic_address', 'like', '%' . $search_phrase . '%');
                        $query->where('clinic_city', 'like', '%' . $search_phrase . '%');
                    });
                // Log::info(\DB::getQueryLog());       
                $check_records = 0;
                if ($search_record->exists()) {
                    $search_record = $search_record
                        ->select(
                            'clinic_name',
                            'clinic_city'
                        )
                        ->limit(10)
                        ->get();
                    $check_records = 1;
                    $search_record = $search_record->toArray();
                    Log::info( json_encode($search_record));
                    // return $this->success($search_record);
                }
                // Log::info(\DB::getQueryLog()); 
                if ($add_record->exists()) {
                    $add_record = $add_record
                        ->select(
                            'clinic_name',
                            'clinic_address',
                            'clinic_city'
                        )
                        ->limit(10)
                        ->get();
                    $check_records = 1;
                    $add_record = $add_record->toArray();
                    Log::info(json_encode($add_record));
                    // return $this->success($add_record);
                }
                Log::info(\DB::getQueryLog()); 
                if ($check_records == 0) {
                    return $this->notFoundStatus();
                }

                if (is_array($search_record) && !is_array($add_record)) {
                    $records = $search_record;
                } elseif (is_array($add_record) && !is_array($search_record)) {
                    $records = $add_record;
                } else {
                    $records = array_merge($search_record, $add_record);
                }
                Log::info( json_encode($records));
                return $this->success($records);
            } catch (ValidationException $e) {
                Log::error("Validation Error in searchClinicByNameOrCity", [$e->getMessage()]);
                return $this->badRequestStatus($e->getMessage());
            } catch (Exception $e) {
                Log::error("Error in searchClinicByNameOrCity", [$e->getMessage()]);
                return $this->serverErrorStatus();
            }
        } else {
            return $this->badRequestStatus();
        }
    }
    public function uniqueEmail(Request $request)
    {
        Log::info("data on line number " . __LINE__ . " in file" . __FILE__, $request->all());
        // $email = $req->all();
        $email = $request->input('email');
        Log::info($email);
        // echo "Email is not unique";
        $result = PractitionerSubmission::where('question_id', '=', 'q_email')
            ->where('answer', '=', $email)->get();
        Log::info($result->isEmpty());
        $exists = Practitioners::where('pract_email', $email)->exists();
        Log::info(["Email count" => $result->count()]);

        return response()->json(['exists' => $exists]);

        // print_r($req);
    }
    /* Here you need to keep logger */
    public function saveClinic(Request $request)
    {
        Log::info("data on line number for clinic(s)" . __LINE__ . " in file" . __FILE__, $request->all());
        if ($request->all()) {
            $clinic_info = $request->all();
            
            $session_id = $this->getCookie();
            Log::info("data on line number for clinic(s)" . __LINE__ . " in file" . __FILE__, $clinic_info);
            $clinics = implode("# ", $clinic_info['q_cname']);

            $submission = PractitionerSubmission::where(
                [
                    ['session_id', '=', $session_id],
                    ['question_id', '=', 'q_cname'],
                ]
            )->get();
            $q_awarness = PractitionerSubmission::where(
                [
                    ['session_id', '=', $session_id],
                    ['question_id', '=', 'q_awarness'],
                ]
            )->first();
            $q_awarness_ans = $q_awarness->answer;
            if ($submission->isEmpty()) {
                $data = array('session_id' => $session_id, 'question_id' => 'q_cname', 'question_title' => $this->default_questions['q_cname'], 'answer' => $clinics);

                $assigned_clinic = PractitionerSubmission::create($data);
                if ($assigned_clinic) {
                    $model = Practitioner::where('session_id', $session_id);
                    $practitioner_master = $model->select('course_id')->get();

                    if (!$practitioner_master->isEmpty()) {
                        $pracitioner = $practitioner_master->first();
                        $course_id = $pracitioner->course_id;
                        if ($model->exists()) {
                            $model->update(['is_completed' => 1]);
                            $model->update(['has_active_campaign' => 0]);
                        }
                        if (is_null($course_id)) {
                            $this->deleteCookie();
                            error_log('Cookie deleted');
                            Log::info("Cookie Deleted! after adding clinic");
                            // $this->sendMailToReferalPract($session_id, $q_awarness_ans);
                            $this->sendMailToAdmin($session_id);
                            $this->sendMailToPractitioner($session_id);
                            return response()->json([
                                "status" => 200,
                                "message" => "All Good!",
                                "data" => [],
                            ], 200);
                        } else {
                            $this->deleteCookie();
                            error_log('Cookie deleted');
                            Log::info("Cookie Deleted! after adding clinic Onboarded the practitioner via course id ->" . $course_id);
                            // $this->sendMailToReferalPract($session_id, $q_awarness_ans);
                            $this->sendMailToAdmin($session_id);
                            $this->sendMailToPractitionerWithCourse($session_id, $course_id);
                            $course = Course::find($course_id);
                            return response()->json([
                                "status" => 201,
                                "message" => "Onboarded the practitioner via course id",
                                "data" => ['course_link' => $course->cta_link, 'course_title' => $course->course_title],
                            ], 200);
                        }
                    }

                }
            } else {
                Log::info("Add more clinics");
                return response()->json([
                    "status" => 500,
                    "message" => "Asking for update!",
                    "data" => [],
                ], 500);
            }
        }else{
            $session_id = $this->getCookie();
            $model = Practitioner::where('session_id', $session_id);
            $q_awarness = PractitionerSubmission::where(
                [
                    ['session_id', '=', $session_id],
                    ['question_id', '=', 'q_awarness'],
                ]
            )->first();
            $q_awarness_ans = $q_awarness->answer;
            if ($model->exists()) {
                $model->update(['is_completed' => 1]);
                $model->update(['has_active_campaign' => 0]);
            }
            $practitioner_master = $model->select('course_id')->get();
            $pracitioner = $practitioner_master->first();
            $course_id = $pracitioner->course_id;
            if (is_null($course_id)) {
                $this->deleteCookie();
                error_log('Cookie deleted');
                Log::info("Cookie Deleted! after adding clinic");
                // $this->sendMailToReferalPract($session_id, $q_awarness_ans);
                $this->sendMailToAdmin($session_id);
                $this->sendMailToPractitioner($session_id);
                return response()->json([
                    "status" => 200,
                    "message" => "All Good With Virtual Practice added",
                    "data" => [],
                ], 200);
            }else {
                $this->deleteCookie();
                error_log('Cookie deleted');
                Log::info("Cookie Deleted! after adding clinic Onboarded the practitioner via course id ->" . $course_id);
                // $this->sendMailToReferalPract($session_id, $q_awarness_ans);
                $this->sendMailToAdmin($session_id);
                $this->sendMailToPractitionerWithCourse($session_id, $course_id);
                $course = Course::find($course_id);
                return response()->json([
                    "status" => 201,
                    "message" => "Onboarded the practitioner via course id",
                    "data" => ['course_link' => $course->cta_link, 'course_title' => $course->course_title],
                ], 200);
            }
        }
    }

    public function sendMailToAdmin($session_id)
    {
        $admin_email['email'] = config('scaleup.ADMIN_EMAIL');
        $practitioner_answers = PractitionerSubmission::where('session_id', '=', $session_id)->get();
        $pract_name = $practitioner_answers->where('question_id', 'q_name')->value('answer');
        try {
            Mail::send(
                'emails.notify',
                ['session_id' => $session_id,
                    'practitioner_name' => $pract_name],
                function ($message) use ($admin_email) {
                    $message->to($admin_email['email']);
                    $message->subject('Approve New Practitioner');
                }
            );
        } catch (Exception $th) {
            return response()->json(['Oops! Something went wrong.']);
        }
    }
    public function sendMailToPractitioner($session_id)
    {
        $practitioner_answers = PractitionerSubmission::where('session_id', '=', $session_id)->get();
        $email_data['name'] = $practitioner_answers->where('question_id', 'q_name')->value('answer');
        $email_data['email'] = $practitioner_answers->where('question_id', 'q_email')->value('answer');
        try {
            Mail::send(
                'emails.mail-practitioner',
                ['practitioner_name' => $email_data['name']],
                function ($message) use ($email_data) {
                    $message->to($email_data['email']);
                    $message->subject('Welcome to HealthBuddha!');
                }
            );
            return response()->json(['Mail sent']);
        } catch (Exception $th) {
            return response()->json(['Oops! Something went wrong.']);
        }
    }
    public function sendMailToPractitionerWithCourse($session_id, $course_id)
    {
        $practitioner_answers = PractitionerSubmission::where('session_id', '=', $session_id)->get();
        $course = Course::find($course_id);
        $email_data['name'] = $practitioner_answers->where('question_id', 'q_name')->value('answer');
        $email_data['email'] = $practitioner_answers->where('question_id', 'q_email')->value('answer');
        try {
            Mail::send(
                'emails.mail-practitioner-with-course',
                ['practitioner_name' => $email_data['name'], 'course_link' => $course->cta_link, 'course_title' => $course->course_title],
                function ($message) use ($email_data) {
                    $message->to($email_data['email']);
                    $message->subject('Welcome to HealthBuddha!');
                }
            );
            return response()->json(['Mail sent']);
        } catch (Exception $th) {
            return response()->json(['Oops! Something went wrong.']);
        }
    }
    public function sendMailToReferalPract($session_id,$emails)
    {
        Log::info("Refferal Email Sending........"); 
        $emails = trim($emails, ', ');
        $referal_emails = explode(',',$emails);
        $referal_emails = array_unique($referal_emails);
        // $admin_email['email'] = config('scaleup.ADMIN_EMAIL');
        $practitioner_answers = PractitionerSubmission::where('session_id', '=', $session_id)->get();
        $pract_name = $practitioner_answers->where('question_id', 'q_name')->value('answer');
        $data = array('refferal_emails'=>$referal_emails,'pract_name'=>$pract_name );
        Log::info($referal_emails); 
        try {
            Mail::send(
                'emails.referal-notify',
                ['session_id' => $session_id,
                    'practitioner_name' => $pract_name],
                function ($message) use ($data) {
                    $message->to($data['refferal_emails']);
                    $message->subject('You were referred by Dr. '.$data['pract_name']);
                }
            );
            Log::info("Refferal Email Sent to".$emails); 
        } catch (Exception $th) {
            return response()->json(['Oops! Something went wrong.']);
        }
    }
}
