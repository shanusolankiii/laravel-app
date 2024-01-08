<body>	
	@include('google-tag.ga-tag-body')
    <div class="main-wrapper">
	@php 
	$logged_in_user = auth()->user();	
	@endphp
      <!-- Header -->
      <header id="header" class="header">
        <div class="container">
          <!-- Navigation -->
          <nav class="navbar align-items-center px-0">
            <!-- Logo -->
            <div class="logo">
              <a href="https://healthbuddha.ca/"><img src="{{ asset('logo.png') }}" alt="" class="img-fluid"></a>
            </div>
            <!-- Mobile Hamburger Menu -->
            <a id="mobile_btn" class="mobile_btn d-xl-none order-md-1" href="#mobmenu"><span class="iconify" data-icon="dashicons:menu-alt" data-inline="false"></span></a>
            <!-- Menu -->
            <nav class="nav-menu d-none d-lg-block">
              <ul class="menu">
                <li><a href="https://healthbuddha.ca/naturopathy-courses/" title="CE Course HUB" class="">CE Course HUB</a></li>
				@if($logged_in_user !='' )
					<li><a href="{{ route('practitioner-profile') }}" title="Practitioner Profile" class="">My Account</a></li>
				@else
                <li><a href="{{ route('practitioner-login') }}" title="Practitioner Login" class="">Login</a></li>
                <li class="nav-btn"><a href="{{ url('join') }}" title="Join HealthBuddha For Free" class="">Join HealthBuddha For Free</a></li>
				@endif
              </ul>
            </nav>
            <!-- Menu End -->
          </nav>
          <!-- End Navigation -->
        </div>
      </header>      
      <!-- End Header -->
      <!-- Mobile Menu -->
      <div class="mobmenu" id="mobmenu">
        <div class="mobmenu-inner slimscroll">
          <div id="mobmenu-menu" class="mobmenu-menu">
            <ul class="menu">
            @if($logged_in_user !='' )
              <li><a href="https://healthbuddha.ca/naturopathy-courses/" title="CE Course HUB" class="">CE Course HUB</a></li>
              <li><a href="{{ route('practitioner-profile') }}" title="Practitioner Profile" class="">My Account</a></li>              
              @else
              <li><a href="https://healthbuddha.ca/naturopathy-courses/" title="CE Course HUB" class="">CE Course HUB</a></li>
              <li><a href="{{ route('practitioner-login') }}" title="Practitioner Login" class="">Login</a></li>
              <li class="nav-btn"><a href="{{ url('join') }}" title="Join HealthBuddha For Free" class="">Join HealthBuddha For Free</a></li>
              @endif
            </ul>
          </div>
        </div>
      </div>
      <!-- End Mobile Menu -->