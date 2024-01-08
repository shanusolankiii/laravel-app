<div>
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
    <div>
        <div class="">
            <a class="btn btn-secondary float-center m-2" href="{{ route('popular-city') }}">Back</a>
        </div>
    </div>
    <form wire:submit.prevent="save">
        <div class="row">
            <div class="col-lg-12">
                <div class="card card-info">
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="form-group">
                            <label for="city_name">City Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" wire:model.defer="city_name"
                                placeholder="City Name">
                            @error('city_name')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="city_slug">City Slug <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" wire:model.defer="city_slug"
                                placeholder="City Slug">
                            @error('city_slug')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="city_lat">Latitude</label>
                            <input type="text" class="form-control" wire:model.defer="city_lat"
                                placeholder="Latitude">
                            @error('city_lat')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="city_long">Longitude</label>
                            <input type="text" class="form-control" wire:model.defer="city_long"
                                placeholder="Longitude">
                            @error('city_long')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <button type="submit" class="btn btn-success">Save</button>
                        <!-- /.End card-header -->
                    </div>
                </div>
            </div>
    </form>

</div>
