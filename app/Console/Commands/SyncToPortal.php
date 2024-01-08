<?php

namespace App\Console\Commands;

use App\Models\Practitioners;
use App\Models\Wp\Practitioner as WpPractitioner;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SyncToPortal extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:sync:pract:wp-2-portal';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update The Practitioners from Wordpress to Portal';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $practitioner_data_wp = WpPractitioner::where('sync_to_portal', '=', 0)->first();
        
        if ($practitioner_data_wp) {
            Log::info("Sync Practitoner to Portal Is started!");
            $clinic_in_laravel = str_replace(';', '#', $practitioner_data_wp->pract_clinic);
            $data = array(
                'wp_pract_id' => $practitioner_data_wp->pract_id,
                'pract_title' => $practitioner_data_wp->pract_title,
                'pract_name' => $practitioner_data_wp->pract_name,
                'pract_email' => $practitioner_data_wp->pract_email,
                'pract_image' => $practitioner_data_wp->pract_image,
                'pract_clinic' => $clinic_in_laravel,
                'pract_conditions_supported' => $practitioner_data_wp->pract_conditions_supported,
                'pract_languages_spoken' => $practitioner_data_wp->pract_languages_spoken,
                'pract_license_year' => $practitioner_data_wp->pract_highlights,
                'pract_accepting_new' => $practitioner_data_wp->pract_accepting_new,
                'pract_direct_bill_ins' => $practitioner_data_wp->pract_direct_bills_ins,
                'pract_free_call' => $practitioner_data_wp->pract_free_call,
                'pract_services' => $practitioner_data_wp->pract_services,
                'pract_bio' => $practitioner_data_wp->pract_bio,
                'pract_designation' => $practitioner_data_wp->pract_degrees,
                'pract_education' => $practitioner_data_wp->pract_education,
                'pract_association' => $practitioner_data_wp->pract_association,
                'pract_reviews' => 5,
                'pract_visibility' => $practitioner_data_wp->pract_visibility,
                'sync_to_wp' => 1,
                'pract_v_clinic_name' => $practitioner_data_wp->pract_v_clinic_name,
                'pract_v_clinic_address' => $practitioner_data_wp->pract_v_clinic_address,
                'pract_v_clinic_email' => $practitioner_data_wp->pract_v_clinic_email,
                'pract_v_clinic_working_hours' => $practitioner_data_wp->pract_v_clinic_working_hours,
                'pract_v_clinic_place_id' => $practitioner_data_wp->pract_v_clinic_place_id,
                'pract_v_clinic_latitude' => $practitioner_data_wp->pract_v_clinic_latitude,
                'pract_v_clinic_longitude' => $practitioner_data_wp->pract_v_clinic_longitude,
                'is_virtually_available' => $practitioner_data_wp->is_virtually_available,
                'pract_tag_line' => $practitioner_data_wp->pract_tag_line,
                'yt_video_link' => $practitioner_data_wp->yt_video_link,
                'faqs' => $practitioner_data_wp->faqs
            );          
            $check_data = ['wp_pract_id' => $practitioner_data_wp->pract_id, 'pract_email' => $practitioner_data_wp->pract_email];
            $practitioner_data_laravel = Practitioners::updateOrCreate($check_data, $data);
            if ($practitioner_data_laravel) {
                $pract_data = WpPractitioner::where('pract_id', '=', $practitioner_data_wp->pract_id)->first();
                $pract_data->sync_to_portal = 1;
                $pract_data->update();
                $this->info('Sync Practitoner to portal successfully!');
                Log::info("Sync Practitoner to Portal Is Ended!");
            }
            return Command::SUCCESS;
        }
        else {
            Log::info("No Practitioner for Sync in Practitioner!");
        }
    }
}
