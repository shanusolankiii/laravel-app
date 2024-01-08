<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @param  string|null  ...$guards
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {                 
                $roles = Auth::guard($guard)->user()->roles()->first(); 
                if(!is_null(Auth::guard($guard)->user()->google_id) && $roles->name == 'admin' ){
                    return redirect('hb-cpanel/home');
                    
                }elseif(!is_null(Auth::guard($guard)->user()->password) && $roles->name == 'practitioner'){
                    $is_wp_post_redirect = $request->session()->get('webinar_redirect');
                    if($is_wp_post_redirect == true){
                        $user_id = Auth::user()->id;
                        if (isset($_COOKIE['webinar_post_id'])) {
                            $post_id = $_COOKIE['webinar_post_id'];
                            $webinar_link = config('scaleup.WP_SITE_URL').'login-process/'.$user_id.'/'.$post_id ; 
                            return redirect()->away($webinar_link);
                        }else{
                            return redirect('practitioners/profile');
                        }                       
                    }else{
                        return redirect('practitioners/profile');
                    }
                    
                }
            }
            return $next($request);
        }

        
    }
}
