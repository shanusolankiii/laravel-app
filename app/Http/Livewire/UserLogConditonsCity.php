<?php

namespace App\Http\Livewire;

use App\Models\UserLogActivities;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class UserLogConditonsCity extends Component
{
    public function render()
    {
        $condition_counts = [];

        // Geolocation and Conditions
        $user_activities_log_geo_condition = UserLogActivities::where('module_id', 5)->where('submodule_id', 10)->get();

        // Geolocation and Condition
        if (!empty($user_activities_log_geo_condition)) {
            foreach ($user_activities_log_geo_condition as $module) {
                $condition_id = $module['reference_id_2'];
                $city_id = $module['reference_id'];

                if (!is_null($city_id) && !is_null($condition_id)) {
                    $conditions = DB::connection('wp')->table('hbs_conditions')->where('conditions_id', $condition_id)->first();
                    if (!empty($conditions)) {
                        $condition_name = $conditions->conditions_name;
                    }

                    $city = DB::connection('wp')->table('hbs_popular_cities')->where('id', $city_id)->first();
                    if (!empty($city)) {
                        $cityName = "{$city->city_name}";
                        if (!isset($condition_counts[$cityName])) {
                            $condition_counts[$cityName] = [];
                        }
                        if (!isset($condition_counts[$cityName][$condition_name])) {
                            $condition_counts[$cityName][$condition_name] = 1;
                        } else {
                            $condition_counts[$cityName][$condition_name]++;
                        }
                    }
                }
            }
        }
        return view('livewire.user-log-conditons-city', [
            'conditionCounts' => $condition_counts,
        ]);
    }
}
