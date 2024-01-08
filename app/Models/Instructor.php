<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;
    protected $table = 'instructors';
    
    protected $fillable = [
        'instructor_title',
        'instructor_full_name',      
        'instructor_description',      
    ];

    /**
     * The courses that belong to the instructor.
     */
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_instructor');
    }

}
