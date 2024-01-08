@if ($is_new_clinic->is_new_clinic != null && $is_new_clinic->is_new_clinic == 1 && $number_of_clinics == 1)
<form method="POST" id="clinic-approve" wire:submit.prevent="update">
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
    <div class="row">
        <div class="col-lg-6">
            <div class="card card-info" wire:transition.fade wire:key="{{ $session_id }}">
                <div class="card-header">  
                    @if ($is_clinic_approved == 0)
                        
                    <button type="submit" class="btn btn-success float-center">Save Clinic to Database</button>
                    <button type="button" class="btn btn-warning float-center"
                            wire:click="approveClinic()">Approve Clinic & Push to WP</button>
                    @else
                    <a href="javascript:void(0)" 
                        class="btn btn-success">Approved Clinic</a>
                    @endif                  
                    <div class="card-tools">
                        <!-- Collapse Button -->
                        <button type="button" class="btn btn-tool float-left" data-card-widget="collapse"><i
                                class="fas fa-minus"></i></button>
                    </div>
                    <!-- /.card-tools -->
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    
                        <div class="form-group">
                            <label for="clinic_name">Clinic Name <span class='text-danger'>*</span></label>
                            <input type="text" class="form-control" name="clinic_name"
                                placeholder="Clinic Name" wire:model.defer="clinic_name" disabled="disabled"
                                />
                            @error("clinic_name")                                
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="clinic_email">Clinic Email <span class='text-danger'>*</span></label>
                            <input type="email" class="form-control" id="clinic_email" name="clinic_email"
                                placeholder="Clinic Email" wire:model.defer="clinic_email" disabled="disabled"
                                    />
                                    @error('clinic_email')
                                    <span class="text-danger">
                                    {{ $message }}
                                </span>
                                @enderror
                        </div>
                        <div class="form-group">
                            <label for="clinic_phone">Clinic Phone  </label>
                            <input type="text" class="form-control" id="clinic_phone" name="clinic_phone"
                                placeholder="Clinic Phone[ex.800-622-6232]" wire:model.defer="clinic_phone" />
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
                            <label for="clinic_website_url">Clinic Website URL <span class='text-danger'>*</span></label>
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
                    <h3 class="card-title">Clinic Address Information</h3>
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
                        <label for="clinic_address">Clinic Address <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="clinic_address" name="clinic_address"
                            placeholder="Clinic Address" wire:model.defer="clinic_address"
                                />
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
                        <label for="clinic_city">Clinic City <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="clinic_city" name="clinic_city"
                            placeholder="Clinic City" wire:model.defer="clinic_city" readonly />
                        @error('clinic_city')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="clinic_place_id">Clinic PlaceID <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="clinic_place_id"
                            name="clinic_place_id" placeholder="Clinic PlaceID"
                            wire:model.defer="clinic_placeID" readonly />
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
    </div>
</form>
@endif