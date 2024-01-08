<?php

namespace App\Http\Livewire;

use App\Models\Practitioners;
use App\Models\UserLogActivities;
use App\Models\Wp\Practitioner;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class UserLogDashboard extends Component
{
    public function render()
    {
        $condition_name = [];
        $service_name = [];
        $condition_counts = [];
        $service_counts = [];
        $city_name = [];
        $practitioner_name = [];
        $maxPractitionerName = '';

        $total_users = UserLogActivities::count();
        $discovery_call_booked = Practitioner::where('discovery_call_booked', '>', 0)->sum('discovery_call_booked');
        $bad_clicked = Practitioner::where('bad_clicked', '>', 0)->sum('bad_clicked');

        // Profile Visits
        $user_activities_log_profile_visits = UserLogActivities::where('module_id', 1)->where('submodule_id', 2)->get();
        $user_activities_log_profile_visits_count = UserLogActivities::where('module_id', 1)->where('submodule_id', 2)->count();

        // Condition
        $user_activities_log_condition = UserLogActivities::where('module_id', 3)->get();
        $user_activities_log_condition_count = UserLogActivities::where('module_id', 3)->count();

        // Services
        $user_activities_log_service = UserLogActivities::where('module_id', 4)->get();
        $user_activities_log_services_count = UserLogActivities::where('module_id', 4)->count();

        // Cities
        $user_activities_log_cities = UserLogActivities::where('module_id', 5)->get();
        $user_activities_log_cities_count = UserLogActivities::where('module_id', 5)->count();

        // Geolocation and Conditions
        $user_activities_log_geo_condition = UserLogActivities::where('module_id', 5)->where('submodule_id', 10)->get();

        // Geolocation and Services
        $user_activities_log_geo_service = UserLogActivities::where('module_id', 5)->where('submodule_id', 9)->get();

        // Profile Visits
        if (!empty($user_activities_log_profile_visits)) {
            foreach ($user_activities_log_profile_visits as $module) {
                $pract_id = $module->reference_id;
                $practitioners = Practitioners::where('id', $pract_id)->get();
                // dd($practitioners);
                foreach ($practitioners as $practitioner) {
                    $practitioner_name[] = $practitioner->pract_name;
                }
            }
            $pract_count = array_count_values($practitioner_name);
            // dd($pract_count);
            $maxPractitionerCount = max($pract_count);
            // dd($maxPractitionerCount);
            $maxPractitionerName = array_search($maxPractitionerCount, $pract_count);
        }

        // Conditions
        if (!empty($user_activities_log_condition)) {
            foreach ($user_activities_log_condition as $module) {
                $condition_id = $module->reference_id;
                $conditions = DB::connection('wp')->table('hbs_conditions')->where('conditions_id', $condition_id)->get();
                foreach ($conditions as $condition) {
                    $condition_name[] = $condition->conditions_name;
                }
            }
            $condition_count = array_count_values($condition_name);
        }

         // Services
         if (!empty($user_activities_log_service)) {
            foreach ($user_activities_log_service as $module) {
                $service_id = $module->reference_id;
                $services = DB::connection('wp')->table('hbs_service_table')->where('service_ID', $service_id)->get();
                foreach ($services as $service) {
                    $service_name[] = $service->service_name;
                }
            }
            $service_count = array_count_values($service_name);
        }

        // Cities
        if (!empty($user_activities_log_cities)) {
            foreach ($user_activities_log_cities as $module) {
                $city_id = $module->reference_id;
                $cities = DB::connection('wp')->table('hbs_popular_cities')->where('id', $city_id)->get();
                foreach ($cities as $city) {
                    $city_name[] = $city->city_name;
                }
            }
            $city_count = array_count_values($city_name);
        }

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

        return view('livewire.user-log-dashboard',
            [
                'total_users' => $total_users,
                'discovery_call_booked' => $discovery_call_booked,
                'bad_clicked' => $bad_clicked,
                'pract_count' => $pract_count,
                'maxPractitionerName' => $maxPractitionerName,
                'maxPractitionerCount' => $maxPractitionerCount,
                'condition_name' => $condition_name,
                'condition_count' => $condition_count,
                'service_name' => $service_name,
                'service_count' => $service_count,
                'city_count' => $city_count,
                'conditionCounts' => $condition_counts,
                'serviceCounts' => $service_counts,
                'user_activities_log_condition_count' => $user_activities_log_condition_count,
                'user_activities_log_services_count' => $user_activities_log_services_count,
                'user_activities_log_cities_count' => $user_activities_log_cities_count,
                'user_activities_log_profile_visits_count' => $user_activities_log_profile_visits_count,
            ]);
    }
    public function getServices()
    {
        $service_name = [];
        // Services
        $user_activities_log_service = UserLogActivities::where('module_id', 4)->get();

        // Services
        if (!empty($user_activities_log_service)) {
            foreach ($user_activities_log_service as $module) {
                $service_id = $module->reference_id;
                $services = DB::connection('wp')->table('hbs_service_table')->where('service_ID', $service_id)->get();
                foreach ($services as $service) {
                    $service_name[] = $service->service_name;
                }
            }
            $service_count = array_count_values($service_name);
        }
        return view('livewire.user-log-services',[
            'service_name' => $service_name,
                'service_count' => $service_count,
        ]);
    }

}
