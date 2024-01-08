<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'hb:sitemap:condition:service:city';
    protected $description = 'Generate sitemap for conditions, services, cities, etc.';

    public function handle()
    {

        $condition_sitemap = Sitemap::create();
        $service_sitemap = Sitemap::create();
        $city_sitemap = Sitemap::create();
        $popular_cities = Sitemap::create();
        $condition_service_sitemap = Sitemap::create();
        $city_condition_sitemap = Sitemap::create();
        $city_service_sitemap = Sitemap::create();
        $city_condition_service_sitemap = Sitemap::create();
        $condition_listing_sitemap = Sitemap::create();
        $service_listing_sitemap = Sitemap::create();
        $condition_service_listing_sitemap = Sitemap::create();
        $city_condition_listing_sitemap = Sitemap::create();
        $city_and_service_listing_sitemap = Sitemap::create();
        $city_condition_service_listing_sitemap = Sitemap::create();        
        $popular_cities_listing_sitemap = Sitemap::create();        
        $city_listing_sitemap = Sitemap::create();        

        $wp_site_url = config('scaleup.WP_SITE_URL');
        // $wp_site_url = str_replace('https://','https://www.', $wp_site_url);

        $conditions_data = DB::connection('wp')->table('hbs_conditions')->get();
        $services_data = DB::connection('wp')->table('hbs_service_table')->get();
        $unique_cities = DB::connection('wp')->table('hbs_clinics_table')
            ->select('clinic_city')
            ->distinct()
            ->get();

        $special_services = [
            "Bioidentical Hormone Replacement Therapy (BHRT)",
            "IV Therapy",
            "Desiccated Thyroid",
            "Vitamin Injections",
        ];
        $city_data = DB::connection('wp')->table('hbs_popular_cities')->get();
        $our_cities = array();
        foreach($city_data as $pop_city ){   
            $our_cities[$pop_city->city_slug]= array('slug'=>$pop_city->city_slug,'city_name'=> $pop_city->city_name, 'city_lat'=>$pop_city->city_lat ,'city_long' =>$pop_city->city_long);
        }       

        Log::info("Custom Sitemap creation Started!");
        try {
            // For Condition
            foreach ($conditions_data as $condition) {

                $url = "{$wp_site_url}naturopaths/condition/{$condition->conditions_desc}/";
                $condition_sitemap->add(Url::create($url));
            }
            $created_sitemap = $condition_sitemap->writeToDisk('public', 'sitemap/condition-sitemap.xml');

            // For Condition List
            foreach ($conditions_data as $conditions) {

                $url = "{$wp_site_url}naturopaths/condition/{$conditions->conditions_desc}/list/";
                $condition_listing_sitemap->add(Url::create($url));
            }
            $created_sitemap = $condition_listing_sitemap->writeToDisk('public', 'sitemap/condition_listing_sitemap.xml');

            // For Service
            foreach ($special_services as $service) {
                if ($service == 'Bioidentical Hormone Replacement Therapy (BHRT)') {
                    $service = 'bhrt';
                }
                $service_url = strtolower($service);
                $service_urls = str_replace(' ', '-', $service_url);
                $url = "{$wp_site_url}naturopaths/service/{$service_urls}/";
                $service_sitemap->add(Url::create($url));
            }
            $created_sitemap = $service_sitemap->writeToDisk('public', 'sitemap/service-sitemap.xml');

             // For Service List
             foreach ($special_services as $service) {
                if ($service == 'Bioidentical Hormone Replacement Therapy (BHRT)') {
                    $service = 'bhrt';
                }
                $service_url = strtolower($service);
                $service_urls = str_replace(' ', '-', $service_url);
                $url = "{$wp_site_url}naturopaths/service/{$service_urls}/list/";
                $service_listing_sitemap->add(Url::create($url));
            }
            $created_sitemap = $service_listing_sitemap->writeToDisk('public', 'sitemap/service_listing_sitemap.xml');

            // For Clinic City
            foreach ($unique_cities as $city) {
                $city_parts = explode(',', $city->clinic_city);
                $city_name = Str::slug($city_parts[0], '-');
                $url = "{$wp_site_url}naturopaths/doctors/{$city_name}/";
                $city_sitemap->add(Url::create($url));
            }
            // $created_sitemap = $city_sitemap->writeToDisk('public', 'sitemap/city-sitemap.xml');

            // For Clinic City List
            foreach ($unique_cities as $city) {
                $city_parts = explode(',', $city->clinic_city);
                $city_name = Str::slug($city_parts[0], '-');
                $url = "{$wp_site_url}naturopaths/doctors/{$city_name}/list/";
                $city_listing_sitemap->add(Url::create($url));
            }
            // $created_sitemap = $city_listing_sitemap->writeToDisk('public', 'sitemap/city_listing_sitemap.xml');

            //For Popular City
            foreach ($our_cities as $slug => $cityData) {
                $url = $wp_site_url . 'naturopaths/doctors/' . $slug.'/';
                $popular_cities->add(Url::create($url));
            }
            $created_sitemap = $popular_cities->writeToDisk('public', 'sitemap/popular_cities_sitemap.xml');

            //For Popular City List
            foreach ($our_cities as $slug => $cityData) {
                $url = $wp_site_url . 'naturopaths/doctors/' . $slug . '/list/';
                $popular_cities_listing_sitemap->add(Url::create($url));
            }
            $created_sitemap = $popular_cities_listing_sitemap->writeToDisk('public', 'sitemap/popular_cities_listing_sitemap.xml');

            // For Conditions and Services
            foreach ($conditions_data as $condition) {
                foreach ($special_services as $service_name) {
                    $temp_service_name = $service_name;
                    if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                        $temp_service_name = 'bhrt';
                    }
                    $condition_slug = Str::slug($condition->conditions_desc, '-');
                    $service_slug = Str::slug($temp_service_name, '-');
                    $url = "{$wp_site_url}naturopaths/{$condition_slug}/{$service_slug}/";
                    $condition_service_sitemap->add(Url::create($url));
                }
            }
            $created_sitemap = $condition_service_sitemap->writeToDisk('public', 'sitemap/condition_service_sitemap.xml');

            // For Conditions and Services Lists
            foreach ($conditions_data as $condition) {
                foreach ($special_services as $service_name) {
                    $temp_service_name = $service_name;
                    if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                        $temp_service_name = 'bhrt';
                    }
                    $condition_slug = Str::slug($condition->conditions_desc, '-');
                    $service_slug = Str::slug($temp_service_name, '-');
                    $url = "{$wp_site_url}naturopaths/{$condition_slug}/{$service_slug}/list/";
                    $condition_service_listing_sitemap->add(Url::create($url));
                }
            }
            $created_sitemap = $condition_service_listing_sitemap->writeToDisk('public', 'sitemap/condition_service_listing_sitemap.xml');

            // For City and Conditions
            foreach ($our_cities as $city => $city_data) {
                foreach ($conditions_data as $condition) {
                    $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                    $condition_slug = Str::slug($condition->conditions_desc, '-');
                    $url = "{$wp_site_url}naturopaths/doctors/{$city}/for/{$condition_slug}/";
                    $city_condition_sitemap->add(Url::create($url));
                }
            }
            $created_sitemap = $city_condition_sitemap->writeToDisk('public', 'sitemap/city_condition_sitemap.xml');

             // For City and Conditions List
             foreach ($our_cities as $city => $city_data) {
                foreach ($conditions_data as $condition) {
                    $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                    $condition_slug = Str::slug($condition->conditions_desc, '-');
                    $url = "{$wp_site_url}naturopaths/doctors/{$city}/for/{$condition_slug}/list/";
                    $city_condition_listing_sitemap->add(Url::create($url));
                }
            }
            $created_sitemap = $city_condition_listing_sitemap->writeToDisk('public', 'sitemap/city_condition_listing_sitemap.xml');

            // For City and Services
            foreach ($our_cities as $city => $city_data) {
                foreach ($special_services as $service_name) {
                    $temp_service_name = $service_name;
                    if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                        $temp_service_name = 'bhrt';
                    }
                    $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                    $service_slug = Str::slug($temp_service_name, '-');
                    $url = "{$wp_site_url}naturopaths/doctors/{$city}/with/{$service_slug}/";
                    $city_service_sitemap->add(Url::create($url));
                }
            }
            $created_sitemap = $city_service_sitemap->writeToDisk('public', 'sitemap/city_service_sitemap.xml');

            // For City and Services List
            foreach ($our_cities as $city => $city_data) {
                foreach ($special_services as $service_name) {
                    $temp_service_name = $service_name;
                    if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                        $temp_service_name = 'bhrt';
                    }
                    $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                    $service_slug = Str::slug($temp_service_name, '-');
                    $url = "{$wp_site_url}naturopaths/doctors/{$city}/with/{$service_slug}/list/";
                    $city_and_service_listing_sitemap->add(Url::create($url));
                }
            }
            $created_sitemap = $city_and_service_listing_sitemap->writeToDisk('public', 'sitemap/city_and_service_listing_sitemap.xml');

            // For City, Conditions and Services
            foreach ($our_cities as $city => $city_data) {
                foreach ($conditions_data as $condition) {
                    foreach ($special_services as $service_name) {
                        $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                        $condition_slug = Str::slug($condition->conditions_desc, '-');

                        $temp_service_name = $service_name;
                        if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                            $temp_service_name = 'bhrt';
                        }

                        $service_slug = Str::slug($temp_service_name, '-');
                        $url = "{$wp_site_url}naturopaths/doctors/{$city}/for/{$condition_slug}/with/{$service_slug}/";
                        $city_condition_service_sitemap->add(Url::create($url));
                    }
                }
            }
            $created_sitemap = $city_condition_service_sitemap->writeToDisk('public', 'sitemap/city_condition_service_sitemap.xml');

            // For City, Conditions and Services List
            foreach ($our_cities as $city => $city_data) {
                foreach ($conditions_data as $condition) {
                    foreach ($special_services as $service_name) {
                        $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                        $condition_slug = Str::slug($condition->conditions_desc, '-');

                        $temp_service_name = $service_name;
                        if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                            $temp_service_name = 'bhrt';
                        }

                        $service_slug = Str::slug($temp_service_name, '-');
                        $list_url = "{$wp_site_url}naturopaths/doctors/{$city}/for/{$condition_slug}/with/{$service_slug}/list/";
                        $city_condition_service_listing_sitemap->add(Url::create($list_url));
                    }
                }
            }
            $created_sitemap = $city_condition_service_listing_sitemap->writeToDisk('public', 'sitemap/city_condition_service_listing_sitemap.xml');

            if ($created_sitemap) {
                $this->info('Custom Sitemap  created successfully!');
                Log::info("Custom Sitemap create successfully Ended!");
            } else {
                Log::error("Failed to create Custom Sitemap!");
            }
        } catch (\Throwable $th) {
            //throw $th;
            $this->error('Something went wrong!');
            Log::error("Something went wrong!");
            dd($th);
        }

    }
}