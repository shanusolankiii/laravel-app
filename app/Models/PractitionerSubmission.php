<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PractitionerSubmission extends Model
{
    protected $table = "onboarding_practitioners_data";   
    protected $fillable = [
        'session_id',
        'question_id',
        'question_title',
        'answer',
    ];
    // protected $casts = [
    //     'answer' => 'array'
    // ];
}
