<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicMaster extends Model
{
    use HasFactory;
    protected $table = 'onboarding_clinics';
    
    protected $fillable = [
        'session_id',
        'user_id',
        'is_completed',
        'has_active_campaign',
        'ac_contact_id',
        'is_approved',
        'has_wordpress',
        'wp_clinic_id'
    ];
     public function clinics(){
        return $this->belongsTo('App\Models\Clinics','session_id','session_id');
     
    }
}
