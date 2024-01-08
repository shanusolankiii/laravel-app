<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicsMaster extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = "clinics";

    protected $fillable = [
        'session_id',
        'user_id',
        'wp_clinic_id',
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
        'clinic_address_lat',
        'clinic_address_long',
        'clinic_visible',
        'clinic_virtual',
        'clinic_place_id',
        'sync_to_wp',
    ];
    public function practitioners()
    {
        return $this->belongsToMany(Practitioners::class, 'practitioner_clinic');
    }
}
