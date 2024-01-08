<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class UserLoginDetail extends Model
{
    use HasFactory;
    protected $table = "user_login_details";
    protected $fillable = [
        'user_id',
        'portal_pract_id',
        'wp_pract_id',
        'logged_in_time',
    ];
}
?>