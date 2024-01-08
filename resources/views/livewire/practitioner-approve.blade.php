
<form action="" id="pract-approve" method="POST" wire:submit.prevent="submit">
    @if($is_new_clinic->is_new_clinic != null && $is_new_clinic->is_new_clinic == 1 && $number_of_clinics > 1 && $is_clinic_approved==0)
    <div class="col-lg-12">
        <div class="alert alert-warning"> 
            This Practitioner Added Multiple Clinic Please approve them first
            <a href="{{ route('clinic-table') }}" >Click Here</a>
        </div>    
    </div>
    @endif
    <div class="col-lg-12">
        @if (session()->has('message'))
            <div class="alert alert-success" role="alert">
                    {{ session('message') }}
            </div>
        @endif
        @if (session()->has('error'))
            <div class="alert alert-danger" role="alert">
                    {{ session('error') }}
            </div>
        @endif
    </div> 
    <div class="col-lg-12">
        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Practitioner Details</h3>
                <div class="card-tools">
                    <!-- Collapse Button -->
                    <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                            class="fas fa-minus"></i></button>
                </div>
            </div>
            <div class="card-body">
                @foreach ($practitioner as $key => $record)
                    @php
                        $session_id = $record->session_id;
                        $questions[$record->question_id] = $record->answer;
                        $type = 'text';
                        
                    @endphp

                    <div class="form-group row">
                        @if ($record->question_id == 'q_name')
                            <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <input type="text" name="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    :key="{{ $key }}" class="form-control"
                                    id="">
                                    @error('answer_wire_arr.0.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                    </span>
                                    @enderror
                            </div>
                        @endif
                        @if ($record->question_id == 'q_area')
                            <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                @php
                                    $answer = $record->answer;
                                    $array_area = ['Perimenopause/Menopause', 'PCOS/PMS', 'Fertility and Pregnancy', 'Acne and Skin Care', 'Weight Management', 'Thyroid Support'];
                                    $fetch_answer = explode(',', $answer);
                                @endphp

                                <select class="select2 form-control" name='answer_wire_arr.{{ $key }}.answer[]'
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer' data-maximum-selection-length="3" multiple='multiple'>
                                    @foreach ($array_area as $index => $item)
                                        <option :key="{{ $key }}"
                                            value="{{ $item }}"
                                            @if (in_array($item, $fetch_answer)) selected @endif>
                                            {{ $item }}</option>
                                    @endforeach
                                </select>
                                @error('answer_wire_arr.1.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                </span>
                                @enderror
                            </div>
                        @endif
                        @if ($record->question_id == 'q_services')
                            <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                @php
                                    $answer = $record->answer;
                                    $service_area = ['BHRT', 'IV Therapy', 'Desiccated Thyroid', 'Vitamin Injections'];
                                    $fetch_answer = explode(',', $answer);
                                @endphp

                                <select class="select2 form-control"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer[]'multiple>
                                    @foreach ($service_area as $item)
                                        <option :key="{{ $key }}"
                                            value="{{ $item }}" @if (in_array($item, $fetch_answer)) selected @endif>
                                            {{ $item }}</option>
                                    @endforeach
                                </select>
                                @error('answer_wire_arr.2.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                </span>
                                @enderror
                            </div>
                        @endif                          
                        @if ($record->question_id == 'q_website')
                            @php
                                $type = 'text';
                            @endphp
                            <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <input type="text" name="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    :key="{{ $key }}" class="form-control"
                                    id="">
                                    @error('answer_wire_arr.3.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                    </span>
                                    @enderror
                            </div>
                        @endif
                        @if ($record->question_id == 'q_email')
                           <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <input type="email" name="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    :key="{{ $key }}" class="form-control"
                                    id="">
                                @error('answer_wire_arr.4.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                    </span>
                                @enderror
                            </div>
                        @endif
                        @if ($record->question_id == 'q_associations')
                            <label class="col-sm-4 col-form-label" for="{{ $record->question_id }}">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                @php
                                    $answer = $record->answer;
                                    $array_association = ['Canadian College of Naturopathic Medicine', 'Ontario Association Of Naturopathic Doctors', 'Canadian Association of Naturopathic Doctors', 'College of Naturopaths of Ontario'];
                                    $fetch_answer = explode(',', $answer);
                                @endphp
                                <select class="select2 form-control"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer' id="{{ $record->question_id }}"
                                    multiple>
                                    @foreach ($array_association as $item)
                                        <option :key="{{ $key }}"
                                            value="{{ $item }}" @if (in_array($item, $fetch_answer)) selected @endif>
                                            {{ $item }}</option>
                                    @endforeach
                                </select>
                                @error('answer_wire_arr.5.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                    </span>
                                @enderror
                            </div>
                        @endif
                        @if ($record->question_id == 'q_leads')
                            <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <input type="radio" name="{{ $record->question_id }}" id="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    value="Yes" :key="{{ $key }}"
                                    {{ $record->answer == 'Yes' ? 'checked' : '' }}>
                                <label for="{{ $record->question_id }}">Yes</label>
                                <input type="radio" name="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    value="No" :key="{{ $key }}"
                                    {{ $record->answer == 'No' ? 'checked' : '' }}>
                                <label for="{{ $record->question_id }}">No</label>
                                @error('answer_wire_arr.6.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                    </span>
                                @enderror
                            </div>
                        @endif
                        @if ($record->question_id == 'q_year')
                            <label class="col-sm-4 col-form-label" for="{{ $record->question_id }}">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <input type="number" name="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    :key="{{ $key }}" class="form-control"
                                    id="{{ $record->question_id }}">
                                @error('answer_wire_arr.7.answer')
                                    <span class="text-danger">
                                        {{ $message }}
                                    </span>
                                @enderror
                            </div>
                        @endif
                        @if ($record->question_id == 'q_awarness')
                            <label class="col-sm-4 col-form-label">{{ $record->question_title }}
                            </label>
                            <div class="col-sm-8">
                                <input type="text" name="{{ $record->question_id }}"
                                        wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                        :key="{{ $key }}" class="form-control"
                                        id="{{ $record->question_id }}">
                                    @error('answer_wire_arr.8.answer')
                                        <span class="text-danger">
                                            {{ $message }}
                                        </span>
                                    @enderror
                            </div>
                        @endif   
                        @if ( $record->question_id == 'q_content' )
                            <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <input type="radio" name="{{ $record->question_id }}" id="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    value="Yes" :key="{{ $key }}"
                                    {{ $record->answer == 'Yes' ? 'checked' : '' }}>
                                <label for="{{ $record->question_id }}">Yes</label>
                                <input type="radio" name="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    value="No" :key="{{ $key }}"
                                    {{ $record->answer == 'No' ? 'checked' : '' }}>
                                    <label for="{{ $record->question_id }}">No</label>
                                    @error('answer_wire_arr.9.answer')
                                        <span class="text-danger">
                                            {{ $message }}
                                        </span>
                                    @enderror
                            </div>
                        @endif                   
                        @if ($record->question_id == 'q_session')
                            <label class="col-sm-4 col-form-label" >{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <input type="radio" name="{{ $record->question_id }}" id="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    value="Yes" :key="{{ $key }}"
                                    {{ $record->answer == 'Yes' ? 'checked' : '' }}>
                                <label for="{{ $record->question_id }}">Yes</label>
                                <input type="radio" name="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    value="No" :key="{{ $key }}"
                                    {{ $record->answer == 'No' ? 'checked' : '' }}>
                                <label for="{{ $record->question_id }}">No</label>
                                @error('answer_wire_arr.10.answer')
                                        <span class="text-danger">
                                            {{ $message }}
                                        </span>
                                    @enderror
                            </div>
                        @endif                        
                      
                       @if ($record->question_id == 'q_cname')
                            @php
                                $clinics_name = explode('#', $record->answer);
                            @endphp
                            <label class="col-sm-4 col-form-label" for="{{ $record->question_id }}">{{ $record->question_title }} <span class='text-danger'>*</span>
                            </label>
                            <div class="col-sm-8">
                                <select class="select2 form-control" id="{{ $record->question_id }}"
                                    wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                    multiple>
                                    @foreach ($clinics_name as $item)
                                        <option value="{{ $item }}" selected="selected">
                                            {{ $item }}</option>
                                    @endforeach
                                </select>
                                @error('answer_wire_arr.11.answer')
                                        <span class="text-danger">
                                            {{ $message }}
                                        </span>
                                    @enderror
                            </div>
                        @endif
                    </div>
                @endforeach
                
                @if ( $has_completed != 0)
             
                    @if ($is_new_clinic->is_new_clinic != null && $is_clinic_approved == 1 && $has_pract_approved==0 )
                    <button type="submit" wire:click="submit('{{ $session_id }}')"
                        class="btn btn-primary">Save Practitioner to Database</button>
                    <button type="button" wire:click="approvePractitioner('{{ $session_id }}')"
                        class="btn btn-success">Approve Practitioner & Push to AC & WP</button>
                    @elseif ($is_new_clinic->is_new_clinic == null && $is_clinic_approved == 0 && $has_pract_approved==0)
                    <button type="submit" wire:click="submit('{{ $session_id }}')"
                        class="btn btn-primary">Save Practitioner to Database</button>
                    <button type="button" wire:click="approvePractitioner('{{ $session_id }}')"
                        class="btn btn-success">Approve Practitioner & Push to AC & WP</button>                       
                    @elseif ($has_pract_approved==1 && $has_completed == 1)
                    <span 
                        class="btn btn-success">Approved Practitioner</span>
                    @endif
                    
                @endif

            </div>
        </div>
    </div>
</form>
