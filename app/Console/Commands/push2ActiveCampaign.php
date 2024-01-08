<?php

namespace App\Console\Commands;

use Illuminate\Support\Str;
use PhpParser\Node\Stmt\Echo_;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use App\Models\PractitionerSubmission;
use App\Models\Practitioner;
use App\Models\Wp\Clinic;
use App\Models\Clinics;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\QuestionController;
use TestMonitor\ActiveCampaign\ActiveCampaign;
use Label84\ActiveCampaign\ActiveCampaignService;
use App\Http\Controllers\API\QuestionController as APIQuestionController;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class push2ActiveCampaign extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:push:active-campaign {--session_id=}';


    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Push Practitioner to ActiveCampaign';


    public function getContactId($email)
    {
        $apiUrl = config('services.ac.ACTIVE_CAMPAIGN_BASE_URL').'/api/3/contacts';
        $curl_call = $apiUrl . '?email='. $email.'&search='. $email.'&segmentid=null&orders[email]=ASC';
        $apiKey = config('services.ac.ACTIVE_CAMPAIGN_API_KEY');
        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => $curl_call,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'GET',
          CURLOPT_HTTPHEADER => array(
            'Api-Token:'. $apiKey.'',
          ),
        ));
        
        $response = curl_exec($curl);
        $responseData = json_decode($response, true);
        
        curl_close($curl);
        if (isset($responseData['contacts'][0])) {
            $contactId = $responseData['contacts'][0]['id'];
            return $contactId;
        } else {
            return false;
        }      
      
    }

    function editContact($contact_id, $data)
    {
        $apiUrl = config('services.ac.ACTIVE_CAMPAIGN_BASE_URL').'/api/3/contacts/'.$contact_id;
        $apiKey = config('services.ac.ACTIVE_CAMPAIGN_API_KEY');
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $apiUrl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'PUT',
            CURLOPT_POSTFIELDS =>$data,
            CURLOPT_HTTPHEADER => array(
                'Api-Token:'. $apiKey.'',
                'Content-Type: application/json',
                'Cookie: PHPSESSID=7d09972cf463c824b81fe2025ed375ae; em_acp_globalauth_cookie=3d121f2b-8fb3-4b7c-bb1b-0835139b6933'
            
            ),
            ));
      
        $response = curl_exec($curl);      
        curl_close($curl);
        return $response;

    }

    public function activeCampaignApiCall($Endpoint, $Method = "get", $PostBody = "", $ReturnTransfer = true)
    {
        $EndpointRoot = config('services.ac.ACTIVE_CAMPAIGN_BASE_URL');

        $curl = curl_init();

        switch (strtolower($Method)) {
           
            case "post":                
                curl_setopt($curl, CURLOPT_POST, true);           
                break;
        }

        // Set the post body
        if ($PostBody) {
        
            curl_setopt($curl, CURLOPT_POSTFIELDS, $PostBody);
        }

        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json', 'Api-Token: ' . config('services.ac.ACTIVE_CAMPAIGN_API_KEY')));
       
        curl_setopt($curl, CURLOPT_URL, $EndpointRoot . $Endpoint);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, $ReturnTransfer);
       
        // Execute the curl request
        $result = curl_exec($curl);
       

        return $result;
    }

    public function handle()
    {
        Log::info("Active Campaign Push Is started!");     
        $session_id = $this->option('session_id');

        $get_practitioner = Practitioner::where('session_id', '=', $session_id)
            ->where('is_completed', '=', 1)
            ->where('is_approved', '=', 1)
            ->get();

        if (!$get_practitioner->isEmpty()) {
            $practitioner_push_to_ac = $get_practitioner->first();
            $practitioner_answers = PractitionerSubmission::where('session_id', '=', $practitioner_push_to_ac->session_id)->get();
            $build_data = [
                'name' => $practitioner_answers->where('question_id', 'q_name')->value('answer') ?? null,
                'area_of_focus' => $practitioner_answers->where('question_id', 'q_area')->value('answer') ?? null,
                'I_provide_these_services' => $practitioner_answers->where('question_id', 'q_services')->value('answer') ?? null,
                'website_add' => $practitioner_answers->where('question_id', 'q_website')->value('answer') ?? null,
                'email' => $practitioner_answers->where('question_id', 'q_email')->value('answer') ?? null,
                'associations' => $practitioner_answers->where('question_id', 'q_associations')->value('answer') ?? null,
                'discovery_session' => $practitioner_answers->where('question_id', 'q_session')->value('answer') ?? 'Yes',
                'license' => $practitioner_answers->where('question_id', 'q_year')->value('answer') ?? null,
                'awarness' => $practitioner_answers->where('question_id', 'q_awarness')->value('answer') ?? null,
                'content_expert' => $practitioner_answers->where('question_id', 'q_content')->value('answer') ?? null,
                'profile_page' => $practitioner_answers->where('question_id', 'q_leads')->value('answer') ?? null,
                'upload_profile' => $practitioner_answers->where('question_id', 'q_upload')->value('answer') ?? null,
                'cname' => $practitioner_answers->where('question_id', 'q_cname')->value('answer') ?? null,
            ];
            $prefix = 'test_';
            $prefix = '';
            $name = $build_data['name'];
            $focus = $build_data['area_of_focus'];
            $services = $build_data['I_provide_these_services'];
            $website = $build_data['website_add'];
            $email = $prefix . $build_data['email'];
            $associations = $build_data['associations'];
            $discovery_session = $build_data['discovery_session'];
            $license = $build_data['license'];
            $awarness = $build_data['awarness'];
            $content_expert = $build_data['content_expert'];
            $profile_page = $build_data['profile_page'];
            $upload_profile = $build_data['upload_profile'];
            $cname = $build_data['cname'];
            $view_profile = ($upload_profile) ? "<a href=" . $upload_profile . " target='_blank'>View Profile</a>" : null;

            $get_cname = explode(',', $cname);

            $clinic_name = $clinic_email = $clinic_address = $clinic_city = '';
            $get_clinic_info = Clinic::where('clinic_name', '=', $get_cname[0])->get();
            if (!$get_clinic_info->isEmpty()) {
                $get_clinic_info = $get_clinic_info->first();
                $clinic_name = $get_clinic_info->clinic_name;
                $clinic_email = $get_clinic_info->clinic_email;
                $clinic_address = $get_clinic_info->clinic_address;
                $clinic_city = $get_clinic_info->clinic_city;
            } else {
                $get_clinic_info = Clinics::where('clinic_name', '=', $get_cname[0])->get();
                if (!$get_clinic_info->isEmpty()) {
                    $get_clinic_info = $get_clinic_info->first();
                    $clinic_name = $get_clinic_info->clinic_name;
                    $clinic_email = $get_clinic_info->clinic_email;
                    $clinic_address = $get_clinic_info->clinic_address;
                    $clinic_city = explode(',', $get_clinic_info->clinic_city);
                    $clinic_city = $clinic_city[0];
                }
            }
            $clinic_address = $practitioner_answers->where('question_id', 'q_vc_postal')->value('answer') ?? null;
            $ac_json = '{
                "contact": {
                    "email": "' . $email . '",
                    "firstName": "' . $name . '",
                    "lastName": "",
                    "phone": "",
                    "fieldValues": [
                        {
                            "field": "1",
                            "value": "Yes"
                       },
                        {
                            "field": "2",
                            "value": "' . $services . '"
                       },
                       {
                            "field": "3",
                            "value": "'  . $focus . '"
                        },
                        {
                            "field": "4",
                        "value": "' . $website . '"
                        },
                        {
                            "field": "5",
                        "value": "' . $clinic_city . '"
                        },
                        {
                            "field": "6",
                        "value": "' . $clinic_name . '"
                        },
                        {
                            "field": "8",
                        "value": "' . $clinic_email . '"
                        },
                        {
                            "field": "9",
                        "value": "' . $clinic_address . '"
                        },
                        {
                            "field": "10",
                        "value": "' . $discovery_session . '"
                        },
                        {
                            "field": "11",
                        "value": "' . $license . '"
                        },
                        {
                            "field": "13",
                        "value": "' . $associations . '"
                        },
                        {
                            "field": "14",
                        "value": "' . $awarness . '"
                        },
                        {
                            "field": "15",
                        "value": "' . $content_expert  . '"
                        },
                        {
                            "field": "16",
                        "value": "' . $profile_page . '"
                        },
                        {
                            "field": "19",
                        "value": "' . $view_profile . '"
                        }
                    ]
                }
            }';
           
            $response =  $this->getContactId($email);
            if($response == false){
               $result = $this->activeCampaignApiCall("/api/3/contacts/", "post", $ac_json);
               $details = json_decode($result);
               if(!is_null($details)){
                   $ac_contact_id = $details->contact->id;
                   if ($ac_contact_id) {
                       Log::info(["Inserted In ActiveCampaign" => $ac_contact_id]);
                       $tagJson = '{"contactTag":{"contact":"' . $ac_contact_id . '","tag":"3"}}';
                       $assigning_tag = $this->activeCampaignApiCall("/api/3/contactTags", "post", $tagJson);
                       $data = array("has_active_campaign" => 1, "ac_contact_id" => $ac_contact_id);
                       $updated = Practitioner::where('session_id', '=', $session_id)
                           ->update($data);
                       if ($updated) {
                           Log::info("Updated In Database(laravel)");
                           Log::info("Active Campaign Push Is Ended!");
                           return true;
                       } else {
                           Log::error("Error Not Updated In Database(laravel)");
                           return false;
                       }
                   } else {
                       Log::info("Not Inserted In ActiveCampaign");
                       Log::error("Error Not Inserted In ActiveCampaign");
                       return false;
                   }
               }
           }else{
                $contact_id = $response ;
                $result = $this->editContact($contact_id, $ac_json);
                $details = json_decode($result );
                if(!is_null($details)){     
                    Log::info(["Updated In ActiveCampaign" => $details]);
                  
                    Log::info("Active Campaign Push Is Editing!");
                    return true;  
                }else{
                    return false;
                }
                
                         
           }
        }
    }
}
