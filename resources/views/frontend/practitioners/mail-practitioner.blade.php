@extends('frontend.layouts.app')
@push('title')
    <title> Welcome | Health Buddha</title>
@endpush
@section('content')
<div class="product-pane d-none d-md-block">
	<div class="hb-small-logo">
		<img src="{{ asset('assets/images/logo-small.png') }}" alt="HealthBuddha">
	</div>
	<h1 class="product-pane-title font-weight-300 mb-4">Connecting Canadians With Local <span class="font-weight-700">Naturopaths</span></h1>
	<div class="product-pane-image">
		<img src="{{ asset('assets/images/login-img.png') }}" alt="HealthBuddha" class="img-fluid">
	</div>
</div>
<div class="account-content">
	<div class="container">
		<div class="account-box">
			<!-- Account Logo -->
			<div class="account-logo text-center">
				<img src="{{ asset('assets/images/logo.png') }}" alt="HealthBuddha" class="img-fluid">
			</div>
			<!-- Login Form -->
			<div id="loginform-wrap" class="account-wrapper">
				<div class="account-header text-center mb-4">
					<h3 class="account-title">Welcome</h3>
					<p>Dear <b>{!! $practitioner_name !!},</b></p>
				</div>
				@if (session()->has('success'))
					<div class="alert alert-success" role="alert">
							{{ session('success') }}
					</div>
				@endif	
				@if (session()->has('error'))
					<div class="alert alert-danger" role="alert">
							{{ session('error') }}
					</div>
				@endif	
				
			</div>
		</div>
	</div>
</div>
@endsection