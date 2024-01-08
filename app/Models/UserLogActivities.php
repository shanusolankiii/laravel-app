<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLogActivities extends Model
{
    use HasFactory;
    protected $table = "log_activities_users";
    protected $lazy = false;
    protected $fillable = [
        'ip_address ',
        'session_id',
        'user_id',
        'module_id',
        'submodule_id',
        'event_id',
        'reference_id',
        'reference_id_2',
        'reference_id_3',
        'reference_id_4',
        'reference_id_4',
        'country_id',
        'state_id',
        'city_id',
        'created_at',
        'updated_at',
    ];
    public function module()
    {
        return $this->belongsTo(LogMasterModule::class, 'module_id');
    }

    public function submodule()
    {
        return $this->belongsTo(LogMasterSubmodule::class, 'submodule_id');
    }

    public function event()
    {
        return $this->belongsTo(LogMasterEvent::class, 'event_id');
    }
}
