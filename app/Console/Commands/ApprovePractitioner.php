<?php

namespace App\Console\Commands;

use App\Models\PasswordReset;
use App\Models\Practitioner;
use App\Models\Practitioners;
use App\Models\PractitionerSubmission;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ApprovePractitioner extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:approve:naturopath {--session_id=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info("Practitioner Approving started!");
        $session_id = $this->option('session_id');
        /* Approve command  for practitioner */
        $get_pract_master = Practitioner::where('session_id', '=', $session_id)->first();
        $practitioner_approval = Practitioner::where('session_id', '=', $session_id)->update(['is_approved' => 1]);
        $has_active_campaign = $get_pract_master->has_active_campaign;
        $has_wordpress = $get_pract_master->has_wordpress;
        if ($practitioner_approval) {
            $active_response = 0;
            $wp_response = 0;
            if ($has_active_campaign == 0) {
                $active_response = Artisan::call('hb:push:active-campaign --session_id=' . $session_id);
                // $active_response = 1;
            }
            if ($has_wordpress == 0) {
                $wp_response = Artisan::call('hb:push:wordpress:pract --session_id=' . $session_id);
            } //true
            if ($active_response && $wp_response) {
                $wp_pract_id = Practitioner::where('session_id', '=', $session_id)->where('has_wordpress', '=', 1)->first();
                $practitioner_answers = PractitionerSubmission::where('session_id', '=', $session_id)->get();
                $build_data = [
                    'is_nd' => $practitioner_answers->where('question_id', 'q_naturopath')->value('answer') ?? null,
                    'name' => $practitioner_answers->where('question_id', 'q_name')->value('answer') ?? null,
                    'area_of_focus' => $practitioner_answers->where('question_id', 'q_area')->value('answer') ?? null,
                    'email' => $practitioner_answers->where('question_id', 'q_email')->value('answer') ?? null,
                    'discovery_session' => $practitioner_answers->where('question_id', 'q_session')->value('answer') ?? "Yes",
                    'license' => $practitioner_answers->where('question_id', 'q_year')->value('answer') ?? null,
                    'upload_profile' => $practitioner_answers->where('question_id', 'q_upload')->value('answer') ?? 'https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/default_pract_image.png',
                    'q_vcname' => "Private Virtual Practice of " . $practitioner_answers->where('question_id', 'q_name')->value('answer'),
                    'q_vcemail' => $practitioner_answers->where('question_id', 'q_email')->value('answer') ?? null,
                    'q_vcplace_id' => $practitioner_answers->where('question_id', 'q_vcplace_id')->value('answer') ?? null,
                    'q_vclatitude' => $practitioner_answers->where('question_id', 'q_vclatitude')->value('answer') ?? null,
                    'q_vclongitude' => $practitioner_answers->where('question_id', 'q_vclongitude')->value('answer') ?? null,
                    'q_vc_postal' => $practitioner_answers->where('question_id', 'q_vc_postal')->value('answer') ?? null,
                ];

                $pract_v_clinic_working_hours = "[{\"key\":\"0\",\"value\":{\"name\":\"Monday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"1\",\"value\":{\"name\":\"Tuesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"2\",\"value\":{\"name\":\"Wednesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"3\",\"value\":{\"name\":\"Thursday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"4\",\"value\":{\"name\":\"Friday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"5\",\"value\":{\"name\":\"Saturday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"6\",\"value\":{\"name\":\"Sunday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}}]";

                if ($build_data['q_vc_postal'] != null) {
                    $build_data['is_virtually_available'] = 1;
                } else {
                    $build_data['is_virtually_available'] = 0;
                }
                $data = array(
                    'pract_is_nd' => $build_data['is_nd'],
                    'pract_title' => "Dr.",
                    'pract_name' => $build_data['name'],
                    'pract_email' => $build_data['email'],
                    'pract_image' => $build_data['upload_profile'],
                    'pract_v_clinic_name' => $build_data['q_vcname'],
                    'pract_v_clinic_email' => $build_data['q_vcemail'],
                    'pract_v_clinic_address' => $build_data['q_vc_postal'],
                    'pract_v_clinic_place_id' => $build_data['q_vcplace_id'],
                    'pract_v_clinic_latitude' => $build_data['q_vclatitude'],
                    'pract_v_clinic_longitude' => $build_data['q_vclongitude'],
                    'pract_v_clinic_working_hours' => $pract_v_clinic_working_hours,
                    'pract_accepting_new' => 'Yes',
                    'pract_designation' => 'ND',
                    'pract_type' => 'Naturopathic Doctor',
                    'pract_languages_spoken' => 'English',
                    'pract_conditions_supported' => $build_data['area_of_focus'],
                    'pract_license_year' => $build_data['license'],
                    'pract_free_call' => $build_data['discovery_session'],
                    'pract_visibility' => 1,
                    'sync_to_wp' => 1,
                    'is_virtually_available' => $build_data['is_virtually_available'],
                );
                if (!is_null($wp_pract_id)) {
                    $data['wp_pract_id'] = $wp_pract_id->wp_practitioner_id;
                }
                $check_pract_name = Practitioners::where('pract_name', '=', $data['pract_name'])->first();
                $check_pract_email = Practitioners::where('pract_email', '=', $data['pract_email'])->first();
                $upserted_practitioner = '';
                $updated_practitioner = '';
                if ($check_pract_name && !$check_pract_email) {
                    $get_wp_pract_id = Practitioners::where('pract_name', '=', $data['pract_name'])->first();
                    $data['pract_v_clinic_working_hours'] = json_encode($pract_v_clinic_working_hours);
                    $data['wp_pract_id'] = $get_wp_pract_id->wp_pract_id;
                    $updated_practitioner = Practitioners::where('pract_name', '=', $data['pract_name'])->update($data);
                } elseif ($check_pract_email && !$check_pract_name) {
                    $data['pract_v_clinic_working_hours'] = json_encode($pract_v_clinic_working_hours);
                    $get_wp_pract_id = Practitioners::where('pract_email', '=', $data['pract_email'])->first();
                    $data['wp_pract_id'] = $get_wp_pract_id->wp_pract_id;
                    $updated_practitioner = Practitioners::where('pract_email', '=', $data['pract_email'])->update($data);
                } else {
                    $check_data = ['pract_name' => $data['pract_name'], 'pract_email' => $data['pract_email']];
                    $practitioner_data_laravel = Practitioners::updateOrCreate($check_data, $data);
                }
                // $practitioner_data_laravel->clinics()->attach($practitioners_clinics_id);
                $sendResponse = $this->sendToPractitioner($build_data);
                Log::info('Mail Response: ', [$sendResponse]);
                return true;
            } else {
                return false;
            }

        } else {
            Log::info('Not Approved Practitioner Profile');
            Log::error('Not Pushed ');
            return false;
        }

        return Command::SUCCESS;
    }
    /* Send Post approval to Practitioner  */

    public function sendToPractitioner($data = array())
    {
        $practitioner = Practitioners::where('pract_email', '=', $data['email'])->first();
        $count = 0;
        if ($practitioner->pract_image != null && $practitioner->pract_image != 'https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/default_pract_image.png') {
            $count = $count + 15;                                            
        }
        if ($practitioner->pract_tag_line != null) {
            $count = $count + 8;                                            
        }                                       
        if ($practitioner->pract_services != null) {
            $count = $count + 5;                                           
        }
        if ($practitioner->pract_association != null) {
            $count = $count + 5;                                           
        }                                        
        if ($practitioner->pract_bio != null) {
            $count = $count + 5;                                            
        }
        if ($practitioner->faqs != null) {
            $count = $count + 10;                                           
        }
        if ($practitioner->yt_video_link != null) {
            $count = $count + 10;                                            
        }
        if ($practitioner->pract_languages_spoken != null) {
            $count = $count + 2;                                            
        }

        $pract_v_clinic_working_hours = "[{\"key\":\"0\",\"value\":{\"name\":\"Monday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"1\",\"value\":{\"name\":\"Tuesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"2\",\"value\":{\"name\":\"Wednesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"3\",\"value\":{\"name\":\"Thursday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"4\",\"value\":{\"name\":\"Friday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"5\",\"value\":{\"name\":\"Saturday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"6\",\"value\":{\"name\":\"Sunday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}}]";

        if ($practitioner->pract_v_clinic_working_hours != $pract_v_clinic_working_hours) {
            $count = $count + 20;                                           
        }
        if ($practitioner->pract_name != null) {
            $count = $count + 1;                                            
        }                                    
        if ($practitioner->pract_email != null) {
            $count = $count + 1;                                            
        }                                        
        if ($practitioner->pract_license_year != null) {
            $count = $count + 1;                                           
        }                                        
        if ($practitioner->pract_conditions_supported != null) {
            $count = $count + 1;                                           
        }
        if ($practitioner->pract_v_clinic_address != null) {
            $count = $count + 1 ;
        }
        if ($practitioner->pract_free_call != null) {
            $count = $count + 15 ;
        }
        $profile_score = $count;

        $token = Crypt::encryptString($data['email']);
        $reset_password = new PasswordReset();
        $reset_password->email = $data['email'];
        $reset_password->token = $token;
        $reset_password->save();
        $practitioner_name = $data['name'];
        $pract_email_username = $data['email'];
        try {
            Mail::send('emails.approved-practitioner', ['token' => $token, 'practitioner_name' => $practitioner_name, 'profile_score' => $profile_score, 'username' => $pract_email_username], function ($message) use ($data) {
                $message->to($data['email']);
                $message->subject('Congratulations! Your Profile is Approved!');
            });

            Log::info('Mail Sent To: ' . $practitioner_name . ' Email ID: ' . $pract_email_username);
        } catch (Exception $e) {
            Log::error('Failed to send email: ' . $e->getMessage());
            return response()->json(['Oops! Something went wrong.']);
        }

    }
}
