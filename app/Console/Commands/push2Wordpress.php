<?php

namespace App\Console\Commands;

use App\Models\Practitioner;
use App\Models\PractitionerSubmission;
use App\Models\Wp\Practitioner as WpPractitioner;
use App\Models\Wp\PractitionerSeo;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class push2Wordpress extends Command
{
    /**
     * The name and signature of the console command.
     *hb:push:wordpress:pract --session_id=0ef1b4ca4f97f264e59ae735c172949a
     * @var string
     */
    // protected $signature = 'hb:push:wordpress:pract --session_id=0ef1b4ca4f97f264e59ae735c172949a';
    protected $signature = 'hb:push:wordpress:pract {--session_id=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Push specific Practitioner data to WP setup db';

    /**
     * Execute the console command.
     *
     * @return int
     */

    public function handle()
    {
        Log::info("Practitioners WordPress Push Is started!");
        $session_id = $this->option('session_id');
        $this->line("Started Push2Wp " . now()->toDayDateTimeString());
        // dd($session_id);
        if ($session_id) {
            $get_practitioner = Practitioner::where('session_id', '=', $session_id)
                ->where('is_completed', '=', 1)
                ->where('is_approved', '=', 1)
                ->where('has_wordpress', '=', 0)->get();
            $practitioner_master = $get_practitioner->first();
            $is_virtual = $practitioner_master->is_virtual;
            if (!$get_practitioner->isEmpty()) {
                $build_data = $this->preparePractionerRecord($session_id);
                $practitioner_slug = Str::slug('Dr' . ' ' . $build_data['name'], '-');
                $practitionerSeoDataFirst = PractitionerSeo::where('seo_pract_slug', '=', $practitioner_slug)->first();

                if (is_null($practitionerSeoDataFirst)) {
                    $data['cname'] = null;
                    $wp_practitoner_id = $this->pushToWpPractitioner($build_data, $session_id);
                    if ($wp_practitoner_id) {
                        $data = array("has_wordpress" => 1, "wp_practitioner_id" => $wp_practitoner_id);
                        $updated = Practitioner::where('session_id', '=', $session_id)
                            ->update($data);
                        Log::info("WP push Done!!", $data);
                        Log::info("Practitioners WordPress Push Is Ended If");
                        $this->line("Started Push2Wp Created In If " . now()->toDayDateTimeString());
                        return true;
                    } else {
                        $data = array("has_wordpress" => 1);
                        $updated = Practitioner::where('session_id', '=', $session_id)
                            ->update($data);
                        Log::info("WP push Done!!", $data);
                        Log::info("Practitioners WordPress Push Is Ended In Else!");
                        $this->line("Started Push2Wp Created In Else " . now()->toDayDateTimeString());
                        return true;
                    }

                } else {
                    // dd("Already Exists Practitioner with this name");
                    $this->line("Already Exists Practitioner with this name" . now()->toDayDateTimeString());
                    return false;
                }

            } else {
                return false;
            }
        }

    }

    public function preparePractionerRecord($session_id)
    {
        Log::info("Pushing Data in WordPress");
        $practitioner_answers = PractitionerSubmission::where('session_id', '=', $session_id)->get();
        $build_data = [
            'is_nd' => $practitioner_answers->where('question_id', 'q_naturopath')->value('answer') ?? null,
            'name' => $practitioner_answers->where('question_id', 'q_name')->value('answer') ?? null,
            'area_of_focus' => $practitioner_answers->where('question_id', 'q_area')->value('answer') ?? null,
            'email' => $practitioner_answers->where('question_id', 'q_email')->value('answer') ?? null,
            'discovery_session' => $practitioner_answers->where('question_id', 'q_session')->value('answer') ?? 'Yes',
            'license' => $practitioner_answers->where('question_id', 'q_year')->value('answer') ?? null,
            'upload_profile' => $practitioner_answers->where('question_id', 'q_upload')->value('answer') ?? 'https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/default_pract_image.png',
            'q_vcname' => "Private Virtual Practice of " . $practitioner_answers->where('question_id', 'q_name')->value('answer'),
            'q_vcemail' => $practitioner_answers->where('question_id', 'q_email')->value('answer') ?? null,
            'q_vcplace_id' => $practitioner_answers->where('question_id', 'q_vcplace_id')->value('answer') ?? null,
            'q_vclatitude' => $practitioner_answers->where('question_id', 'q_vclatitude')->value('answer') ?? null,
            'q_vclongitude' => $practitioner_answers->where('question_id', 'q_vclongitude')->value('answer') ?? null,
            'q_vc_postal' => $practitioner_answers->where('question_id', 'q_vc_postal')->value('answer') ?? null,
        ];

        return $build_data;
    }

    public function pushToWpPractitioner($data = null, $session_id = null)
    {
        if ($data['q_vcname'] != null && $data['q_vc_postal'] != null) {
            $data['is_virtually_available'] = 1;
        } else {
            $data['is_virtually_available'] = 0;
        }
        try {
            $pract_v_clinic_working_hours = "[{\"key\":\"0\",\"value\":{\"name\":\"Monday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"1\",\"value\":{\"name\":\"Tuesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"2\",\"value\":{\"name\":\"Wednesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"3\",\"value\":{\"name\":\"Thursday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"4\",\"value\":{\"name\":\"Friday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"5\",\"value\":{\"name\":\"Saturday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"6\",\"value\":{\"name\":\"Sunday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}}]";

            $wp_practitioner_data = [
                'pract_is_nd' => $data['is_nd'],
                'pract_title' => 'Dr.',
                'pract_name' => $data['name'],
                'pract_email' => $data['email'],
                'pract_image' => $data['upload_profile'],
                'pract_conditions_supported' => $data['area_of_focus'],
                'pract_highlights' => $data['license'],
                'pract_free_call' => $data['discovery_session'],
                'pract_degrees' => 'ND',
                'pract_type' => 'Naturopathic Doctor',
                'pract_languages_spoken' => 'English',
                'pract_visibility' => 1,
                'sync_to_portal' => 1,
                'mail_send' => 1,
                'pract_v_clinic_name' => $data['q_vcname'],
                'pract_v_clinic_email' => $data['q_vcemail'],
                'pract_v_clinic_address' => $data['q_vc_postal'],
                'pract_v_clinic_place_id' => $data['q_vcplace_id'],
                'pract_v_clinic_latitude' => $data['q_vclatitude'],
                'pract_v_clinic_longitude' => $data['q_vclongitude'],
                'is_virtually_available' => $data['is_virtually_available'],
                'pract_v_clinic_working_hours' => $pract_v_clinic_working_hours,
            ];

            $check_pract_name = WpPractitioner::where('pract_name', '=', $data['name'])->first();
            $check_pract_email = WpPractitioner::where('pract_email', '=', $data['email'])->first();
            $upserted_practitioner = '';
            $updated_practitioner = '';

            if ($check_pract_name && !$check_pract_email) {
                $wp_practitioner_data['pract_v_clinic_working_hours'] = json_encode($pract_v_clinic_working_hours);
                $updated_practitioner = WpPractitioner::where('pract_name', '=', $data['name'])->update($wp_practitioner_data);
                $slug = Str::slug($check_pract_name->pract_title . ' ' . $data['name'], '-');
                $slug .= '-nd';
                $seo_pract_name = $data['name'];
                $practitioner_seo_update = PractitionerSeo::where('seo_pract_ID', '=', $check_pract_name->pract_id)->update(['seo_pract_name' => $seo_pract_name,
                    'seo_pract_slug' => $slug,
                    'seo_pract_meta_tag' => $seo_pract_name,
                    'seo_pract_meta_description' => $seo_pract_name,
                    'seo_pract_canonical_url' => $slug]);
            } elseif ($check_pract_email && !$check_pract_name) {
                $wp_practitioner_data['pract_v_clinic_working_hours'] = json_encode($pract_v_clinic_working_hours);
                $updated_practitioner = WpPractitioner::where('pract_email', '=', $data['email'])->update($wp_practitioner_data);
                $slug = Str::slug($check_pract_email->pract_title . ' ' . $data['name'], '-');
                $slug .= '-nd';
                $seo_pract_name = $data['name'];
                $practitioner_seo_update = PractitionerSeo::where('seo_pract_ID', '=', $check_pract_email->pract_id)->update(['seo_pract_name' => $seo_pract_name,
                    'seo_pract_slug' => $slug,
                    'seo_pract_meta_tag' => $seo_pract_name,
                    'seo_pract_meta_description' => $seo_pract_name,
                    'seo_pract_canonical_url' => $slug]);
            } else {
                $check_data = ['pract_name' => $data['name'], 'pract_email' => $data['email']];
                $upserted_practitioner = WpPractitioner::updateOrCreate($check_data, $wp_practitioner_data);

                if ($upserted_practitioner) {
                    $slug = Str::slug($upserted_practitioner->pract_title . ' ' . $upserted_practitioner->pract_name, '-');
                    $slug .= '-nd';
                    $wp_practitioner_seo_data = [
                        'seo_pract_ID' => $upserted_practitioner->pract_id,
                        'seo_pract_name' => $upserted_practitioner->pract_name,
                        'seo_pract_slug' => $slug,
                        'seo_pract_meta_tag' => $upserted_practitioner['pract_name'],
                        'seo_pract_meta_description' => $upserted_practitioner['pract_name'],
                        'seo_pract_canonical_url' => $slug . '/',
                    ];
                    $check_data = ['seo_pract_name' => $data['name']];

                    $practitioner_seo_created_id = PractitionerSeo::updateOrCreate($check_data, $wp_practitioner_seo_data);
                    return $upserted_practitioner->pract_id;
                } else {
                    Log::error("Failed:" . $session_id);
                }
            }

        } catch (\Throwable $th) {
            //throw $th;
            Log::error("Practitioner Didn't Pushed to WP:" . $session_id);
            Log::error($th->getMessage());
        }
    }
}
