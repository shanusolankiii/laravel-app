<div>
    <div class="bg-light p-4 rounded">
        <h3>User Location Data</h3>
        <div class="mt-4">
            <a class="btn btn-secondary float-center" href="{{ route('user-visited') }}">Back</a>
        </div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Session ID</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                    {{ trim($user_location_data->session_id) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Conditions</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ trim($user_location_data->conditions) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Services</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ trim($user_location_data->services) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Location Address</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ trim($user_location_data->location_address) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Location City</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ trim($user_location_data->location_city) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Address Longitude</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ trim($user_location_data->address_longitude) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Address Latitude</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ trim($user_location_data->address_latitude) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Address Place ID</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">
                                        {{ trim($user_location_data->address_place_id) ?: 'Not Available' }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>