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
                <a class="btn btn-primary float-center m-2" href="{{ route('seo-table') }}">Back</a>
            </div>
        </div>
        <form method="POST" wire:submit.prevent="create">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-info">
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="form-group">
                                <label for="page_title">Page Title<span class='text-danger'>*</span></label>
                                <input type="text" class="form-control" placeholder="Page Title"
                                    name="page_title" wire:model.defer="seo_urls.page_title" />
                                @error('seo_urls.page_title')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="slug">Slug<span class='text-danger'>*</span></label>
                                <input type="text" class="form-control" placeholder="Slug"
                                    name="slug" wire:model.defer="seo_urls.slug" />
                                @error('seo_urls.slug')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>

                            <div class="form-group">
                                <label for="url">URL <span class='text-danger'>*</span></label>
                                <input type="text" class="form-control" placeholder="URL"
                                    name="url" wire:model.defer="seo_urls.url" />
                                @error('seo_urls.url')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="canonical_url">Canonical URL <span class='text-danger'>*</span></label>
                                <input type="text" class="form-control" placeholder="Canonical URL"
                                    name="canonical_url" wire:model.defer="seo_urls.canonical_url" />
                                @error('seo_urls.canonical_url')
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
