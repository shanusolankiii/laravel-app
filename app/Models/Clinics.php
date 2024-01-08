<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClinicMaster;

class Clinics extends Model
{
    
    protected $table = "onboarding_clinics_data"; 
    
    protected $primaryKey  = 'id';

    protected $fillable = [
        'session_id',
        'user_id',
        'clinic_name',
        'clinic_email',
        'clinic_address',
        'clinic_city',
        'clinic_phone',
        'clinic_rating',
        'clinic_website_url',
        'clinic_description',
        'clinic_city_latitude',
        'clinic_city_longitude',
        'clinic_address_latitude',
        'clinic_address_longitude',
        'clinic_visibility',
        'clinic_virtual',
        'clinic_placeID',
    ];
    public function clinicMaster()
    {
        return $this->hasMany('App\Models\ClinicMaster', 'session_id', 'session_id');
    }
   
}
