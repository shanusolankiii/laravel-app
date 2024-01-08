<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLocationData extends Model
{
    use HasFactory;
    protected $connection = "wp";

    protected $table = "hbs_user_location_data";
    protected $fillable = [
        'session_id ',
        'conditions',
        'services',
        'location_address',
        'location_city',
        'address_latitude',
        'address_longitude',    
        'address_place_id',       
    ];
}
