<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Category;

class EditCategory extends Component
{
    public Category $categories ;

    protected $rules = [
        'categories.category_title' => 'required',
        'categories.category_description' => 'required',
    ];

    public function mount($category = null)
    {
        $this->categories = Category::find($category);
       
    }
    public function update()
    {
        $this->validate();
       
        $this->categories->save();

        return redirect()->to('hb-cpanel/categories');
    }

    public function render()
    {
        return view('livewire.edit-category');
    }
}
