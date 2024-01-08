
<form method="POST" wire:submit.prevent="save">
    <div class="row">
        <div class="col-lg-6">
            <div class="card card-info">
                <div class="card-header">               
                       
                                    
                    <div class="card-tools">
                        <!-- Collapse Button -->
                        <button type="button" class="btn btn-tool float-left"
                            data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                    </div>
                    <!-- /.card-tools -->
                </div>
                <!-- /.card-header -->
                <div class="card-body">

                    <div class="form-group">
                        <label for="course_title">Course Title <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" name="course_title"
                            placeholder="Course Title" wire:model.defer="course.course_title"
                             />
                        @error('course.course_title')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="course_description">Course Description</label>
                        <textarea class="form-control" id="course_description" name="course_description"
                            wire:model.defer="course.course_description"></textarea>
                        @error('course.course_description')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="course_creator">Course Creater <span
                                class='text-danger'>*</span></label>
                        <select class="form-control"
                            wire:model.defer='course.course_creator' id="course_creator">
                                <option value="">Select Course Creator</option>
                                @foreach ($course_creators as $course_creator)
                             <option value="{{ $course_creator->id }}">{{ $course_creator->course_creator_name }}</option>
                                
                            @endforeach
                        </select>                       
                        @error('course.course_creator')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="instructors">Course Instructors <span
                                class='text-danger'>*</span></label>
                        <!-- <textarea class="form-control" id="instructors" name="instructors"
                            wire:model.defer="course.instructors"></textarea> -->
                    <select class="select2 form-control" name="instructors[]" 
                            wire:model.defer='instructors' multiple>
                            @foreach ($instructors as $instructor)
                             <option value="{{ $instructor->id }}">{{ $instructor->instructor_title }} {{ $instructor->instructor_full_name }}</option>
                                
                            @endforeach
                        </select>  
                        @error('instructors')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>      
                    <div class="form-group">
                        <label for="is_active">Is Active ? <span
                                class='text-danger'>*</span></label>
                         <input type="radio" name="is_active"
                                            id="is_active"
                                            wire:model.defer='course.is_active'
                                            value="1" 
                                            {{ $course->is_active == '1' ? 'checked' : '' }}>
                        <label for="">Yes</label>
                        <input type="radio" name="is_active"
                            wire:model.defer='course.is_active'
                            value="0"
                            {{ $course->is_active == '0' ? 'checked' : '' }}>
                        <label for="is_active">No</label>
                        @error('course.is_active')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>              
                    <div class="form-group">
                        <label for="course_category">Course Category <span class='text-danger'>*</span></label>
                        <!-- <textarea class="form-control" id="course.category" name="course_category"
                            wire:model.defer="course.category"></textarea> -->
                        <select class="form-control"
                            wire:model.defer='categories' id="course_category"  name="categories[]" multiple>                           
                            @foreach ($categories as $category)
                             <option value="{{ $category->id }}">{{ $category->category_title }}</option>
                                
                            @endforeach
                        </select> 
                        @error('categories')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div> 
                    
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <div class="col-lg-6">
            <div class="card card-info">
                <div class="card-header">                    
                       
                                    
                    <div class="card-tools">
                        <!-- Collapse Button -->
                        <button type="button" class="btn btn-tool float-left"
                            data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                    </div>
                    <!-- /.card-tools -->
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    
                                      
                   
                    <div class="form-group">
                        <label for="credit_counts">Course Credit Counts <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" name="credit_counts"
                        placeholder="Course Credit Count" wire:model.defer="course.credit_counts"
                        />
                        @error('course.credit_counts')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="course_price">Course price <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" name="course_price"
                        placeholder="Course price" wire:model.defer="course.price"
                        />
                        @error('course.price')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="special_price">Course Special Price</label>
                        <input type="text" class="form-control" name="special_price"
                        placeholder="Course Special price" wire:model.defer="course.special_price"
                        />
                        @error('course.special_price')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="cta_label">Course CTA Label <span
                                class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="cta_label" name="cta_label"
                            placeholder="Course Creater" wire:model.defer="course.cta_label"
                            />
                        @error('course.cta_label')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="cta_link">Course CTA Link <span
                                class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="cta_link" name="cta_link"
                            placeholder="Course Instructor" wire:model.defer="course.cta_link"
                            />
                        @error('course.cta_link')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    
                    <div class="form-group">
                        <label for="course_logo">Course Logo<span
                                class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="course_logo" name="course_logo"
                            placeholder="Course Logo" wire:model.defer="course.course_logo"
                            />
                        @error('course.course_logo')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    <button type="submit" class="btn btn-success float-center">Create</button>
                    
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
       
    </div>
</form>
            