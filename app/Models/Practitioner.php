<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Practitioner extends Model
{
    protected $table = "onboarding_practitioners";   
    
    protected $fillable = [
        'session_id',
        'is_completed',
        'is_virtual',
        'course_id',
        'has_active_campaign',
        'ac_contact_id',
        'is_approved',
        'has_wordpress',
        'wp_practitioner_id'
    ];
}
