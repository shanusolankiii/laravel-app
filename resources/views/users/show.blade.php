<x-admin-layout>
    <div class="bg-light p-4 rounded">
        <h1>Show User Details</h1>
        <div class="mt-4">
            {{-- <a href="{{ route('users.edit', $user->id) }}" class="btn btn-info">Edit</a> --}}
            <a href="{{ route('users.index') }}" class="btn btn-default">Back</a>
        </div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mb-4">
                        @if ($user->user_profile != null)
                            <div class="text-center">
                                <img src="{{ $user->user_profile->pract_image }}" alt="avatar"
                                    class="rounded-circle img-fluid m-3 text-center"
                                    style="width: 100px; height:100px;">
                            </div>
                        @endif
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        @if ($user->user_profile != null)
                                            {{ $user->user_profile->pract_title }} {{ $user->user_profile->pract_name }}
                                        @else
                                            {{ $user->name }}
                                        @endif
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">{{ $user->email }}</p>
                                </div>
                            </div>
                            @if ($user->user_profile != null)
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Licensed Year</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ $user->user_profile->pract_license_year }}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Designation</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ $user->user_profile->pract_designation }}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Top Supported Conditions</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ $user->user_profile->pract_conditions_supported }}
                                        </p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Services</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ $user->user_profile->pract_services }}</p>
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
