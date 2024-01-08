<?php

namespace App\Models\Wp;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    protected $connection = "wp";

    protected $table = "hbs_posts";

    protected $primaryKey  = 'ID';

    protected $fillable = [
        "post_title",
        "post_name",
        "post_type",
        "ID",
    ];
}
