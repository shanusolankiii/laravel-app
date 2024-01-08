<div>
    <div class="bg-light p-4 rounded">
        <h1>Clinics Details</h1>
        <form action="" wire:submit.prevent="update">
            <div class="mt-4">
                <a href="{{ route('approved-clinics') }}" class="btn btn-default">Back</a>
                <button type="button" class="btn btn-danger float-center" wire:click="delete()" disabled>Delete</button>
                <button type="submit" class="btn btn-info">Update</button>
            </div>
            <div class="container mt-4">
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
                    <div class="col-lg-12">
                        <div class="card mb-4">
                            <div class="card-body">

                                @if ($clinics->clinic_name != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Clinic Name</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" wire:model="clinic_name" class="form-control"
                                                disabled>
                                        </div>
                                    </div>
                                    <hr>
                                @endif
                                @if ($clinics->clinic_email != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Email</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="email" wire:model="clinic_email" class="form-control">
                                        </div>
                                    </div>
                                    <hr>
                                @endif
                                @if ($clinics->clinic_phone != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Phone Number</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="tel" wire:model="clinic_phone" class="form-control">
                                        </div>
                                    </div>
                                    <hr>
                                @endif
                                @if ($clinics->clinic_rating != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Rating</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="number" wire:model="clinic_rating" class="form-control">
                                        </div>
                                    </div>
                                    <hr>
                                @endif
                                @if ($clinics->clinic_city != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">City</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" wire:model="clinic_city" class="form-control"
                                                disabled>
                                        </div>
                                    </div>
                                    <hr>
                                @endif
                                @if ($clinics->clinic_address != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Address</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="text" wire:model="clinic_address" class="form-control"
                                                disabled>
                                        </div>
                                    </div>
                                    <hr>
                                @endif
                                @if ($clinics->clinic_website_url != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Website URL</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <input type="url" wire:model="clinic_website_url" class="form-control">
                                        </div>
                                    </div>
                                    <hr>
                                @endif
                                {{-- @if ($clinics->clinic_virtual != null) --}}
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Virtual Practice</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <select wire:model="clinic_virtual" class="form-control">
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>
                                </div>
                                <hr>
                                {{-- @endif --}}
                                @if ($clinics->clinic_description != null)
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Description</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <textarea wire:model="clinic_description" class="form-control" rows="10" cols="50"></textarea>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
