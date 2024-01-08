<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Practitioners extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $fillable = [
        'wp_pract_id',
        'pract_is_nd',
        'pract_title',
        'pract_name',
        'pract_email',
        'pract_image',
        'pract_clinic',
        'pract_conditions_supported',
        'pract_languages_spoken',
        'pract_accepting_new',
        'pract_direct_bill_ins',
        'pract_free_call',
        'pract_services',
        'pract_bio',
        'pract_degrees',
        'pract_education',
        'pract_association',
        'pract_designation',
        'pract_type',
        'pract_reviews',
        'pract_visibility',
        'pract_license_year',
        'pract_type',
        'pract_designation',
        'sync_to_wp',
        'pract_v_clinic_name',
        'pract_v_clinic_email',
        'pract_v_clinic_address',
        'pract_v_clinic_working_hours',
        'pract_v_clinic_place_id',
        'pract_v_clinic_latitude',
        'pract_v_clinic_longitude',
        'is_virtually_available',
        'pract_tag_line',
        'yt_video_link',
        'faqs',
        'last_login_at'
    ];
    protected $casts = [
        'pract_v_clinic_working_hours' => 'array',
        'faqs' => 'array',
    ];
    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }
    public function clinics()
    {
        return $this->belongsToMany(ClinicsMaster::class, 'practitioner_clinic');
    }
}
