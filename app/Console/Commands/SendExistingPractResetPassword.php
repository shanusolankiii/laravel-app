<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Wp\Practitioner;
use Illuminate\Support\Facades\Crypt;
use App\Models\PasswordReset;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendExistingPractResetPassword extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:send:pract:create-password';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send Email to existing Practitioners from WP HB';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info("Sending Existing Practitioner Reset Password Started!");
        $not_send_email = array('info@thesageclinic.com','Info@rootofhealth.ca','hello@epionehealth.ca');
        $exsiting_practitioner_from_wp = Practitioner::select('pract_name', 'pract_email')->where('mail_send', '=', 0)->first();

        
        if ($exsiting_practitioner_from_wp) {
            $email = $exsiting_practitioner_from_wp['pract_email'];
            $token = Crypt::encryptString($exsiting_practitioner_from_wp['pract_email']);
            $practitioner_name = $exsiting_practitioner_from_wp['pract_name'];
            $reset_password = new PasswordReset();
            $reset_password->email = $exsiting_practitioner_from_wp['pract_email'];
            $reset_password->token = $token;
            $reset_password->save();
            $first_name = explode(' ',$practitioner_name);
            $first_name = $first_name[0];

            /*for testing purpose*/
            

            try {
                if(in_array($exsiting_practitioner_from_wp['pract_email'], $not_send_email)){
                    Practitioner::where('pract_email', $email)->update(['mail_send' => 3]);
                }
                else{
                    // $exsiting_practitioner_from_wp['pract_email'] = config('scaleup.ADMIN_EMAIL');
                    Mail::send('emails.create-new-password', ['token' => $token, 'practitioner_name' => $first_name], function ($message) use ($exsiting_practitioner_from_wp) {
                        $message->to($exsiting_practitioner_from_wp['pract_email']);
                        $message->subject('CE Courses and Profile Update');
                    });
                    $this->info('Email Sent to existing practitioner!');
                    Log::info("Sending Existing Practitioner Reset Password Ended!");
                    Practitioner::where('pract_email', $email)->update(['mail_send' => 1]);
                    exit;
                }
                
            } catch (Exception $th) {
                Log::info("Sending Existing Practitioner Reset Password Ended With Errors!");
                $this->error('Something went wrong!');
            }
        }
        
    }
}
