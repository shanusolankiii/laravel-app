<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Category;

class Categories extends Component
{
    public $categories, $category_title, $category_description,$category_id;
    
    public $updateMode = false;

    public function render()
    {   
        $this->categories = Category::all();
        return view('livewire.categories');
    }

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    private function resetInputFields(){
        $this->category_title = '';
        $this->category_description = '';
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function store()
    {
        $validatedDate = $this->validate([
            'category_title' => 'required',
            'category_description' => 'required',
        ]);
  
        Category::create($validatedDate);
  
        session()->flash('message', 'Category Created Successfully.');
  
        $this->resetInputFields();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);
        $this->category_id = $id;
        $this->category_title = $category->category_title;
        $this->category_description = $category->category_description;
  
        $this->updateMode = true;
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function cancel()
    {
        $this->updateMode = false;
        $this->resetInputFields();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function update()
    {
        $validatedDate = $this->validate([
            'category_title' => 'required',
            'category_description' => 'required',
        ]);
  
        $category = Category::find($this->post_id);
        $category->update([
            'category_title' => $this->category_title,
            'category_description' => $this->category_description,
        ]);
  
        $this->updateMode = false;
  
        session()->flash('message', 'Category Updated Successfully.');
        $this->resetInputFields();
    }

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function delete($id)
    {
        Category::find($id)->delete();
        session()->flash('message', 'Category Deleted Successfully.');
    }
}
