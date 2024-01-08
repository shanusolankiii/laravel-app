<div>
    <div class="editable-card">
        <div class="card-body">
            <h3 class="mb-3">Practitioner Details</h3>
            <!-- Message after updation -->
            <div class="col-lg-12">
                @if (session()->has('message'))
                    <div class="alert alert-success message-box" role="alert">
                        {{ session('message') }}
                    </div>
                @endif
                @if (session()->has('error'))
                    <div class="alert alert-danger message-box" role="alert">
                        {{ session('error') }}
                    </div>
                @endif
            </div>
            <!-- Message after updation -->

            <form wire:submit.prevent="update" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="mt-2 m-lg-2 text-right">
                                <a href="{{ route('approved-pract') }}" class="btn btn-secondary mx-1">Back</a>
                                <a href="{{ $pract_profile_url }}/" class="btn btn-warning mx-1" target="_blank">View
                                    Profile</a>
                                <button type="submit" class="btn btn-info mx-1">Update</button>
                                @if ($practitioner->pract_visibility == 1)
                                <button type="button" class="btn btn-danger float-center mx-1"
                                wire:click="disablePractitioner()">Disable</button>
                                @else
                                <button type="button" class="btn btn-success float-center mx-1"
                                wire:click="enablePractitioner()">Enable</button>
                                @endif                                
                                <button type="button" class="btn btn-outline-primary mx-1" data-toggle="modal"
                                    data-target="#youtube-video-link">
                                    Add YT Video
                                </button>
                                <button type="button" class="btn btn-outline-dark mx-1" data-toggle="modal"
                                    data-target="#faqs-edit">
                                    Add FAQs
                                </button>
                                @if (!empty($practitioner->faqs) && $practitioner->faqs !== '[]')
                                    <button type="button" class="btn btn-outline-success mx-1" data-toggle="modal"
                                        data-target="#update-faq-modal">
                                        Update FAQs
                                    </button>
                                @endif
                                @if (!empty($practitioner->yt_video_link) && $practitioner->yt_video_link !== '[]')
                                    <button type="button" class="btn btn-outline-info mx-1" data-toggle="modal"
                                        data-target="#update-yt-video">
                                        Update Video
                                    </button>
                                @endif
                            </div>
                            <div class="row mt-2 mx-3">
                                <div class="position-relative top-0">
                                    <label for="imageInput" class="position-absolute top-0 end-0 translate-middle p-2"
                                        style="left:90px;">
                                        <i class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                                    </label>
                                    <img src="{{ $pract_image }}" alt="{{ $pract_name }}"
                                        class="rounded-circle img-fluid m-3" style="width: 100px; height: 100px;">
                                    <input type="file" wire:model="pract_image" class="d-none" id="imageInput">
                                </div>
                                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="align-items-center align-self-start">
                                                        <h3 class="mb-0">{{ $practitioner->profile_users_visit }}</h3>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="icon icon-box-success ">
                                                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="text-muted font-weight-normal"> Total Users Viewed Profile</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <h3 class="mb-0">{{ $practitioner->bad_clicked }}</h3>
                                                        {{-- <p class="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p> --}}
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="icon icon-box-danger">
                                                        <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="text-muted font-weight-normal">Discovery Call Button Clicked</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <h3 class="mb-0">{{ $practitioner->discovery_call_booked }}
                                                        </h3>
                                                        {{-- <p class="text-success ml-2 mb-0 font-weight-medium">+11%</p> --}}
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="icon icon-box-success">
                                                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="text-muted font-weight-normal">Discovery Call Booked</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Title:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="text" name="pract_title" wire:model="pract_title"
                                            class="form-control" id="">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Name:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="text" name="pract_name" wire:model="pract_name"
                                            class="form-control" id="">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Email:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="text" name="pract_email" wire:model="pract_email"
                                            class="form-control" id="">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Licensed Year:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="text" name="pract_license_year"
                                            wire:model="pract_license_year" class="form-control" id="">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Short Introduction:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <textarea name="pract_tag_line" wire:model="pract_tag_line" class="form-control" rows="5"></textarea>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Designation:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="text" name="pract_designation" wire:model="pract_designation"
                                            class="form-control" id="">
                                    </div>
                                </div>
                                <hr>
                                
                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Degree</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="text" name="pract_degrees" wire:model="pract_degrees"
                                            class="form-control" id="">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Website URL:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="text" name="pract_website" wire:model="pract_website"
                                            class="form-control" id="">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Language:</p>
                                        </b>
                                    </div>
                                    @php
                                        $languages = $practitioner->pract_languages_spoken;
                                        $fetch_languages = explode(',', $languages);
                                    @endphp
                                    <div class="col-sm-9">
                                        <select class="select2 form-control" multiple
                                            wire:model="pract_languages_spoken">
                                            @foreach ($lang_list as $lang)
                                                <option value="{{ $lang }}"
                                                    @if (in_array(trim($lang), $fetch_languages)) selected @endif>
                                                    {{ $lang }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Top Supported Conditions:</p>
                                        </b>
                                    </div>
                                    @php
                                        $all_conditions = ['Perimenopause & Menopause', 'PCOS/PMS', 'Fertility & Pregnancy', 'Acne & Skincare', 'Weight Management', 'Thyroid Support'];
                                    @endphp
                                    <div class="col-sm-9">
                                        <select class="select2 form-control" multiple
                                            data-maximum-selection-length="3" wire:model="pract_conditions_supported">
                                            @foreach ($all_conditions as $conditions)
                                                <option value="{{ $conditions }}"
                                                    @if (in_array($conditions, $pract_conditions_supported)) selected="selected" @endif>
                                                    {{ $conditions }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Services:</p>
                                        </b>
                                    </div>
                                    @php
                                        $all_services = ['Bioidentical Hormone Replacement Therapy (BHRT)', 'IV Therapy', 'Desiccated Thyroid', 'Vitamin Injections'];
                                    @endphp
                                    <div class="col-sm-9">
                                        <select class="select2 form-control" multiple="multiple"
                                            wire:model="pract_services">
                                            @foreach ($all_services as $service)
                                                <option value="{{ $service }}"
                                                    @if (in_array($service, $pract_services)) selected="selected" @endif>
                                                    {{ $service }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Associations:</p>
                                        </b>
                                    </div>
                                    @php
                                        $array_association = ['Canadian College of Naturopathic Medicine (CCNM)', 'Ontario Association of Naturopathic Doctors (OAND)', 'Canadian Association of Naturopathic Doctors (CAND)', 'College Of Naturopaths of Ontario (CONO)'];
                                    @endphp
                                    <div class="col-sm-9">
                                        <select class="select2 form-control" multiple="multiple"
                                            wire:model="pract_association">
                                            @foreach ($array_association as $association)
                                                <option value="{{ $association }}"
                                                    @if (in_array($association, $pract_association)) selected="selected" @endif>
                                                    {{ $association }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Direct Bill Ins:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="radio" id="yes"
                                            value="{{ $pract_direct_bill_ins ? 'Yes' : 1 }}"
                                            wire:model="pract_direct_bill_ins">
                                        <label for="yes">Yes</label>
                                        <input type="radio" id="no"
                                            value="{{ $pract_direct_bill_ins ? 'No' : 0 }}"
                                            wire:model="pract_direct_bill_ins">
                                        <label for="no">No</label>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Free Discovery Call:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="radio" id="yes"
                                            value="{{ $pract_free_call ? 'Yes' : 1 }}" wire:model="pract_free_call">
                                        <label for="yes">Yes</label>
                                        <input type="radio" id="no"
                                            value="{{ $pract_free_call ? 'No' : 0 }}" wire:model="pract_free_call">
                                        <label for="no">No</label>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Accepting New:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <input type="radio" id="accepting-yes"
                                            value="{{ $pract_accepting_new ? 'Yes' : 1 }}"
                                            wire:model="pract_accepting_new">
                                        <label for="accepting-yes">Yes</label>
                                        <input type="radio" id="accepting-no"
                                            value="{{ $pract_accepting_new ? 'No' : 0 }}"
                                            wire:model="pract_accepting_new">
                                        <label for="accepting-no">No</label>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Practitioner Clinic:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <select class="select2 form-control" multiple="multiple"
                                            wire:model="pract_clinic">
                                            @foreach ($clinics as $clinic)
                                                <option
                                                    value="{{ $clinic->clinic_name . ', ' . $clinic->clinic_city }}"
                                                    @if (in_array($clinic->clinic_name . ', ' . $clinic->clinic_city, $pract_clinic)) selected="selected" @endif>
                                                    {{ $clinic->clinic_name . ', ' . $clinic->clinic_city }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">Virtual Clinic Details:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <label for="accepting-yes">Name</label>
                                        <input type="text" name="pract_v_clinic_name"
                                            wire:model="pract_v_clinic_name" class="form-control" id="">
                                        <br>
                                        <label for="accepting-yes">Email</label>
                                        <input type="text" name="pract_v_clinic_email"
                                            wire:model="pract_v_clinic_email" class="form-control" id="">
                                        <br>
                                        <label for="accepting-yes">Address</label>
                                        <input type="text" name="pract_v_clinic_address"
                                            wire:model="pract_v_clinic_address" class="form-control" id="">
                                        <br>
                                        <label for="accepting-yes">Clinic ID</label>
                                        <input type="text" name="pract_v_clinic_place_id"
                                            wire:model="pract_v_clinic_place_id" class="form-control" id="">
                                        <br>
                                        <label for="accepting-yes">Latitide:</label>
                                        <input type="text" name="pract_v_clinic_latitude"
                                            wire:model="pract_v_clinic_latitude" class="form-control" id="">
                                        <br>
                                        <label for="accepting-yes">Longitude</label>
                                        <input type="text" name="pract_v_clinic_longitude"
                                            wire:model="pract_v_clinic_longitude" class="form-control"
                                            id="">
                                        <br>
                                        <label>Working Hours</label>
                                        @if($working_hours)
                                        @foreach ($working_hours as $day)
                                            <div class="row">
                                                <div class="col-sm-3">{{ $day['value']['name'] }}</div>
                                                <div class="col-sm-9">
                                                    @if ($day['value']['isWorking'])
                                                        <input type="time"
                                                            wire:model="working_hours.{{ $day['key'] }}.value.startTime"
                                                            placeholder="Start Time">
                                                        -
                                                        <input type="time"
                                                            wire:model="working_hours.{{ $day['key'] }}.value.endTime"
                                                            placeholder="End Time">
                                                    @else
                                                        <input type="time"
                                                            wire:model="working_hours.{{ $day['key'] }}.value.startTime"
                                                            placeholder="Start Time">
                                                        -
                                                        <input type="time"
                                                            wire:model="working_hours.{{ $day['key'] }}.value.endTime"
                                                            placeholder="End Time">
                                                        <span class="text-danger">Closed</span>
                                                    @endif
                                                </div>
                                            </div>
                                        @endforeach
                                        @endif

                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-sm-3">
                                        <b>
                                            <p class="mb-0">About/Bio:</p>
                                        </b>
                                    </div>
                                    <div class="col-sm-9">
                                        <textarea name="pract_bio" wire:model="pract_bio" class="form-control" rows="15"></textarea>
                                        @error('pract_bio')
                                            <span class="text-danger">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <!-- Youtube Videos -->
            <div wire:ignore.self class="modal custom-modal fade" id="youtube-video-link" role="dialog"
                tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">YouTube Video </h5>
                            {{-- <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> --}}
                        </div>
                        <div class="modal-body">
                            <form wire:submit.prevent="saveVideoLinks">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="yt_title">Title:</label><br>
                                            <input wire:model="yt_title" class="form-control" type="text"
                                                name="yt_title">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="yt_link">Link:</label><br>
                                            <input type="text" wire:model="yt_link" class="form-control"
                                                name="yt_link" rows="4" cols="50" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-primary">Add Video</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Youtube Videos -->

            <!-- Update Youtube Video -->
            <div id="update-yt-video" wire:ignore.self class="modal custom-modal fade" role="dialog" tabindex="-1"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Video </h5>
                            {{-- <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> --}}
                        </div>
                        <div class="modal-body">
                            @if (!empty($practitioner->yt_video_link))
                                <form wire:submit.prevent="updateYouTubeVideoLink">
                                    <div class="row">
                                        @foreach ($yt_video_link as $index => $video)
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="yt_title">Title #{{ $index + 1 }}:</label>
                                                    <button type="button" class="btn btn-danger"
                                                        wire:click="deleteYoutubeVideo({{ $index }})"><i
                                                            class="fas fa-trash-alt"></i></button><br>
                                                    <input wire:model="yt_video_link.{{ $index }}.yt_title"
                                                        class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="yt_link">Link #{{ $index + 1 }}:</label><br>
                                                    <input type="text"
                                                        wire:model="yt_video_link.{{ $index }}.yt_link"
                                                        class="form-control" rows="4" cols="50" required>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                    <div class="submit-section">
                                        <button type="submit" class="btn btn-info">Update Video</button>
                                    </div>
                                </form>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Update Youtube Video -->

            <!-- FAQS -->
            <div id="faqs-edit" wire:ignore.self class="modal custom-modal fade" role="dialog" tabindex="-1"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">FAQs </h5>
                            {{-- <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> --}}
                        </div>
                        <div class="modal-body">
                            <form wire:submit.prevent="addFAQs">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="question">Question:</label><br>
                                            <input wire:model="question" class="form-control" type="text"
                                                name="question" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="answer">Answer:</label><br>
                                            <textarea wire:model="answer" class="form-control" name="answer" rows="4" cols="50" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-dark">Add FAQ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /FAQs -->

            <!-- Update FAQS -->
            <div id="update-faq-modal" wire:ignore.self class="modal custom-modal fade" role="dialog"
                tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">FAQs </h5>
                            {{-- <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> --}}
                        </div>
                        <div class="modal-body">
                            @if (!empty($practitioner->faqs))
                                <form wire:submit.prevent="updateFAQs">
                                    <div class="row">
                                        @foreach ($practitioner->faqs ?? [] as $index => $faq)
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="question">Question #{{ $index + 1 }}:</label>
                                                    <button type="button" class="btn btn-danger"
                                                        wire:click="deleteQuestion({{ $index }})"><i
                                                            class="fas fa-trash-alt"></i></button><br>
                                                    <input wire:model="faqs.{{ $index }}.question"
                                                        class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="answer">Answer #{{ $index + 1 }}:</label><br>
                                                    <textarea wire:model="faqs.{{ $index }}.answer" class="form-control" rows="4" cols="50" required></textarea>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                    <div class="submit-section">
                                        <button type="submit" class="btn btn-success">Update FAQs</button>
                                    </div>
                                </form>
                            @endif

                        </div>
                    </div>
                </div>
            </div>
            <!-- /Update FAQs -->

        </div>
    </div>
</div>

<style>
    select {
        width: 200px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        appearance: none;
        background-color: #fff;
        font-size: 14px;
    }

    select::-ms-expand {
        display: none;
    }

    select:focus {
        outline: none;
        box-shadow: 0 0 4px #007bff;
    }

    option {
        background-color: #f2f2f2;
        color: #333;
        font-size: 14px;
        border: 1px solid #ccc;
        margin: 4px;
        padding: 8px;
    }

    option[value] {
        font-weight: bold;
    }

    option:checked {
        background-color: #8b8b8b;
        color: #fff;
    }

    option:disabled {
        background-color: #ccc;
        color: #666;
        font-style: italic;
    }
</style>

<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script>
<script>
    //Initialize Select2 Elements
    $('.select2').select2({
        tags: true
    })
</script>
<script>
    setTimeout(function() {
        document.querySelector('.message-box').style.display = 'none';
    }, 3000);
</script>