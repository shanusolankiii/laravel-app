<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageMaster extends Model
{
    use HasFactory;
    protected $fillable = [
       'language_name',
       'language_code',
    ];
    public $incrementing = false;
}
