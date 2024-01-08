<div>
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
                <a class="btn btn-primary float-center m-2" href="{{ route('languages_list') }}">Back</a>
            </div>
        </div>
        <form method="POST" wire:submit.prevent="create">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-info">
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="form-group">
                                <label for="language_name">Language Name <span class='text-danger'>*</span></label>
                                <input type="text" class="form-control" placeholder="Language Name"
                                    name="language_name" wire:model.defer="languages.language_name" />
                                @error('languages.language_name')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>

                            <div class="form-group">
                                <label for="language_code">Language Code <span class='text-danger'>*</span></label>
                                <input type="text" class="form-control" placeholder="Language Code"
                                    name="language_code" wire:model.defer="languages.language_code" />
                                @error('languages.language_code')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <button type="submit" class="btn btn-info float-center">Submit</button>
                            {{-- <button type="button" class="btn btn-danger float-center" wire:click="create()">Delete</button> --}}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

</div>
