<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Course;
use App\Models\Category;
use App\Models\CourseCreator;
use App\Models\Instructor;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Storage;


class CreateCourse extends Component
{
    use WithFileUploads;
    public Course $course ;
    public $categories,$instructors,$course_creators;
    public $updateCourse = false;

    protected $listeners = [
        'deleteCourse'=>'destroy'
    ];
    protected $rules = [
        'course.course_title' => 'required',
        'course.course_description' => '',
        'course.course_creator' => 'required',
        'instructors' => 'required',
        'course.credit_counts' => 'required',
        'categories' => 'required',
        'course.course_logo' => 'required',
        'course.price' => 'required',
        'course.special_price'=>'',
        'course.cta_label'=>'required',
        'course.cta_link'=>'required',
        'course.is_active'=>'required',
    ];
    public function mount()
    {
        $this->course = new Course();
        $this->categories = Category::all();
        $this->instructors = Instructor::all();
        $this->course_creators = CourseCreator::all();
    }

    public function save()
    {
        $this->validate();      
        try{
            $file = $this->course->course_logo;
            // dd($file);
            //$path1 = Storage::disk('do')->putFile('Test', $file, 'public');       

            //$do_url = "https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/$path1";

            //$this->course->course_logo = $do_url;
            $this->course->save();       
            $this->course->instructors()->attach($this->instructors);
            $this->course->categories()->attach($this->categories);
            return redirect()->to('hb-cpanel/courses');
        }catch(\Exception $e){
            // Set Flash Message
            session()->flash('error','Something goes wrong while creating course!!');

            // Reset Form Fields After Creating Category
            $this->resetFields();
        }
    }

    public function render()
    {
        return view('livewire.create-course');
    }
    public function edit($id){
        $this->course = Course::findOrFail($id);       
        $this->updateCourse = true;
    }

    public function update(){

        // Validate request
        $this->validate();

        try{

            // Update category
            $this->course->save();
            $this->course->instructors()->attach($this->instructors);
            $this->course->categories()->attach($this->categories);
            session()->flash('success','Course Updated Successfully!!');
            return redirect()->to('hb-cpanel/courses');    
            $this->cancel();
        }catch(\Exception $e){
            session()->flash('error','Something goes wrong while updating category!!');
            $this->cancel();
        }
    }
    public function cancel()
    {
        $this->updateCourse = false;
        $this->resetFields();
    }
    public function destroy($id){
        try{
            Course::find($id)->delete();
            session()->flash('success',"Course Deleted Successfully!!");
        }catch(\Exception $e){
            session()->flash('error',"Something goes wrong while deleting Course!!");
        }
    }
}
