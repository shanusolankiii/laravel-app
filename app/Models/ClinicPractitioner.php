<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicPractitioner extends Model
{
    use HasFactory;
    protected $table = "practitioner_clinic"; 
}
