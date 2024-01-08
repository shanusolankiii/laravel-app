<?php

namespace App\Models\Wp;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicsSeo extends Model
{
    use HasFactory;
    protected $connection = "wp";

    protected $table = "hbs_seo_clinics";
    protected $fillable = [
        'seo_clinic_ID ',
        'seo_clinic_name',
        'seo_clinic_meta_tag',
        'seo_clinic_meta_description',
        'seo_clinic_slug',
        'seo_clinic_canonical_url',
        'seo_clinic_visibility',       
    ];

    public $timestamps = false;
}
