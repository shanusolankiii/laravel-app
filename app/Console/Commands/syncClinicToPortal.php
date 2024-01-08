<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ClinicsMaster;
use App\Models\Wp\Clinic;
use Illuminate\Support\Facades\Log;

class syncClinicToPortal extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:sync:clinic:wp-2-portal';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update The Clinics from Wordpress to Portal';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $clinic_data_wp = Clinic::where('sync_to_portal', '=', 0)->first();
        try {
            if(!is_null($clinic_data_wp)){
                Log::info("Sync Clinic to Portal Is started!");
                $clinic_data_for_portal['clinic_name'] = $clinic_data_wp->clinic_name;
                $clinic_data_for_portal['clinic_email'] = $clinic_data_wp->clinic_email;
                $clinic_data_for_portal['clinic_phone'] = $clinic_data_wp->clinic_phone;
                $clinic_data_for_portal['clinic_rating'] = $clinic_data_wp->clinic_rating;
                $clinic_data_for_portal['clinic_website_url'] = $clinic_data_wp->clinic_website_url;
                $clinic_data_for_portal['clinic_city'] = $clinic_data_wp->clinic_city;
                $clinic_data_for_portal['clinic_place_id'] = $clinic_data_wp->clinic_placeID;
                $clinic_data_for_portal['clinic_address'] = $clinic_data_wp->clinic_address;
                $clinic_data_for_portal['clinic_description'] = $clinic_data_wp->clinic_description;
                $clinic_data_for_portal['clinic_virtual'] = $clinic_data_wp->clinic_virtual;
                $clinic_data_for_portal['clinic_address_lat'] = $clinic_data_wp->clinic_address_lat;
                $clinic_data_for_portal['clinic_address_long'] = $clinic_data_wp->clinic_address_long;
                $clinic_data_for_portal['clinic_city_latitude'] = $clinic_data_wp->clinic_city_latitute;
                $clinic_data_for_portal['clinic_city_longitude'] = $clinic_data_wp->clinic_city_longitude;
                $clinic_data_for_portal['sync_to_wp'] = 1;
                $check_data = ['wp_clinic_id' => $clinic_data_wp->clinic_ID, 'clinic_email' => $clinic_data_wp->clinic_email];
                $clinic_data_laravel = ClinicsMaster::updateOrCreate($check_data, $clinic_data_for_portal);
                $wp_clinic_id = $clinic_data_wp->clinic_ID;
                if ($clinic_data_laravel) {
                    $clinic_data = Clinic::where('clinic_ID', '=', $wp_clinic_id)->update(['sync_to_portal' => 1]);
                    if ($clinic_data) {
                        $this->info('Sync Clinic to portal successfully!');
                        Log::info("Sync Clinic  to Portal Is Ended!");
                    } else {
                        $this->info('Sync Clinic to portal Failed!');
                    }
                }
            }
            else {
                Log::info("No Clinic for Sync in Portal!");
            }
        } catch (\Exception $e) {
            //throw $th;
            Log::error("Sync Clinic  to Portal Is Ended!: With error");
            Log::error($e->getMessage());
        }
        return Command::SUCCESS;
    }
}
