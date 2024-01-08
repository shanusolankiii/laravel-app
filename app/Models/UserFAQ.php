<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFAQ extends Model
{
    use HasFactory;
    protected $table = "hbs_users_faqs";
    protected $fillable = [
        'id ',
        'faq_quesion',
        'faq_answer',
        'is_active',
         
    ];
}
