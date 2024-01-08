<?php

namespace App\Http\Livewire;

use App\Models\UserLocationData;
use Livewire\Component;

class LeadsView extends Component
{
    public $user_location_data, $session_id, $conditions, $services, $location_address, $location_city, 
    $address_latitude, $address_longitude, $address_place_id;
    public function render()
    {
        return view('livewire.leads-view');
    }
    public function mount($id = null)
    {
        $this->user_location_data = UserLocationData::find($id);
    }
}
