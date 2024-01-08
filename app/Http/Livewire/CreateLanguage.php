<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\LanguageMaster;

class CreateLanguage extends Component
{
    public LanguageMaster $languages;    
    protected $rules = [
        'languages.language_name' => 'required',
        'languages.language_code' => 'required',
    ];
    public function render()
    {
        return view('livewire.create-language');
    }
    public function mount()
    {
        $this->languages = new LanguageMaster();
    }
    public function create()
    {
        $this->validate();
        try {
            $this->languages->save();
            session()->flash('message', 'New Language Created Successfully!');
            return redirect()->to('hb-cpanel/create/language');
        } catch (\Exception$e) {
            session()->flash('error', 'Something went wrong!!');
            return redirect()->to('hb-cpanel/create/language');
        }
    }
}
