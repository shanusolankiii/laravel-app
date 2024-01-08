<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Wp\ClinicsSeo;
use App\Models\Wp\Clinic;
use Carbon\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;

class sitemapGenerateClinic extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:sitemap:clinic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Sitemap of Clinic on HB WP';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            Log::info("Clinic Sitemap creation Started!" );
            $wp_site_url = config('scaleup.WP_SITE_URL');
            // $wp_site_url = str_replace('https://','https://www.', $wp_site_url);             
            $sitemap  =  Sitemap::create();    
            ClinicsSeo::all()->each(function (ClinicsSeo $clinicData) use ($sitemap, $wp_site_url) {
                $sitemap->add(Url::create( $wp_site_url."naturopaths/".$clinicData->seo_clinic_canonical_url));
            });
            $created_sitemap = $sitemap->writeToDisk('public', 'sitemap/clinic.xml');
            if($created_sitemap){

                $this->info('Clinic Sitemap  created successfully!');
                Log::info("Clinic Sitemap create successfully!" );
            }
        } catch (\Throwable $th) {
            //throw $th;
            $this->error('Something went wrong!');
            dd($th);
        }
       
        return Command::SUCCESS;
    }
}
