<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\Wp\PractitionerSeo;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\PractitionerSubmission;
use App\Models\SeoUpdates;
use Google;
use Google_Service_Webmasters;

use Illuminate\Http\Request;



class PractitionerController extends Controller
{
    public function deletePractitionerRecord($session_id)
    {
        PractitionerSubmission::where('session_id', $session_id)->delete();
        return redirect()->back();
    }

    public function editPractitionerRecord($ans)
    {
        PractitionerSubmission::where('answer', $ans)->update(['answer' => $ans]);
        return back();
    }

    public function urlListing()
    {    DB::enableQueryLog(); // Enable query log
        $wp_site_url = config('scaleup.WP_SITE_URL');
        $wp_site_url_sitemap = $wp_site_url.'sitemap.xml';
        // To get the links from sitemap.xml links
        $sitemapContent = file_get_contents( $wp_site_url_sitemap);
        $sitemap = simplexml_load_string($sitemapContent);
        $links = [];
        foreach ($sitemap->sitemap as $sitemapEntry) {
            $links[] = (string)$sitemapEntry->loc;
        }
        $conditions_data = DB::connection('wp')->table('hbs_conditions')->get();

        $condition_data = array();
        $condition_data_list = array();
        foreach ($conditions_data as $condition) {

            $meta_details = SeoUpdates::where('slug','=',$condition->conditions_desc)->get();
            $condition_url_new = $wp_site_url.'naturopaths/condition/'.$condition->conditions_desc.'/' ;
            $condition_url = $wp_site_url.'practitioners/condition/'.$condition->conditions_desc.'/' ;
            foreach ($meta_details as $meta_detail) {
                $condition_data[] = [
                    'conditions_id'  =>$condition->conditions_id,
                    'condition_name' => $condition->conditions_name,
                    'condition_url' => $condition_url,
                    'condition_canonical_url' => $meta_detail->canonical_url,
                    'condition_meta_title' => $meta_detail->meta_title,
                    'condition_meta_description' =>$meta_detail->meta_description,
                    'condition_url_new'=>$condition_url_new
                ];
            }
        }
        foreach ($conditions_data as $condition) {
            $meta_details = SeoUpdates::where('slug','=','condition/'.$condition->conditions_desc.'/list')->get();
            $condition_url_new = $wp_site_url.'naturopaths/condition/'.$condition->conditions_desc.'/list/' ;
            $condition_url = $wp_site_url.'practitioners/condition/'.$condition->conditions_desc.'/list/' ;
            foreach ($meta_details as $meta_detail) {
                $condition_data_list[] = [
                    'conditions_id'  =>$condition->conditions_id,
                    'condition_name' => $condition->conditions_name,
                    'condition_url' => $condition_url,
                    'condition_canonical_url' => $meta_detail->canonical_url,
                    'condition_meta_title' => $meta_detail->meta_title,
                    'condition_meta_description' =>$meta_detail->meta_description,
                    'condition_url_new'=>$condition_url_new
                ];
            }
        }

        $static_pages = DB::connection('wp')->table('hbs_posts')->where('post_type','LIKE','page')->get();
        $webinars = DB::connection('wp')->table('hbs_posts')->where('post_type','LIKE','naturopathic-webinar')->get();
        $services_data = DB::connection('wp')->table('hbs_service_table')->get();
        $service_data = array();
        $service_data_list = array();

        foreach ($services_data as $service) {
            $special_services = [
                "Bioidentical Hormone Replacement Therapy (BHRT)",
                "IV Therapy",
                "Desiccated Thyroid",
                "Vitamin Injections",
                ];

            $slug_for_service = str_replace(' ', '-',strtolower($service->service_description));
            if ($slug_for_service == 'bioidentical-hormone-replacement-therapy') {
                $slug_for_service = 'bhrt';
            }
            if (in_array($service->service_name, $special_services)) {
                $meta_details = SeoUpdates::where('slug','=',$slug_for_service)->get();
                $service_url_new = $wp_site_url.'naturopaths/service/'.$slug_for_service.'/' ;
                $service_url = $wp_site_url.'practitioners/service/'.$slug_for_service.'/' ;
                foreach ($meta_details as $meta_detail) {
                    $service_data[] = [
                        'services_id'  =>$service->service_ID,
                        'service_name' => $service->service_name,
                        'service_url' => $service_url,
                        'service_canonical_url' => $meta_detail->canonical_url,
                        'service_meta_title' => $meta_detail->meta_title,
                        'service_meta_description' =>$meta_detail->meta_description,
                        'service_url_new'=>$service_url_new
                    ];
                }
            }
        }
        foreach ($services_data as $service) {
            $special_services = [
                "Bioidentical Hormone Replacement Therapy (BHRT)",
                "IV Therapy",
                "Desiccated Thyroid",
                "Vitamin Injections",
                ];

            $slug_for_service = 'service/'.str_replace(' ', '-',strtolower($service->service_description)).'/list';
            if ($slug_for_service == 'service/bioidentical-hormone-replacement-therapy/list') {
                $slug_for_service = 'service/bhrt/list';
            }
            if (in_array($service->service_name, $special_services)) {
                $meta_details = SeoUpdates::where('slug','=',$slug_for_service)->get();

                $service_url_new = $wp_site_url.'naturopaths/'.$slug_for_service.'/' ;
                $service_url = $wp_site_url.'practitioners/'.$slug_for_service.'/' ;
                foreach ($meta_details as $meta_detail) {
                    $service_data_list[] = [
                        'services_id'  =>$service->service_ID,
                        'service_name' => $service->service_name,
                        'service_url' => $service_url,
                        'service_canonical_url' => $meta_detail->canonical_url,
                        'service_meta_title' => $meta_detail->meta_title,
                        'service_meta_description' =>$meta_detail->meta_description,
                        'service_url_new'=>$service_url_new
                    ];
                }
            }
        }
        $city_data = DB::connection('wp')->table('hbs_popular_cities')->get();
        $our_cities = array();
        $our_cities_data = array();
        $practitioner_seo_data = PractitionerSeo::get();
        foreach($city_data as $pop_city ){
            $our_cities[$pop_city->city_slug]= array('slug'=>$pop_city->city_slug,'city_name'=> $pop_city->city_name, 'city_lat'=>$pop_city->city_lat ,'city_long' =>$pop_city->city_long);
            $city = explode(',',$pop_city->city_name)[0];
            $city  = strtolower($city );
            $slug_for_city = "doctors/".$pop_city->city_slug;
            $meta_details = SeoUpdates::where('slug','=',$slug_for_city)->get();

            $city_url_new = $wp_site_url.'naturopaths/'.$slug_for_city.'/' ;
            $city_url = $wp_site_url.'practitioners/in/'.$city.'/' ;
            foreach ($meta_details as $meta_detail) {
                $our_cities_data[] = [
                    'city_id'  =>$pop_city->id,
                    'city_name' => $pop_city->city_name,
                    'city_url' => $city_url,
                    'city_canonical_url' => $meta_detail->canonical_url,
                    'city_meta_title' => $meta_detail->meta_title,
                    'city_meta_description' =>$meta_detail->meta_description,
                    'city_url_new'=>$city_url_new
                ];
            }
        }
        $our_cities_list_data = array();
        foreach($city_data as $pop_city ){
            $our_cities[$pop_city->city_slug]= array('slug'=>$pop_city->city_slug,'city_name'=> $pop_city->city_name, 'city_lat'=>$pop_city->city_lat ,'city_long' =>$pop_city->city_long);
            $city = explode(',',$pop_city->city_name)[0];
            $city  = strtolower($city ).'/list';
            $slug_for_city = "doctors/".$pop_city->city_slug."/list";

            $meta_details = SeoUpdates::where('slug','=',$slug_for_city)->get();

            $city_url_new = $wp_site_url.'naturopaths/'.$slug_for_city.'/' ;
            $city_url = $wp_site_url.'practitioners/in/'.$city.'/' ;
            foreach ($meta_details as $meta_detail) {
                $our_cities_list_data[] = [
                    'city_id'  =>$pop_city->id,
                    'city_name' => $pop_city->city_name,
                    'city_url' => $city_url,
                    'city_canonical_url' => $meta_detail->canonical_url,
                    'city_meta_title' => $meta_detail->meta_title,
                    'city_meta_description' =>$meta_detail->meta_description,
                    'city_url_new'=>$city_url_new
                ];
            }
        }
        // For Clinic City
        $unique_cities = DB::connection('wp')->table('hbs_clinics_table')
            ->select('clinic_city')
            ->distinct()
            ->get();

        $clinics_data = [];
        $webinars_data = [];
        $static_pages_data =[];

        foreach ($static_pages as $static_page) {
            $post_title = $static_page->post_title;
            $post_url = $static_page->post_name;
            $static_page_url = $wp_site_url.$post_url;
            // $webinar_url_new = $wp_site_url.'naturopathic-webinar/'.$post_url;


            $static_pages_data[] = [
                'ID'=>$static_page->ID,
                'post_title' => $post_title,
                'post_url' => $post_url,
                'static_page_url'=>$static_page_url
            ];
        }

        foreach ($webinars as $webinar) {
            $post_title = $webinar->post_title;
            $post_url = $webinar->post_name;
            $webinar_url = $wp_site_url.'webinars/'.$post_url;
            $webinar_url_new = $wp_site_url.'naturopathic-webinar/'.$post_url;


            $webinars_data[] = [
                'ID' => $webinar->ID,
                'post_title' => $post_title,
                'post_url' => $post_url,
                'webinar_url'=>$webinar_url,
                'webinar_url_new'=>$webinar_url_new
            ];
        }
        foreach ($unique_cities as $city) {
            $city_parts = explode(',', $city->clinic_city);
            $city_name = Str::slug($city_parts[0], '-');
            $clinic_url = "{$wp_site_url}practitioners/in/{$city_name}/";
            $clinic_url_new = "{$wp_site_url}naturopaths/doctors/{$city_name}-ontario/";

            $clinics_data[] = [
                'city_name' => $city->clinic_city,
                'clinic_url' => $clinic_url,
                'clinic_url_new'=>$clinic_url_new
            ];
        }
        try {
            $googleClient = new Google\Client();
            // Add here location to the JSON key file that you created and downloaded earlier.
            $googleClient->setAuthConfig(public_path('gc-indexing-59c21fe33bfc.json'));
            $googleClient->setScopes([Google_Service_Webmasters::WEBMASTERS]);
            $service = new Google_Service_Webmasters($googleClient);
            $siteUrl = 'https://portal.healthbuddha.ca/'; // Replace with your website URL
            // Get the site details
            $siteDetails = $service->sites->get($siteUrl);
            $isIndexed = $siteDetails->getIsPartiallyIndexed();
            if ($isIndexed) {
                // echo 'The website is indexed.';
            } else {
            //    echo 'The website is not indexed.';
            }
        } catch (\Exception $e) {
            // echo 'Caught exception: ',  $e->getMessage(), "\n";
        }

        // For Conditions and Services
        $conditions_services_combinations = [];
        $conditions_services_combinations_list = [];
        $special_services = [
            "Bioidentical Hormone Replacement Therapy (BHRT)",
            "IV Therapy",
            "Desiccated Thyroid",
            "Vitamin Injections",
        ];

        foreach ($conditions_data as $condition) {
            foreach ($special_services as $service_name) {
                $temp_service_name = $service_name;
                if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                    $temp_service_name = 'bhrt';
                }
                $condition_slug = Str::slug($condition->conditions_desc, '-');
                $service_slug = Str::slug($temp_service_name, '-');
                $url = "{$wp_site_url}practitioners/{$condition_slug}/{$service_slug}/";
                $url_new = "{$wp_site_url}naturopaths/{$condition_slug}/{$service_slug}/";
                $list_url = "{$wp_site_url}practitioners/{$condition_slug}/{$service_slug}/list/";
                $list_url_new = "{$wp_site_url}naturopaths/{$condition_slug}/{$service_slug}/list/";

                $conditions_services_combinations[] = [
                    'conditions_name' => $condition->conditions_name,
                    'service_name' => $service_name,
                    'url' => $url,
                    'url_new'=>$url_new,

                ];
                $conditions_services_combinations_list [] = [
                    'conditions_name' => $condition->conditions_name,
                    'service_name' => $service_name,
                    'url' => $list_url,
                    'url_new'=> $list_url_new
                ];
            }
        }

