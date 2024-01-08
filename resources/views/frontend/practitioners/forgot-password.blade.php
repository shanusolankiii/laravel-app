@extends('frontend.layouts.app')
@push('title')
    <title> Forgot Password | HealthBuddha</title>
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
					<h3 class="account-title">Reset Your Password</h3>
					<p class="account-subtitle">We'll send you instructions to reset your password and get you back on track.</p>
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
				<form action="{{ route('practitioner-post-forgot-password') }}" method="POST">
                    @csrf
					<div class="form-group input-group">
						<div class="input-group-prepend">
							<span class="material-symbols-outlined input-group-text">mail</span>
						</div>
						<input class="form-control" type="email" placeholder="Email ID" name="email">
                        @if ($errors->has('email'))
                            <span class="text-danger w-100">{{ $errors->first('email') }}</span>
                        @endif
					</div>
					<div class="form-group text-center">
						<button class="account-btn" type="submit">Email Me</button>
					</div>
				</form>
				<div class="account-footer">
					<div class="row justify-content-center">
						<div class="col-auto">
							Remember your password? <a href="{{ route('practitioner-login') }}">Login</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection