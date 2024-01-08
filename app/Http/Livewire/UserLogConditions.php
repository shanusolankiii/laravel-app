<?php

namespace App\Http\Livewire;

use App\Models\UserLogActivities;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class UserLogConditions extends Component
{
    public function render()
    {
        // Get all conditions from the database
        $all_conditions = DB::connection('wp')->table('hbs_conditions')->get();

        // Get visited conditions and their counts
        $user_activities_log_condition = UserLogActivities::where('module_id', 3)->get();
        $user_activities_log_condition_homepage = UserLogActivities::where('module_id', 3)->where('submodule_id', 17)->get();

        // Initialize condition count array with 0 for all conditions
        $condition_count = [];
        foreach ($all_conditions as $condition) {
            $condition_count[$condition->conditions_name] = 0;
        }
        $condition_count_home = [];
        foreach ($all_conditions as $condition) {
            $condition_count_home[$condition->conditions_name] = 0;
        }

        // Update count for visited conditions
        foreach ($user_activities_log_condition as $module) {
            $condition_id = $module->reference_id;
            $condition = DB::connection('wp')->table('hbs_conditions')->where('conditions_id', $condition_id)->first();
            if ($condition) {
                $condition_count[$condition->conditions_name]++;
            }
        }
        foreach ($user_activities_log_condition_homepage as $module) {
            $condition_id = $module->reference_id;
            $condition = DB::connection('wp')->table('hbs_conditions')->where('conditions_id', $condition_id)->first();
            if ($condition) {
                $condition_count_home[$condition->conditions_name]++;
            }
        }

        return view('livewire.user-log-conditions', [
            'condition_count' => $condition_count,
            'condition_count_home'=> $condition_count_home,
            'user_activities_log_condition_count' => count($user_activities_log_condition),
        ]);
    }
}
