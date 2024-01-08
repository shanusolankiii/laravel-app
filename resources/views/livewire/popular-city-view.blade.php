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
    <form method="POST" wire:submit.prevent="save({{ $popular_city->id }})">
        <div class="row">
            <div class="col-lg-12">
                <div class="card card-info">
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="form-group">
                            <label for="city_name">City Name <span class='text-danger'>*</span></label>
                            <input type="text" class="form-control" placeholder="City Name"
                                wire:model.defer="popular_city.city_name" />
                            @error('popular_city.city_name')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="city_slug">City Slug <span class='text-danger'>*</span></label>
                            <input type="text" class="form-control" placeholder="City Slug"
                                wire:model.defer="popular_city.city_slug" />
                            @error('popular_city.city_slug')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="city_lat">City Latitude <span class='text-danger'>*</span></label>
                            <input type="text" class="form-control" placeholder="City Latitude"
                                wire:model.defer="popular_city.city_lat" />
                            @error('popular_city.city_lat')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label for="city_long">City Longitude <span class='text-danger'>*</span></label>
                            <input type="text" class="form-control" placeholder="City Longitude"
                                wire:model.defer="popular_city.city_long" />
                            @error('popular_city.city_long')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <button type="submit" class="btn btn-info float-center mx-2">Save</button>
                        {{-- <button type="button" class="btn btn-danger float-center" wire:click="delete()">Delete</button> --}}
                        <button type="button" class="btn btn-danger float-center"
                            onclick="confirmDelete()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<script>
    function confirmDelete() {
        if (confirm('Are you sure you want to delete this city?')) {
            Livewire.emit('delete');
        }
    }
</script>
