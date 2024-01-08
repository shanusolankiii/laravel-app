<?php

namespace App\Http\Livewire;

use App\Models\UserLocationData;
use Livewire\Component;

class UserLocationLeads extends Component
{
    public function render()
    {
        $city_count = [];
        $get_user_locations = UserLocationData::get();

        foreach ($get_user_locations as $location) {
            $city_count[trim($location->location_city)] = 0;
        }
        
        foreach ($get_user_locations as $location) {
            if (!empty($location) || $location != null || $location != "") {
                $city_count[trim($location->location_city)]++;
            }
        }

        return view('livewire.user-location-leads', [
            'get_user_locations' => $get_user_locations,
            'city_count' => $city_count,
        ]);
    }
}
