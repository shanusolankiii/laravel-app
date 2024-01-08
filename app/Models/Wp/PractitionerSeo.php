<?php

namespace App\Models\Wp;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PractitionerSeo extends Model
{
    use HasFactory;
    protected $connection = "wp";

    protected $table = "hbs_seo_practicitoner";

    protected $fillable = [
        'seo_pract_ID',
        'seo_pract_name',
        'seo_pract_meta_tag',
        'seo_pract_meta_description',
        'seo_pract_slug',
        'seo_pract_canonical_url',
        'seo_pract_visibility',
        
    ];
    public $timestamps = false;
}