        // For City and Conditions
        $city_condition_combinations = [];
        $city_condition_combinations_list = [];

        foreach ($our_cities as $city => $city_data) {
            foreach ($conditions_data as $condition) {
                $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                $slug = $city_data['slug'];
                $condition_slug = Str::slug($condition->conditions_desc, '-');
                $url = "{$wp_site_url}practitioners/in/{$city_name}/for/{$condition_slug}/";
                $url_new = "{$wp_site_url}naturopaths/doctors/{$slug}/for/{$condition_slug}/";
                $list_url = "{$wp_site_url}practitioners/in/{$city_name}/for/{$condition_slug}/list/";
                $list_url_new = "{$wp_site_url}naturopaths/doctors/{$slug}/for/{$condition_slug}/list/";

                $city_condition_combinations[] = [
                    'city_name' => $city_data['city_name'],
                    'conditions_name' => $condition->conditions_name,
                    'url' => $url,
                    'url_new' => $url_new,
                    'url_list' => $list_url,
                    'list_url_new' => $list_url_new,
                ];
                $city_condition_combinations_list = [
                    'city_name' => $city_data['city_name'],
                    'conditions_name' => $condition->conditions_name,
                    'url_list' => $list_url,

                ];
            }
        }

        // For City and Services
        $city_services_combinations = [];

