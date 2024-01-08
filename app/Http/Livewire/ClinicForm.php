<?php

namespace App\Http\Livewire;

use App\Models\ClinicMaster;
use App\Models\Clinics;
use App\Models\ClinicsMaster;
use App\Models\Practitioner;
use App\Models\Practitioners;
use App\Models\PractitionerSubmission;
use App\Models\Wp\Clinic;
use App\Models\Wp\ClinicsSeo;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Livewire\Component;

class ClinicForm extends Component
{

    public $clinic;

    public $clinic_master, $clinic_info, $session_id;
    public $clinic_name_check, $clinic_master_info, $matched_clinic_name = [], $matched_clinic_address = [], $existing_clinic_session_id;
    public $clinic_name, $clinic_city;
    public $practitioner_name, $session_id_find_pract, $user_id_find_pract, $practitioner;

    protected $rules = [
        'clinic.clinic_name' => 'required',
        'clinic.clinic_email' => 'required|email',
        'clinic.clinic_phone' => 'regex:/^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/',
        'clinic.clinic_address' => 'required',
        'clinic.clinic_city' => 'required',
        'clinic.clinic_placeID' => 'required',
        'clinic.clinic_website_url' => 'required',
        'clinic.clinic_rating' => 'numeric|digits:1',
        'clinic.clinic_virtual' => '',
        'clinic.clinic_description' => '',
    ];

