<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    
    protected $fillable = [
        'category_title',
        'category_description'       
    ];
    /**
     * The courses that belong to the category.
     */
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_category');
    }
}
