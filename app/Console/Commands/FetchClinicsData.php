<?php

namespace App\Console\Commands;

use App\Models\ClinicsMaster;
// use League\Csv\Writer;
use App\Models\Wp\Clinic;
use GuzzleHttp\Client;
use Illuminate\Console\Command;

class FetchClinicsData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clinics:fetch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetches clinics data and gets the latitude, longitude, and PlaceID using the Google Maps API';

    /**
     * Execute the console command.
     *
     * @return int
     */

    public function handle()
    {
        $clinics = ClinicsMaster::get();
        $client = new Client();
        // $csvWriter = Writer::createFromPath('storage/clinics/clinics.csv', 'w+');
        echo "Wait while we update the clinics data...\r\n";
        $updatedCount = 0;
        foreach ($clinics as $clinic) {
            $address = ($clinic->clinic_address);
            $url = "https://maps.googleapis.com/maps/api/geocode/json?address={{$address}}&key=AIzaSyCM4YQppR1MGzngkbEL7L1jWoOxsVT6L0o";
            $response = $client->get($url);
            $data = json_decode($response->getBody(), true);
            if (!empty($data) && $data['status'] == 'OK') {
                $latitude = $data['results'][0]['geometry']['location']['lat'];
                $longitude = $data['results'][0]['geometry']['location']['lng'];
                $placeId = $data['results'][0]['place_id'];

                // Store the latitude, longitude and placeId in the Laravel clinics table
                $laravel_clinics = ClinicsMaster::where('id', $clinic->id)
                    ->update([
                        'clinic_city_latitude' => $latitude,
                        'clinic_city_longitude' => $longitude,

                        'clinic_address_lat' => $latitude,
                        'clinic_address_long' => $longitude,

                        'clinic_place_id' => $placeId,
                    ]);
                // Update the latitude, longitude, and placeId in the WP clinics table
                $wp_clinic = Clinic::where('clinic_ID', $clinic->wp_clinic_id)->first();
                if ($wp_clinic) {
                    $wp_clinic->clinic_city_latitute = $latitude;
                    $wp_clinic->clinic_city_longitude = $longitude;
                    $wp_clinic->clinic_address_lat = $latitude;
                    $wp_clinic->clinic_address_long = $longitude;
                    $wp_clinic->clinic_placeID = $placeId;
                    $wp_clinic->save();
                    $updatedCount++;
                } else {
                    $updatedCount--;
                }
            }
        }
        if ($updatedCount > 0) {
            echo "Wp Clinic Data has been updated Successfully.\r\n";
        } else {
            echo "Something went wrong in WP, Data couldn't update.\r\n";
        }
        if ($laravel_clinics) {
            echo "Laravel Clinic Data has been updated Successfully.\r\n";
        } else {
            echo "Something went wrong in Laravel, Data couldn't update.\r\n";
        }
    }
}