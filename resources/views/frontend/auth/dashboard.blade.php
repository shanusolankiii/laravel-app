@extends('frontend.auth.app')
@push('title')
    <title> Profile | HealthBuddha</title>
@endpush
@section('content')
    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid center">

            <!-- Page Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col-sm-2">
                        <h3 class="page-title">My Profile</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{ route('practitioner-profile') }}">Dashboard</a></li>
                            <li class="breadcrumb-item active">My Profile</li>
                        </ul>
                    </div>
                    <div class="col-sm-8 d-none d-sm-block">
                        <!-- /23008631388/In-House-Ad-Unit-97090 -->
                        <div id='div-gpt-ad-1704125482327-0' style='min-width: 970px; min-height: 90px;'>
                            <script>
                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1704125482327-0'); });
                            </script>
                        </div>
                    </div>


                </div>
            </div>
            <!-- /Page Header -->
            <div class="card">
                <div class="card-body">
                    <div class="practitioner-profile-view">
                        <div class="row">
                            <div>
                                @if (session()->has('success'))
                                    <h3 class="alert alert-success d-flex justify-content-center">
                                        {{ session('success') }}
                                    </h3>
                                @endif
                                @if (session()->has('error'))
                                    <h3 class="alert alert-warning d-flex justify-content-center">
                                        {{ session('error') }}
                                    </h3>
                                @endif
                            </div>

                            <div class="col-md-auto">

                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-image"
                                    class="edit-icon active image-edit-icon"><i class="material-symbols-outlined">edit</i></a>
                                <div class="profile-img pb-3 border-bottom mb-3">
                                    <img src="{{ $practitioner->pract_image }}" alt="{{ trim($practitioner->pract_name) }}"
                                        class="img-fluid circle" name="pract_image">
                                </div>
                                <div class="pb-3 mb-3 profile-score">
                                    @php
                                        $count = 0;
                                        if ($practitioner->pract_image != null && $practitioner->pract_image != 'https://scaleup42.sgp1.digitaloceanspaces.com/scaleup42/portal.healthbuddha.ca/Test/default_pract_image.png') {
                                            $count = $count + 15;                                            
                                        }
                                        if ($practitioner->pract_tag_line != null) {
                                            $count = $count + 8;                                            
                                        }                                       
                                        if ($practitioner->pract_services != null) {
                                            $count = $count + 5;                                           
                                        }
                                        if ($practitioner->pract_association != null) {
                                            $count = $count + 5;                                           
                                        }                                        
                                        if ($practitioner->pract_bio != null) {
                                            $count = $count + 5;                                            
                                        }
                                        if ($practitioner->faqs != null) {
                                            $count = $count + 10;                                           
                                        }
                                        if ($practitioner->yt_video_link != null) {
                                            $count = $count + 10;                                            
                                        }
                                        if ($practitioner->pract_languages_spoken != null) {
                                            $count = $count + 2;                                            
                                        }

                                        $pract_v_clinic_working_hours = "[{\"key\":\"0\",\"value\":{\"name\":\"Monday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"1\",\"value\":{\"name\":\"Tuesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"2\",\"value\":{\"name\":\"Wednesday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"3\",\"value\":{\"name\":\"Thursday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"4\",\"value\":{\"name\":\"Friday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"5\",\"value\":{\"name\":\"Saturday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}},{\"key\":\"6\",\"value\":{\"name\":\"Sunday\",\"isWorking\":false,\"startTime\":null,\"endTime\":null}}]";

                                        if ($practitioner->pract_v_clinic_working_hours != $pract_v_clinic_working_hours) {
                                            $count = $count + 20;                                           
                                        }
                                        if ($practitioner->pract_name != null) {
                                            $count = $count + 1;                                            
                                        }                                    
                                        if ($practitioner->pract_email != null) {
                                            $count = $count + 1;                                            
                                        }                                        
                                        if ($practitioner->pract_license_year != null) {
                                            $count = $count + 1;                                           
                                        }                                        
                                        if ($practitioner->pract_conditions_supported != null) {
                                            $count = $count + 1;                                           
                                        }
                                        if ($practitioner->pract_v_clinic_address != null) {
                                            $count = $count + 1 ;
                                        }
                                        if ($practitioner->pract_free_call != 'No') {
                                            $count = $count + 15 ;
                                        }
                                        $profile_score = $count;
                                    @endphp
                                    <div class="profile-score-container">
                                        <div class="percent">
                                            <svg>
                                                <circle cx="15" cy="15" r="14"></circle>
                                                <circle cx="15" cy="15" r="14"
                                                    style="--percent: <?php echo ($profile_score); ?>"></circle>
                                            </svg>
                                            <div class="number">
                                                <p class="mb-0"><?php echo ($profile_score); ?><span>%</span></p>
                                            </div>
                                        </div>
                                        <div class="score-text pl-2">
                                            <p class="mb-0">Profile Score</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col profile-info-wrap">
                                <div class="border-bottom mb-3">
                                    <div class="row">
                                        <div class="practitioner-name col pb-0 mb-0 border-0">
                                            <h3 class="mb-1"><strong>
                                                    {{ $practitioner->pract_title }}
                                                    {{ trim($practitioner->pract_name) }}@if ($practitioner->pract_designation != null),
                                                    @endif
                                                </strong>
                                                {{ $practitioner->pract_designation }}
                                            </h3>
                                            <h6 class="font-weight-400">{{ $practitioner->pract_type }}</h6>
                                        </div>
                                        <div class="col-md-auto mb-3 mb-md-0"><a href="{{ $wp_practitioner_profile_path }}"
                                                class="btn btn-green btn-md" target="_blank">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8 profile-info-left border-end">
                                        <div class="profile-info pb-3 border-bottom mb-3">
                                            <h3 class="card-title">Personal Information
                                                <a href="javascript:void(0);" data-bs-toggle="modal"
                                                    data-bs-target="#personal-info-edit" class="edit-icon"><i
                                                        class="material-symbols-outlined">edit</i></a>
                                            </h3>
                                            <ul class="info-listing">
                                                <li>
                                                    <div class="title">Email:
                                                        @if (
                                                            $practitioner->pract_email == null ||
                                                                $practitioner->pract_email == '' ||
                                                                $practitioner->pract_email == 'Null' ||
                                                                $practitioner->pract_email == 'NULL')
                                                            <small
                                                                class="badge badge-danger d-inline-block ms-1">Missing</small>
                                                        @endif
                                                    </div>

                                                    <div class="text">
                                                        @if (
                                                            $practitioner->pract_email == null ||
                                                                $practitioner->pract_email == '' ||
                                                                $practitioner->pract_email == 'Null' ||
                                                                $practitioner->pract_email == 'NULL')
                                                            <div class="text">Information Missing</div>
                                                        @else
                                                            <a
                                                                href="mailto:{{ $practitioner->pract_email }}">{{ $practitioner->pract_email }}</a>
                                                        @endif
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">Designation:
                                                        @if (
                                                            $practitioner->pract_designation == null ||
                                                                $practitioner->pract_designation == '' ||
                                                                $practitioner->pract_designation == 'Null' ||
                                                                $practitioner->pract_designation == 'NULL')
                                                            <small
                                                                class="badge badge-danger d-inline-block ms-1">Missing</small>
                                                        @endif
                                                    </div>
                                                    @if (
                                                        $practitioner->pract_designation == null ||
                                                            $practitioner->pract_designation == '' ||
                                                            $practitioner->pract_designation == 'Null' ||
                                                            $practitioner->pract_designation == 'NULL')
                                                        <div class="text">Information Missing</div>
                                                    @else
                                                        <div class="text">{{ $practitioner->pract_designation }}</div>
                                                    @endif
                                                </li>
                                                <li>
                                                    <div class="title">Practitioner Type:
                                                        @if (
                                                            $practitioner->pract_type == null ||
                                                                $practitioner->pract_type == '' ||
                                                                $practitioner->pract_type == 'Null' ||
                                                                $practitioner->pract_type == 'NULL')
                                                            <small
                                                                class="badge badge-danger d-inline-block ms-1">Missing</small>
                                                        @endif
                                                    </div>
                                                    @if (
                                                        $practitioner->pract_type == null ||
                                                            $practitioner->pract_type == '' ||
                                                            $practitioner->pract_type == 'Null' ||
                                                            $practitioner->pract_type == 'NULL')
                                                        <div class="text">Information Missing</div>
                                                    @else
                                                        <div class="text">{{ $practitioner->pract_type }}</div>
                                                    @endif
                                                </li>
                                                <li>
                                                    <div class="title">Starting year of practice:
                                                        @if (
                                                            $practitioner->pract_license_year == null ||
                                                                $practitioner->pract_license_year == '' ||
                                                                $practitioner->pract_license_year == 'Null' ||
                                                                $practitioner->pract_license_year == 'NULL')
                                                            <small
                                                                class="badge badge-danger d-inline-block ms-1">Missing</small>
                                                        @endif
                                                    </div>
                                                    <div class="text">
                                                        @if (
                                                            $practitioner->pract_license_year == null ||
                                                                $practitioner->pract_license_year == '' ||
                                                                $practitioner->pract_license_year == 'Null' ||
                                                                $practitioner->pract_license_year == 'NULL')
                                                            @php
                                                                echo 'Information Missing';
                                                            @endphp
                                                        @else
                                                            {{ $practitioner->pract_license_year }}
                                                        @endif
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title"> Languages Spoken:
                                                        @if (
                                                            $practitioner->pract_languages_spoken == null ||
                                                            $practitioner->pract_languages_spoken == '' ||
                                                            $practitioner->pract_languages_spoken == 'Null' ||
                                                            $practitioner->pract_languages_spoken == 'NULL')
                                                            <span class="badge badge-danger d-inline-block ms-1">Missing</span>
                                                        @endif
                                                    </div>
                                                    <div class="text">
                                                        <ul class="ps-3">
                                                            @if (
                                                                $practitioner->pract_languages_spoken == null ||
                                                                    $practitioner->pract_languages_spoken == '' ||
                                                                    $practitioner->pract_languages_spoken == 'Null' ||
                                                                    $practitioner->pract_languages_spoken == 'NULL')
                                                                <li>
                                                                    @php
                                                                        echo 'Information Missing';
                                                                    @endphp
                                                                </li>
                                                            @else
                                                                @php
                                                                    $languages = $practitioner->pract_languages_spoken;
                                                                    $fetch_languages = explode(', ', $languages);
                                                                @endphp
                                                                @foreach ($fetch_languages as $item)
                                                                    <li>{{ str_replace(';', ',', $item) }}</li>
                                                                @endforeach
                                                            @endif

                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">Mission Statement:
                                                        @if (
                                                            $practitioner->pract_tag_line == null ||
                                                            $practitioner->pract_tag_line == '' ||
                                                            $practitioner->pract_tag_line == 'Null' ||
                                                            $practitioner->pract_tag_line == 'NULL')
                                                            <span class="badge badge-danger d-inline-block ms-1">Missing</span>
                                                        @endif
                                                    </div>
                                                    @if (
                                                        $practitioner->pract_tag_line == null ||
                                                            $practitioner->pract_tag_line == '' ||
                                                            $practitioner->pract_tag_line == 'Null' ||
                                                            $practitioner->pract_tag_line == 'NULL')
                                                        <div class="text">Information Missing</div>
                                                    @else
                                                        <div class="text">{{ $practitioner->pract_tag_line }}</div>
                                                    @endif
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="education-info pb-3 border-bottom mb-3">
                                            <h3 class="card-title">Education and Associations

                                                <a href="javascript:void(0);" data-bs-toggle="modal"
                                                    data-bs-target="#education-associations-edit" class="edit-icon"><i
                                                        class="material-symbols-outlined">edit</i></a>
                                            </h3>
                                            <ul class="info-listing">
                                                <li>
                                                    <div class="title"> Education and Associations:
                                                        @if (
                                                            $practitioner->pract_association == null ||
                                                                $practitioner->pract_association == '' ||
                                                                $practitioner->pract_association == 'Null' ||
                                                                $practitioner->pract_association == 'NULL')
                                                            <span
                                                                class="badge badge-danger d-inline-block ms-1">Missing</span>
                                                        @endif
                                                    </div>
                                                    <div class="text">
                                                        <ul class="ps-3">
                                                            @if (
                                                                $practitioner->pract_association == null ||
                                                                    $practitioner->pract_association == '' ||
                                                                    $practitioner->pract_association == 'Null' ||
                                                                    $practitioner->pract_association == 'NULL')
                                                                <li>
                                                                    @php
                                                                        echo 'None';
                                                                    @endphp
                                                                </li>
                                                            @else
                                                                @php
                                                                    $association = $practitioner->pract_association;
                                                                    $fetch_association = explode(',', $association);
                                                                @endphp
                                                                @foreach ($fetch_association as $item)
                                                                    <li>{{ str_replace(';', ',', $item) }}</li>
                                                                @endforeach
                                                            @endif

                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="practice-info pb-3 border-bottom mb-3">
                                            <h3 class="card-title">Practice Information
                                                <a href="javascript:void(0);" data-bs-toggle="modal"
                                                    data-bs-target="#practice-info-edit" class="edit-icon"><i
                                                        class="material-symbols-outlined">edit</i></a>
                                            </h3>
                                            <ul class="info-listing">
                                                <li>
                                                    <div class="title">Top Supported Conditions:
                                                        @if (
                                                            $practitioner->pract_conditions_supported == null ||
                                                                $practitioner->pract_conditions_supported == '' ||
                                                                $practitioner->pract_conditions_supported == 'Null' ||
                                                                $practitioner->pract_conditions_supported == 'NULL')
                                                            <span
                                                                class="badge badge-danger d-inline-block ms-1">Missing</span>
                                                        @endif
                                                    </div>
                                                    <div class="text">
                                                        <ul class="ps-3">
                                                            @if (
                                                                $practitioner->pract_conditions_supported == null ||
                                                                    $practitioner->pract_conditions_supported == '' ||
                                                                    $practitioner->pract_conditions_supported == 'Null' ||
                                                                    $practitioner->pract_conditions_supported == 'NULL')
                                                                <li>
                                                                    @php
                                                                        echo 'None';
                                                                    @endphp
                                                                </li>
                                                            @else
                                                                @php
                                                                    $condition_supported = $practitioner->pract_conditions_supported;
                                                                    $fetch_condition_supported = explode(',', $condition_supported);
                                                                @endphp
                                                                @foreach ($fetch_condition_supported as $item)
                                                                    <li>{{ $item }}</li>
                                                                @endforeach
                                                            @endif

                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">Services:
                                                        @if (
                                                            $practitioner->pract_services == null ||
                                                                $practitioner->pract_services == '' ||
                                                                $practitioner->pract_services == 'Null' ||
                                                                $practitioner->pract_services == 'NULL')
                                                            <span
                                                                class="badge badge-danger d-inline-block ms-1">Missing</span>
                                                        @endif
                                                    </div>
                                                    <div class="text">
                                                        <ul class="ps-3">
                                                            @if (
                                                                $practitioner->pract_services == null ||
                                                                    $practitioner->pract_services == '' ||
                                                                    $practitioner->pract_services == 'Null' ||
                                                                    $practitioner->pract_services == 'NULL')
                                                                <li>
                                                                    @php
                                                                        echo 'None';
                                                                    @endphp
                                                                </li>
                                                            @else
                                                                @php
                                                                    $pract_services = $practitioner->pract_services;
                                                                    $fetch_pract_services = explode(',', $pract_services);
                                                                @endphp
                                                                @foreach ($fetch_pract_services as $item)
                                                                    <li>{{ $item }}</li>
                                                                @endforeach
                                                            @endif

                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="title">Direct Bill Insurance:
                                                        @if (
                                                            $practitioner->pract_direct_bill_ins == null ||
                                                                $practitioner->pract_direct_bill_ins == '' ||
                                                                $practitioner->pract_direct_bill_ins == 'Null' ||
                                                                $practitioner->pract_direct_bill_ins == 'NULL' ||
                                                                $practitioner->pract_direct_bill_ins == 0)
                                                            <span
                                                                class="badge badge-danger d-inline-block ms-1">Missing</span>
                                                        @endif
                                                    </div>
                                                    @if (
                                                        $practitioner->pract_direct_bill_ins == null ||
                                                            $practitioner->pract_direct_bill_ins == 'Null' ||
                                                            $practitioner->pract_direct_bill_ins == 'NULL' ||
                                                            $practitioner->pract_direct_bill_ins == '' ||
                                                            $practitioner->pract_direct_bill_ins == 0)
                                                        <div class="text">Information Missing</div>
                                                    @else
                                                        <div class="text">{{ $practitioner->pract_direct_bill_ins }}
                                                        </div>
                                                    @endif

                                                </li>
                                                <li>
                                                    <div class="title">15-min Discovery Call:
                                                        @if (
                                                            $practitioner->pract_free_call == null ||
                                                                $practitioner->pract_free_call == 'Null' ||
                                                                $practitioner->pract_free_call == 'NULL' ||
                                                                $practitioner->pract_free_call == '' ||
                                                                $practitioner->pract_free_call == 0)
                                                            <span
                                                                class="badge badge-danger d-inline-block ms-1">Missing</span>
                                                        @endif
                                                    </div>
                                                    @if (
                                                        $practitioner->pract_free_call == null ||
                                                            $practitioner->pract_free_call == 'Null' ||
                                                            $practitioner->pract_free_call == 'NULL' ||
                                                            $practitioner->pract_free_call == '' ||
                                                            $practitioner->pract_free_call == 0)
                                                        <div class="text">Information Missing</div>
                                                    @else
                                                        <div class="text">{{ $practitioner->pract_free_call }}</div>
                                                    @endif

                                                </li>
                                            </ul>
                                        </div>
                                        <div class="clinic-info pb-3 border-bottom mb-3">
                                            <h3 class="card-title">Clinic Information
                                                @if (
                                                    $practitioner->pract_clinic == null ||
                                                        $practitioner->pract_clinic == '' ||
                                                        $practitioner->pract_clinic == 'Null' ||
                                                        $practitioner->pract_clinic == 'NULL')
                                                    <span class="badge badge-danger d-inline-block ms-1"
                                                        style="font-size: 11px;font-weight: 600;">Missing</span>
                                                @endif
                                                <a href="javascript:void(0);" data-bs-toggle="modal"
                                                    data-bs-target="#clinic-info-edit" class="edit-icon"><i
                                                        class="material-symbols-outlined">edit</i></a>
                                            </h3>
                                            @foreach ($all_selected_clinics as $clinic_data)
                                                @if ($clinic_data != null)
                                                    <ul class="info-listing">
                                                        <li>
                                                            <div class="title">Clinic Name:</div>
                                                            <div class="text">
                                                                <ul class="ps-3">
                                                                    <li>
                                                                        <strong>{{ $clinic_data->clinic_name }}</strong><br>
                                                                        <strong>City: </strong>{{ $clinic_data->clinic_city }} <br>
                                                                        @if (!empty($clinic_data->clinic_address) || $clinic_data->clinic_address != '' || $clinic_data->clinic_address != null)
                                                                            <strong>Address: </strong>{{ $clinic_data->clinic_address }}
                                                                        @endif
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li class="d-none">
                                                            <div class="title">Offer Virtual Consults:</div>
                                                            <div class="text">
                                                                @if ($clinic_data->clinic_virtual == 1)
                                                                    {{ 'Yes' }}
                                                                @else
                                                                    {{ 'No' }}
                                                                @endif
                                                            </div>
                                                        </li>
                                                    </ul>
                                                @endif
                                            @endforeach
                                            <div class="text-right clearfix">
                                                <a href="javascript:void(0);" data-bs-toggle="modal"
                                                    data-bs-target="#add-clinic-edit" class="btn add-btn btn-sm d-none"><i
                                                        class="material-symbols-outlined">add</i> Add Clinic</a>
                                            </div>
                                        </div>
                                        {{-- Start Virtual Clinic --}}
                                        <div class="clinic-info pb-3 border-bottom mb-3">
                                            <h3 class="card-title">Private Virtual Practice
                                                {{-- <span class="badge badge-primary d-inline-block ms-1"
                                                    style="font-size: 11px;font-weight: 600;">New Feature</span> --}}
                                                <a href="javascript:void(0);" data-bs-toggle="modal"
                                                    data-bs-target="#virtual-clinic-info-edit" class="edit-icon"><i
                                                        class="material-symbols-outlined">edit</i></a>
                                            </h3>

                                            <ul class="info-listing">
                                                <li>
                                                    <div class="title">Practice Name @if (
                                                        $practitioner->pract_v_clinic_name == null ||
                                                            $practitioner->pract_v_clinic_name == '' ||
                                                            $practitioner->pract_v_clinic_name == 'Null' ||
                                                            $practitioner->pract_v_clinic_name == 'NULL' ||
                                                            $practitioner->pract_v_clinic_name == 0)
                                                            <small
                                                                class="badge badge-danger d-inline-block ms-1">Missing</small>
                                                        @endif
                                                    </div>
                                                    @if ($practitioner->is_virtually_available != 0)
                                                        @if ($practitioner->pract_v_clinic_name != null && $practitioner->pract_v_clinic_address)
                                                            <div class="text">
                                                                <ul class="ps-3">
                                                                    <li><strong>{{ $practitioner->pract_v_clinic_name }}</strong><br>
                                                                        <strong>Email:</strong>
                                                                        @if (!is_null($practitioner->pract_v_clinic_email) || !empty($practitioner->pract_v_clinic_email))
                                                                            {{ $practitioner->pract_v_clinic_email }}
                                                                        @else
                                                                            {{ 'Information Missing' }}
                                                                        @endif
                                                                        <br>
                                                                        <strong>City:
                                                                        </strong>{{ $practitioner->pract_v_clinic_address }}
                                                                        <br>
                                                                        @php
                                                                            $working_hours = json_decode($practitioner->pract_v_clinic_working_hours, true);
                                                                        @endphp
                                                                        @if (!is_null($practitioner->pract_v_clinic_working_hours))
                                                                            <table class="table mt-2">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Day</th>
                                                                                        <th>Working Hours</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    @foreach ($working_hours as $day)
                                                                                        <tr>
                                                                                            <td>{{ $day['value']['name'] }}
                                                                                            </td>
                                                                                            <td>
                                                                                                @if ($day['value']['isWorking'])
                                                                                                    {{ $day['value']['startTime'] ?? '-' }}
                                                                                                    to
                                                                                                    {{ $day['value']['endTime'] ?? '-' }}
                                                                                                @else
                                                                                                    Closed
                                                                                                @endif
                                                                                            </td>

                                                                                        </tr>
                                                                                    @endforeach
                                                                                </tbody>
                                                                            </table>
                                                                        @endif
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        @else
                                                            <div class="text">
                                                                <ul class="ps-3">
                                                                    <li>
                                                                        Information Missing
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        @endif
                                                    @else
                                                        <div class="text">
                                                            <ul class="ps-3">
                                                                <li>
                                                                    You don't provide private virtual practice!
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    @endif
                                                </li>
                                            </ul>
                                        </div>
                                        {{-- End Virtual Clinic --}}

                                        <div class="bio-info">
                                            <h3 class="card-title">About You @if ($practitioner->pract_bio == null)
                                                    <span class="badge badge-danger d-inline-block ms-1"
                                                        style="font-size: 11px;font-weight: 600;">Missing</span>
                                                @endif
                                                <a href="javascript:void(0);" data-bs-toggle="modal"
                                                    data-bs-target="#about-edit" class="edit-icon"><i
                                                        class="material-symbols-outlined">edit</i></a>
                                            </h3>
                                            <div class="bio-content">
                                                <div class="text">
                                                    <h3>{{ $practitioner->pract_title }}
                                                        {{ $practitioner->pract_name }}@if ($practitioner->pract_designation != null),
                                                        @endif
                                                        {{ $practitioner->pract_designation }}
                                                    </h3>
                                                    @if ($practitioner->pract_bio != null)
                                                        @if (strip_tags($practitioner->pract_bio) != $practitioner->pract_bio)
                                                            {!! $practitioner->pract_bio !!}
                                                        @else
                                                            <p>{{ strip_tags(html_entity_decode($practitioner->pract_bio)) }}</p>
                                                        @endif
                                                    @endif
                                                </div>
                                                @if ($practitioner->pract_bio != null)
                                                    <div class="readmore"><a href="javascript:void(0);">Read more</a>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-3 mt-md-0">
                                       <!-- /23008631388/SU42-SEO-300x300 -->
                                        <div id='div-gpt-ad-1704199303051-0' style='min-width: 300px; min-height: 300px;'>
                                            <script>
                                            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1704199303051-0'); });
                                            </script>
                                        </div>
                                    </div>
                                    {{-- <div class="col-md-5 mt-3 mt-md-0">
                                        <div class="add-box mb-3 d-none">
                                            <a href="https://www.eventbrite.com/e/2023-canadian-fertility-show-6th-annual-tickets-505313615627?aff=ebdssbdestsearch"
                                                target="_blank"><img
                                                    src="{{ asset('assets/images/profiles/HB-CFS-banner-2.jpg') }}"
                                                    alt="CFS Banner" class="img-fluid rounded"></a>
                                        </div>
                                        <div class="add-box mb-3">
                                            <a href="http://www.collaborativeeducation.ca/registration/" target="_blank">
                                                <img src="{{ asset('assets/images/profiles/HB-CE-banner-2.jpg') }}"
                                                    alt="CE Banner" class="img-fluid rounded border"></a>
                                        </div>
                                        <div class="add-box mb-3 d-none">
                                            <a href="#"> <img src="{{ asset('assets/images/profiles/ad-3.jpg') }}"
                                                    alt="Ad Image" class="img-fluid rounded"></a>
                                        </div>
                                    </div> --}}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Image -->
        <div id="edit-image" class="modal custom-modal fade" role="dialog" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Profile Image</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="image-edit-form-loader"class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <form id="image-edit-form" method="POST"
                            action="{{ route('update-profile-image', ['id' => $practitioner->id]) }}"
                            enctype="multipart/form-data" accept=".png, .jpg, .jpeg" onsubmit="showLoader(event);">
                            @csrf
                            <div class="row">

                                <div class="col-md-9">
                                    <div class="form-group">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                                name="pract_profile_image"><br/><br/>
                                                <span class="note">Only files in the formats .jpg, .jpeg, and .png are supported.</span>
                                        </div>
                                        @error('pract_profile_image')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="submit-section" style="margin-top: 40px">
                                <button class="btn btn-green submit-btn" id="edit_personal">Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <!-- /Edit Image -->
        <!-- Personal Informations Modal -->
        <div id="personal-info-edit" class="modal custom-modal fade" role="dialog" tabindex="-1" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Personal Information</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="personal-info-edit-form-loader" class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <form id="personal-info-edit-form" method="POST"
                            action="{{ route('update-personal-info', ['id' => $practitioner->id]) }}" onsubmit="showLoader(event);">
                            @csrf
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        @php
                                            $title = $practitioner->pract_title;
                                            $title_array = ['Dr.', 'Mr.', 'Mrs.', 'Miss'];
                                            $fetch_title = explode(',', $title);
                                        @endphp
                                        <label>Select Title <span class="text-danger">*</span></label>
                                        <select class="form-select" name="pract_title">
                                            @foreach ($title_array as $titles)
                                                <option>{{ $titles }}</option>
                                            @endforeach
                                        </select>
                                        @error('pract_title')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Full Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text"
                                            value="{{ $practitioner->pract_name }}" name="pract_name"
                                            placeholder="Enter your Full Name" disabled>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Email <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text"
                                            value="{{ $practitioner->pract_email }}"name="pract_email" disabled>
                                        @error('pract_email')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label>Designation <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text"
                                            value="{{ $practitioner->pract_designation }}" name="pract_designation"
                                            placeholder="Enter your Designation">
                                        @error('pract_designation')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        @php
                                            $pract_type = $practitioner->pract_type;
                                            $pract_type_array = ['Naturopathic Doctor'];
                                            $fetch_pract_type = explode(',', $pract_type);
                                        @endphp
                                        <label>Practitioner Type <span class="text-danger">*</span></label>
                                        <select class="form-select form-control" id="pract_type" name="pract_type">
                                            <option value=''>Select Practitioner Type</option>
                                            @foreach ($pract_type_array as $pract_type)
                                                <option value="{{ $pract_type }}"
                                                    @if (in_array(trim($pract_type), $fetch_pract_type)) selected @endif>
                                                    {{ $pract_type }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('pract_type')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label>Starting year of practice: <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text"
                                            value="{{ $practitioner->pract_license_year }}" name="pract_license_year"
                                            placeholder="YYYY">
                                        @error('pract_license_year')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                {{-- <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Phone <small>(optional)</small></label>
                                            <input class="form-control" type="text"
                                                value="{{ $practitioner->pract_phone }}" name="pract_phone"
                                                placeholder="800-622-6232" maxlength="12">
                                            @error('pract_phone')
                                                <span class="text-danger">
                                                    {{ $message }}
                                                </span>
                                            @enderror
                                        </div>
                                    </div> --}}
                                <div class="col-md-6">
                                    <div class="form-group">
                                        @php
                                            $languages = $practitioner->pract_languages_spoken;
                                            $fetch_languages = explode(', ', $languages);
                                            // dd($list);
                                        @endphp
                                        <label>Language</label>
                                        <select class="form-select" id="pract_languages_spoken"
                                            name="pract_languages_spoken[]" multiple>
                                            @foreach ($list as $lang)
                                                <option value="{{ $lang }}"
                                                    @if (in_array(trim($lang), $fetch_languages)) selected @endif>
                                                    {{ $lang }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('pract_languages_spoken')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <!-- Pract Tag Line-->
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Mission Statement:</label>
                                        <textarea placeholder="Please Enter Mission Statement here..." class="form-control mini-statement-textarea" value=""
                                            name="pract_tag_line" cols="30" rows="3">{{ old('pract_tag_line') ?? $practitioner->pract_tag_line }}</textarea>
                                        @error('pract_tag_line')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <!--End Pract Tag Line-->
                            </div>
                            <div class="submit-section">
                                <button class="btn btn-green submit-btn" id="edit_personal_d">Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <!-- /Personal Informations Modal -->

        <!-- Education and Associations Modal -->
        <div id="education-associations-edit" class="modal custom-modal fade" role="dialog" tabindex="-1"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Education and Associations</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="education-associations-edit-form-loader" class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <form id="education-associations-edit-form" method="POST"
                            action="{{ route('update-education-association', ['id' => $practitioner->id]) }}" onsubmit="showLoader(event);">
                            @csrf
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        @php
                                            $association = $practitioner->pract_association;
                                            $association_array = ['Canadian College of Naturopathic Medicine (CCNM)', 'Ontario Association of Naturopathic Doctors (OAND)', 'Canadian Association of Naturopathic Doctors (CAND)', 'College Of Naturopaths of Ontario (CONO)', 'None of the Above'];
                                            $fetch_association = explode(',', $association);
                                        @endphp
                                        <label>Associations</label>
                                        <select class="form-select pract_association" name="pract_association[]" multiple>
                                            @foreach ($association_array as $association)
                                                <option value="{{ $association }}"
                                                    @if (in_array($association, $fetch_association)) selected @endif>{{ $association }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('pract_association')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="submit-section">
                                <button class="btn btn-green submit-btn" id="edit_education">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Education and Associations Modal -->

        <!-- About Modal -->
        <div id="about-edit" class="modal custom-modal fade" role="dialog" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">About You </h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="about-edit-form-loader"class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <form id="about-edit-form" method="POST"
                            action="{{ route('update-about-us', ['id' => $practitioner->id]) }}"onsubmit="showLoader(event);">
                            @csrf
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control ckeditor" name="pract_bio" id="pract_bio">{{ $practitioner->pract_bio }}</textarea>
                                    </div>
                                </div>
                                @error('pract_bio')
                                    <span class="text-danger">
                                        {{ $message }}
                                    </span>
                                @enderror
                            </div>
                            <div class="submit-section">
                                <button class="btn btn-green submit-btn" id="edit_about">Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <!-- /About Modal -->

        <!-- Practice Info Modal -->
        <div id="practice-info-edit" class="modal custom-modal fade" role="dialog" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Practice Information</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="practice-info-edit-form-loader" class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <form id="practice-info-edit-form" method="POST"
                            action="{{ route('update-practice-info', ['id' => $practitioner->id]) }}" onsubmit="showLoader(event);">
                            @csrf
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        @php
                                            $conditions = $practitioner->pract_conditions_supported;
                                            $conditions_array = ['Perimenopause & Menopause', 'PCOS/PMS', 'Fertility & Pregnancy', 'Acne & Skincare', 'Weight Management', 'Thyroid Support'];
                                            $fetch_conditions = explode(',', $conditions);
                                        @endphp
                                        <label>Top supported Conditions <span class="text-danger">*</span></label>
                                        <select class="form-select pract_conditions_supported"
                                            data-maximum-selection-length="3" name="pract_conditions_supported[]"
                                            multiple>
                                            @foreach ($conditions_array as $condition)
                                                <option value="{{ $condition }}"
                                                    @if (in_array($condition, $fetch_conditions)) selected @endif>{{ $condition }}
                                                </option>
                                            @endforeach

                                        </select>
                                        @error('pract_conditions_supported')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        @php
                                            $services = $practitioner->pract_services;
                                            $services_array = ['Bioidentical Hormone Replacement Therapy (BHRT)', 'IV Therapy', 'Desiccated Thyroid', 'Vitamin Injections', 'None of the Above'];
                                            $fetch_services = explode(',', $services);
                                        @endphp
                                        <label>Services</label>
                                        <select class="form-select pract_services" name="pract_services[]" multiple>
                                            @foreach ($services_array as $service)
                                                <option value="{{ $service }}"
                                                    @if (in_array($service, $fetch_services)) selected @endif>{{ $service }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('pract_services')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                {{-- <div class="col-md-4">
                                        <div class="form-group row">
                                            <label class="col-lg-12 col-form-label">Accepting Patients <span
                                                    class="text-danger">*</span></label>
                                            <div class="col-lg-12">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="pract_accepting_new"
                                                        id="accepting_patients_yes" value="Yes"
                                                        {{ $practitioner->pract_accepting_new == 'Yes' ? 'checked' : '' }}>
                                                    <label class="form-check-label" for="accepting_patients_yes">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="pract_accepting_new"
                                                        id="accepting_patients_no" value="No"
                                                        {{ $practitioner->pract_accepting_new == 'No' ? 'checked' : '' }}>
                                                    <label class="form-check-label" for="accepting_patients_no">
                                                        No
                                                    </label>
                                                </div>
                                                @error('pract_accepting_new')
                                                    <span class="text-danger">
                                                        {{ $message }}
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div> --}}
                                <div class="col-md-4">
                                    <div class="form-group row">
                                        <label class="col-lg-12 col-form-label">Direct Bill Insurance</label>
                                        <div class="col-lg-12">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio"
                                                    name="pract_direct_bill_ins" id="direct_bill_yes" value="Yes"
                                                    {{ $practitioner->pract_direct_bill_ins == 'Yes' ? 'checked' : '' }}>
                                                <label class="form-check-label" for="direct_bill_yes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio"
                                                    name="pract_direct_bill_ins" id="direct_bill_no" value="No"
                                                    {{ $practitioner->pract_direct_bill_ins == 'No' ? 'checked' : '' }}>
                                                <label class="form-check-label" for="direct_bill_no">
                                                    No
                                                </label>
                                            </div>
                                            @error('pract_direct_bill_ins')
                                                <span class="text-danger">
                                                    {{ $message }}
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group row">
                                        <label class="col-lg-12 col-form-label">15-min Discovery Call <span
                                                class="text-danger">*</span></label>
                                        <div class="col-lg-12">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="pract_free_call"
                                                    id="discovery_call_yes" value="Yes"
                                                    {{ $practitioner->pract_free_call == 'Yes' ? 'checked' : '' }}>
                                                <label class="form-check-label" for="discovery_call_yes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="pract_free_call"
                                                    id="discovery_call_no" value="No"
                                                    {{ $practitioner->pract_free_call == 'No' ? 'checked' : '' }}>
                                                <label class="form-check-label" for="pract_free_call_no">
                                                    No
                                                </label>
                                            </div>
                                            @error('pract_free_call')
                                                <span class="text-danger">
                                                    {{ $message }}
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="submit-section">
                                <button class="btn btn-green submit-btn" id="edit_condition_service">Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <!-- /Practice Info Modal -->

        <!-- Clinic Info Modal -->
        <div id="clinic-info-edit" class="modal custom-modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Clinic Information</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="clinic-info-edit-form-loader" class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <span><small id="msg"><i>Note: Start typing the name of the clinic here.</i>
                            </small></span><br>
                        <form id="clinic-info-edit-form" method="POST"
                            action="{{ route('update-clinic-info', ['id' => $practitioner->id]) }}" onsubmit="showLoader(event);">
                            @csrf
                            <div class="row">

                                <div class="col-12">
                                    <div class="form-group">
                                        @php
                                            $clinic_name = $practitioner->pract_clinic;
                                            if (strpos($clinic_name, '#') === 0) {
                                                $clinic_name = substr($clinic_name, 1);
                                            }
                                            $fetch_clinic_name = explode('#', $clinic_name);
                                            sort($fetch_clinic_name);
                                        @endphp
                                        <label><strong>Select a clinic: </strong></label>
                                        <select class="form-select pract_clinic" name="pract_clinic[]" multiple
                                            style="width:200px;">
                                            @foreach ($fetch_clinic_name as $clinic)
                                                <option value="{{ $clinic }}" @if (in_array($clinic, $fetch_clinic_name)) selected @endif>
                                                    {{ $clinic }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('pract_clinic')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="submit-section mb-2">
                                <button class="btn btn-green submit-btn" id="edit_clinics">Update</button>
                            </div>
                        </form>
                        <div class="text-center clearfix">
                            <span class="">
                                If you did not find your clinic in the list, <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-clinic-edit" class="custom-add-clinic">Click here</a> to Add Clinic
                            </span>
                            {{-- <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-clinic-edit"
                                class="btn add-btn btn-sm rajni"><i class="material-symbols-outlined">add</i> Add
                                Clinic</a> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Clinic Info Modal -->

        <!-- Add Clinic Modal -->
        <div id="add-clinic-edit" class="modal custom-modal fade" role="dialog" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Clinic</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="add-clinic-edit-form-loader" class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <form id="add-clinic-edit-form" method="POST"
                            action="{{ route('add-clinic-info', ['id' => $practitioner->id]) }}" onsubmit="showLoader(event);">
                            @csrf
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="hidden" name="user_id" value="{{ auth()->id() }}"
                                            class="form-control" readonly>
                                        <label>Clinic Name <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="clinic_name"
                                            placeholder="Enter clinic name">
                                        @error('clinic_name')
                                            <span class="alert alert-danger">{{ $mesaage }}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Clinic Email <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="clinic_email"
                                            placeholder="Enter clinic email">
                                        @error('clinic_email')
                                            <span class="alert alert-danger">{{ $mesaage }}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Address Line 1 <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" id="clinic_address_1"
                                            name="clinic_address_1" autocomplete="off">
                                        <input class="form-control" type="text" id="clinic_address_latitude"
                                            name="clinic_address_latitude">
                                        <input class="form-control" type="text" id="clinic_address_longitude"
                                            name="clinic_address_longitude">
                                        <input class="form-control" type="text" id="clinic_address_place_id"
                                            name="clinic_address_place_id">
                                        @error('clinic_address_1')
                                            <span class="alert alert-danger">{{ $mesaage }}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 d-none">
                                    <div class="form-group">
                                        <label>Address Line 2 </label>
                                        <input class="form-control" type="text" id="clinic_address_2"
                                            name="clinic_address_2">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>City <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" id="clinic_city" name="clinic_city"
                                            readonly>
                                        @error('clinic_city')
                                            <span class="alert alert-danger">{{ $mesaage }}</span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="checkbox" class="form-check-input d-inline-block me-2"
                                            id="clinic_virtual" name="clinic_virtual">
                                        <label class="form-check-label" for="clinic_virtual">This clinic provide
                                            virtual services.</label>
                                    </div>
                                </div>
                                <div class="col-12 d-none">
                                    <div class="form-group">
                                        <label>Zip Code <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" id="clinic_zip_code"
                                            name="clinic_zip_code">
                                    </div>
                                </div>
                            </div>
                            <div class="submit-section">
                                <button class="btn btn-green submit-btn w-20" id="add_new_clinic">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add Clinic Modal -->

        <!-- Virtual Clinic Info Modal -->
        <div id="virtual-clinic-info-edit" class="modal custom-modal fade" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Private Virtual Practice Information</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="virtual-clinic-info-edit-form-loader" class="form-loading-wrap d-none align-items-center justify-content-center position-absolute w-100  h-100" style="background-color: rgb(255 255 255 / 60%); top:0;left: 0;z-index: 99;display: flex;border-radius: 0.375rem;">
                            <img src="{{ asset('assets/images/load-loading.gif') }}" alt="Your Details Are Submitting.....Please Wait...." style="max-width: 60px;" />
                        </div>
                        <form id="virtual-clinic-info-edit-form" method="POST"
                            action="{{ route('update-virtual-clinic-info', ['id' => $practitioner->id]) }}" onsubmit="showLoader(event);">
                            @csrf

                            <div class="form-group text-center">
                                <h6 for="provideVirtualPractice">Do you provide Private Virtual Practice?</h6><br>
                                <div class="d-inline-block">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="toggleFormYes"
                                            name="provide_virtual_practice" value="1" <?php if ($practitioner->is_virtually_available == 1) {
                                                echo 'checked';
                                            } ?>>
                                        <label class="form-check-label" for="toggleFormYes">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="toggleFormNo"
                                            name="provide_virtual_practice" value="2" <?php if ($practitioner->is_virtually_available == 0) {
                                                echo 'checked';
                                            } ?>>
                                        <label class="form-check-label" for="toggleFormNo">No</label>
                                    </div>
                                </div>
                                @if ($practitioner->pract_v_clinic_name != null)
                                    <div>
                                        <span id="disabledServiceMessage" class="text-danger" style="display: none;">You've temporarily disabled the service, please click on YES to activate again.</span>
                                    </div>
                                @endif
                            </div>

                            <div id="formContainer" style="display:<?php
                            if ($practitioner->pract_v_clinic_name != null && $practitioner->is_virtually_available != 2) {
                                echo 'block';
                            } else {
                                echo 'none';
                            }
                            ?>;">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"
                                                value="{{ $practitioner->pract_v_clinic_name }}"
                                                name="pract_v_clinic_name" placeholder="Enter your name"
                                                id="pract_v_clinic_name">
                                            @error('pract_v_clinic_name')
                                                <span class="text-danger">
                                                    {{ $message }}
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Email <span class="text-danger">*</span></label>
                                            <input class="form-control" type="email"
                                                value="{{ $practitioner->pract_v_clinic_email }}"
                                                name="pract_v_clinic_email" placeholder="Enter your email"
                                                id="virtual_clinic_email">
                                            @error('pract_v_clinic_email')
                                                <span class="text-danger">
                                                    {{ $message }}
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Postal Code <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text"
                                                value="{{ $practitioner->pract_v_clinic_address }}"
                                                name="pract_v_clinic_address" placeholder="Enter your postal code"
                                                id="virtual_clinic_address" autocomplete="off">
                                            <input class="form-control" type="hidden"
                                            value="{{ $practitioner->pract_v_clinic_place_id }}"
                                            name="virtual_clinic_address_place_id" placeholder="Enter your postal code"
                                            id="virtual_clinic_address_place_id" readonly>
                                            <input class="form-control" type="hidden"
                                                value="{{ $practitioner->pract_v_clinic_longitude }}"
                                                name="virtual_clinic_address_latitude" placeholder="Enter your postal code"
                                                id="virtual_clinic_address_latitude" readonly>
                                            <input class="form-control" type="hidden"
                                                value="{{ $practitioner->pract_v_clinic_longitude }}"
                                                name="virtual_clinic_address_longitude" placeholder="Enter your postal code"
                                                id="virtual_clinic_address_longitude" readonly>
                                            @error('pract_v_clinic_address')
                                                <span class="text-danger">
                                                    {{ $message }}
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12 pt-3">
                                        <div class="form-group">
                                            @if (is_null($practitioner->pract_v_clinic_working_hours))
                                                <label>Working Hours</label>
                                                <div class="align-items-center row">
                                                    <div class="col-md-6 d-none d-md-block"></div>
                                                    <div class="col-md-6 d-none d-md-block">
                                                        <div class="row">
                                                            <div class="col-5"><label>Start Time:</label></div>
                                                            <div class="col-2 text-center">
                                                                <span>-</span>
                                                            </div>
                                                            <div class="col-5"><label>End Time:</label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                @php
                                                    $days = [['name' => 'Monday', 'isWorking' => true, 'startTime' => null, 'endTime' => null], ['name' => 'Tuesday', 'isWorking' => true, 'startTime' => null, 'endTime' => null], ['name' => 'Wednesday', 'isWorking' => true, 'startTime' => null, 'endTime' => null], ['name' => 'Thursday', 'isWorking' => true, 'startTime' => null, 'endTime' => null], ['name' => 'Friday', 'isWorking' => true, 'startTime' => null, 'endTime' => null], ['name' => 'Saturday', 'isWorking' => true, 'startTime' => null, 'endTime' => null], ['name' => 'Sunday', 'isWorking' => true, 'startTime' => null, 'endTime' => null]];
                                                    $workingHours = json_encode(
                                                        array_map(
                                                            function ($i, $day) {
                                                                return [
                                                                    'key' => strval($i),
                                                                    'value' => $day,
                                                                ];
                                                            },
                                                            array_keys($days),
                                                            $days,
                                                        ),
                                                        JSON_UNESCAPED_UNICODE,
                                                    );
                                                @endphp
                                                @foreach ($days as $i => $day)
                                                    <div class="row align-items-center">
                                                        <div class="col-md-3">
                                                            <strong>{{ $day['name'] }}</strong>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-check px-0">
                                                                <div id="workinghours-button"
                                                                    class="workinghours-toggle-button mb-0">
                                                                    <input class="form-check-input checkbox"
                                                                        type="checkbox"
                                                                        id="working_hours_{{ $i }}"
                                                                        name="working_hours[{{ $i }}][isWorking]"
                                                                        {{ $day['isWorking'] ? 'checked' : '' }}>
                                                                    <div class="knobs"></div>
                                                                    <div class="layer"></div>
                                                                    <label class="form-check-label d-none"
                                                                        id="label_{{ $i }}"
                                                                        for="working_hours_{{ $i }}">Closed</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div id="working_hours_fields_{{ $i }}"
                                                                class="working-hours-fields"
                                                                style="{{ $day['isWorking'] ? 'display: block' : 'display: none' }}">
                                                                <div class="row align-items-center">
                                                                    <div class="col-5">
                                                                        <label class="d-md-none">Start Time:</label>
                                                                        <input class="form-control form-control-sm"
                                                                            type="time"
                                                                            name="working_hours[{{ $i }}][startTime]"
                                                                            placeholder="Start Working Hour"
                                                                            value="{{ $day['startTime'] }}">
                                                                    </div>
                                                                    <div class="col-2 text-center">
                                                                        <span>-</span>
                                                                    </div>
                                                                    <div class="col-5">
                                                                        <label class="d-md-none">End Time:</label>
                                                                        <input class="form-control form-control-sm"
                                                                            type="time"
                                                                            name="working_hours[{{ $i }}][endTime]"
                                                                            placeholder="End Working Hour"
                                                                            value="{{ $day['endTime'] }}">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br>
                                                @endforeach
                                            @else
                                                @php
                                                    $working_hours = json_decode($practitioner->pract_v_clinic_working_hours, true);
                                                @endphp
                                                <label>Working Hours</label>
                                                <div class="align-items-center row">
                                                    <div class="col-md-6 d-none d-md-block"></div>
                                                    <div class="col-md-6 d-none d-md-block">
                                                        <div class="row">
                                                            <div class="col-5"><label>Start Time:</label></div>
                                                            <div class="col-2 text-center">
                                                                <span>-</span>
                                                            </div>
                                                            <div class="col-5"><label>End Time:</label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                @foreach ($working_hours as $day)
                                                    <div class="row align-items-center">
                                                        <div class="col-md-3">
                                                            <strong>{{ $day['value']['name'] }}</strong>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-check px-0">
                                                                <div id="workinghours-button"
                                                                    class="workinghours-toggle-button mb-0">
                                                                    <input class="form-check-input checkbox"
                                                                        type="checkbox"
                                                                        id="working_hours_{{ $day['key'] }}"
                                                                        name="working_hours[{{ $day['key'] }}][isWorking]"
                                                                        {{ $day['value']['isWorking'] ? 'checked' : '' }}>
                                                                    <div class="knobs"></div>
                                                                    <div class="layer"></div>
                                                                    <label class="form-check-label d-none"
                                                                        id="label_{{ $day['key'] }}"
                                                                        for="working_hours_{{ $day['key'] }}">
                                                                        {{ $day['value']['isWorking'] ? 'Open' : 'Closed' }}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div id="working_hours_fields_{{ $day['key'] }}"
                                                                class="working-hours-fields">
                                                                @if ($day['value']['isWorking'])
                                                                    <div class="row align-items-center">
                                                                        <div class="col-5">
                                                                            <label class="d-md-none">Start Time:</label>
                                                                            <input class="form-control form-control-sm"
                                                                                type="time"
                                                                                value="{{ $day['value']['startTime'] ?? '-' }}"
                                                                                name="working_hours[{{ $day['key'] }}][startTime]"
                                                                                placeholder="Start Working Hour">
                                                                        </div>
                                                                        <div class="col-2 text-center">
                                                                            <span>-</span>
                                                                        </div>
                                                                        <div class="col-5">
                                                                            <label class="d-md-none">End Time:</label>
                                                                            <input class="form-control form-control-sm"
                                                                                type="time"
                                                                                value="{{ $day['value']['endTime'] ?? '-' }}"
                                                                                name="working_hours[{{ $day['key'] }}][endTime]"
                                                                                placeholder="End Working Hour">
                                                                        </div>
                                                                    </div>
                                                                @else
                                                                    <div class="row align-items-center">
                                                                        <div class="col-5">
                                                                            <label class="d-md-none">Start Time:</label>
                                                                            <input class="form-control form-control-sm"
                                                                                type="time"
                                                                                value="{{ $day['value']['startTime'] ?? '-' }}"
                                                                                name="working_hours[{{ $day['key'] }}][startTime]"
                                                                                placeholder="Start Working Hour">
                                                                        </div>
                                                                        <div class="col-2 text-center">
                                                                            <span>-</span>
                                                                        </div>
                                                                        <div class="col-5">
                                                                            <label class="d-md-none">End Time:</label>
                                                                            <input class="form-control form-control-sm"
                                                                                type="time"
                                                                                value="{{ $day['value']['endTime'] ?? '-' }}"
                                                                                name="working_hours[{{ $day['key'] }}][endTime]"
                                                                                placeholder="End Working Hour">
                                                                        </div>
                                                                    </div>
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br>
                                                @endforeach
                                            @endif
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="submit-btn  btn btn-lg btn-green" id="update_virtual">Update</button>
                                    </div>
                                </div>
                            </div>
                            <div id="noPrivatePractice" style="display:block;" class="text-center">
                                <span>You Don't Provide Private Virtual Practice</span>
                                <div class="submit-section">
                                    <button id="updateButton" class="submit-btn btn btn-lg btn-green">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- / Virtual Clinic Info Modal -->

     </div>

<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<link href="{{ asset('vendor/select2/css/select2.min.css') }}" rel="stylesheet" />
<script src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script>
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCM4YQppR1MGzngkbEL7L1jWoOxsVT6L0o">
</script>
<script>
    $(document).ready(function() {
        $("#edit_personal").click(function(){
            $("#image-edit-form-loader").removeClass("d-none");
        });
        $("#edit_personal_d").click(function(){
            $("#personal-info-edit-form-loader").removeClass("d-none");
        });
        $("#update_virtual").click(function(){
            $("#virtual-clinic-info-edit-form-loader").removeClass("d-none");
        });
        // $("#add_new_clinic").click(function(){
        //     $("#add-clinic-edit-form-loader").removeClass("d-none");
        // });
        $("#add_new_clinic").click(function(){
            // Manually trigger the form submission when the button is clicked
            $('#add-clinic-edit-form').submit();
        });
        $("#edit_clinics").click(function(){
            $("#clinic-info-edit-form-loader").removeClass("d-none");
        });
        $("#edit_condition_service").click(function(){
            $("#practice-info-edit-form-loader").removeClass("d-none");
        });
        $("#edit_about").click(function(){
            $("#about-edit-form-loader").removeClass("d-none");
        });
        $("#edit_education").click(function(){
            $("#education-associations-edit-form-loader").removeClass("d-none");
        });
        $("#updateButton").click(function(){
            $("#virtual-clinic-info-edit-form-loader").removeClass("d-none");
        });

        $('input[type="checkbox"]').change(function() {
            var checkboxId = $(this).attr('id');
            var fieldId = checkboxId.replace('working_hours_', 'working_hours_fields_');
            $('#' + fieldId).toggle(this.checked);

            var labelId = "label_" + checkboxId.substring(14);
            var labelText = this.checked ? 'Open' : 'Closed';
            $('#' + labelId).text(labelText);
        }).change();
    });
</script>
<script>
    $(document).ready(function() {
        @error('pract_profile_image')
            $('#edit-image').modal('show');
        @enderror
        $("#clinic_address_latitude").addClass("d-none");
        $("#clinic_address_longitude").addClass("d-none");
        $("#clinic_address_place_id").addClass("d-none");
    });
</script>
<script>
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var input = document.getElementById('clinic_address_1');
        var autocomplete = new google.maps.places.Autocomplete(input, {
            componentRestrictions: {
                country: ['ca']
            },
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(45.4215296, -75.6971931)
            ),
        });

        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            let place_name = place.formatted_address;
            console.log(place_name);
            let split_city = place_name.split(',');
            let city = split_city[1];
            let province = split_city[2];
            let country = split_city[3];
            let address = city.concat(',', province, ',', country);
            console.log(split_city[1]);
            $('#clinic_address_latitude').val(place.geometry['location'].lat());
            $('#clinic_address_longitude').val(place.geometry['location'].lng());
            $('#clinic_city').val(address);
            $('#clinic_address_place_id').val(place.place_id);
        });
    }
</script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const toggleFormYes = document.getElementById('toggleFormYes');
        const toggleFormNo = document.getElementById('toggleFormNo');
        const formContainer = document.getElementById('formContainer');
        const noPrivatePractice = document.getElementById('noPrivatePractice');
        const disabledServiceMessage = document.getElementById('disabledServiceMessage');


        // Function to enable/disable form fields
        function enableFormFields(enabled) {
            const formInputs = formContainer.querySelectorAll('input');
            for (const input of formInputs) {
                input.disabled = !enabled;
            }
            disabledServiceMessage.style.display = enabled ? 'none' : 'block';
        }

        toggleFormYes.addEventListener('change', function() {
            formContainer.style.display = toggleFormYes.checked ? 'block' : 'none';
            noPrivatePractice.style.display = toggleFormYes.checked ? 'none' : 'block';
            enableFormFields(toggleFormYes.checked);
        });

        toggleFormNo.addEventListener('change', function() {
            formContainer.style.display = toggleFormNo.checked ? 'none' : 'block';
            noPrivatePractice.style.display = toggleFormNo.checked ? 'block' : 'none';
            enableFormFields(!toggleFormNo.checked);
        });

        // Check if virtual practice data is available and hide the update button
        const virtualPracticeNameInput = document.getElementById('pract_v_clinic_name');
        const virtualPracticeName = virtualPracticeNameInput.value.trim();
        const virtualPracticeDataAvailable = virtualPracticeName.length > 0 || virtualPracticeNameInput
            .placeholder.length > 0;

        if (virtualPracticeDataAvailable) {
            noPrivatePractice.style.display = 'none';
            const isVirtuallyAvailable = {{  $practitioner->is_virtually_available }};
            enableFormFields(isVirtuallyAvailable !== 0);
        }
    });
</script>

<script>
    // JavaScript code to disable the form and update is_virtual value when the "Disable Form" button is clicked
    $(document).ready(function() {
        $("#disable-form-btn").on("click", function() {
            // Disable form fields
            console.log('disable button clicked');
            const form = document.getElementById("virtual-clinic-info-edit-form");
            console.log(form);
            const formElements = form.elements;
            for (let i = 0; i < formElements.length; i++) {
                formElements[i].disabled = true;
            }

            // Set is_virtual value to 0
            const isVirtualInput = document.createElement("input");
            isVirtualInput.setAttribute("type", "hidden");
            isVirtualInput.setAttribute("name", "is_virtual");
            isVirtualInput.setAttribute("value", "0");
            form.appendChild(isVirtualInput);

            // Set the correct route for the form action
            // const practitionerId = "{{ $practitioner->id }}";
            form.action = "{{ route('update-virtual-clinic-info', ['id' => $practitioner->id]) }}";

            // Submit the form
            form.submit();
        });
    });
</script>

<script>
    $(document).ready(function() {
        $('#pract_languages_spoken').select2({
            dropdownParent: $('#personal-info-edit')
        });
        $('.pract_clinic').select2({
            dropdownParent: $('#clinic-info-edit'),
            placeholder: 'Select from existing list of clinics',
            ajax: {
                url: "{{ route('search-clinic') }}",
                delay: 250,
                processResults: function(data) {
                    return {
                        results: $.map(data, function(item) {
                            return {
                                text: item.clinic_name.replace("Private Practice of", "") +
                                    ", " + item.clinic_city,
                                id: item.clinic_name + ", " + item.clinic_city
                            }
                        })
                    };
                },
                cache: true
            }
        });
        $('.pract_conditions_supported').select2({
            dropdownParent: $('#practice-info-edit')
        });
        $('.pract_services').select2({
            dropdownParent: $('#practice-info-edit')
        });
        $('.pract_association').select2({
            dropdownParent: $('#education-associations-edit')
        });
        $('.pract_education').select2({
            dropdownParent: $('#education-associations-edit')
        });

    });
</script>
<script>
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var input = document.getElementById('virtual_clinic_address');
        var autocomplete = new google.maps.places.Autocomplete(input, {
            componentRestrictions: {
                country: ['ca']
            },
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(45.4215296, -75.6971931)
            ),
        });
        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            let place_name = place.formatted_address;
            console.log(place_name);
            let split_city = place_name.split(',');
            let city = split_city[1];
            let province = split_city[2];
            let country = split_city[3];
            let address = city.concat(',', province, ',', country);
            console.log(split_city[1]);
            $('#virtual_clinic_address').val(place_name);
            $('#virtual_clinic_address_latitude').val(place.geometry['location'].lat());
            $('#virtual_clinic_address_longitude').val(place.geometry['location'].lng());
            $('#virtual_clinic_address_place_id').val(place.place_id);
        });
    }
</script>

@endsection
