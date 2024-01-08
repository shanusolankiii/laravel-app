<?php

namespace App\Http\Livewire;

use App\Models\ClinicMaster;
use App\Models\Clinics;
use App\Models\ClinicsMaster;
use App\Models\PasswordReset;
use App\Models\Practitioner;
use App\Models\Practitioners;
use App\Models\PractitionerSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Livewire\Component;
use Livewire\WithFileUploads;

class PractitionerForm extends Component
{
    use WithFileUploads;
    public $can_update = true;
    public $session_id;
    public $question_id, $has_completed, $has_pract_approved, $is_clinic_approved, $has_active_campaign, $has_wordpress, $practitioner, $answer_wire_arr = [];
    public $is_new_clinic, $clinic_info;
    public $clinics, $number_of_clinics;
    public $clinic_name, $clinic_email, $clinic_address, $clinic_phone, $clinic_city, $clinic_website_url, $clinic_rating, $clinic_placeID, $clinic_description, $clinic_virtual;
    public $clinic_name_check, $clinic_master_info, $matched_clinic_name = [], $matched_clinic_address = [];
    public $clinic_names_from_practitioner = [], $clinics_id = [];
    public function mount($id = null)
    {
        $this->practitioner = PractitionerSubmission::where('session_id', $id)->get();
        $this->session_id = $id;
        $this->is_new_clinic = Practitioner::where('session_id', $id)->first();
        $this->has_active_campaign = $this->is_new_clinic['has_active_campaign'];
        $this->has_wordpress = $this->is_new_clinic['has_wordpress'];
        $this->has_completed = $this->is_new_clinic['is_completed'];
        $this->has_pract_approved = $this->is_new_clinic->is_approved;
        if ($this->is_new_clinic->is_new_clinic == 1) {
            $this->number_of_clinics = ClinicMaster::where('session_id', $this->session_id)->get()->count();
            $clinic_master_collection = ClinicMaster::where('session_id', $this->session_id)->get();
            foreach ($clinic_master_collection as $clinic) {
                if ($clinic->is_approved == 0) {
                    $this->is_clinic_approved = 0;
                } else {
                    $this->is_clinic_approved = 1;
                }
            }
        }
        $this->clinic_info = Clinics::where('session_id', $id)->first();
        if ($this->clinic_info) {
            $this->clinic_name = $this->clinic_info->clinic_name;
            $this->clinic_address = $this->clinic_info->clinic_address;
            $this->clinic_email = $this->clinic_info->clinic_email;
            $this->clinic_phone = $this->clinic_info->clinic_phone;
            $this->clinic_rating = $this->clinic_info->clinic_rating;
            $this->clinic_city = $this->clinic_info->clinic_city;
            $this->clinic_website_url = $this->clinic_info->clinic_website_url;
            $this->clinic_placeID = $this->clinic_info->clinic_placeID;
            $this->clinic_virtual = $this->clinic_info->clinic_virtual;
            $this->clinic_description = $this->clinic_info->clinic_description;
            $this->clinics = $this->clinic_info;
        }
        if ($this->practitioner) {
            foreach ($this->practitioner as $k => $practitioner) {
                $this->session_id = $practitioner->session_id;
                $this->question_id = $practitioner->question_id;
                if ($k == 1) {
                    $this->answer_wire_arr[$k]['answer'] = [];
                }
                $this->answer_wire_arr[$k]['answer'] = $practitioner->answer;
            }
        }
        // dd($this->answer_wire_arr);
        // For Showing Matching Clinic
        if (!is_null($this->clinic_info)) {
            $this->clinic_name_check = $this->clinic_info->clinic_name;
            $this->clinic_master_info = ClinicsMaster::where('clinic_name', $this->clinic_name_check)->get();
            // dd($this->clinic_master_info->toArray());
            foreach ($this->clinic_master_info as $clinic_data) {
                $this->matched_clinic_name = $clinic_data->clinic_name;
                $this->matched_clinic_address = $clinic_data->clinic_address;
            }
        }
        // Clinic management
        $existing_clinic = [];
        $existing_clinic_names = [];
        $this->clinic_names_from_practitioner = ($this->practitioner->where('question_id', 'q_cname')->value('answer') );
        $clinics_name = explode("#", $this->clinic_names_from_practitioner);
        foreach ($clinics_name as $key => $value1) {
            $existing_clinic[$key] = explode(',', $value1);
        }
        foreach ($existing_clinic as $key => $value2) {
            $existing_clinic_names[$key] = $value2[0];
        }
        // dd($existing_clinic_names);
        foreach ($existing_clinic_names as $value3) {
            $this->clinic_names_from_practitioner = ClinicsMaster::where('clinic_name', trim($value3))->first();
            // $this->->clinic_names_from_practitioner->id;
            $this->clinics_id[] = $this->clinic_names_from_practitioner;
        }
        // dd(($this->clinics_id));
        // echo"<pre>";
        // (dd($this->clinic_names_from_practitioner));
        // foreach($this->ue4){
        //     print_
        // }
    }
    public function redirectToIndex()
    {
        return redirect()->route('practitioner-table');
    }
    public function refreshPage()
    {
        $this->mount();
    }
    public function hydrate()
    {
        $this->resetErrorBag();
        $this->resetValidation();
    }
    public function render()
    {
        return view('livewire.practitioner-form');
    }

