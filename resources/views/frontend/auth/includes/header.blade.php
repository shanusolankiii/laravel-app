<body>	
	@include('google-tag.ga-tag-body')
	<!-- Main Wrapper -->
	<div class="main-wrapper">
		<!-- Header -->
		<div class="header">
			<!-- Logo -->
			<div class="header-left">
				<a href="#" class="logo">
					<img class="logo-full img-fluid" src="{{ asset('assets/images/logo.png') }}" alt="HealthBuddha">
					<img class="logo-small img-fluid" src="{{ asset('assets/images/logo-small.png') }}" alt="HealthBuddha">
				</a>
			</div>
			<!-- /Logo -->
			<a id="toggle_btn" href="javascript:void(0);">
				<span class="bar-icon">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</a>
			<!-- Header Title -->
			<div class="page-title-box">
				<h3>Welcome, {{ $practitioner->pract_name }}@if ($practitioner->pract_designation != null), @endif
					{{ $practitioner->pract_designation }}
				</h3>					
			</div>
			<!-- /Header Title -->
			<a id="mobile_btn" class="mobile_btn" href="#sidebar">
				<span class="bar-icon">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</a>
			<!-- Header Menu -->
			<ul class="nav user-menu">
				<li class="nav-item dropdown has-arrow main-drop">
					<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-toggle="dropdown" id="user-menu-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
						<span class="user-img"><img style="height: 30px; width: 30px;" src="{{ $practitioner->pract_image }}" alt="{{ $practitioner->pract_name }}" class="img-fluid">
							<span class="status online"></span></span>
							{{-- <span>{{ auth()->user()->name }}</span> --}}
						</a>
						<div class="dropdown-menu" aria-labelledby="user-menu-dropdown">
							<a class="dropdown-item" href="{{ route('practitioner-profile') }}">My Profile</a>
							<a class="dropdown-item" href="{{ route('logout') }}">Logout</a>
						</div>
					</li>
				</ul>
				<!-- /Header Menu -->
			</div>
			<!-- /Header -->