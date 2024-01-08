<?php

namespace App\Http\Livewire;

use App\Models\ClinicsMaster;
use App\Models\Wp\Clinic;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Livewire\Component;

class ClinicApproved extends Component
{
    public $clinics, $clinic_name, $clinic_email, $clinic_phone, $clinic_rating, $clinic_website_url, $clinic_description, $clinic_city, $clinic_address, $clinic_virtual, $sync_to_wp, $wp_id, $wp_clinics;

    public function mount($id = null)
    {
        $this->clinics = ClinicsMaster::find($id);
        $this->wp_clinics;
        $this->clinic_name = $this->clinics->clinic_name;
        $this->clinic_email = $this->clinics->clinic_email;
        $this->clinic_phone = $this->clinics->clinic_phone;
        $this->clinic_rating = $this->clinics->clinic_rating;
        $this->clinic_website_url = $this->clinics->clinic_website_url;
        $this->clinic_description = $this->clinics->clinic_description;
        $this->clinic_city = $this->clinics->clinic_city;
        $this->clinic_address = $this->clinics->clinic_address;
        $this->clinic_virtual = $this->clinics->clinic_virtual;
    }
    public function render()
    {
        return view('livewire.clinic-approved');
    }
    public function delete()
    {
        try {
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');
            $this->clinics->delete();
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
            session()->flash('message', 'Successfully Deleted.');
            return redirect()->to('hb-cpanel/approved/clinics');
        } catch (\Illuminate\Database\QueryException $e) {
            $error_code = $e->errorInfo[1];
            if ($error_code == 1451) {
                session()->flash('message', 'Cannot delete this record as it has related records in the clinics table.');
                return redirect()->to('hb-cpanel/approved/clinics');
            }
        }
    }
    public function update($id = null)
    {
        try {
            $this->clinics->update([
                'clinic_email' => $this->clinic_email,
                'clinic_phone' => $this->clinic_phone,
                'clinic_rating' => $this->clinic_rating,
                'clinic_website_url' => $this->clinic_website_url,
                'clinic_description' => $this->clinic_description,
                'clinic_virtual' => $this->clinic_virtual,
                // 'sync_to_wp' => 0,
            ]);
            Log::info("Laravel Clinics Data Updated successfully!");
            $this->wp_id = $this->clinics->wp_clinic_id;
            try {
                $this->wp_clinics = Clinic::where('clinic_ID', '=', $this->wp_id)->update([
                    'clinic_email' => $this->clinic_email,
                    'clinic_phone' => $this->clinic_phone,
                    'clinic_rating' => $this->clinic_rating,
                    'clinic_website_url' => $this->clinic_website_url,
                    'clinic_description' => $this->clinic_description,
                    'clinic_virtual' => $this->clinic_virtual,
                ]);
                Log::info("WP Clinics Data Updated successfully!");
            } catch (\Exception $e) {
                Log::info($e->getMessage());
            }
            session()->flash('message', 'Clinics data updated successfully.');
            return redirect()->back();
        } catch (\Throwable $th) {
            Log::error("Clinics data couldn't Updated!");
            session()->flash('error', "Couldn't updated the Clinics data.");
            return redirect()->to('hb-cpanel/clinics/view/' . $this->clinics->id);
        }
    }
}
