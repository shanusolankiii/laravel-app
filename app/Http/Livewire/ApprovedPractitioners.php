<?php

namespace App\Http\Livewire;

use App\Models\ClinicsMaster;
use App\Models\LanguageMaster;
use App\Models\Practitioners;
use App\Models\Wp\Practitioner;
use App\Models\Wp\PractitionerSeo;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Livewire\Component;
use Livewire\WithFileUploads;

class ApprovedPractitioners extends Component
{
    use WithFileUploads;

    public $practitioner, $languages, $clinics;

    public $pract_title, $pract_name, $pract_email, $pract_phone, $pract_designation, $pract_type, $pract_image, $pract_v_clinic_name,
    $pract_v_clinic_email, $pract_v_clinic_address, $pract_v_clinic_working_hours, $pract_v_clinic_place_id, $pract_v_clinic_latitude,
    $pract_v_clinic_longitude, $pract_license_year, $pract_accepting_new, $pract_direct_bill_ins, $pract_free_call, $pract_bio,
    $pract_degrees, $pract_education, $pract_visibility, $pract_website, $pract_leads, $pract_content, $pract_consent, $pract_awareness,
    $sync_to_wp, $lang_name, $pract_profile_url, $pract_tag_line;

    public $pract_conditions_supported = [], $pract_languages_spoken = [], $pract_association = [], $pract_services = [],
    $pract_clinic = [], $working_hours = [], $lang_list = [];
    public $yt_video_link = [], $faqs = [];
    public $question, $answer, $yt_title, $yt_link, $new_video = [];

