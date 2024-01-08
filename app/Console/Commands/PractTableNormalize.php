<?php

namespace App\Console\Commands;

use App\Models\Wp\Clinic;
use App\Models\Wp\Practitioner;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PractTableNormalize extends Command
{
    protected $signature = 'hb:pract_table:normalize';
    protected $description = 'Save the Practitioners ID and Clinics ID in pract_clinic Table';

    public function handle()
    {
        $this->info("Truncating hbs_pract_clinic table.".date('Y-m-d H:i:s'));
        $practitioners = Practitioner::all();

        DB::connection('wp')->table('hbs_pract_clinic')->truncate();
        $this->info("Truncating hbs_pract_clinic table.");
        DB::connection('wp')->table('hbs_pract_condition')->truncate();
        $this->info("Truncating hbs_pract_condition table.");
        DB::connection('wp')->table('hbs_pract_service')->truncate();
        $this->info("Truncating hbs_pract_service table.");
        /* ------ For Clinics ------- */
        foreach ($practitioners as $practitioner) {
            $clinic_names = explode(';', trim($practitioner->pract_clinic));
            foreach ($clinic_names as $clinic_info) {
                $clinic_name_city = explode(',', $clinic_info, 2);

                if (count($clinic_name_city) === 2) {
                    $clinic_name = trim($clinic_name_city[0]);
                    $clinic_address = trim($clinic_name_city[1]);
                    $clinics_data = Clinic::where('clinic_name', '=', $clinic_name)
                        ->where('clinic_city', '=', $clinic_address)
                        ->first();

                    if ($clinics_data) {
                        $data = [
                            'created_at' => date('Y-m-d H:i:s'),
                            'updated_at' => date('Y-m-d H:i:s'),
                        ];
                        $where = ['pract_id' => $practitioner->pract_id, 'clinic_id' => $clinics_data->clinic_ID];

                        DB::connection('wp')->enableQueryLog();
                        
                        // DB::connection('wp')->statement('ALTER TABLE hbs_pract_clinic AUTO_INCREMENT = 1');
                        $pract_clinic_id_update = DB::connection('wp')->table('hbs_pract_clinic')->updateOrInsert($where, $data);

                        $queries = DB::connection('wp')->getQueryLog();
                        $lastQuery = end($queries)['query'];

                        Log::info("message: " . $lastQuery);
                    }
                }
            }
        }
        if ($pract_clinic_id_update) {
            $this->info("Data saved to hbs_pract_clinic table.");
        }

        /* ------ For Conditions ------- */
        foreach ($practitioners as $practitioner) {
            $conditions = explode(',', trim($practitioner->pract_conditions_supported));

            foreach ($conditions as $condition_info) {
                $conditions_name = explode(',', $condition_info);

                if (count($conditions_name) >= 1) {
                    $condition_name = trim($conditions_name[0]);
                    $condition_data = DB::connection('wp')->table('hbs_conditions')->where('conditions_name', '=', trim($condition_name))->first();

                    if ($condition_data) {
                        $condition_id = $condition_data->conditions_id;
                        $data = [
                            'created_at' => date('Y-m-d H:i:s'),
                            'updated_at' => date('Y-m-d H:i:s'),
                        ];
                        $where = ['pract_id' => $practitioner->pract_id, 'condition_id' => $condition_id];

                        DB::connection('wp')->enableQueryLog();

                        $pract_conditon_id_update = DB::connection('wp')->table('hbs_pract_condition')->updateOrInsert($where, $data);

                        $queries = DB::connection('wp')->getQueryLog();
                        $lastQuery = end($queries)['query'];

                        Log::info("message: " . $lastQuery);
                    } else {
                        Log::info("No condition data found for conditions_name: " . $condition_data);
                    }
                }
            }
        }
        if ($pract_conditon_id_update) {
            $this->info("Data saved to hbs_pract_conditions table.");
        }

        /* ------ For Services ------- */
        foreach ($practitioners as $practitioner) {
            $pract_services = explode(',', trim($practitioner->pract_services));
            foreach ($pract_services as $condition_info) {
                $pract_services_name = explode(',', $condition_info);

                if (count($pract_services_name) >= 1) {
                    $service_name = trim($pract_services_name[0]);
                    $service_data = DB::connection('wp')->table('hbs_service_table')->where('service_name', '=', trim($service_name))->first();
                    // dd($service_data);

                    if ($service_data) {
                        $condition_id = $service_data->service_ID;
                        $data = [
                            'created_at' => date('Y-m-d H:i:s'),
                            'updated_at' => date('Y-m-d H:i:s'),
                        ];
                        $where = ['pract_id' => $practitioner->pract_id, 'service_id' => $condition_id];

                        DB::connection('wp')->enableQueryLog();

                        $pract_service_id_update = DB::connection('wp')->table('hbs_pract_service')->updateOrInsert($where, $data);

                        $queries = DB::connection('wp')->getQueryLog();
                        $lastQuery = end($queries)['query'];

                        Log::info("message: " . $lastQuery);
                    } else {
                        Log::info("No condition data found for pract_services_name: " . $service_data);
                    }
                }
            }
        }
        if ($pract_service_id_update) {
            $this->info("Data saved to hbs_pract_service table.");
        }
        $this->info("Truncating hbs_pract_clinic table.".date('Y-m-d H:i:s'));
    }
}