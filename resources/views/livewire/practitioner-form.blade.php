@php
    $session_id = '';
    $questions = [];
@endphp
<div class="p-2">
    <div>
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
    <div class="row">
        @if ($is_new_clinic->is_new_clinic != null && $is_new_clinic->is_new_clinic == 1 && $number_of_clinics == 1)
            <div class="col-lg-12">
                <h2>This Practitioner Added a New Clinic!</h2>
                <form method="POST" wire:submit.prevent="update">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card card-info" wire:transition.fade wire:key="{{ $session_id }}">
                                <div class="card-header">
                                    @if ($is_clinic_approved == 0)
                                        <button type="submit" class="btn btn-success float-center">Save Clinic to
                                            Database</button>
                                        <button type="button" class="btn btn-warning float-center"
                                            wire:click="approveClinic()">Approve Clinic & Push to WP</button>
                                        @if ($clinic_master_info->toArray() != null)
                                            <button type="button" class="btn btn-dark float-center"
                                                wire:click="unapproveClinic()">Unapprove Clinic</button>
                                        @endif
                                    @else
                                        <a href="javascript:void(0)" class="btn btn-success">Approved Clinic</a>

                                    @endif

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
                                        <label for="clinic_name">Clinic Name <span class='text-danger'>*</span></label>
                                        <input type="text" class="form-control" name="clinic_name"
                                            placeholder="Clinic Name" wire:model.defer="clinic_name" />
                                        @error('clinic_name')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="clinic_email">Clinic Email <span
                                                class='text-danger'>*</span></label>
                                        <input type="email" class="form-control" id="clinic_email" name="clinic_email"
                                            placeholder="Clinic Email" wire:model.defer="clinic_email" />
                                        @error('clinic_email')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="clinic_phone">Clinic Phone </label>
                                        <input type="text" class="form-control" id="clinic_phone" name="clinic_phone"
                                            placeholder="Clinic Phone[ex.800-622-6232]"
                                            wire:model.defer="clinic_phone" />
                                        @error('clinic_phone')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="clinic_rating">Clinic Rating </label>
                                        <input type="s" class="form-control" id="clinic_rating"
                                            name="clinic_rating" placeholder="Clinic Rating"
                                            wire:model.defer="clinic_rating" />
                                        @error('clinic_rating')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror

                                    </div>
                                    <div class="form-group">
                                        <label for="clinic_website_url">Clinic Website URL <span
                                                class='text-danger'>*</span></label>
                                        <input type="text" class="form-control" id="clinic_website_url"
                                            name="clinic_website_url" placeholder="Clinic Website URL"
                                            wire:model.defer="clinic_website_url" />
                                        @error('clinic_website_url')
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
                                    <h3 class="card-title">Address Information</h3>
                                    <div class="card-tools">
                                        <!-- Collapse Button -->
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                                class="fas fa-minus"></i></button>
                                    </div>
                                    <!-- /.card-tools -->
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="clinic_address">Clinic Address <span
                                                class='text-danger'>*</span></label>
                                        <input type="text" class="form-control" id="clinic_address"
                                            name="clinic_address" placeholder="Clinic Address"
                                            wire:model.defer="clinic_address" />
                                        @error('clinic_address')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                        <input class="form-control" type="hidden" id="clinic_latitude"
                                            name="clinic_address_latitude">
                                        <input class="form-control" type="hidden" id="clinic_longitude"
                                            name="clinic_address_longitude">

                                    </div>
                                    <div class="form-group">
                                        <label for="clinic_city">Clinic City <span
                                                class='text-danger'>*</span></label>
                                        <input type="text" class="form-control" id="clinic_city"
                                            name="clinic_city" placeholder="Clinic City"
                                            wire:model.defer="clinic_city" readonly />
                                        @error('clinic_city')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="clinic_place_id">Clinic PlaceID <span
                                                class='text-danger'>*</span></label>
                                        <input type="text" class="form-control" id="clinic_place_id"
                                            name="clinic_place_id" placeholder="Clinic PlaceID"
                                            wire:model.defer="clinic_placeID" />
                                        @error('clinic_placeID')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="clinic_description">Clinic Description</label>
                                        <textarea class="form-control" id="clinic_description" name="clinic_description"
                                            wire:model.defer="clinic_description"></textarea>

                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"
                                            name="clinic_virtual" wire:model.defer="clinic_virtual">
                                        <label class="form-check-label" for="exampleCheck1">Is This A Virtual
                                            Clinic?</label>
                                    </div>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                        </div>
                        @if ($is_clinic_approved != 1 && $clinic_master_info->toArray() != null)
                            <div class="col-lg-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Matching Clinic Information</h3>
                                        <div class="card-tools">
                                            <!-- Collapse Button -->
                                            <button type="button" class="btn btn-tool"
                                                data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                                        </div>
                                        <!-- /.card-tools -->
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body">
                                        @if ($clinic_master_info != null)
                                            @foreach ($clinic_master_info as $key => $clinic_data)
                                                <div class="form-check">
                                                    <input type="radio" name="matched_clinic_name"
                                                        wire:model.defer='matched_clinic_name.{{ $key }}'
                                                        value="{{ $clinic_data->clinic_name }}, {{ $clinic_data->clinic_city }}"
                                                        id="exampleCheck-{{ $key }}">
                                                    <label class="form-check-label"
                                                        for="exampleCheck-{{ $key }}">{{ $clinic_data->clinic_name }},
                                                        {{ $clinic_data->clinic_city }}</label>
                                                </div>
                                            @endforeach
                                        @endif
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.card -->
                            </div>
                        @endif
                    </div>
                </form>
            </div>
        @elseif(
            $is_new_clinic->is_new_clinic != null &&
                $is_new_clinic->is_new_clinic == 1 &&
                $number_of_clinics > 1 &&
                $is_clinic_approved == 0)
            <div class="col-lg-12">
                <div class="alert alert-warning">
                    <h3> This Practitioner Added Multiple Clinic Please approve them first
                        <a href="{{ route('clinic-table') }}">Click Here</a>
                    </h3>
                </div>
            </div>
        @endif
        <div class="col-lg-12">
            <form action="" method="POST" wire:submit.prevent="submit">
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
                            @endphp

                            <div class="form-group row">
                                @if ($record->question_id == 'q_upload')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'></span>
                                    </label>
                                    <div class="col-sm-8">

                                        <img src="<?php echo $answer_wire_arr[10]['answer']; ?>" width="200" height="100" />
                                        @error('answer_wire_arr.10.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_naturopath')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="radio" name="{{ $record->question_id }}"
                                            id="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            value="Yes" :key="{{ $key }}"
                                            {{ $record->answer == 'Yes' ? 'checked' : '' }}>
                                        <label for="{{ $record->question_id }}">Yes</label>
                                        <input type="radio" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            value="No" :key="{{ $key }}"
                                            {{ $record->answer == 'No' ? 'checked' : '' }}>
                                        <label for="{{ $record->question_id }}">No</label>
                                        @error('answer_wire_arr.0.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_name')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control" id="">
                                        @error('answer_wire_arr.1.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_email')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="email" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control" id="">
                                        @error('answer_wire_arr.2.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_area')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        @php
                                            $answer = $record->answer;
                                            $array_area = ['Perimenopause & Menopause', 'PCOS/PMS', 'Fertility & Pregnancy', 'Acne & Skincare', 'Weight Management', 'Thyroid Support'];
                                            $fetch_answer = explode(',', $answer);
                                        @endphp

                                        <select class="select2 form-control"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer' multiple
                                            data-maximum-selection-length="3">
                                            @foreach ($array_area as $index => $item)
                                                <option :key="{{ $key }}" value="{{ $item }}"
                                                    @if (in_array($item, $fetch_answer)) selected="selected" @endif>
                                                    {{ $item }}</option>
                                            @endforeach
                                        </select>
                                        @error('answer_wire_arr.3.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_services')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        @php
                                            $answer = $record->answer;
                                            $service_area = ['BHRT', 'IV Therapy', 'Desiccated Thyroid', 'Vitamin Injections'];
                                            $fetch_answer = explode(',', $answer);
                                        @endphp

                                        <select class="select2 form-control"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer' multiple>
                                            @foreach ($service_area as $item)
                                                <option :key="{{ $key }}" value="{{ $item }}"
                                                    @if (in_array($item, $fetch_answer)) selected @endif>
                                                    {{ $item }}</option>
                                            @endforeach
                                        </select>
                                        @error('answer_wire_arr.4.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_website')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control" id="">
                                        @error('answer_wire_arr.5.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif

                                @if ($record->question_id == 'q_associations')
                                    <label class="col-sm-4 col-form-label"
                                        for="{{ $record->question_id }}">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        @php
                                            $answer = $record->answer;
                                            $array_association = ['Canadian College of Naturopathic Medicine (CCNM)', 'Ontario Association of Naturopathic Doctors (OAND)', 'Canadian Association of Naturopathic Doctors (CAND)', 'College Of Naturopaths of Ontario (CONO)'];
                                            $fetch_answer = explode(',', $answer);
                                        @endphp
                                        <select class="select2 form-control"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            id="{{ $record->question_id }}" multiple>
                                            @foreach ($array_association as $item)
                                                <option :key="{{ $key }}" value="{{ $item }}"
                                                    @if (in_array($item, $fetch_answer)) selected @endif>
                                                    {{ $item }}</option>
                                            @endforeach
                                        </select>
                                        @error('answer_wire_arr.6.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_session')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="radio" name="{{ $record->question_id }}"
                                            id="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            value="Yes" :key="{{ $key }}"
                                            {{ $record->answer == 'Yes' ? 'checked' : '' }}>
                                        <label for="{{ $record->question_id }}">Yes</label>
                                        <input type="radio" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            value="No" :key="{{ $key }}"
                                            {{ $record->answer == 'No' ? 'checked' : '' }}>
                                        <label for="{{ $record->question_id }}">No</label>
                                        @error('answer_wire_arr.7.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_year')
                                    <label class="col-sm-4 col-form-label"
                                        for="{{ $record->question_id }}">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="number" name="{{ $record->question_id }}"
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
                                @if ($record->question_id == 'q_awarness')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }}
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control"
                                            id="{{ $record->question_id }}">
                                        @error('answer_wire_arr.9.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif

                                @if ($record->question_id == 'q_vcname')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control"
                                            id="{{ $record->question_id }}">
                                        @error('answer_wire_arr.12.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_vcemail')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control"
                                            id="{{ $record->question_id }}">
                                        @error('answer_wire_arr.13.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_vc_postal')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control"
                                            id="{{ $record->question_id }}">
                                        @error('answer_wire_arr.14.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_vc_working_hours')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    @php
                                        $virtual_clinic_timing = json_decode($answer_wire_arr[$key]['answer']);
                                    @endphp
                                    <div class="row mb-2">
                                        <div class="col-sm-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Day</th>
                                                        <th>Working Hours</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach ($virtual_clinic_timing as $day)
                                                        <tr>
                                                            <td>{{ $day->value->name }}</td>
                                                            <td>
                                                                @if ($day->value->isWorking)
                                                                    {{ $day->value->startTime ?? '-' }} to
                                                                    {{ $day->value->endTime ?? '-' }}
                                                                @else
                                                                    Closed
                                                                @endif
                                                                {{-- @if ($day->value->isWorking)
                                                                    <input type="text" class="form-control"
                                                                        value="{{ $day->value->startTime ?? '-' }}"> to
                                                                    <input type="text" class="form-control"
                                                                        value="{{ $day->value->endTime ?? '-' }}">
                                                                @else
                                                                    Closed
                                                                @endif --}}
                                                            </td>

                                                        </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_vclongitude')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control"
                                            id="{{ $record->question_id }}">
                                        @error('answer_wire_arr.16.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_vclatitude')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control"
                                            id="{{ $record->question_id }}">
                                        @error('answer_wire_arr.17.answer')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                @endif
                                @if ($record->question_id == 'q_vcplace_id')
                                    <label class="col-sm-4 col-form-label">{{ $record->question_title }} <span
                                            class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <input type="text" name="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer'
                                            :key="{{ $key }}" class="form-control"
                                            id="{{ $record->question_id }}">
                                        @error('answer_wire_arr.18.answer')
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
                                    <label class="col-sm-4 col-form-label"
                                        for="{{ $record->question_id }}">{{ $record->question_title }}
                                        <span class='text-danger'>*</span>
                                    </label>
                                    <div class="col-sm-8">
                                        <select class="select2 form-control" id="{{ $record->question_id }}"
                                            wire:model.defer='answer_wire_arr.{{ $key }}.answer[]' multiple>
                                            @foreach ($clinics_name as $item)
                                                <option value="{{ $item }}"
                                                    @if (in_array($item, $clinics_name)) selected @endif>
                                                    {{ $item }}</option>
                                            @endforeach
                                            {{-- @if (!is_null($clinics_id))
                                                @foreach ($clinics_id as $item)
                                                    @if (!is_null($item))
                                                        @if (!is_null($item))
                                                            <input type="text" class="form-control"
                                                                value="{{ $item->id }}">
                                                        @endif
                                                    @endif
                                                @endforeach
                                            @endif --}}
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

                        @if ($has_completed != 0)

                            @if ($is_new_clinic->is_new_clinic != null && $is_clinic_approved == 1 && $has_pract_approved == 0)
                                <button type="submit" wire:click="submit('{{ $session_id }}')"
                                    class="btn btn-primary">Save
                                    Practitioner to Database</button>
                                <button type="button" wire:click="approvePractitioner('{{ $session_id }}')"
                                    class="btn btn-success">Approve Practitioner & Push to AC & WP</button>
                            @elseif ($is_new_clinic->is_new_clinic == null && $is_clinic_approved == 0 && $has_pract_approved == 0)
                                <button type="submit" wire:click="submit('{{ $session_id }}')"
                                    class="btn btn-primary">Save
                                    Practitioner to Database</button>
                                <button type="button" wire:click="approvePractitioner('{{ $session_id }}')"
                                    class="btn btn-success">Approve Practitioner & Push to AC & WP</button>
                            @elseif ($has_pract_approved == 1 && $has_completed == 1)
                                <span class="btn btn-success">Approved Practitioner</span>
                            @endif

                        @endif

                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script>
<script>
    //Initialize Select2 Elements
    $('.select2').select2({
        tags: true
    })
</script>
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCM4YQppR1MGzngkbEL7L1jWoOxsVT6L0o">
</script>
<script>
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var input = document.getElementById('clinic_address');
        var autocomplete = new google.maps.places.Autocomplete(input, {
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(45.4215296, -75.6971931)
            ),
        });

        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            let place_name = place.formatted_address;
            let split_city = place_name.split(',');
            let city = split_city[1];
            let province = split_city[2];
            let country = split_city[3];
            let address = city.concat(',', province, ',', country);
            //   console.log(split_city[1][2][3]);
            $('#clinic_latitude').val(place.geometry['location'].lat());
            $('#clinic_longitude').val(place.geometry['location'].lng());
            $('#clinic_address').val(place_name);
            $('#clinic_city').val(address.trim());
            $('#clinic_place_id').val(place.place_id);
        });
    }
</script>
