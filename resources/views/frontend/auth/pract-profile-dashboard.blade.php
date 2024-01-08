@extends('frontend.auth.app')
@push('title')
    <title> Profile | Health Buddha</title>
@endpush
@section('content')
<!-- Page Wrapper -->
<div class="page-wrapper">
    <!-- Page Content -->
    <div class="content container-fluid center">
        <!-- Page Header -->
        <div class="page-header">
            <div class="row align-items-center">
                <div class="col-sm-12">
                    <h3 class="page-title">Dashboard</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item active">Dashboard</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Page Header -->
        <div class="row">
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="align-items-center align-self-start">
                        <h3 class="mb-0">{{ $practitioner->profile_users_visit }}</h3>
                      </div>
                    </div>
                    <div class="col-3">
                        <div class="icon icon-box-success ">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                  </div>
                  <h6 class="text-muted font-weight-normal"> Total Users Viewed Profile</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0">{{ $practitioner->bad_clicked }}</h3>
                        {{-- <p class="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p> --}}
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-danger">
                        <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Discovery Call Button Clicked</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0">{{ $practitioner->discovery_call_booked }}</h3>
                        {{-- <p class="text-success ml-2 mb-0 font-weight-medium">+11%</p> --}}
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-success">
                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Discovery Call Booked</h6>
                </div>
              </div>
            </div>            
          </div>
    </div>
</div>
@endsection