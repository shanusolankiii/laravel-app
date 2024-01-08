<?php

namespace App\Http\Livewire;

use App\Models\UserLogActivities;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class UserLogServices extends Component
{
    public function render()
    {
        // Get all services from the database
        $all_services = DB::connection('wp')->table('hbs_service_table')->get();

        // Special  services
        $special_services = ['Bioidentical Hormone Replacement Therapy (BHRT)', 'IV Therapy', 'Desiccated Thyroid', 'Vitamin Injections'];

        // Get visited services and their counts
        $user_activities_log_service = UserLogActivities::where('module_id', 4)->get();

        // Initialize service count array with 0 for all services
        $service_count = [];
        foreach ($special_services as $service) {
            $service_count[$service] = 0;
        }

        // Update count for visited services
        foreach ($user_activities_log_service as $module) {
            $service_id = $module->reference_id;
            $service = DB::connection('wp')->table('hbs_service_table')->where('service_ID', $service_id)->first();
            if ($service) {
                $service_count[$service->service_name]++;
            }
        }

        return view('livewire.user-log-services', [
            'service_count' => $service_count,
            'user_activities_log_services_count' => count($user_activities_log_service),
        ]);
    }
}