    /* Approve command  for practitioner */

    public function approvePractitioner($session_id)
    {
        $practitioner_approval = Practitioner::where('session_id', '=', $session_id)->update(['is_approved' => 1]);       

        if ($practitioner_approval) {
            $active_response = 0;
            $wp_response = 0;
            if ($this->has_active_campaign == 0) {
                //    $active_response = Artisan::call('hb:push:active-campaign --session_id=' . $session_id);
                $active_response = 1;
            }
            if ($this->has_wordpress == 0) {
                $wp_response = Artisan::call('hb:push:wordpress:pract --session_id=' . $session_id);
            } //true
            if ($active_response && $wp_response) {
                $wp_pract_id = Practitioner::where('session_id', '=', $session_id)->where('has_wordpress', '=', 1)->first();
                $practitioner_answers = PractitionerSubmission::where('session_id', '=', $session_id)->get();
                $build_data = [
                    'is_nd' => $practitioner_answers->where('question_id', 'q_naturopath')->value('answer') ?? null,
                    'name' => $practitioner_answers->where('question_id', 'q_name')->value('answer') ?? null,
                    'area_of_focus' => $practitioner_answers->where('question_id', 'q_area')->value('answer') ?? null,
                    'I_provide_these_services' => $practitioner_answers->where('question_id', 'q_services')->value('answer') ?? null,
                    'website_add' => $practitioner_answers->where('question_id', 'q_website')->value('answer') ?? null,
                    'email' => $practitioner_answers->where('question_id', 'q_email')->value('answer') ?? null,
                    'associations' => $practitioner_answers->where('question_id', 'q_associations')->value('answer') ?? null,
                    'discovery_session' => $practitioner_answers->where('question_id', 'q_session')->value('answer') ?? null,
                    'license' => $practitioner_answers->where('question_id', 'q_year')->value('answer') ?? null,
                    'awarness' => $practitioner_answers->where('question_id', 'q_awarness')->value('answer') ?? null,
                    'content_expert' => $practitioner_answers->where('question_id', 'q_content')->value('answer') ?? 'Yes',
                    'profile_page' => $practitioner_answers->where('question_id', 'q_leads')->value('answer') ?? 'Yes',
                    'upload_profile' => $practitioner_answers->where('question_id', 'q_upload')->value('answer') ?? 'https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/default_pract_image.png',
                    'cname' => $practitioner_answers->where('question_id', 'q_cname')->value('answer') ?? null,
                    'q_vcname' => $practitioner_answers->where('question_id', 'q_vcname')->value('answer') ?? null,
                    'q_vcemail' => $practitioner_answers->where('question_id', 'q_vcemail')->value('answer') ?? null,
                    'q_vcplace_id' => $practitioner_answers->where('question_id', 'q_vcplace_id')->value('answer') ?? null,
                    'q_vclatitude' => $practitioner_answers->where('question_id', 'q_vclatitude')->value('answer') ?? null,
                    'q_vclongitude' => $practitioner_answers->where('question_id', 'q_vclongitude')->value('answer') ?? null,
                    'q_vc_postal' => $practitioner_answers->where('question_id', 'q_vc_postal')->value('answer') ?? null,
                    'q_vc_working_hours' => $practitioner_answers->where('question_id', 'q_vc_working_hours')->value('answer') ?? null,

                ];
                $clinics = explode('#', $build_data['cname']);
                $practitioners_clinics_id = array();
                if (count($clinics) > 0) {
                    foreach ($clinics as $clinic) {
                        $clinic = explode(',', $clinic);
                        $clinic_city = '';
                        $clinic_name = $clinic[0];
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
                $services = explode(',', $build_data['I_provide_these_services']);
                if (in_array("BHRT", $services)) {
                    $build_data['I_provide_these_services'] = str_replace("BHRT", "Bioidentical Hormone Replacement Therapy (BHRT)", $build_data['I_provide_these_services']);
                }
                if ($build_data['q_vcname'] != null && $build_data['q_vc_postal'] != null) {
                    $build_data['is_virtually_available'] = 1;
                }
                else{
                    $build_data['is_virtually_available'] = 0;
                }
                $data = array(
                    'pract_is_nd' => $build_data['is_nd'],
                    'pract_title' => "Dr.",
                    'pract_name' => $build_data['name'],
                    'pract_email' => $build_data['email'],
                    'pract_image' => $build_data['upload_profile'],
                    'pract_clinic' => $build_data['cname'],
                    'pract_v_clinic_name' => $build_data['q_vcname'],
                    'pract_v_clinic_email' => $build_data['q_vcemail'],
                    'pract_v_clinic_address' => $build_data['q_vc_postal'],
                    'pract_v_clinic_working_hours' => $build_data['q_vc_working_hours'],
                    'pract_v_clinic_place_id' => $build_data['q_vcplace_id'],
                    'pract_v_clinic_latitude' => $build_data['q_vclatitude'],
                    'pract_v_clinic_longitude' => $build_data['q_vclongitude'],
                    'pract_accepting_new' => 'Yes',
                    'pract_direct_bill_ins' => 0,
                    'pract_designation' => 'ND',
                    'pract_type' => 'Naturopathic Doctor',
                    'pract_conditions_supported' => $build_data['area_of_focus'],
                    'pract_license_year' => $build_data['license'],
                    'pract_free_call' => $build_data['discovery_session'],
                    'pract_services' => $build_data['I_provide_these_services'],
                    'pract_association' => str_replace(';', ',', $build_data['associations']),
                    'pract_reviews' => 1,
                    'pract_visibility' => 1,
                    'sync_to_wp' => 1,
                    'is_virtually_available' =>  $build_data['is_virtually_available'],
                );
                if (!is_null($wp_pract_id)) {
                    $data['wp_pract_id'] = $wp_pract_id->wp_practitioner_id;
                } //['pract_email' => $data['pract_email']],
                $practitioner_data_laravel = Practitioners::create($data);
                $practitioner_data_laravel->clinics()->attach($practitioners_clinics_id);
                $sendResponse = $this->sendToPractitioner($build_data);
                // if($response == 0){
                //     session()->flash('error', 'Please approve Clinic first before Practitioner Approval.');
                //     return redirect()->to('hb-cpanel/practitioners/detail/'.$session_id);
                // }
                session()->flash('message', 'Practitioner Approved Successfully and Pushed to AC and WP.');
                return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
            } else {
                session()->flash('error', 'Error occured while push to Active Campaign or Practitioner Name is Already Exists in WP');
                return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
            }

        } else {
            Log::info('Not Approved Practitioner Profile');
            Log::error('Not Pushed ');

            session()->flash('error', 'Error Occurred Please Try Again!.');
            return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
        }
    }
    /* Send Post approval to Practitioner  */

    public function sendToPractitioner($data = array())
    {
        $token = Crypt::encryptString($data['email']);
        $reset_password = new PasswordReset();
        $reset_password->email = $data['email'];
        $reset_password->token = $token;
        $reset_password->save();
        $practitioner_name = $data['name'];
        try {
            Mail::send('emails.approved-practitioner', ['token' => $token, 'practitioner_name' => $practitioner_name], function ($message) use ($data) {
                $message->to($data['email']);
                $message->subject('Congratulations! Your Profile is Approved!');
            });
        } catch (Exception $th) {
            return response()->json(['Oops! Something went wrong.']);
        }
    }

    /* Approve command for clinic or push to wp */
    public function approveClinic()
    {
        $session_id = $this->session_id;

        $response = Artisan::call('hb:push:wordpress:clinic --session_id=' . $session_id);
        // $response = true;
        if ($response) {
            $wp_clinic_id = ClinicMaster::where('session_id', '=', $session_id)->where('has_wordpress', '=', 1)->first();
            $get_clinic_info = Clinics::where('session_id', '=', $session_id)->first();
            $new_clinic_add = [];
            $new_clinic_add['session_id'] = $session_id;
            $new_clinic_add['wp_clinic_id'] = $wp_clinic_id->wp_clinic_id;
            $new_clinic_add['clinic_name'] = $get_clinic_info->clinic_name;
            $new_clinic_add['clinic_email'] = $get_clinic_info->clinic_email;
            $new_clinic_add['clinic_phone'] = $get_clinic_info->clinic_phone;
            $new_clinic_add['clinic_rating'] = $get_clinic_info->clinic_rating;
            $new_clinic_add['clinic_website_url'] = $get_clinic_info->clinic_website_url;
            $new_clinic_add['clinic_city'] = $get_clinic_info->clinic_city;
            $new_clinic_add['clinic_place_id'] = $get_clinic_info->clinic_placeID;
            $new_clinic_add['clinic_address'] = $get_clinic_info->clinic_address;
            $new_clinic_add['clinic_description'] = $get_clinic_info->clinic_description;
            $new_clinic_add['clinic_virtual'] = $get_clinic_info->clinic_virtual;
            $new_clinic_add['clinic_address_lat'] = $get_clinic_info->clinic_address_latitude;
            $new_clinic_add['clinic_address_long'] = $get_clinic_info->clinic_address_longitude;
            $new_clinic_add['clinic_city_latitude'] = $get_clinic_info->clinic_address_latitude;
            $new_clinic_add['clinic_city_longitude'] = $get_clinic_info->clinic_address_longitude;

            $clinics_data_laravel = ClinicsMaster::create($new_clinic_add);
            if ($clinics_data_laravel) {
                session()->flash('message', 'Clinic Approved Successfully.');
                return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
            } else {
                session()->flash('error', 'Clinic Not Approved!');
                return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
            }
        } else {
            session()->flash('error', 'Clinic Already Exists with This Name, Email and City');
            return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
        }
    }

    /* Clinic Update data too Laravel */
    public function update()
    {
        $this->validate([
            'clinic_name' => 'required',
            'clinic_email' => 'required|email',
            'clinic_address' => 'required',
            'clinic_city' => 'required',
            'clinic_placeID' => 'required',
            'clinic_website_url' => 'required',
            'clinic_rating' => 'numeric|digits:1',

        ]);
        // Update Clinic name in PractitionerSubmission Table
        $session_id = $this->session_id;
        $get_clinic_data = Clinics::where('session_id', '=', $session_id)->first();
        // dd(trim($this->clinic_city));
        $id = $get_clinic_data->id;
        $existing_name_clinic = $get_clinic_data->clinic_name;
        $clinic_name = '';
        $existing_clinic = '';
        $update_clinic_pract = PractitionerSubmission::where('session_id', '=', $session_id)->get();
        $existing_pract_clinic = explode('#', $update_clinic_pract->where('question_id', 'q_cname')->value('answer') );
        foreach ($existing_pract_clinic as $key => $clinic_data) {
            $existing_clinic = explode(',', $clinic_data);
            foreach ($existing_clinic as $value) {
                if (trim($value) == trim($existing_name_clinic)) {
                    $existing_pract_clinic[$key] = trim($this->clinic_name) . ', ' . trim($this->clinic_city);
                }
            }
        }
        $clinic_final_name = implode('#', $existing_pract_clinic);
        $new_clinic_name_value = $update_clinic_pract->where('question_id', 'q_cname')->value('answer'). "#" . $this->clinic_name;
        $update_clinic_pract = PractitionerSubmission::where('session_id', '=', $session_id)
            ->where('question_id', 'q_cname')->update([
            'answer' => $clinic_final_name,
        ]);
        // End Update clinic in practitioner submission table

        // Update data in Clinics
        $update = Clinics::where('id', '=', $id)->update([
            'clinic_name' => trim($this->clinic_name),
            'clinic_email' => trim($this->clinic_email),
            'clinic_address' => trim($this->clinic_address),
            'clinic_city' => trim($this->clinic_city),
            'clinic_phone' => trim($this->clinic_phone),
            'clinic_rating' => trim($this->clinic_rating),
            'clinic_website_url' => trim($this->clinic_website_url),
            'clinic_description' => trim($this->clinic_description),
            'clinic_virtual' => trim($this->clinic_virtual),
            'clinic_placeID' => trim($this->clinic_placeID),
        ]);
        if ($update_clinic_pract && $update) {
            session()->flash('message', 'Clinic successfully Updated.');
            return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
        } else {
            session()->flash('error', 'Error Occurred! Clinic not Updated Yet!');
            return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
        }

    }

    /*  For getting column from practition questions */
    public function getColoumName($key)
    {
        switch ($key) {
            case 'answer_wire_arr.0.answer':
                return 'q_naturopath';
                break;
            case 'answer_wire_arr.1.answer':
                return 'q_name';
                break;
            case 'answer_wire_arr.2.answer':
                return 'q_email';
                break;
            case 'answer_wire_arr.3.answer':
                return 'q_area';
                break;
            case 'answer_wire_arr.4.answer':
                return 'q_services';
                break;
            case 'answer_wire_arr.5.answer':
                return 'q_website';
                break;

            case 'answer_wire_arr.6.answer':
                return 'q_associations';
                break;
            case 'answer_wire_arr.7.answer':
                return 'q_session';
                break;
            case 'answer_wire_arr.8.answer':
                return 'q_year';
                break;
            case 'answer_wire_arr.9.answer':
                return 'q_awarness';
                break;
            // case 'answer_wire_arr.10.answer':
            //     return 'q_upload';
            //     break;
            case 'answer_wire_arr.11.answer':
                return 'q_cname';
                break;
            case 'answer_wire_arr.12.answer':
                return 'q_vcname';
                break;
            case 'answer_wire_arr.13.answer':
                return 'q_vcemail';
                break;
            case 'answer_wire_arr.14.answer':
                return 'q_vcplace_id';
                break;
            case 'answer_wire_arr.15.answer':
                return 'q_vc_working_hours';
                break;           
            case 'answer_wire_arr.16.answer':
                return 'q_vclongitude';
                break;
           
            case 'answer_wire_arr.17.answer':
                return 'q_vclatitude';
                break;
            case 'answer_wire_arr.18.answer':
                return 'q_vc_postal';
                break;

        }
    }

    /* For update practitioner data */
    public function submit(Request $request)
    {
        $this->validate(
            [
                'answer_wire_arr.0.answer' => 'required',
                'answer_wire_arr.1.answer' => 'required',
                'answer_wire_arr.2.answer' => 'required|email|unique:users,email',
                'answer_wire_arr.3.answer' => 'required',
                'answer_wire_arr.4.answer' => 'required',
                'answer_wire_arr.5.answer' => 'required',
                'answer_wire_arr.6.answer' => 'required',
                'answer_wire_arr.7.answer' => 'required',
                'answer_wire_arr.8.answer' => 'required|numeric|digits:4',
                'answer_wire_arr.9.answer' => 'required',
                'answer_wire_arr.10.answer' => '',
                'answer_wire_arr.11.answer' => '',
                'answer_wire_arr.12.answer' => '',
                'answer_wire_arr.13.answer' => '',
                'answer_wire_arr.14.answer' => '',
                'answer_wire_arr.15.answer' => '',
                'answer_wire_arr.16.answer' => '',
                'answer_wire_arr.17.answer' => '',
                'answer_wire_arr.18.answer' => '',
            ],
            [
                'answer_wire_arr.0.answer' => 'Practitioner Name field is required.',
                'answer_wire_arr.1.answer' => 'Practitioner Name field is required.',
                'answer_wire_arr.2.answer.required' => 'Email field is required',
                'answer_wire_arr.2.answer.email' => 'The Email Address format is not valid.',
                'answer_wire_arr.2.answer.unique' => 'The Email Address already exist.',
                'answer_wire_arr.3.answer' => 'Area(s) of Focus field is required.',
                'answer_wire_arr.4.answer' => 'Serices field is required',
                'answer_wire_arr.5.answer' => 'Website field is required',
                'answer_wire_arr.6.answer' => 'Association field is required',
                'answer_wire_arr.7.answer' => ' Discovery call field is required',
                'answer_wire_arr.8.answer' => 'License Year field is required',
                'answer_wire_arr.9.answer' => 'Help Us to Grow field is required',
                'answer_wire_arr.11.answer' => 'Clinic Name field is required',
            ]
        );
        $data = $request->all();
        // dd( $data);
        $session_id = $this->session_id;
        $updated = '';
        foreach ($data['updates'] as $value) {
            if (!isset($value['payload']['method'])) {

                $key = $value['payload']['name'];
                $key = $this->getColoumName($key);
                $value = $value['payload']['value'];
                if ($key == 'q_area') {
                    $value = implode(',', $value);
                }
                if ($key == 'q_services') {
                    $value = implode(',', $value);
                }
                if ($key == 'q_associations') {
                    $value = implode(',', $value);
                }
                if ($key == 'q_cname') {
                    $value = implode('#', $value);
                }
                if ($this->session_id && $key) {
                    $updated = PractitionerSubmission::where('session_id', $session_id)
                        ->where('question_id', $key)
                        ->update(['answer' => $value]);
                }
            }
        }
        if ($updated) {
            session()->flash('message', 'Practitioner successfully Updated.');
            return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
        }
    }

    // public function change(){
    //     dd($this->answer_wire_arr);
    // }
    public function unapproveClinic()
    {
        $session_id = $this->session_id;
        try {
            $clinic_name = '';
            $existing_clinic = '';
            if (is_array($this->matched_clinic_name)) {
                foreach ($this->matched_clinic_name as $clinic) {
                    $clinic_name = trim($clinic);
                }
                $new_clinic_new_name = explode(',', $clinic_name);
                $update_clinic_pract = PractitionerSubmission::where('session_id', '=', $session_id)->get();
                $existing_pract_clinic = explode('#', $update_clinic_pract->where('question_id', 'q_cname')->value('answer') );

                foreach ($existing_pract_clinic as $key => $clinic_data) {
                    $existing_clinic = explode(',', $clinic_data);
                    if (trim($existing_clinic[0]) == trim($new_clinic_new_name[0])) {
                        $existing_pract_clinic[$key] = $clinic_name;
                    }
                }
                $clinic_final_name = implode('#', $existing_pract_clinic);
                $new_clinic_name_value = $update_clinic_pract->where('question_id', 'q_cname')->value('answer') . "#" . $clinic_name;
                $update_clinic_pract = PractitionerSubmission::where('session_id', '=', $session_id)
                    ->where('question_id', 'q_cname')->update([
                    'answer' => $clinic_final_name,
                ]);
                if ($update_clinic_pract) {
                    $is_approved = ClinicMaster::where('session_id', '=', $session_id)->update(['is_approved' => 2]);
                    Log::info("Existing Clinic Assigned to Practitioner");
                    session()->flash('message', 'Existing Clinic Assigned to Practitioner');
                    return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
                } else {
                    Log::error("Error occured while Unapproving");
                    session()->flash('error', 'Error occured while Unapproving');
                    return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
                }
            } else {
                Log::error("Please Select Existing Clinic");
                session()->flash('error', 'Please Select Existing Clinic');
                return redirect()->to('hb-cpanel/practitioners/detail/' . $session_id);
            }
        } catch (\Throwable$th) {
            Log::error("Clinic Unapproved failed:" . $session_id);
            Log::error($th->getMessage());
        }
    }
}