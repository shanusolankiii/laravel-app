<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\SeoUpdates;
class CreateSEOUrls extends Component
{
    public SeoUpdates $seo_urls;    
    protected $rules = [
        'seo_urls.page_title' => 'required',
        'seo_urls.slug' => 'required',
        'seo_urls.url' => 'required',
        'seo_urls.canonical_url' => 'required',
    ];
    public function render()
    {
        return view('livewire.create-s-e-o-urls');
    }
    public function mount()
    {
        $this->seo_urls = new SeoUpdates();
    }
    public function create()
    {
        $this->validate();      
        try {            
            $this->seo_urls->save();           
            session()->flash('message', 'New URL Created Successfully!');
            return redirect()->to('hb-cpanel/create/seo-urls');
        } catch (\Exception $e) {
            session()->flash('error', $e->getMessage());
            return redirect()->to('hb-cpanel/create/seo-urls');
        }
    }
}