        foreach ($our_cities as $city => $city_data) {
            foreach ($special_services as $service_name) {
                $temp_service_name = $service_name;
                if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                    $temp_service_name = 'bhrt';
                }
                $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                $slug = $city_data['slug'];
                $service_slug = Str::slug($temp_service_name, '-');
                $url = "{$wp_site_url}practitioners/in/{$city_name}/with/{$service_slug}/";
                $url_new = "{$wp_site_url}naturopaths/doctors/{$slug}/with/{$service_slug}/";
                $list_url = "{$wp_site_url}practitioners/in/{$city_name}/with/{$service_slug}/list/";
                $list_url_new = "{$wp_site_url}naturopaths/doctors/{$slug}/with/{$service_slug}/list/";

                $city_services_combinations[] = [
                    'city_name' => $city_data['city_name'],
                    'service_name' => $service_name,
                    'url' => $url,
                    'url_new' => $url_new,
                    'url_list' => $list_url,
                    'list_url_new' => $list_url_new,
                ];
            }
        }

        // For City, Conditions and Services
        $city_condition_services_combinations = [];

        foreach ($our_cities as $city => $city_data) {
            foreach ($conditions_data as $condition) {
                foreach ($special_services as $service_name) {
                    $city_name = Str::slug(explode(',', $city_data['city_name'])[0], '-');
                    $condition_slug = Str::slug($condition->conditions_desc, '-');
                    $slug = $city_data['slug'];
                    $temp_service_name = $service_name;
                    if ($temp_service_name == "Bioidentical Hormone Replacement Therapy (BHRT)") {
                        $temp_service_name = 'bhrt';
                    }

                    $service_slug = Str::slug($temp_service_name, '-');
                    $url = "{$wp_site_url}practitioners/in/{$city_name}/for/{$condition_slug}/with/{$service_slug}/";
                    $url_new = "{$wp_site_url}naturopaths/doctors/{$slug}/for/{$condition_slug}/with/{$service_slug}/";
                    $list_url = "{$wp_site_url}practitioners/in/{$city_name}/for/{$condition_slug}/with/{$service_slug}/list/";
                    $list_url_new = "{$wp_site_url}naturopaths/doctors/{$slug}/for/{$condition_slug}/with/{$service_slug}/list/";

                    $city_condition_services_combinations[] = [
                        'city_name' => $city_data['city_name'],
                        'conditions_name' => $condition->conditions_name,
                        'service_name' => $service_name,
                        'url' => $url,
                        'url_new' => $url_new,
                        'url_list' => $list_url,
                        'list_url_new' => $list_url_new,
                    ];
                }
            }
        }

        // For Practitioners
        $practitioner_data = [];

        foreach ($practitioner_seo_data as $key => $practitioner) {
            $pract_url = $practitioner->seo_pract_canonical_url;
            $url = "{$wp_site_url}practitioners/{$pract_url}";
            $url_new = "{$wp_site_url}naturopaths/{$pract_url}";
            $practitioner_data[] = [
                'pract_id' => $practitioner->seo_pract_ID ,
                'pract_name' => $practitioner->seo_pract_name,
                'pract_meta_title' => $practitioner->seo_pract_meta_tag,
                'pract_meta_desc' => $practitioner->seo_pract_meta_description,
                'pract_url' => $url,
                'url_new' => $url_new,
                'indexing_url' =>"site:healthbuddha.ca {$practitioner->seo_pract_name}"
            ] ;
        }

        return view('url-listing', [
            'condition_data' => $condition_data,
            'condition_data_list'=>$condition_data_list,
            'service_data'=>$service_data,
            'service_data_list'=>$service_data_list,
            'our_cities_data'=>$our_cities_data,
            'our_cities_list_data'=>$our_cities_list_data,
            'conditions_data' => $conditions_data,
            'services_data' => $services_data,
            'our_cities' => $our_cities,
            'clinics_data' => $clinics_data,
            'conditions_services_combinations' => $conditions_services_combinations,
            'city_condition_combinations' => $city_condition_combinations,
            'city_services_combinations' => $city_services_combinations,
            'city_condition_services_combinations' => $city_condition_services_combinations,
            'practitioner_data' => $practitioner_data,
            'condition_and_service_list'=> $conditions_services_combinations_list,
            'city_condition_combinations_list' => $city_condition_combinations_list,
            'links'=> $links,
            'webinars_data'=>$webinars_data,
            'static_pages_data'=>$static_pages_data
        ]);
    }


}
