<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Wp\Practitioner;
use App\Models\Wp\PractitionerSeo;
use Carbon\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;

class sitemapGeneratePract extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hb:sitemap:pract';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Sitemap of Practitoner on HB WP';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info("Practitioner Sitemap creation Started!" ); 
        $wp_site_url = config('scaleup.WP_SITE_URL');
        // $wp_site_url = str_replace('https://','https://www.', $wp_site_url);
        try {
            $sitemap  =  Sitemap::create();    
            $url =  $wp_site_url."naturopaths/find-a-naturopath-near-me/";
            $sitemap->add($url);
            PractitionerSeo::all()->each(function (PractitionerSeo $practitionerData) use ($sitemap,$wp_site_url) {
                $url = Url::create($wp_site_url."naturopaths/".$practitionerData->seo_pract_canonical_url);
                $url->setPriority(1); 
                $sitemap->add($url);
            });
            $created_sitemap = $sitemap->writeToDisk('public', 'sitemap/practitioner.xml');
            if($created_sitemap){
                $this->info('Practitioner Sitemap  created successfully!');
                Log::info("Practitioner Sitemap create successfully Ended!" );
            }           
        } catch (\Throwable $th) {
            //throw $th;
            $this->error('Something went wrong!');
            Log::info("Practitioner Sitemap creation error occured!" ); 
            dd($th);
        }      
        
        return Command::SUCCESS;
    }
}
