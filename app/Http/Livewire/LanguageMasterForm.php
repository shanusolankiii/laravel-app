<?php

namespace App\Http\Livewire;

use App\Models\LanguageMaster;

use Livewire\Component;

class LanguageMasterForm extends Component
{
    public $language, $language_master, $language_name, $language_code;
    
    protected $rules = [
        'language.language_name' => 'required',
        'language.language_code' => 'required',
    ];
    public function mount($id = null)
    {
        $this->language = LanguageMaster::find($id);
    }
    public function render()
    {
        return view('livewire.language-master-form');
    }

    public function save()
    {
        $this->validate();
        $this->language->save();
        session()->flash('message', 'Successfully Updated.');
        return redirect()->to('hb-cpanel/languages/detail/' . $this->language->id);
    }
    public function delete()
    {
        $this->language->delete();
        session()->flash('message', 'Successfully Deleted.');
        return redirect()->to('hb-cpanel/languages');
    }    
}
