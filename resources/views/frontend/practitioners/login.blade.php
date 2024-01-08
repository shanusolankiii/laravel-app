@extends('frontend.layouts.app')
@push('title')
    <title> Login | Health Buddha</title>
@endpush
@section('content')
<div class="product-pane d-none d-md-block">
	<div class="hb-small-logo">
		<img src="{{ asset('assets/images/logo-small.png') }}" alt="HealthBuddha">
	</div>
	<h3>FREE Platform For Practitioners</h3>
	<h1 class="product-pane-title font-weight-300 mb-4">Connecting Canadians With Local <span class="font-weight-700">Naturopaths</span></h1>
	<div class="product-pane-image">
		<img src="{{ asset('assets/images/login-img-1.png') }}" alt="HealthBuddha" class="img-fluid">
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
				@if (session()->has('webinar_token'))
					<h3 class="account-title">Login to your account and get access to valuable content specifically curated for the growth of our practitioners.</h3>
				@else	
				<h3 class="account-title">Login</h3>
				@endif
				
				@if (session()->has('course_id'))
					<p class="account-subtitle">Login to your account and access the course</p>
					@endif					
				</div>
				@if (session()->has('success'))
					<div class="alert alert-success" role="alert">
							{{ session('success') }}
					</div>
				@endif				
                @if (session()->has('error'))
                    <div class="alert alert-danger" role="alert">
                        {{ session()->get('error') }}
                        {{ session()->forget('error') }}
                    </div>
                @endif
				<form method="POST" action="{{ route('practitioner-post-login') }}">
                    @csrf
					<div class="form-group input-group">
						<div class="input-group-prepend">
							<span class="material-symbols-outlined input-group-text">mail</span>
						</div>
						<input class="form-control" type="email" placeholder="Email ID" name="email" value="{{ old('email') }}" required>
                        @if($errors->has('email'))
                            <span class="text-danger w-100">{{ $errors->first('email') }}</span>
                        @endif
					</div>
					<div class="form-group input-group">
						<div class="input-group-prepend">
							<span class="material-symbols-outlined input-group-text">lock</span>
						</div>
						<input class="form-control" type="password" placeholder="Password" name="password" value="{{ old('password') }}" required>
                        @if ($errors->has('password'))
                            <span class="text-danger w-100">{{ $errors->first('password') }}</span>
                        @endif
					</div>
					<div class="form-group text-center">
						<button class="account-btn" type="submit">Log in to HealthBuddha</button>
					</div>
				</form>
				<div class="account-footer">
					<div class="row justify-content-center">
						<div class="col-auto">
							<a href="{{ route('onboard-practitioner') }}" target="_blank">Create account</a>
						</div>
						<div class="col-auto px-0">|</div>
						<div class="col-auto">
							<a href="{{ route('practitioner-forgot-password') }}">Forgot password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection