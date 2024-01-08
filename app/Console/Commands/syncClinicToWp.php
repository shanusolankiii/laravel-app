<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Wp\Clinic;
use App\Models\ClinicsMaster;
use Illuminate\Support\Facades\Log;

class syncClinicToWp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:sync:clinic:portal-2-wp';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update The Clinics from Portal to Wordpress';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $clinic_data_laravel = ClinicsMaster::where('sync_to_wp', '=', 0)->first();
        if (!is_null($clinic_data_laravel)) {
            Log::info("Sync Clinic to Wordpresss Is started!");
            $wp_clinic_id = $clinic_data_laravel->wp_clinic_id;
            $clinic_data_for_wp = array(
                'clinic_name' => $clinic_data_laravel->clinic_name,
                'clinic_email' => $clinic_data_laravel->clinic_email,
                'clinic_phone' => $clinic_data_laravel->clinic_phone,
                'clinic_rating' => $clinic_data_laravel->clinic_rating,
                'clinic_website_url' => $clinic_data_laravel->clinic_website_url,
                'clinic_city' => $clinic_data_laravel->clinic_city,
                'clinic_place_id' => $clinic_data_laravel->clinic_place_id,
                'clinic_address' => $clinic_data_laravel->clinic_address,
                'clinic_description' =>  $clinic_data_laravel->clinic_description,
                'clinic_virtual' => $clinic_data_laravel->clinic_virtual,
                'clinic_address_lat' => $clinic_data_laravel->clinic_address_lat,
                'clinic_address_long' => $clinic_data_laravel->clinic_address_long,
                'clinic_city_latitute' => $clinic_data_laravel->clinic_city_latitude,
                'clinic_city_longitude' => $clinic_data_laravel->clinic_city_longitude,
                'sync_to_portal' => 1,
            );
            $check_data = ['clinic_ID' => $wp_clinic_id, 'clinic_email' => $clinic_data_laravel->clinic_email];
            $clinic_data_wp = Clinic::updateOrCreate($check_data, $clinic_data_for_wp);

            if ($clinic_data_wp) {
                $clinic_portal_data = ClinicsMaster::where('id', '=', $clinic_data_laravel->id)->update(['sync_to_wp' => 1]);
                $this->info('Sync Clinic to WordPress successfully!');
                Log::info("Sync Clinic to WordPress Is Ended!");
            }
            return Command::SUCCESS;
        } else {
            Log::info("No Clinic for Sync in WordPress!");
        }
    }
}
