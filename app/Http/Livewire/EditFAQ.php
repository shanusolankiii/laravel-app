<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\UserFAQ;

class EditFAQ extends Component
{
    public UserFAQ $userFaqs ;

    protected $rules = [
        'userFaqs.faq_quesion' => 'required',
        'userFaqs.faq_answer' => 'required',
        'userFaqs.is_active' => 'required',
    ];

    public function mount($userFaq= null)
    {
        $this->userFaqs = UserFAQ::find($userFaq);
    }

    public function save()
    {
        $this->validate();

        $this->userFaqs->save();

        return redirect()->to('hb-cpanel/faq/users');
    }
    public function render()
    {
        return view('livewire.edit-f-a-q');
    }
    public function delete()
    {
        $this->userFaqs->delete();
        session()->flash('message', 'Successfully Deleted.');
        return redirect()->to('hb-cpanel/faq/users');
    }   
}
