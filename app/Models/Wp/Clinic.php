<?php

namespace App\Models\Wp;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    use HasFactory;

    protected $connection = "wp";

    protected $table = "hbs_clinics_table";
    protected $primaryKey = 'clinic_ID';
    protected $fillable = [        
        'clinic_name',
        'clinic_email',
        'clinic_address',
        'clinic_city',
        'clinic_phone',
        'clinic_rating',
        'clinic_website_url',
        'clinic_description',
        'clinic_city_latitute',
        'clinic_city_longitude',
        'clinic_address_lat',
        'clinic_address_long',
        'clinic_visibility',
        'clinic_virtual',
        'clinic_placeID',
        'sync_to_portal',
    ];

    public $timestamps = false;
}
