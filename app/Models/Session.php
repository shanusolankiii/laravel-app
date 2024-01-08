<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;
    protected $connection = "wp";

    protected $table = "hbs_session_data";
    protected $fillable = [
        'session_id',
        'conditions',
        'dropdown',
        'checkbox',
        'generic',
        'location_address',
        'location_city',
        'address_latitude',
        'address_longitude',
        'address_place_id',
    ];
}