    public function mount($id = null)
    {
        $this->practitioner = Practitioners::find($id);

        $practitioner_view_profile = PractitionerSeo::where('seo_pract_ID', '=', $this->practitioner->wp_pract_id)->first();
        if (!is_null($practitioner_view_profile)) {
            $this->pract_profile_url = config('scaleup.WP_SITE_URL') . 'naturopaths/' . $practitioner_view_profile->seo_pract_slug;
        }
        $this->languages = LanguageMaster::select('language_name')->get();
        $this->clinics = ClinicsMaster::get();
        foreach ($this->languages as $v) {
            array_push($this->lang_list, $v->language_name);
        }
        $this->pract_title = $this->practitioner->pract_title;
        $this->pract_name = $this->practitioner->pract_name;
        $this->pract_email = $this->practitioner->pract_email;
        $this->pract_phone = $this->practitioner->pract_phone;
        $this->pract_designation = $this->practitioner->pract_designation;
        $this->pract_type = $this->practitioner->pract_type;
        $this->pract_image = $this->practitioner->pract_image;
        $this->pract_clinic = explode('#', $this->practitioner->pract_clinic);
        $this->pract_education = $this->practitioner->pract_education;
        $this->pract_v_clinic_place_id = $this->practitioner->pract_v_clinic_place_id;
        $this->pract_v_clinic_latitude = $this->practitioner->pract_v_clinic_latitude;
        $this->pract_v_clinic_longitude = $this->practitioner->pract_v_clinic_longitude;
        $this->pract_conditions_supported = explode(',', $this->practitioner->pract_conditions_supported);
        $this->pract_languages_spoken = explode(',', $this->practitioner->pract_languages_spoken);
        $this->pract_license_year = $this->practitioner->pract_license_year;
        $this->pract_accepting_new = $this->practitioner->pract_accepting_new;
        $this->pract_direct_bill_ins = $this->practitioner->pract_direct_bill_ins;
        $this->pract_free_call = $this->practitioner->pract_free_call;
        $this->pract_services = explode(',', $this->practitioner->pract_services);
        $this->pract_bio = $this->practitioner->pract_bio;
        $this->pract_degrees = $this->practitioner->pract_degrees;
        $this->pract_association = explode(',', $this->practitioner->pract_association);
        $this->pract_visibility = $this->practitioner->pract_visibility;
        $this->pract_website = $this->practitioner->pract_website;
        $this->pract_leads = $this->practitioner->pract_leads;
        $this->pract_content = $this->practitioner->pract_content;
        $this->pract_consent = $this->practitioner->pract_consent;
        $this->pract_awareness = $this->practitioner->pract_awareness;
        $this->sync_to_wp = $this->practitioner->sync_to_wp;
        $this->pract_v_clinic_name = $this->practitioner->pract_v_clinic_name;
        $this->pract_v_clinic_email = $this->practitioner->pract_v_clinic_email;
        $this->pract_v_clinic_address = $this->practitioner->pract_v_clinic_address;
        $this->yt_video_link = json_decode($this->practitioner->yt_video_link, true) ?? [];
        $this->faqs = $this->practitioner->faqs ?? [];
        $this->pract_tag_line = $this->practitioner->pract_tag_line;
        if (!empty($this->practitioner->pract_v_clinic_name)) {
            $virtual_clinic_timing = json_decode($this->practitioner->pract_v_clinic_working_hours, true);
            $this->working_hours = $virtual_clinic_timing;
        }
    }
    public function render()
    {
        return view('livewire.approved-practitioners');
    }
    public function disablePractitioner()
    {
        try {
            $this->practitioner->pract_visibility = 0;
            $this->practitioner->sync_to_wp = 0;
            if ($this->practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'Practitioner disabled(not visible on listing) successfully!');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $e) {
            session()->flash('error', "The record couldn't disabled");
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
    public function enablePractitioner()
    {
        try {
            $this->practitioner->pract_visibility = 1;
            $this->practitioner->sync_to_wp = 0;
            if ($this->practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'Practitioner enabled(not visible on listing) successfully!');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $e) {
            session()->flash('error', "The record couldn't enabled");
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
    public function update()
    {
        try {
            $this->practitioner->pract_title = $this->pract_title;
            $this->practitioner->pract_name = $this->pract_name;
            $this->practitioner->pract_email = $this->pract_email;
            $this->practitioner->pract_license_year = $this->pract_license_year;
            $this->practitioner->pract_designation = $this->pract_designation;

            $this->practitioner->pract_languages_spoken = implode(',', $this->pract_languages_spoken);
            $this->practitioner->pract_conditions_supported = implode(',', $this->pract_conditions_supported);
            $this->practitioner->pract_clinic = implode('#', $this->pract_clinic);
            $this->practitioner->pract_services = implode(',', $this->pract_services);
            $this->practitioner->pract_association = implode(',', $this->pract_association);

            $this->practitioner->pract_free_call = $this->pract_free_call;
            $this->practitioner->pract_degrees = $this->pract_degrees;
            $this->practitioner->pract_website = $this->pract_website;
            $this->practitioner->pract_direct_bill_ins = $this->pract_direct_bill_ins;
            $this->practitioner->pract_accepting_new = $this->pract_accepting_new;
            $this->practitioner->pract_bio = $this->pract_bio;
            $this->practitioner->pract_v_clinic_name = $this->pract_v_clinic_name;
            $this->practitioner->pract_v_clinic_email = $this->pract_v_clinic_email;
            $this->practitioner->pract_v_clinic_address = $this->pract_v_clinic_address;
            $this->practitioner->pract_tag_line = $this->pract_tag_line;

            $this->practitioner->sync_to_wp = 0;

            // foreach ($this->working_hours as &$day) {
            //     $isWorking = $day['value']['isWorking'];
            //     if (($day['value']['startTime'] != 'Closed') && ($day['value']['endTime'] != 'Closed')) {
            //         $day['value']['startTime'] = $this->working_hours[$day['key']]['value']['startTime'];
            //         $day['value']['endTime'] = $this->working_hours[$day['key']]['value']['endTime'];
            //         $day['value']['isWorking'] = true;
            //     } else {
            //         // $day['value']['isWorking'] = true;
            //         dd('Else');
            //     }
            // }

            $this->practitioner->pract_v_clinic_working_hours = json_encode($this->working_hours);

            if (!is_string($this->pract_image)) {
                if ($this->pract_image && $this->pract_image->isFile()) {
                    $fileName = str_replace(' ', '-', strtolower($this->practitioner->pract_name)) .'-'.time(). '.' .$this->pract_image->extension();
                    $img = \Image::make($this->pract_image->getRealPath());
                    $img->resize(500, 500, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $img->stream();
                    $currentDate = new \DateTime();
                    $year = $currentDate->format('Y');
                    $month = $currentDate->format('F');
                    // $date = $currentDate->format('d');
                    $folderPath = "Test/$year/$month";
                    if (!\Storage::disk('do')->exists($folderPath)) {
                        \Storage::disk('do')->makeDirectory($folderPath, 0777, true);
                    }
                    $path1 = \Storage::disk('do')->put($folderPath . '/' . $fileName, $img, 'public');
                    $do_url = "https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/$folderPath/$fileName";
                    $this->practitioner->pract_image = $do_url;
                }
            }
            DB::enableQueryLog();
            if ($this->practitioner->save()) {
                $queries = DB::getQueryLog();
                Log::info("SQL Query: " . json_encode($queries));
                Artisan::call('hb:sync:pract:portal-2-wp');
                Log::info("Practitioner Data is Successfully Updated!");
                session()->flash('message', 'Data Successfully Updated.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            } else {
                Log::error("Data not Updated!");
                session()->flash('error', "Data Couldn't Updated!!");
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $th) {
            Log::error("Critical Error: " . $th);
            session()->flash('error', 'Something goes wrong while updating practitioner data!!');
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
    public function saveVideoLinks()
    {
        try {
            $this->yt_video_link = json_decode($this->practitioner->yt_video_link, true) ?? [];
            $new_video = [
                'yt_title' => $this->yt_title,
                'yt_link' => $this->yt_link,
            ];
            $this->yt_video_link[] = $new_video;
            $this->practitioner->yt_video_link = json_encode($this->yt_video_link);
            $this->practitioner->sync_to_wp = 0;
            if ($this->practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'YouTube Video added successfully.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            } else {
                session()->flash('error', 'Failed to Add YouTube Video.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went wrong.');
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }

    public function updateYouTubeVideoLink()
    {
        try {
            $this->practitioner->yt_video_link = $this->yt_video_link;
            $this->practitioner->sync_to_wp = 0;
            if ($this->practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'YouTube Video updated successfully.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            } else {
                session()->flash('error', 'Failed to update YouTube Video.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went wrong.');
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
    public function deleteYoutubeVideo($index)
    {
        try {
            $yt_video_link = json_decode($this->practitioner->yt_video_link ?? []);
            if (isset($yt_video_link[$index])) {
                unset($yt_video_link[$index]);
                $this->practitioner->update(['yt_video_link' => array_values($yt_video_link), 'sync_to_wp' => 0]);
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'YouTube Video deleted successfully.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            } else {
                session()->flash('error', "YouTube Video couldn't deleted.");
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went wrong.');
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
    public function addFAQs()
    {
        try {
            $this->faqs = $this->practitioner->faqs ?? [];
            $new_FAQ = [
                'question' => $this->question,
                'answer' => $this->answer,
            ];
            $this->faqs[] = $new_FAQ;
            if ($this->practitioner->update(['faqs' => $this->faqs, 'sync_to_wp' => 0])) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'FAQ added successfully.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            } else {
                session()->flash('error', 'Something went wrong.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went wrong.');
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
    public function updateFAQs()
    {
        try {
            $this->practitioner->faqs = $this->faqs;
            $this->practitioner->sync_to_wp = 0;
            if ($this->practitioner->save()) {
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'FAQs updated successfully.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            } else {
                session()->flash('error', 'Failed to update FAQs.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went wrong.');
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
    public function deleteQuestion($index)
    {
        try {
            $faqs = $this->practitioner->faqs ?? [];
            if (isset($faqs[$index])) {
                unset($faqs[$index]);
                $this->practitioner->update(['faqs' => array_values($faqs), 'sync_to_wp' => 0]);
                Artisan::call('hb:sync:pract:portal-2-wp');
                session()->flash('message', 'FAQ deleted successfully.');
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            } else {
                session()->flash('error', "FAQ couldn't deleted.");
                return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
            }
        } catch (\Throwable $th) {
            session()->flash('error', 'Something went wrong.');
            return redirect()->to('hb-cpanel/practitioner/view/' . $this->practitioner->id);
        }
    }
}