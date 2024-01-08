<?php

namespace App\Http\Controllers\frontend;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Models\Practitioners;
use App\Models\Wp\Practitioner;
use App\Models\Course;
use App\Models\UserLoginDetail;
use App\Models\Wp\Posts;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class PractitionerController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/practitioners/profile';

    public function __construct()
    {
        $this->middleware('guest')->except('logout', 'course_view');
    }
    private function saveCourseCookie($course_id)
    {
        return setcookie('course', $course_id, time() + (86400 * 30), "/");
    }
    private function saveWebinarCookie($post_id)
    {
        return setcookie('webinar_post_id', $post_id, time() + (86400 * 30), "/");
    }
    private function getCourseCookie()
    {
        if (isset($_COOKIE['course'])) {
            return $_COOKIE['course'];
        }

        return false;
    }
    private function getWebinarCookie()
    {
        if (isset($_COOKIE['webinar_post_id'])) {
            return $_COOKIE['webinar_post_id'];
        }

        return false;
    }
    public function course_view(Request $request, $course_id, $token)
    {
        $course = Course::find($course_id);
        $request->session()->put('course_token', $token);
        if ($course) {
            if (Auth::check() == true) {
                return redirect()->away($course->cta_link);

            } elseif (Auth::check() == false) {
                Session::put('course_id', $course->id);
                $this->saveCourseCookie($course->id);
                return redirect('/practitioners/login');
            } else {
                Session::put('course_id', $course->id);
                $this->saveCourseCookie($course_id);
                return redirect('/join');
            }
        } else {
            $academy_course_link = config('scaleup.WP_SITE_URL') . 'naturopathy-courses/';
            return redirect()->away($academy_course_link);
        }
    }
    public function webinar_view(Request $request, $post_id, $token)
    {
        $post = Posts::find($post_id);
        $post_type = $post->post_type;
        $post_name = $post->post_name; 
        $webinar_link = config('scaleup.WP_SITE_URL') .  '/{$post_type}/{$post_name}/';
        $request->session()->put('webinar_token', $token);
        $request->session()->put('webinar_redirect', 'true');
        if ($post) {
            if (Auth::check() == true) {           
                return redirect()->away($webinar_link);
            } elseif (Auth::check() == false) {            
                Session::put('webinar_id', $post_id);
                $this->saveWebinarCookie($post_id);
                return redirect('/practitioners/login');
            } else {
                Session::put('webinar_id', $post_id);           
                $this->saveWebinarCookie($post_id);
                return redirect('/join');
            }
        } else {
            //$webinar_link = config('scaleup.WP_SITE_URL') .  '/{$post_type}/{$post_name}/';
            return redirect()->away($webinar_link);
        }
    }

    public function index()
    {
        return view('frontend.practitioners.login');
    }
    /* Practitioner Login Form */
    public function login()
    {
        return view('frontend.practitioners.login');
    }

    /* Practitioner Login Form Submit */
    public function postLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user_data = array(
            'email' => $request->email,
            'password' => $request->password,
        );

        if (Auth::attempt($user_data)) {
            $user_id = Auth::user()->id;
            // Retrieve practitioner data
            $practitioner = Practitioners::where('user_id', $user_id)->first();
            if(!empty($practitioner)){
                $current_time = \Carbon\Carbon::now();
                $current_date_time = Practitioners::where('user_id', '=', $user_id)->update(['last_login_at' => $current_time]);    
            
                // Store login details
                $user_login_details = UserLoginDetail::create(['user_id' => $user_id, 'portal_pract_id' => $practitioner->id, 'wp_pract_id' => $practitioner->wp_pract_id, 'logged_in_time' => $current_time ]);
            }
            if ($this->getCourseCookie()) {
                $course_id = $this->getCourseCookie();
                $course = Course::find($course_id);
                if ($course && Session::has('course_token')) {
                    $user_id = Auth::user()->id;
                    $academy_course_link = config('scaleup.WP_SITE_URL') . 'naturopathy-courses/' . $user_id;
                    // $wp_url = config('scaleup.WP_SITE_URL') . 'courses/' . $user_id;

                    return redirect()->away($academy_course_link);
                    // return redirect()->away($course->cta_link);
                }
            } 
            if ($this->getWebinarCookie()) {
                $post_id = $this->getWebinarCookie();
                $post = Posts::find($post_id);
                $post_type = $post->post_type;
                $post_name = $post->post_name; 
               
                $post = Posts::find($post_id);
                if ($post && Session::has('webinar_token')) {
                    $user_id = Auth::user()->id;
                    $webinar_link = config('scaleup.WP_SITE_URL').'login-process/'.$user_id.'/'.$post_id ;                                    
                     return redirect()->away($webinar_link);
                    // return redirect()->away($course->cta_link);
                }
            } 
            
            else {
                return redirect("/practitioners/profile");
            }

        } else {
            session()->put('error', 'Invalild email or password!');
            return redirect("/practitioners/login");
        }
    }

    /* Practitioner Forgot Password Form */
    public function forgotPassword()
    {
        return view('frontend.practitioners.forgot-password');
    }
    /* Practitioner Forgot Password Form Submit */
    public function postForgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $token = Crypt::encryptString($request->email);

        $reset_password = new PasswordReset();
        $reset_password->email = $request->email;
        $reset_password->token = $token;
        $reset_password->save();
        $practitioner_data = Practitioners::where('pract_email', $request->email)->first();
        if (is_null($practitioner_data)) {
            session()->flash('error', 'Not Approved account, Please try again later.');
            return redirect('practitioners/forgot-password');
        } else {

            $practitioner_name = $practitioner_data->pract_name;
            try {
                Mail::send('frontend.practitioners.mail-forgot-password', ['token' => $token, 'practitioner_name' => $practitioner_name], function ($message) use ($request) {
                    $message->to($request->email);
                    $message->subject('Reset Password');
                });

                session()->flash('success', 'Please check your email for reset password');
                return redirect('practitioners/forgot-password');

            } catch (Exception $th) {
                session()->flash('error', 'Unauthorized request! Error Occurred Please Try Again!');
                return redirect('practitioners/forgot-password');
                // return response()->json(['Oops! Something went wrong.']);
            }
        }
    }

    public function showResetPasswordForm($token)
    {
        $email = Crypt::decryptString($token);
        // dd($email);
        $practitioner = Practitioner::where('pract_email', '=', $email)->first();
        $practitioner_name = $practitioner->pract_name;
        $practitioner_name = explode(' ', $practitioner_name);
        $practitioner_name = $practitioner_name[0];
        Practitioner::where('pract_email', '=', $email)->update(['mail_send' => 2]);
        return view('frontend.practitioners.reset-password', ['token' => $token, 'practitioner_name' => $practitioner_name]);
    }
    public function submitResetPasswordForm(Request $request)
    {
        $request->validate([
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required',
        ]);
        try {
            $email = Crypt::decryptString($request->token);
            $updatePassword = PasswordReset::where([
                'email' => $email,
                'token' => $request->token,
            ])->first();
            
            if (!$updatePassword) {
                session()->flash('error', 'Unauthorized token, Link Expired!');
                return back()->withInput()->with('error', 'Link Expired!!');
            }
            $user = User::where('email', $email)->get();
            $practitioner_data = Practitioners::where('pract_email', $email)->first();
            $practitioner_name = $practitioner_data->pract_name;
            $practitioner_email = $practitioner_data->pract_email;
            $practitioner_user_id = $practitioner_data->user_id;
            if ($user->isEmpty()) {            
                if(is_null($practitioner_user_id)) {
                    $email_verified_at = \Carbon\Carbon::now();
                    $user = User::create(['name' => $practitioner_name,'email' => $email,'email_verified_at'=>$email_verified_at, 'password' => Hash::make($request->password)]);
                    $user->assignRole(['practitioner']);
                    $assign_user_to_practitioner = Practitioners::where('pract_email', $email)->update(['user_id' => $user->id]);
                    PasswordReset::where(['email' => $email])->delete();
                    Practitioner::where('pract_email', $email)->update(['mail_send' => 1]);
                    return redirect('/practitioners/login')->with('success', 'Your password has been changed. Please login now with your email address and recently set password');
                }else{
                    $update_email = User::where('id', '=', $practitioner_user_id)->update(['name' => $practitioner_name, 'email' => $email, 'password' => Hash::make($request->password) ]);
                    PasswordReset::where(['email' => $email])->delete();
                    Practitioner::where('pract_email', $email)->update(['mail_send' => 1]);
                    return redirect('/practitioners/login')->with('success', 'Your password has been changed. Please login now with your email address and recently set password');
                }              
               
            } else {         
                $updated_password = User::where('email', $email)->update(['name' => $practitioner_name,'password' => Hash::make($request->password)]);
                PasswordReset::where(['email' => $email])->delete();
                Practitioner::where('pract_email', $email)->update(['mail_send' => 1]);
                return redirect('/practitioners/login')->with('success', 'Your password has been changed. Please login now with your email address and recently set password');
            }
        } catch (DecryptException $e) {
            //
            session()->flash('error', 'Unauthorized request, Error Occurred Please Try Again!');
            Log::error($e->getMessage());
        }
    }
}