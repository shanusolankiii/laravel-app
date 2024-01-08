<style>
    .custom-heading {
        color: #e68620 !important;
    }
    .custom-green{
        color: rgb(1, 158, 1)
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="row mt-2 mx-3">

                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <div class="align-items-center align-self-start">
                                        <h4 class="mb-0">{{ $total_users }}</h4>
                                        <small></small>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="icon icon-box-success ">
                                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                                    </div>
                                </div>
                            </div>
                            <h6 class="custom-heading text-muted font-weight-normal">Total Users Visited</h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <div class="align-items-center align-self-start">
                                        <h4 class="mb-0">{{ $discovery_call_booked }}</h4>
                                        <small></small>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="icon icon-box-success ">
                                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                                    </div>
                                </div>
                            </div>
                            <h6 class="custom-heading text-muted font-weight-normal">Total Discovery Call Booked</h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <div class="align-items-center align-self-start">
                                        <h4 class="mb-0">{{ $bad_clicked }}</h4>
                                        <small></small>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="icon icon-box-success ">
                                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                                    </div>
                                </div>
                            </div>
                            <h6 class="custom-heading text-muted font-weight-normal">Total Discovery Button Clicked
                            </h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <div class="align-items-center align-self-start">
                                        <h4 class="mb-0">{{ $user_activities_log_profile_visits_count }}</h4>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <h6 class="custom-heading text-muted font-weight-normal">Total Profiles Visited</h6>
                            <small class="custom-green">Mostly <b>{{ $maxPractitionerName }}'s</b> page visited <b>{{ $maxPractitionerCount }} times</b></small>
                        </div>
                    </div>
                </div>

            </div>


            <div class="row mt-2 mx-3">

                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <h4>Total Conditions Visited</h4>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <div class="align-items-center align-self-start">
                                        <h4 class="mb-0">{{ $user_activities_log_condition_count }}</h4>
                                        <small></small>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="icon icon-box-success ">
                                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                                    </div>
                                </div>
                            </div>
                            <h6 class="custom-heading text-muted font-weight-normal">Conditions Visited</h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <h4>Total Services Visited</h4>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <div class="align-items-center align-self-start">
                                        <h4 class="mb-0">{{ $user_activities_log_services_count }}</h4>
                                        <small></small>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="icon icon-box-success ">
                                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                                    </div>
                                </div>
                            </div>
                            <h6 class="custom-heading text-muted font-weight-normal">Services Visited</h6>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <h4>Total Cities Visited</h4>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-9">
                                    <div class="align-items-center align-self-start">
                                        <h4 class="mb-0">{{ $user_activities_log_cities_count }}</h4>
                                    </div>
                                </div>
                            </div>
                            <h6 class="custom-heading text-muted font-weight-normal">Cities Visited</h6>
                        </div>
                    </div>
                </div>

            </div>

            <h4>Profile Visits</h4>
            <table class="table">
                <thead class="thead-inverse">
                    <tr>
                        <th>S.No.</th>
                        <th>Practitioner Name</th>
                        <th>User Visits</th>
                    </tr>
                    </thead>
                    @php
                        $serial_no = 0;
                    @endphp
                    @foreach ( $pract_count as $pract => $count)
                    @php
                        $serial_no++;
                    @endphp
                        <tbody>
                            <tr>
                                <td scope="row">{{ $serial_no }}</td>
                                <td>{{ $pract }}</td>
                                <td>{{ $count }}</td>
                            </tr>
                        </tbody>                        
                    @endforeach
            </table>
            
            <h4>Conditions</h4>
            <div class="row mt-2 mx-3 d-none">
                @foreach ($condition_count as $condition => $count)
                    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-9">
                                        <div class="align-items-center align-self-start">
                                            <h4 class="mb-0">{{ $count }}</h4>
                                            <small>Users Visited</small>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="icon icon-box-success ">
                                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                                        </div>
                                    </div>
                                </div>
                                <h6 class="custom-heading text-muted font-weight-normal">{{ $condition }}
                                </h6>
                            </div>
                        </div>
                    </div>
                @endforeach

            </div>
            <table class="table">
                <thead class="thead-inverse">
                    <tr>
                        <th>S.No.</th>
                        <th>Condition Name</th>
                        <th>User Visits</th>
                    </tr>
                    </thead>
                    @php
                        $serial_no = 0;
                    @endphp
                     @foreach ($condition_count as $condition => $count)
                    @php
                        $serial_no++;
                    @endphp
                        <tbody>
                            <tr>
                                <td scope="row">{{ $serial_no }}</td>
                                <td>{{ $condition }}</td>
                                <td>{{ $count }}</td>
                            </tr>
                        </tbody>                        
                    @endforeach
            </table>

            <h4>Services</h4>
            <div class="row mt-2 mx-3 d-none">
                @foreach ($service_count as $service => $count)
                    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-9">
                                        <div class="align-items-center align-self-start">
                                            <h4 class="mb-0">{{ $count }}
                                            </h4>
                                            <small>Users Visited</small>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="icon icon-box-success ">
                                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                                        </div>
                                    </div>
                                </div>
                                <h6 class="custom-heading text-muted font-weight-normal">
                                    @if ($service == 'Bioidentical Hormone Replacement Therapy (BHRT)')
                                        @php
                                            $service = 'BHRT';
                                        @endphp
                                        {{ $service }}
                                    @else
                                        {{ $service }}
                                    @endif
                                </h6>
                            </div>
                        </div>
                    </div>
                @endforeach

            </div>
            <table class="table">
                <thead class="thead-inverse">
                    <tr>
                        <th>S.No.</th>
                        <th>Condition Name</th>
                        <th>User Visits</th>
                    </tr>
                    </thead>
                    @php
                        $serial_no = 0;
                    @endphp
                       @foreach ($service_count as $service => $count)
                    @php
                        $serial_no++;
                    @endphp
                        <tbody>
                            <tr>
                                <td scope="row">{{ $serial_no }}</td>
                                <td>{{ $service }}</td>
                                <td>{{ $count }}</td>
                            </tr>
                        </tbody>                        
                    @endforeach
            </table>

            <h4>Cities</h4>
            <div class="row mt-2 mx-3 d-none">
                @foreach ($city_count as $city => $count)
                    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-9">
                                        <div class="align-items-center align-self-start">
                                            <h4 class="mb-0">{{ $count }}
                                            </h4>
                                            <small>Users Visited</small>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="icon icon-box-success ">
                                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                                        </div>
                                    </div>
                                </div>
                                <h6 class="custom-heading text-muted font-weight-normal">{{ $city }}
                                </h6>
                            </div>
                        </div>
                    </div>
                @endforeach

            </div>
            <table class="table">
                <thead class="thead-inverse">
                    <tr>
                        <th>S.No.</th>
                        <th>Condition Name</th>
                        <th>User Visits</th>
                    </tr>
                    </thead>
                    @php
                        $serial_no = 0;
                    @endphp
                       @foreach ($city_count as $city => $count)
                    @php
                        $serial_no++;
                    @endphp
                        <tbody>
                            <tr>
                                <td scope="row">{{ $serial_no }}</td>
                                <td>{{ $city }}</td>
                                <td>{{ $count }}</td>
                            </tr>
                        </tbody>                        
                    @endforeach
            </table>

            <h4>Conditions Viewed by City</h4>
            <div class="row mt-2 mx-3">
                <div class="col-xl-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Condition</th>
                                        <th>Users Visited</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($conditionCounts as $cityName => $conditions)
                                        @foreach ($conditions as $conditionName => $count)
                                            <tr>
                                                <td>{{ $cityName }}</td>
                                                <td>{{ $conditionName }}</td>
                                                <td>{{ $count }}</td>
                                            </tr>
                                        @endforeach
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            

            <h4>Services Viewed by City</h4>
            <div class="row mt-2 mx-3 d-none">
                <div class="col-xl-12 grid-margin stretch-card">
                    <div class="card">
                        @foreach ($serviceCounts as $cityName => $conditions)
                            <div class="card-body">
                                <h5 class="card-title">{{ $cityName }}</h5><br>
                                <div class="row mt-2 mx-3">
                                    @foreach ($conditions as $conditionName => $count)
                                        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-9">
                                                            <div class="align-items-center align-self-start">
                                                                <h4 class="mb-0">{{ $count }}</h4>
                                                                <small>Users Visited</small>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="icon icon-box-success">
                                                                <span class="mdi mdi-arrow-top-right icon-item"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="custom-heading text-muted font-weight-normal">
                                                        {{ $conditionName }}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="row mt-2 mx-3">
                <div class="col-xl-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Services</th>
                                        <th>Users Visited</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($conditionCounts as $cityName => $conditions)
                                        @foreach ($conditions as $conditionName => $count)
                                            <tr>
                                                <td>{{ $cityName }}</td>
                                                <td>{{ $conditionName }}</td>
                                                <td>{{ $count }}</td>
                                            </tr>
                                        @endforeach
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
