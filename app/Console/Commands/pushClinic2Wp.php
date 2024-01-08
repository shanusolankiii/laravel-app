<?php

namespace App\Console\Commands;

use App\Models\ClinicMaster;
use App\Models\Clinics;
use App\Models\Wp\Clinic;
use App\Models\Wp\ClinicsSeo;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class pushClinic2Wp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:push:wordpress:clinic {--session_id=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Push Clinic to WP database before practitioner push';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $session_id = $this->option('session_id');
        $get_clinic_info = Clinics::where('session_id', '=', $session_id)->get();
        try {
            Log::info("Clinic WordPress Push Is started!");
            if (!$get_clinic_info->isEmpty()) {
                $get_clinic_info = $get_clinic_info->first();
                $clinic_slug = Str::slug($get_clinic_info->clinic_name, '-');
                $clinicSeoDataFirst = ClinicsSeo::where('seo_clinic_slug', '=', $clinic_slug)->first();               
                if (is_null($clinicSeoDataFirst)) {
                    $new_clinic_add = [];
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
                   
                    $check_wp_clinic_exists = Clinic::where('clinic_name', '=', $new_clinic_add['clinic_name'])
                                                    // ->where('clinic_email', '=', $new_clinic_add['clinic_email'])
                                                    ->where('clinic_city', '=', $new_clinic_add['clinic_city'])
                                                    ->first();
                    

                    if (is_null($check_wp_clinic_exists)) {
                        $created_clinic = Clinic::create($new_clinic_add);
                        
                        if ($created_clinic) {
                            $slug = Str::slug($created_clinic->clinic_name, '-');
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
                        }
                        $data = array('is_approved' => 1, 'has_wordpress' => 1, 'wp_clinic_id' => $created_clinic->clinic_ID);
                   
                        $onboarding_clinic_master = ClinicMaster::where('session_id', '=', $session_id)->update($data);

                        Log::info("Clinic WordPress Push Is Added and Ended!");
                        return $onboarding_clinic_master;
                    } else {
                     
                        //$r = $check_wp_clinic_exists->update($new_clinic_add);
                        Log::info("Clinic WordPress Push Is Updated and Ended!");
                        // return $r;
                        return false;
                    }

                }
            } else {
                return false;
            }

        } catch (\Exception$e) {
            //throw $th;
            Log::error("Clinic Didn't Pushed to WP:" . $session_id);
            Log::error($e->getMessage());
        }

        return Command::SUCCESS;
    }
}
