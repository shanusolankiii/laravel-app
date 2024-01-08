@extends('frontend.layouts.app')
@push('title')
    <title> Reset Password | HealthBuddha</title>
@endpush
@section('content')
@php 
$logged_in_user = auth()->user();	
@endphp
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
					<h3 class="account-title">Hello Dr. {{ $practitioner_name }}</h3>
					<p class="account-subtitle"><span class="d-block">Kindly set your new password.</span></p>
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
				<form action="{{ route('practitioner-post-reset-password') }}" method="POST">
                    @csrf
                    <input type="hidden" name="token" value="{{ $token }}">
					<div class="form-group input-group">
						<div class="input-group-prepend">
							<span class="material-symbols-outlined input-group-text">lock</span>
						</div>
						<input class="form-control" type="password" placeholder="New Password" name="password"  autofocus>
                        @if ($errors->has('password'))
                        <span class="text-danger w-100">{{ $errors->first('password') }}</span>
                        @endif
					</div>
					<div class="form-group input-group">
						<div class="input-group-prepend">
							<span class="material-symbols-outlined input-group-text">lock</span>
						</div>
						<input class="form-control" type="password" placeholder="Confirm Password" name="password_confirmation"  autofocus>
                        @if ($errors->has('password_confirmation'))
                            <span class="text-danger w-100">{{ $errors->first('password_confirmation') }}</span>
                        @endif
					</div>
					<div class="form-group text-center">
						<button class="account-btn" type="submit">Update</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
@endsection