<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PopularCity extends Model
{
    use HasFactory;
    protected $table = "hbs_popular_cities";
    protected $fillable = [
        "city_name",
        "city_slug",
        "city_lat",
        "city_long",
    ];
}
