<?php

namespace App\Console\Commands;

use App\Models\Practitioners;
use App\Models\Wp\Practitioner;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SyncToWordPress extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:sync:pract:portal-2-wp';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update The Practitioners from Portal to Wordpress';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $practitioner_data_laravel = Practitioners::where('sync_to_wp', '=', 0)->first();        
        if ($practitioner_data_laravel) {
            Log::info("Sync Practitioner to Wordpresss Is started!");
            $clinic_in_wp = str_replace('#', ';', $practitioner_data_laravel->pract_clinic);
            $data = array(
                'pract_id' => $practitioner_data_laravel->wp_pract_id,
                'pract_title' => $practitioner_data_laravel->pract_title,
                'pract_name' => $practitioner_data_laravel->pract_name,
                'pract_email' => $practitioner_data_laravel->pract_email,
                'pract_image' => $practitioner_data_laravel->pract_image,
                'pract_clinic' => $clinic_in_wp,
                'pract_conditions_supported' => $practitioner_data_laravel->pract_conditions_supported,
                'pract_languages_spoken' => $practitioner_data_laravel->pract_languages_spoken,
                'pract_highlights' => $practitioner_data_laravel->pract_license_year,
                'pract_accepting_new' => $practitioner_data_laravel->pract_accepting_new,
                'pract_direct_bills_ins' => $practitioner_data_laravel->pract_direct_bill_ins,
                'pract_free_call' => $practitioner_data_laravel->pract_free_call,
                'pract_services' => $practitioner_data_laravel->pract_services,
                'pract_bio' => $practitioner_data_laravel->pract_bio,
                'pract_degrees' => $practitioner_data_laravel->pract_designation,
                'pract_education' => $practitioner_data_laravel->pract_education,
                'pract_association' => $practitioner_data_laravel->pract_association,
                'pract_reviews' => 1,
                'pract_visibility' => $practitioner_data_laravel->pract_visibility,
                'sync_to_portal' => 1,
                'pract_v_clinic_name' => $practitioner_data_laravel->pract_v_clinic_name,
                'pract_v_clinic_address' => $practitioner_data_laravel->pract_v_clinic_address,
                'pract_v_clinic_email' => $practitioner_data_laravel->pract_v_clinic_email,
                'pract_v_clinic_working_hours' => $practitioner_data_laravel->pract_v_clinic_working_hours,
                'pract_v_clinic_place_id' => $practitioner_data_laravel->pract_v_clinic_place_id,
                'pract_v_clinic_latitude' => $practitioner_data_laravel->pract_v_clinic_latitude,
                'pract_v_clinic_longitude' => $practitioner_data_laravel->pract_v_clinic_longitude,
                'is_virtually_available' => $practitioner_data_laravel->is_virtually_available,
                'pract_tag_line' => $practitioner_data_laravel->pract_tag_line,
                'yt_video_link' => $practitioner_data_laravel->yt_video_link,
                'faqs' => $practitioner_data_laravel->faqs
            );
            $check_data = ['pract_id' => $practitioner_data_laravel->wp_pract_id, 'pract_email' => $practitioner_data_laravel->pract_email];
            
            $practitioner_data_wp = Practitioner::updateOrCreate($check_data, $data);
           
            if ($practitioner_data_wp) {

                $pract_data = Practitioners::where('id', '=', $practitioner_data_laravel->id)->update(['sync_to_wp' => 1]);
                
                $this->info('Sync Practitioner to WordPress successfully!');
                Log::info("Sync Practitioner to WordPress Is Ended!");
            }
            return Command::SUCCESS;
        }
        else {
            Log::info("No Practitioner for Sync in WordPress!");
        }
    }
}
