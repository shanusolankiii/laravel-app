<?php

namespace App\Http\Livewire;

use App\Models\Services;
use Livewire\Component;
use Livewire\WithFileUploads;

class ServiceForm extends Component
{
    use WithFileUploads;
    public Services $service, $addService, $updateService;

    public $services, $service_image;

    protected $rules = [
        'service.service_name' => 'required',
        'service.service_description' => 'required',
        'service_image' => '',
        'service.service_visibility' => 'required',
        'service.is_virtual' => 'required',
    ];
    public function mount($id = null)
    {
        $this->service = Services::find($id);

    }

    /**
     * Open Add Post form
     * @return void
     */
    public function addService()
    {
        $this->resetFields();
        $this->addService = true;
        $this->updateService = false;
    }
    /**
     * store the user inputted post data in the posts table
     * @return void
     */
    public function save()
    {
        $this->validate();
        // dd($this->service_image);
        // if ($this->service_image) {
        //     // Delete the old service image from disk
        //     Storage::delete($this->service->service_image);
        //     // Save the new service image to disk and store the path in the database
        //     $path = $this->service_image->store(public_path('/service-images'));
        //     // Update the service's image path in the database
        //     $this->service->update([
        //         'service_image' => $path,
        //     ]);
        // }
        try {
            $this->service->save();
            session()->flash('message', 'Service Updated Successfully!!');
        } catch (\Exception $ex) {
            session()->flash('error', 'Failed to update the Service!');
        }
    }
    public function render()
    {
        return view('livewire.service-form');
    }
    public function destroy($id)
    {
        $this->service->delete();
        session()->flash('message', 'Successfully Deleted.');
        return redirect()->to('hb-cpanel/services');
    }
}
