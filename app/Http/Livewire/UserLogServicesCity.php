<?php

namespace App\Http\Livewire;

use App\Models\UserLogActivities;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class UserLogServicesCity extends Component
{
    public function render()
    {
        $service_counts = [];

        // Geolocation and Services
        $user_activities_log_geo_service = UserLogActivities::where('module_id', 5)->where('submodule_id', 9)->get();

        // Geolocation and Services
        if (!empty($user_activities_log_geo_service)) {
            foreach ($user_activities_log_geo_service as $module) {
                $service_id = $module['reference_id_2'];
                $city_id = $module['reference_id'];
                $services = DB::connection('wp')->table('hbs_service_table')->where('service_ID', $service_id)->first();
                $service_name = $services->service_name;
                if ($service_name == 'Bioidentical Hormone Replacement Therapy (BHRT)') {
                    $service_name = 'BHRT';
                }
                $city = DB::connection('wp')->table('hbs_popular_cities')->where('id', $city_id)->first();
                $cityName = "{$city->city_name}";
                if (!isset($service_counts[$cityName])) {
                    $service_counts[$cityName] = [];
                }
                if (!isset($service_counts[$cityName][$service_name])) {
                    $service_counts[$cityName][$service_name] = 1;
                } else {
                    $service_counts[$cityName][$service_name]++;
                }
            }
        }
        // dd($service_counts);

        return view('livewire.user-log-services-city', [
            'serviceCounts' => $service_counts,
        ]);
    }
}
