<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\SeoUpdates;

class EditSeoUpdate extends Component
{

    public SeoUpdates $seoUpdates ;

    protected $rules = [
        'seoUpdates.slug' => 'required',
        'seoUpdates.url' => 'required',
        'seoUpdates.canonical_url' => 'required',
        'seoUpdates.page_title' => '',
        'seoUpdates.meta_title' => '',
        'seoUpdates.meta_description' => '',
        'seoUpdates.page_description' => '',
    ];
    public function mount($seoUpdate)
    {
        $this->seoUpdates = SeoUpdates::find($seoUpdate);
       
    }
    public function update()
    {
        $this->validate();
       
        $this->seoUpdates->save();

        return redirect()->to('hb-cpanel/seoUpdates');
    }

    public function render()
    {
        return view('livewire.edit-seo-update');
    }
}
