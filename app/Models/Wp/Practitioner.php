<?php

namespace App\Models\Wp;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Practitioner extends Model
{
    use HasFactory;

    protected $connection = "wp";

    protected $table = "hbs_practicitoner_table";
    protected $primaryKey = "pract_id";
    protected $fillable = [
        'pract_is_nd',
        'pract_title',
        'pract_name',
        'pract_email',
        'pract_image',
        'pract_clinic',
        'pract_conditions_supported',
        'pract_languages_spoken',
        'pract_highlights',
        'pract_accepting_new',
        'pract_direct_bills_ins',
        'pract_free_call',
        'pract_services',
        'pract_bio',
        'pract_degrees',
        'pract_gallery',
        'pract_education',
        'pract_association',
        'pract_reviews',
        'pract_visibility',
        'mail_send',
        'sync_to_portal',
        'pract_v_clinic_name',
        'pract_v_clinic_email',
        'pract_v_clinic_address',
        'pract_v_clinic_working_hours',
        'pract_v_clinic_place_id',
        'pract_v_clinic_latitude',
        'pract_v_clinic_longitude',
        'is_virtually_available',
        'pract_tag_line',
        'pract_type',
        'yt_video_link',
        'faqs',
        'last_login_at'
    ];
    public $timestamps = false;
    protected $casts = [
        'pract_v_clinic_working_hours' => 'array',
        'faqs' => 'array',
    ];
}
