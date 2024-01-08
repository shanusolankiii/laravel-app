<?php
namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\ClinicMaster;
use App\Models\Clinics;
use App\Models\ClinicsMaster;
use App\Models\Course;
use App\Models\CourseCreator;
use App\Models\LanguageMaster;
use App\Models\Practitioners;
use App\Models\User;
use App\Models\Wp\PractitionerSeo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Route;


class ProfileController extends Controller
{

    protected $view_profile_url ;

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::id();
        // if (Session::has('webinar_token')) {
        //     $post_id = $_COOKIE['webinar_post_id'];
        //     unset($_COOKIE['webinar_post_id']);
        //     $webinar_link = config('scaleup.WP_SITE_URL').'login-process/'.$user_id.'/'.$post_id ;
        //     return redirect()->away($webinar_link);
        // }
        $is_virtual = '';
        $wp_practitioner_profile_path = '';
        $practitioner = Practitioners::where('user_id', '=', $user_id)->first();

        $practitioner_view_profile = PractitionerSeo::where('seo_pract_ID', '=', $practitioner->wp_pract_id)->first();
        if (!is_null($practitioner_view_profile)) {

            $wp_practitioner_profile_path = config('scaleup.WP_SITE_URL') . 'naturopaths/' . $practitioner_view_profile->seo_pract_slug;
            $this->view_profile_url =  $wp_practitioner_profile_path;
        }
        $clinic_name = $practitioner->pract_clinic;

        if (!empty($clinic_name)) {
            $clinic_names = explode("#", $clinic_name);
        } else {
            $clinic_names = [];
        }

        $all_selected_clinics = array();
        foreach ($clinic_names as $name) {
            $new_name_formed = explode(',', $name);
            $new_clinic_name = trim($new_name_formed[0]);
            if (!empty($new_name_formed[1])) {
                if (count($new_name_formed) < 3) {
                    $new_clinic_city = trim($new_name_formed[1]);
                } else {
                    $new_clinic_city = trim($new_name_formed[1] . ', ' . trim($new_name_formed[2]) . ', ' . trim($new_name_formed[3]));
                }
                $find_clinic = ClinicsMaster::where('clinic_name', '=', $new_clinic_name)->where('clinic_city', '=', $new_clinic_city)->first();
                array_push($all_selected_clinics, $find_clinic);
                if (!is_null($find_clinic)) {
                    $is_virtual = $find_clinic->clinic_virtual;
                }
            } else {
                $find_clinic = ClinicsMaster::where('clinic_name', '=', $new_clinic_name)->first();
                array_push($all_selected_clinics, $find_clinic);
                if (!is_null($find_clinic)) {
                    $is_virtual = $find_clinic->clinic_virtual;
                }
            }
        }

        $practitioner_languages = LanguageMaster::select('language_name')->get();
        $list = array();
        foreach ($practitioner_languages as $v) {
            array_push($list, $v['language_name']);
        }
        $current_time = \Carbon\Carbon::now();
        $current_date_time = User::where('id', '=', $user_id)->update(['last_login_at' => $current_time]);        
       
