<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $table = 'courses';
    
    protected $fillable = [
        'course_title',
        'course_description',       
        'course_creator',       
        'instructors',       
        'credit_counts',       
        'category',       
        'course_logo',       
        'price',       
        'special_price',       
        'cta_label',       
        'cta_link',       
        'is_active'    
    ];

    /**
     * The instructors that belong to the course.
     */
    public function instructors()
    {
        return $this->belongsToMany(Instructor::class, 'course_instructor');
    }
    /**
     * The categories that belong to the course.
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'course_category');
    }
}
