<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\UserFAQ;

class CreateFAQ extends Component
{
    public UserFAQ $userFaqs ;

    protected $rules = [
        'userFaqs.faq_quesion' => 'required',
        'userFaqs.faq_answer' => 'required',
        'userFaqs.is_active' => '',
    ];

    public function mount()
    {
        $this->userFaqs = new UserFAQ();
    }

    public function save()
    {
        $this->validate();

        $this->userFaqs->save();

        return redirect()->to('hb-cpanel/faq/users');
    }
    public function render()
    {
        return view('livewire.create-f-a-q');
    }
}
