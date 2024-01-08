
<form method="POST" wire:submit.prevent="save" enctype="multipart/form-data" accept=".png, .jpg, .jpeg">
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
                    <div class="card card-info" wire:transition.fade wire:key="{{ $service->id }}">
                        <div class="card-header"> 
                            <button type="submit" class="btn btn-success float-center">Save Clinic to Database</button>
                            <button type="button" class="btn btn-danger float-center"  wire:click="destroy('{{ $service->id }}')">Delete</button>
                           
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
                                    <label for="service_name">Service Name <span class='text-danger'>*</span></label>
                                    <input type="text" class="form-control"
                                        placeholder="Serice Name" wire:model.defer ="service.service_name"
                                        />                                        
                                    @error("service.service_name")                                
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                
                                <div class="form-group">
                                    <label for="service_description">Service Description <span class='text-danger'>*</span></label>
                                    <textarea class="form-control" id="service_description" name="service_description"
                                    wire:model.defer="service.service_description"></textarea>
                                    @error('service.service_description')
                                        <span class="text-danger"> 
                                                {{ $message }}
                                        </span>
                                        @enderror
                                </div>
                                <div class="form-group">
                                    <label for="service_image">Serive Image </label>
                                    <input type="file" class="form-control" id="service_image"
                                        name="service_image" placeholder="Service Description"
                                        wire:model="service_image"  />
                                    @error('service_image')
                                    <span class="text-danger"> 
                                            {{ $message }}
                                    </span>
                                    @enderror
                                    
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"
                                        name="service_visibility" wire:model.defer="service.service_visibility">
                                    <label class="form-check-   " for="exampleCheck1">Is this Service Visible to Profile?</label>                        
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck2"
                                        name="service_visibility" wire:model.defer="service.is_virtual">
                                    <label class="form-check-   " for="exampleCheck2">Is this Service Virtual?</label>                        
                                </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                
            </div>              
        </form> 
