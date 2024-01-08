<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Practitioners;

class UserLogPractitioner extends Component
{
    public function render()
    {
        $all_practitioners = Practitioners::get();
        return view('livewire.user-log-practitioner', [
            'all_practitioners' => $all_practitioners,
        ]);
    }
}
