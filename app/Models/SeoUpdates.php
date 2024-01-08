<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoUpdates extends Model
{
    use HasFactory;
    protected $table = "meta_data_for_urls"; 
    protected $fillable = [
        'slug',
        'url',
        'canonical_url',
        'page_title',
        'meta_title',
        'meta_description',
        'page_description',
    ];
}
