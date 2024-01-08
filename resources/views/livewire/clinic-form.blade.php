<form method="POST" wire:submit.prevent="save('{{ $clinic->id }}')">
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
            <div class="card card-info" wire:transition.fade wire:key="{{ $clinic->id }}">
                <div class="card-header">
                    @if ($clinic_master->is_approved == 0 && $clinic_master->is_completed == 1)
                        <button type="submit" class="btn btn-success float-center">Save Clinic to Database</button>
                        <button type="button" class="btn btn-warning float-center"
                            wire:click="approve('{{ $clinic->id }}')">Approve Clinic & Push to WP</button>
                        @if ($clinic_master_info->toArray() != null)
                            <button type="button" class="btn btn-dark float-center"
                                wire:click="unapproveClinic('{{ $clinic->id }}')">Unapprove Clinic</button>
                        @endif
                    @else
                        <a href="javascript:void(0)" class="btn btn-success">Approved Clinic</a>
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
                   @if (!is_null($practitioner_name))
                   <div class="form-group">
                       <label for="clinic_name">Clinic Added By: </label>
                       <span class="text-muted">{{ $practitioner_name }}</span>
                       {{-- <input type="text" class="form-control" value="{{ $practitioner_name }}" readonly /> --}}
                   </div>                       
                   @endif
                    <div class="form-group">
                        <label for="clinic_name">Clinic Name <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" placeholder="Clinic Name"
                            wire:model.defer="clinic.clinic_name" />

                        @error('clinic.clinic_name')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="clinic_email">Clinic Email <span class='text-danger'>*</span></label>
                        <input type="email" class="form-control" id="clinic_email" name="clinic_email"
                            placeholder="Clinic Email" wire:model.defer="clinic.clinic_email" />
                        @error('clinic.clinic_email')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="clinic_phone">Clinic Phone </label>
                        <input type="text" class="form-control" id="clinic_phone" name="clinic_phone"
                            placeholder="Clinic Phone[ex.800-622-6232]" wire:model.defer="clinic.clinic_phone"
                            maxlength="12" />
                        @error('clinic.clinic_phone')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="clinic_rating">Clinic Rating </label>
                        <input type="s" class="form-control" id="clinic_rating" name="clinic_rating"
                            placeholder="Clinic Rating" wire:model.defer="clinic.clinic_rating" />
                        @error('clinic.clinic_rating')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>    
                    <div class="form-group">
                        <label for="clinic_website_url">Clinic Website URL <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="clinic_website_url" name="clinic_website_url"
                            placeholder="Clinic Website URL" wire:model.defer="clinic.clinic_website_url" />
                        @error('clinic.clinic_website_url')
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
                        <label for="clinic_address">Clinic Address <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="clinic_address" name="clinic_address"
                            placeholder="Clinic Address" wire:model.defer="clinic.clinic_address" />
                        @error('clinic.clinic_address')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                        <input class="form-control" type="hidden" id="clinic_latitude" name="clinic_address_latitude">
                        <input class="form-control" type="hidden" id="clinic_longitude"
                            name="clinic_address_longitude">

                    </div>
                    <div class="form-group">
                        <label for="clinic_city">Clinic City <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="clinic_city" name="clinic_city"
                            placeholder="Clinic City" wire:model.defer="clinic.clinic_city" readonly />
                        @error('clinic.clinic_city')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="clinic_place_id">Clinic PlaceID <span class='text-danger'>*</span></label>
                        <input type="text" class="form-control" id="clinic_place_id" name="clinic_place_id"
                            placeholder="Clinic PlaceID" wire:model.defer="clinic.clinic_placeID" readonly />
                        @error('clinic.clinic_placeID')
                            <span class="text-danger">
                                {{ $message }}
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="clinic_description">Clinic Description</label>
                        <textarea class="form-control" id="clinic_description" name="clinic_description"
                            wire:model.defer="clinic.clinic_description"></textarea>

                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="clinic_virtual"
                            wire:model.defer="clinic.clinic_virtual">
                        <label class="form-check-label" for="exampleCheck1">Is This A Virtual
                            Clinic?</label>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        @if ($clinic_master->is_approved != 2 && $clinic_master_info->toArray() != null)
            <div class="col-lg-12">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Matching Clinic Information</h3>
                        <div class="card-tools">
                            <!-- Collapse Button -->
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                    class="fas fa-minus"></i></button>
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
@push('scripts')
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCM4YQppR1MGzngkbEL7L1jWoOxsVT6L0o">
    </script>
    <script>
        google.maps.event.addDomListener(window, 'load', initialize);

  function initialize() {
      var input = document.getElementById('clinic_address');
      var autocomplete = new google.maps.places.Autocomplete(input, {
          componentRestrictions: { country: ['ca'] },
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
                $('#clinic_city').val(address);
                $('#clinic_place_id').val(place.place_id);
            });
        }
    </script>
@endpush
