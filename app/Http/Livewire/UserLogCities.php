<?php

namespace App\Http\Livewire;

use App\Models\UserLogActivities;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class UserLogCities extends Component
{
    public function render()
    {
        // Get all cities from the database
        $all_cities = DB::connection('wp')->table('hbs_popular_cities')->get();

        // Get visited cities and their counts
        $user_activities_log_cities = UserLogActivities::where('module_id', 5)->get();

        // Initialize city count array with 0 for all cities
        $city_count = [];
        foreach ($all_cities as $city) {
            $city_count[$city->city_name] = 0;
        }

        // Update count for visited cities
        foreach ($user_activities_log_cities as $module) {
            $city_id = $module->reference_id;
            $city = DB::connection('wp')->table('hbs_popular_cities')->where('id', $city_id)->first();
            if ($city) {
                $city_count[$city->city_name]++;
            }
        }

        return view('livewire.user-log-cities', [
            'city_count' => $city_count,
            'user_activities_log_cities_count' => count($user_activities_log_cities),
        ]);
    }
}
