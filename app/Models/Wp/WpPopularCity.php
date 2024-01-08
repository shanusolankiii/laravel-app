<?php

namespace App\Models\Wp;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WpPopularCity extends Model
{
    use HasFactory;
    protected $table = "hbs_popular_cities";
    protected $connection = "wp";
    protected $fillable = [
        "city_name",
        "city_slug",
        "city_lat",
        "city_long",
    ];
}