    public function save($id)
    {
        $this->validate();
        $clinics_data = Clinics::find($id);
        $existing_clinic_name = $clinics_data->clinic_name;
        $this->clinic_name = ($this->clinic->clinic_name);
        $this->session_id = $this->clinic->session_id;
        if ($this->session_id) {
            $this->clinic_city = $this->clinic->clinic_city;
            $update_clinic_pract = PractitionerSubmission::where('session_id', '=', $this->session_id)->get();
            $existing_pract_clinic = explode('#', $update_clinic_pract->where('question_id', 'q_cname')->value('answer'));
            foreach ($existing_pract_clinic as $key => $clinic_data) {
                $existing_clinic = explode(',', $clinic_data);
                foreach ($existing_clinic as $value) {
                    if (trim($value) == trim($existing_clinic_name)) {
                        $existing_pract_clinic[$key] = trim($this->clinic_name) . ', ' . trim($this->clinic_city);
                    }
                }
            }
            $clinic_final_name = implode('#', $existing_pract_clinic);
            $new_clinic_name_value = $update_clinic_pract->where('question_id', 'q_cname')->value('answer') . "#" . $this->clinic_name;
            $update_clinic_pract = PractitionerSubmission::where('session_id', '=', $this->session_id)
                ->where('question_id', 'q_cname')->update([
                'answer' => $clinic_final_name,
            ]);
            if ($update_clinic_pract) {
                $this->clinic->save();
                session()->flash('message', 'Clinic successfully Updatedd.');
                return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);
            } else {
                session()->flash('error', "Clinic couldn't Updated.");
                return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);
            }
        } else {
            if ($this->clinic->save()) {
                session()->flash('message', 'Clinic successfully Updated.');
                return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);
            } else {
                session()->flash('error', "Clinic couldn't Updated.");
                return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);
            }
        }
    }

    public function mount($id = null)
    {
        $this->clinic = Clinics::find($id);
        $this->clinic_master = ClinicMaster::where('id', '=', $id)->first();
        /* Who added the clinics */
        $this->user_id_find_pract = $this->clinic_master->user_id;
        $this->session_id_find_pract = $this->clinic_master->session_id;   
        if($this->session_id_find_pract != '0' || $this->session_id_find_pract != 0){
            $this->practitioner = PractitionerSubmission::where('session_id', '=', $this->session_id_find_pract)->where('question_id', '=', 'q_name')->first();         
            if(!is_null($this->practitioner)){
                $this->practitioner_name = $this->practitioner->answer;
            }
        }
        if(!is_null($this->user_id_find_pract)){
            $this->practitioner = Practitioners::where('user_id', '=', $this->user_id_find_pract)->first();
            $this->practitioner_name = $this->practitioner->pract_name;
        }
        /* For Showing Matching Clinic */
        if (!is_null($this->clinic)) {
            $this->clinic_name_check = $this->clinic->clinic_name;
            $this->clinic_master_info = ClinicsMaster::where('clinic_name', $this->clinic_name_check)->get();
            foreach ($this->clinic_master_info as $clinic_data) {
                $this->matched_clinic_name = $clinic_data->clinic_name;
                $this->matched_clinic_address = $clinic_data->clinic_address;
                $this->existing_clinic_session_id = $clinic_data->session_id;
            }
        }
    }

    public function approve($id)
    {
        $get_clinic_info = Clinics::where('id', '=', $id)->first();
        $clinic_name = $get_clinic_info->clinic_name;
        $clinic_city = $get_clinic_info->clinic_city;
        $user_id = $get_clinic_info->user_id;
        $pract_data = null;
        $get_clinic_info = Clinics::where('id', '=', $id)->first();
        try {
            if (!is_null($get_clinic_info)) {
                $new_clinic_add = [];
                $clinic_slug = Str::slug($get_clinic_info->clinic_name .' '. $get_clinic_info->clinic_address, '-');
                $clinicSeoDataFirst = ClinicsSeo::where('seo_clinic_slug', '=', $clinic_slug)->first();
                if (is_null($clinicSeoDataFirst)) {
                    $new_clinic_add['clinic_name'] = $get_clinic_info->clinic_name;
                    $new_clinic_add['clinic_email'] = $get_clinic_info->clinic_email;
                    $new_clinic_add['clinic_phone'] = $get_clinic_info->clinic_phone;
                    $new_clinic_add['clinic_rating'] = $get_clinic_info->clinic_rating;
                    $new_clinic_add['clinic_website_url'] = $get_clinic_info->clinic_website_url;
                    $new_clinic_add['clinic_city'] = $get_clinic_info->clinic_city;
                    $new_clinic_add['clinic_placeID'] = $get_clinic_info->clinic_placeID;
                    $new_clinic_add['clinic_address'] = $get_clinic_info->clinic_address;
                    $new_clinic_add['clinic_description'] = $get_clinic_info->clinic_description;
                    $new_clinic_add['clinic_virtual'] = $get_clinic_info->clinic_virtual;
                    $new_clinic_add['clinic_address_lat'] = $get_clinic_info->clinic_address_latitude;
                    $new_clinic_add['clinic_address_long'] = $get_clinic_info->clinic_address_longitude;
                    $new_clinic_add['clinic_city_latitute'] = $get_clinic_info->clinic_address_latitude;
                    $new_clinic_add['clinic_city_longitude'] = $get_clinic_info->clinic_address_longitude;

                    $check_wp_clinic_exists = Clinic::where('clinic_address', '=', $new_clinic_add['clinic_address'])->get();
                    $data = [];

                    if ($check_wp_clinic_exists->isEmpty()) {
                        $created_clinic = Clinic::create($new_clinic_add);
                        if ($created_clinic) {
                            $slug = Str::slug($created_clinic->clinic_name  .' '. $created_clinic->clinic_address, '-');
                            $new_clinic_add['wp_clinic_id'] = $created_clinic->clinic_ID;
                            unset($new_clinic_add['clinic_placeID']);
                            unset($new_clinic_add['clinic_city_latitute']);
                            $new_clinic_add['clinic_place_id'] = $get_clinic_info->clinic_placeID;
                            $new_clinic_add['clinic_city_latitude'] = $get_clinic_info->clinic_address_latitude;
                            $new_clinic_add['session_id'] = $get_clinic_info->session_id;
                            $wp_clinics_seo_data = [
                                'seo_clinic_ID' => $created_clinic->clinic_ID,
                                'seo_clinic_name' => $created_clinic->clinic_name,
                                'seo_clinic_slug' => $slug,
                                'seo_clinic_meta_tag' => $new_clinic_add['clinic_name'],
                                'seo_clinic_meta_description' => $new_clinic_add['clinic_name'],
                                'seo_clinic_visibility' => 1,
                                'seo_clinic_canonical_url' => $slug,
                            ];
                            $clinic_seo_created_id = ClinicsSeo::create($wp_clinics_seo_data);
                            $data = array('is_approved' => 1, 'has_wordpress' => 1, 'wp_clinic_id' => $created_clinic->clinic_ID);
                        }
                        $onboarding_clinic_master = ClinicMaster::where('id', '=', $id)->update($data);

                        Log::info("Clinic WordPress Push Is Added and Ended!");
                        if ($onboarding_clinic_master) {
                            $clinics_data_laravel = ClinicsMaster::create($new_clinic_add);
                            $clinics_id = $clinics_data_laravel->id;
                            if (!is_null($user_id)) {
                                $pract_data = Practitioners::where('user_id', '=', $user_id)->first();
                                $new_clinic_data = $pract_data->pract_clinic . "#" . $clinic_name . ", " . $clinic_city;
                                $get_pract_data = Practitioners::where('user_id', '=', $user_id)->update([
                                    'pract_clinic' => $new_clinic_data, 'sync_to_wp' => 0,
                                ]);
                                \Artisan::call('hb:sync:pract:portal-2-wp');
                                $clinic_id = array();
                                foreach ($pract_data->clinics as $value) {
                                    $clinic_id[] = $value->id;
                                }
                            }
                            if (!is_null($user_id)) {
                                $clinic_id[] = (int) $clinics_id;
                                $pract_data->clinics()->sync($clinic_id);
                                $email = $pract_data->pract_email;
                                Mail::send(
                                    'emails.new-clinic-approved',
                                    ['practitioner_name' => $pract_data->pract_name],
                                    function ($message) use ($email) {
                                        $message->to($email);
                                        $message->subject('New Clinic Request Approved');
                                    }
                                );
                            }
                            session()->flash('message', 'Clinic successfully Approved.');
                            return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);
                        }
                    } else {

                        Log::info("Clinic WordPress Push Is Updated and Ended!");
                        session()->flash('error', 'Clinic Name or Address Already Exists Unble to Approve!!!');
                        return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);
                    }

                } else {
                    session()->flash('error', 'This Clinic Already Exists! Please Try Again Later');
                    return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);

                }
            }

        } catch (\Exception $e) {
            //throw $th;
            Log::error("Clinic Didn't Pushed to WP:" . $id);
            Log::error($e->getMessage());
            // session()->flash('error', 'Clinic Can\'t Approved Error Occurred!!!');
            // return redirect()->to('hb-cpanel/clinics/detail/' . $this->clinic->id);
        }
    }

    public function redirectToIndex()
    {
        return redirect()->route('clinic-table');
    }
    public function refreshPage()
    {
        $this->mount();
    }
    public function hydrate()
    {
        // $this->resetErrorBag();
        // $this->resetValidation();
    }

    public function render()
    {
        return view('livewire.clinic-form');
    }

    public function unapproveClinic($id)
    {
        $get_session_id = ClinicMaster::where('id', '=', $id)->first();
        $session_id = $get_session_id->session_id;
        // dd($session_id);
        if ($session_id) {
            try {
                $clinic_name = '';
                $existing_clinic = '';
                // dd('1');
                if (is_array($this->matched_clinic_name)) {
                    foreach ($this->matched_clinic_name as $clinic) {
                        $clinic_name = trim($clinic);
                    }
                    $new_clinic_new_name = explode(',', $clinic_name);
                    $update_clinic_pract = PractitionerSubmission::where('session_id', '=', $session_id)->get();
                    $existing_pract_clinic = explode('#', $update_clinic_pract->where('question_id', 'q_cname')->value('answer'));
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
                        $is_approved = ClinicMaster::where('id', '=', $id)->update(['is_approved' => 2]);
                        Log::info("Existing Clinic Assigned to Practitioner");
                        session()->flash('message', 'Existing Clinic Assigned to Practitioner '.__LINE__);
                        return redirect()->to('hb-cpanel/clinics/detail/' . $id);
                    } else {
                        Log::error("Error occured while Unapproving");
                        session()->flash('error', 'Error occured while Unapproving');
                        return redirect()->to('hb-cpanel/clinics/detail/' . $id);
                    }
                } else {
                    Log::error("Please Select Existing Clinic");
                    session()->flash('error', 'Please Select Existing Clinic');
                    return redirect()->to('hb-cpanel/clinics/detail/' . $id);
                }
            } catch (\Throwable $th) {
                Log::error("Clinic Unapproved failed:" . $id);
                Log::error($th->getMessage());
            }

        } else {
            $get_session_id = ClinicMaster::where('id', '=', $id)->first();
            $user_id = $get_session_id->user_id;
            $practitioner_data = Practitioners::where('user_id', '=', $user_id)->first();
            $pract_wp_id = $practitioner_data->wp_pract_id;
            $pract_data = Practitioner::where('wp_practitioner_id', '=', $pract_wp_id)->first();
            $session_id = $pract_data->session_id;
            // dd(!is_null($session_id));
            try {
                $clinic_name = '';
                $existing_clinic = '';
                if (is_array($this->matched_clinic_name)) {
                    foreach ($this->matched_clinic_name as $clinic) {
                        $clinic_name = trim($clinic);
                    }
                    $existing_clinic_names = $practitioner_data->pract_clinic;
                    $newly_added_and_existing_clinics = $existing_clinic_names. '#' .$clinic_name;
                    $update_clinic_pract = 0;
                    if (!is_null($user_id)) {
                        $update_clinic_pract = Practitioners::where('user_id', '=', $user_id)
                            ->update([
                                'pract_clinic' => $newly_added_and_existing_clinics, 'sync_to_wp' => 0,
                            ]);
                        \Artisan::call('hb:sync:pract:portal-2-wp');
                    }
                    if ($update_clinic_pract) {
                        $is_approved = ClinicMaster::where('id', '=', $id)->update(['is_approved' => 2]);
                        Log::info("Existing Clinic Assigned to Practitioner" . __LINE__);
                        session()->flash('message', 'Existing Clinic Assigned to Practitioner ' . __LINE__);
                        return redirect()->to('hb-cpanel/clinics/detail/' . $id);
                    } else {
                        Log::error("Error occured while Unapproving");
                        session()->flash('error', 'Error occured while Unapproving ' . __LINE__);
                        return redirect()->to('hb-cpanel/clinics/detail/' . $id);
                    }
                } else {
                    Log::error("Please Select Existing Clinic");
                    session()->flash('error', 'Please Select Existing Clinic ' . __LINE__);
                    return redirect()->to('hb-cpanel/clinics/detail/' . $id);
                }

            } catch (\Throwable $th) {
                Log::error("Clinic Unapproved failed:" . $id);
                Log::error($th->getMessage());
            }

        }
    }
}
