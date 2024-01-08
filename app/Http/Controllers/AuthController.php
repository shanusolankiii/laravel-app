<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Session;



class AuthController extends Controller
{
  use AuthenticatesUsers;

  protected $redirectTo = '/hb-cpanel';
  
  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }
  public function login()
  {

    return view('auth.login');
  }

  public function logout()
  {
    Session::flush();
    Auth::logout();
    return redirect('hb-cpanel');
  }

  public function authRedirect()
  {
    return Socialite::driver('google')->stateless()->redirect();
  }

  public function authCallback()
  {

    try {

      $user = Socialite::driver('google')->stateless()->user();

      $finduser = User::where('google_id', $user->id)->where('email', $user->email)->first();
      if($finduser){

          Auth::login($finduser);
		      session()->put('logged_in_user_avatar', $user->avatar);
          return redirect('hb-cpanel/practitioners');

      }
      else{

          $newUser = User::create([

              'name' => $user->name,

              'email' => $user->email,

        	 'google_id'=> $user->id,
        	 'password'=> $user->id         

          ]);
          $newUser->assignRole(['admin']);
          Auth::login($newUser);		  
		      session()->put('logged_in_user_avatar', $user->avatar);
		      return redirect('hb-cpanel');

      }

 	} 
	catch (Exception $e) {

      return redirect('hb-cpanel');

  	}  
  }
}
