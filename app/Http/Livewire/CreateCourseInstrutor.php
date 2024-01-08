<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\CourseCreator;

class CreateCourseInstrutor extends Component
{
    public CourseCreator $courseCreators ;

    protected $rules = [
        'courseCreators.course_creator_name' => 'required',
        'courseCreators.course_creator_description' => 'required',
    ];

    public function mount()
    {
        $this->courseCreators = new CourseCreator();
    }

    public function save()
    {
        $this->validate();

        $this->courseCreators->save();

        return redirect()->to('hb-cpanel/course/creators');
    }
    public function render()
    {
        return view('livewire.create-course-instrutor');
    }
}
