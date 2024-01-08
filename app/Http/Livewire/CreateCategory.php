<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Category;

class CreateCategory extends Component
{
    public Category $categories ;

    protected $rules = [
        'categories.category_title' => 'required',
        'categories.category_description' => 'required',
    ];

    public function mount()
    {
        $this->categories = new Category();
    }

    public function save()
    {
        $this->validate();

        $this->categories->save();

        return redirect()->to('hb-cpanel/categories');
    }
    public function render()
    {
        return view('livewire.create-category');
    }
}
