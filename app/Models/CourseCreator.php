<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseCreator extends Model
{
    use HasFactory;
    protected $table = "course_creators";   
    protected $fillable = [
        'course_creator_name',
        'course_creator_description',
    ];
}
