<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\UserLogActivities;
use Illuminate\Http\Request;

class LogUserActivities extends Controller
{
    public function __construct()
    {
        //$this->middleware('guest')->except('logout', 'course_view');
    }
    public function index()
    {

    }
    public function log_activity(Request $request)
    {
        $ip_address = $request['ip_address'];

        $country = '';
        $city = '';
        $state = '';

        // $api_key = 'ece6bc8186bac8dfac6ee4393453ffde';
        // $api_url = "http://api.ipstack.com/$ip_address?access_key=$api_key";

        // $response = file_get_contents($api_url);

        // if ($response !== false) {
        //     $data = json_decode($response, true);

        //     $country = $data['country_name'];
        //     $city = $data['city'];
        //     $state = $data['region_name'];
        // }

        try {
            $method = "AES-256-CBC";
            $key = "encryptionKey123";
            $options = 0;
            $iv = '1234567891011121';
            $token = $request['token'];
            $decryptedData = openssl_decrypt($token, $method, $key, $options, $iv);
            $session_id = $request['session_id'];
            $recieved_data  = ($request['session_id'].$request['reference_id'].$request['module_id'].$request['submodule_id'].$request['event_id'].$request['user_id'].$request['ip_address']);
            $reference_id = $request['reference_id'];
            $module_id = $request['module_id'];
            $reference_id_2 = $request['reference_id_2'] ? $request['reference_id_2'] : null;
            $reference_id_3 = $request['reference_id_3'] ? $request['reference_id_3'] : null;
            $reference_id_4 = $request['reference_id_4'] ? $request['reference_id_4'] : null;

            if ($reference_id_2 != null && $reference_id_3 != null && $reference_id_4 != null) {
                $check_session_id = UserLogActivities::where('session_id', $session_id)
                    ->where('reference_id', $reference_id)
                    ->where('reference_id_2', $reference_id_2)
                    ->where('reference_id_3', $reference_id_3)
                    ->where('reference_id_4', $reference_id_4)
                    ->where('module_id', $module_id)
                    ->first();
            } elseif ($reference_id_2 != null && $reference_id_3 != null) {
                $check_session_id = UserLogActivities::where('session_id', $session_id)
                    ->where('reference_id', $reference_id)
                    ->where('reference_id_2', $reference_id_2)
                    ->where('reference_id_3', $reference_id_3)
                    ->where('module_id', $module_id)
                    ->first();
            } elseif ($reference_id_2 != null) {
                $check_session_id = UserLogActivities::where('session_id', $session_id)
                    ->where('reference_id', $reference_id)
                    ->where('reference_id_2', $reference_id_2)
                    ->where('module_id', $module_id)
                    ->first();
            } else {
                $check_session_id = UserLogActivities::where('session_id', $session_id)->where('reference_id', $reference_id)->where('module_id', $module_id)->first();
            }

            if (!$check_session_id) {
                $store_ajax_data = new UserLogActivities();
                $store_ajax_data->ip_address = $request['ip_address'];
                $store_ajax_data->session_id = $request['session_id'];
                $store_ajax_data->reference_id = $reference_id;
                $store_ajax_data->reference_id_2 = isset($request['reference_id_2']) ? $request['reference_id_2'] : null;
                $store_ajax_data->reference_id_3 = isset($request['reference_id_3']) ? $request['reference_id_3'] : null;
                $store_ajax_data->reference_id_4 = isset($request['reference_id_4']) ? $request['reference_id_4'] : null;
                $store_ajax_data->module_id = $request['module_id'];
                $store_ajax_data->submodule_id = $request['submodule_id'];
                $store_ajax_data->event_id = $request['event_id'];
                $store_ajax_data->user_id = $request['user_id'];
                $store_ajax_data->country_id = $country;
                $store_ajax_data->state_id = $state;
                $store_ajax_data->city_id = $city;
                \DB::connection()->enableQueryLog();
                $queries = \DB::getQueryLog();
                $store_ajax_data->save();
                return response()->json(['message' => 'Data stored successfully']);
            } else {
                return response()->json(['message' => 'Data with the same session_id already exists']);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Something went wrong!']);

        }

    }
}