        return view('frontend.auth.dashboard')->with(['practitioner' => $practitioner, 'all_selected_clinics' => $all_selected_clinics, 'is_virtual' => $is_virtual, 'wp_practitioner_profile_path' => $wp_practitioner_profile_path, 'list' => $list]);
    }

    public function logout()
    {
        Session::flush();

        Auth::logout();

        return redirect('practitioners/login');
    }
    private function getCookie()
    {
        if (isset($_COOKIE['md5'])) {
            return $_COOKIE['md5'];
        }

        return false;
    }
    public function addClinicInfo(Request $request)
    {
        $request->validate([
            'clinic_name' => 'required',
            'clinic_email' => 'required',
            'clinic_address_1' => 'required',
            'clinic_city' => 'required',
        ],
            [
                'clinic_name.required' => 'Clinic name is required',
                'clinic_email.required' => 'Email is required',
                'clinic_address_1.required' => 'Address is required',
                'clinic_city.required' => 'City is required',
            ]
        );

        if ($request['clinic_virtual'] == 'on') {
            $request['clinic_virtual'] = 1;
        } else {
            $request['clinic_virtual'] = 0;
        }
        // dd($request['user_id']);
        $add_new_clinic = Clinics::create([
            'session_id' => $this->getCookie(),
            'user_id' => $request['user_id'],
            'clinic_name' => trim($request['clinic_name']),
            'clinic_email' => trim($request['clinic_email']),
            'clinic_address' => trim($request['clinic_address_1']),
            'clinic_city' => trim($request['clinic_city']),
            'clinic_city_longitude' => trim($request['clinic_address_longitude']),
            'clinic_city_latitude' => trim($request['clinic_address_latitude']),
            'clinic_address_longitude' => trim($request['clinic_address_longitude']),
            'clinic_address_latitude' => trim($request['clinic_address_latitude']),
            'clinic_placeID' => trim($request['clinic_address_place_id']),
            'clinic_virtual' => trim($request['clinic_virtual']),
        ]);
        $id = $add_new_clinic->id;
        $add_new_clinic_to_masters = ClinicMaster::create([
            'session_id' => $this->getCookie(),
            'user_id' => $request['user_id'],
            'is_completed' => 1,
            'is_approved' => 0,
        ]);
        if ($add_new_clinic && $add_new_clinic_to_masters) {
            $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
            $response = Http::get($wordpressUrl);
            session()->flash('success', 'Thank you for adding a new clinic. We have sent your request for review. It will appear on your account as soon as it is approved.');
            $this->sendNewClinicMailToAdmin($id);
        } else {
            session()->flash('error', 'Something Went Wrong');
        }
        return redirect()->back();
    }

    public function sendNewClinicMailToAdmin($id)
    {
        $user_id = Auth::id();
        $admin_email['email'] = config('scaleup.ADMIN_EMAIL');
        $practitioner = Practitioners::where('user_id', '=', $user_id)->first();
        $pract_name = $practitioner->pract_name;
        try {
            Mail::send(
                'emails.new-clinic-notify',
                ['session_id' => $id, 'practitioner_name' => $pract_name],
                function ($message) use ($admin_email) {
                    $message->to($admin_email['email']);
                    $message->subject('Approve New Clinic');
                }
            );
        } catch (Exception $th) {
            return response()->json(['Oops! Something went wrong.']);
        }
    }

    public function updateProfileImage(Request $request, $id)
    {
        $request->validate([
            'pract_profile_image' => 'required|image|mimes:jpeg,png,jpg|min:0',
        ], [
            'pract_profile_image.required' => 'Profile Image is Required!',
            'pract_profile_image.image' => 'Profile Image must be .png, .jpg, .jpeg!',
            // 'pract_profile_image.max' => 'Profile Image must be less than 2MB',
        ]
        );
        try {
            $practitioner = Practitioners::find($id);
            if ($request->hasFile('pract_profile_image')) {
                $image = $request->file('pract_profile_image');
                $name = $image->hashName(); // Generate a unique, random name...
                $fileName = str_replace(' ', '-', strtolower($practitioner->pract_name)) . '-' . time() . '.' . $image->extension();
                $img = \Image::make($image->getRealPath());
                $img->resize(500, 500, function ($constraint) {
                    $constraint->aspectRatio();
                });
                $format = strtolower($img->mime());
                $img->stream($format, 50);
                $currentDate = new \DateTime();
                $year = $currentDate->format('Y');
                $month = $currentDate->format('F');
                // $date = $currentDate->format('d');
                $folderPath = "Test/$year/$month";
                if (!\Storage::disk('do')->exists($folderPath)) {
                    \Storage::disk('do')->makeDirectory($folderPath, 0777, true);
                }
                $path1 = \Storage::disk('do')->put($folderPath . '/' . $fileName, $img, 'public');
                $do_url = "https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/$folderPath/$fileName";
                // $path1 = \Storage::disk('do')->put('Test' . '/' . $fileName, $img, 'public');
                // $do_url = "https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/$fileName";
                $practitioner->pract_image = $do_url;
                $practitioner->sync_to_wp = 0;
            }
            if ($practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
                $response = Http::get($wordpressUrl);
                session()->flash('success', 'Profile image updated. Changes will affect in 30-60 seconds!');
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something Went Wrong!');
        }
        return redirect()->back();
    }
    public function updatePersonalInfo(Request $request, $id)
    {
        $request->validate([
            'pract_title' => 'required',
            // 'pract_name' => 'required',
            'pract_type' => 'required',
            'pract_designation' => 'required',
            'pract_license_year' => 'required',
            // 'pract_languages_spoken' => 'required',
        ],
            [
                'pract_title.required' => 'Title is required',
                // 'pract_name.required' => 'Full name is required',
                'pract_type.required' => 'Practitioner Type is required',
                'pract_designation.required' => 'Designation is required',
                'pract_license_year.required' => 'License year is required',
                // 'pract_languages_spoken.required' => 'Language is required',
            ]
        );

        try {
            $practitioner = Practitioners::find($id);
            $practitioner->pract_title = $request->pract_title;
            // $practitioner->pract_name = $request->pract_name;
            $practitioner->pract_type = $request->pract_type;
            $practitioner->pract_designation = $request->pract_designation;
            $practitioner->pract_license_year = $request->pract_license_year;
            if (!is_null($request->pract_tag_line) || !empty($request->pract_tag_line)) {
                $practitioner->pract_tag_line = $request->pract_tag_line;
            } else {
                $practitioner->pract_tag_line = null;
            }
            if (!is_null($request->pract_languages_spoken) || !empty($request->pract_languages_spoken)) {
                $practitioner->pract_languages_spoken = implode(', ', $request->pract_languages_spoken);
            } else {
                $practitioner->pract_languages_spoken = null;
            }
            $practitioner->sync_to_wp = 0;
            if ($practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
                $response = Http::get($wordpressUrl);
                session()->flash('success', 'Personal Information is updated. Changes will affect in 30-60 seconds');
            }

            // Updating name in PractitionerSeo table
            // $seo_practitioner = PractitionerSeo::where('seo_pract_ID', '=', $practitioner->wp_pract_id)->update([
            //     'seo_pract_name' => $request->pract_name]);

            // Updating name in  Practitioners table
            // $hbs_practitioner = Practitioner::where('pract_id', '=', $practitioner->wp_pract_id)->update([
            //     'pract_name' => $request->pract_name,
            // ]);
        } catch (\Throwable $th) {
            session()->flash('error', 'Something Went Wrong!');
        }
        return redirect()->back();
    }
    public function updateEducationAssociation(Request $request, $id)
    {
        $request->validate([
            // 'pract_association' => 'required',
        ],
            [
                // 'pract_association.required' => 'Association is required',
            ]
        );
        try {
            $practitioner = Practitioners::find($id);
            if (!is_null($request->pract_association) || !empty($request->pract_association)) {
                $practitioner->pract_association = implode(',', $request->pract_association);
            } else {
                $practitioner->pract_association = null;
            }
            $practitioner->sync_to_wp = 0;

            if ($practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
                $response = Http::get($wordpressUrl);
                session()->flash('success', 'Education and Association is updated. Changes will affect in 30-60 seconds');
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something Went Wrong!');
        }
        return redirect()->back();
    }
    public function updatePracticeInfo(Request $request, $id)
    {
        //'pract_accepting_new' => 'required',// 'pract_accepting_new.required' => 'Accepting patients is required', // $practitioner->pract_accepting_new = $request->pract_accepting_new;
        $request->validate([
            'pract_conditions_supported' => 'required',
            // 'pract_services' => 'required',
            'pract_free_call' => 'required',
            // 'pract_direct_bill_ins' => 'required',
        ],
            [
                'pract_conditions_supported.required' => 'Top supported condition is required',
                // 'pract_services.required' => 'Service is required',
                'pract_free_call.required' => '15-min discovery call is required ',
                // 'pract_direct_bill_ins.required' => 'Direct bill insurance is required',
            ]
        );

        try {
            $practitioner = Practitioners::find($id);
            $practitioner->pract_conditions_supported = implode(',', $request->pract_conditions_supported);
            if (!is_null($request->pract_services) || !empty($request->pract_services)) {
                $practitioner->pract_services = implode(',', $request->pract_services);
            } else {
                $practitioner->pract_services = null;
            }
            $practitioner->pract_free_call = $request->pract_free_call;
            if (!is_null($request->pract_direct_bill_ins) || !empty($request->pract_direct_bill_ins)) {
                $practitioner->pract_direct_bill_ins = $request->pract_direct_bill_ins;
            } else {
                $practitioner->pract_direct_bill_ins = null;
            }
            $practitioner->sync_to_wp = 0;
            if ($practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                // $this->updatePersonalInfoAjax($request, $id);
                $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
                $response = Http::get($wordpressUrl);
                session()->flash('success', 'Practice Information is updated. Changes will affect in 30-60 seconds');
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something Went Wrong!');
        }
        return redirect()->back();
    }
    /* Assign Clinic to Practitioner */
    public function updateClinicInfo(Request $request, $id)
    {
        $request->validate([
            // 'pract_clinic' => 'required',
        ],
            [
                // 'pract_clinic.required' => 'Clinic name is required',
            ]
        );
        $practitioner_clinics = $request->pract_clinic;
        $practitioners_clinics_id = array();
        if (!is_null($request->pract_clinic) || !empty($request->pract_clinic)) {
            if (count($practitioner_clinics) > 0) {
                foreach ($practitioner_clinics as $clinic) {
                    $clinic = explode(',', $clinic);
                    $clinic_city = '';
                    $clinic_name = $clinic[0];
                    if (count($clinic) == 5) {
                        $clinic_city = trim($clinic[1] . ',' . $clinic[2] . ',' . $clinic[3] . ',' . $clinic[4]);
                    }
                    if (count($clinic) == 4) {
                        $clinic_city = trim($clinic[1] . ',' . $clinic[2] . ',' . $clinic[3]);
                    }
                    if (count($clinic) == 3) {
                        $clinic_city = $clinic[1] . ', ' . $clinic[2];
                    }
                    $practitioners_clinic_id = ClinicsMaster::where('clinic_name', '=', trim($clinic_name))->where('clinic_city', '=', $clinic_city)->first();

                    if (!is_null($practitioners_clinic_id)) {
                        $practitioners_clinics_id[] = $practitioners_clinic_id->id;
                    }
                }
            }
            $clinic_name = implode('#', $request->pract_clinic);
            if (strpos($clinic_name, '#') === 0) {
                $clinic_name = substr($clinic_name, 1);
            }
        } else {
            $clinic_name = null;
        }
        try {
            $practitioner = Practitioners::find($id);
            $practitioner->update(['pract_clinic' => $clinic_name, 'sync_to_wp' => 0]);
            $practitioner->clinics()->sync($practitioners_clinics_id);
            // $practitioner->sync_to_wp = 0;
            if ($practitioner) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
                $response = Http::get($wordpressUrl);
                session()->flash('success', 'Clinic Information is updated. Changes will affect in 30-60 seconds');
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something Went Wrong!');
        }
        return redirect()->back();
    }
    public function updateAboutUs(Request $request, $id)
    {
        $request->validate([
            // 'pract_bio' => 'required',
        ],
            [
                // 'pract_bio.required' => 'About us is required',
            ]
        );
        try {
            $practitioner = Practitioners::find($id);
            if (!is_null($request->pract_bio) || !empty($request->pract_bio)) {
                $practitioner->pract_bio = $request->pract_bio;
            } else {
                $practitioner->pract_bio = null;
            }
            $practitioner->sync_to_wp = 0;
            if ($practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
                $response = Http::get($wordpressUrl);
                session()->flash('success', 'About Us is updated. Changes will affect in 30-60 seconds');
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something Went Wrong!');
        }
        return redirect()->back();
    }

    public function hbAcademy(Request $request)
    {

        $courses = Course::query()->paginate(10);
        $course_creators = CourseCreator::latest()->get();
        if ($request->ajax()) {
            $course_creators = CourseCreator::latest()->get();
            $courses = Course::query()
                ->when($request->seach_term, function ($q) use ($request) {
                    $q->where('id', 'like', '%' . $request->seach_term . '%')
                        ->orWhere('course_title', 'like', '%' . $request->seach_term . '%')
                        ->orWhere('instructors', 'like', '%' . $request->seach_term . '%')
                        ->orWhere('category', 'like', '%' . $request->seach_term . '%');
                })
                ->when($request->course_creator, function ($q) use ($request) {
                    $q->where('course_creator', $request->course_creator);
                })
                ->paginate(10);
            return view('frontend.auth.course_list', compact('courses', 'course_creators'))->render();
        }
        $user_id = Auth::id();
        $practitioner = Practitioners::where('user_id', '=', $user_id)->first();
        return view('frontend.auth.hb-academy')->with(['practitioner' => $practitioner, 'courses' => $courses, 'course_creators' => $course_creators]);

    }
    public function searchClinics(Request $request)
    {
        $clinics = [];
        if (is_null($request->q) || $request->q == '') {
            $clinics = ClinicsMaster::orderBy('clinic_name', 'asc')->get();
        } else {
            if ($request->has('q')) {
                $search = $request->q;
                $clinics = ClinicsMaster::where('clinic_name', 'LIKE', "%$search%")->orWhere('clinic_city', '=', "%$search%")->orderBy('clinic_name', 'asc')->get();
            }
        }

        return response()->json($clinics);
    }

    public function updateVirtualClinicInfo(Request $request, $id)
    {
        try {
            $practitioner = Practitioners::find($id);
            $virtual_clinic_name = $request->pract_v_clinic_name;

            if ($request->provide_virtual_practice == 1) {
                $request->validate([
                    'pract_v_clinic_name' => 'required',
                    'pract_v_clinic_address' => 'required',
                    'pract_v_clinic_email' => 'required',
                ], [
                    'pract_v_clinic_name.required' => 'Virtual Clinic Name is required',
                    'pract_v_clinic_address.required' => 'Virtual Clinic Address is required',
                    'pract_v_clinic_email.required' => 'Virtual Clinic Address is required',
                ]);
                if (!str_contains($virtual_clinic_name, "Private Virtual Practice of ")) {
                    $virtual_clinic_name = "Private Virtual Practice of " . $virtual_clinic_name;
                }
                $practitioner->pract_v_clinic_name = $virtual_clinic_name;
                $practitioner->pract_v_clinic_address = $request->pract_v_clinic_address;
                $practitioner->pract_v_clinic_email = $request->pract_v_clinic_email;
                $practitioner->pract_v_clinic_latitude = $request->virtual_clinic_address_latitude;
                $practitioner->pract_v_clinic_longitude = $request->virtual_clinic_address_longitude;
                $practitioner->pract_v_clinic_place_id = $request->virtual_clinic_address_place_id;
                $practitioner->is_virtually_available = 1;
                // Retrieve and update the working hours
                if (!is_null($practitioner->pract_v_clinic_working_hours)) {
                    $working_hours = json_decode($practitioner->pract_v_clinic_working_hours, true);
                    $update_working_hours = [];
                    foreach ($working_hours as &$day) {
                        $day['value']['isWorking'] = $request->has("working_hours.{$day['key']}.isWorking");
                        $day['value']['startTime'] = $day['value']['isWorking'] ? $request->input("working_hours.{$day['key']}.startTime") : null;
                        $day['value']['endTime'] = $day['value']['isWorking'] ? $request->input("working_hours.{$day['key']}.endTime") : null;
                        $update_working_hours[] = [
                            'key' => $day['key'],
                            'value' => $day['value'],
                        ];
                    }
                } else {
                    $update_working_hours = [];
                    for ($i = 0; $i < 7; $i++) {
                        $dayName = '';
                        switch ($i) {
                            case 0:
                                $dayName = 'Monday';
                                break;
                            case 1:
                                $dayName = 'Tuesday';
                                break;
                            case 2:
                                $dayName = 'Wednesday';
                                break;
                            case 3:
                                $dayName = 'Thursday';
                                break;
                            case 4:
                                $dayName = 'Friday';
                                break;
                            case 5:
                                $dayName = 'Saturday';
                                break;
                            case 6:
                                $dayName = 'Sunday';
                                break;
                        }
                        $day = [
                            'key' => strval($i),
                            'value' => [
                                'name' => $dayName,
                                'isWorking' => $request->has('working_hours.' . $i . '.isWorking'),
                                'startTime' => $request->input('working_hours.' . $i . '.startTime'),
                                'endTime' => $request->input('working_hours.' . $i . '.endTime'),
                            ],
                        ];
                        $update_working_hours[] = $day;
                    }
                }

                // Save the updated working hours back to the model
                $practitioner->pract_v_clinic_working_hours = json_encode($update_working_hours);
            }

            if ($request->provide_virtual_practice == 2) {
                $practitioner->is_virtually_available = 0;
                $practitioner->sync_to_wp = 0;
            }
            $practitioner->sync_to_wp = 0;
            if ($practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                $wordpressUrl = config('scaleup.WP_SITE_URL') .'ls/?url='.$this->view_profile_url;
                // Make a GET request to the WordPress URL
                $response = Http::get($wordpressUrl);
                session()->flash('success', 'Virtual Clinic is updated. Changes will affect in 30-60 seconds');
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something Went Wrong! ' . $th->getMessage());
        }
        return redirect()->back();
    }
    public function dashboard()
    {
        $user_id = Auth::id();
        $practitioner = Practitioners::where('user_id', '=', $user_id)->first();
        return view('frontend.auth.pract-profile-dashboard')->with(['practitioner' => $practitioner]);
    }
    
}
