<?php

namespace App\Models\wp;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WpServices extends Model
{
    use HasFactory;
    protected $connection = "wp";

    protected $table = "hbs_service_table";
    protected $primaryKey = 'service_ID';
    protected $fillable = [
        'service_name',
        'service_description',
        'service_image',
        'service_visibility',
        'is_virtual',
    ];
    public $timestamps = false;
}
