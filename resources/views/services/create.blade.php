<x-admin-layout>
    <form method="POST" action="{{ route('service.add') }}"  enctype="multipart/form-data" accept=".png, .jpg, .jpeg">
        @csrf
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
                <div class="card card-info">
                    <div class="card-header">
                        <a class="btn btn-dark" href="{{ route('services-table') }}">Back</a>
                        <button type="submit" class="btn btn-success float-center">Save Service</button>
                        <div class="card-tools">
                            <!-- Collapse Button -->
                            <button type="button" class="btn btn-tool float-left" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <div class="form-group">
                            <label for="service_name">Service Name <span class='text-danger'>*</span></label>
                            <input type="text" class="form-control" placeholder="Service Name" name="service_name" />
                            @error('service_name')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="service_name">Service Description <span class='text-danger'>*</span></label>
                            <input type="text" class="form-control" placeholder="Service Description"
                                name="service_description" />
                            @error('service_description')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="service_image">Service Image </label>
                            <input type="file" class="form-control" id="service_image" name="service_image"
                                placeholder="Service Image" />
                            @error('service_image')
                                <span class="text-danger">
                                    {{ $message }}
                                </span>
                            @enderror

                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" name="service_visibility"
                                wire:model.defer="service.service_visibility">
                            <label class="form-check-   " for="exampleCheck1">Is this Service Visible to
                                Profile?</label>
                            @error('service_visibility')
                                <span class="text-danger">
                                    {{ $message }}
                                </span>
                            @enderror
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2" name="is_virtual">
                            <label class="form-check-    " for="exampleCheck2">Is this Service Virtual?</label>
                            @error('is_virtual')
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
        </div>
    </form>
</x-admin-layout>
