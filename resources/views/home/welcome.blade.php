@extends('home.layouts.app')
@section('content')
@php
	$logged_in_user = auth()->user();
  $wp_url = config('scaleup.WP_SITE_URL');
	@endphp
 <!-- Herobanner -->
 <!-- <section id="herobanner" class="bannerbg py-lg-0 d-md-none" style="background-image:url('{{ asset('home/homebannerbg.png') }}');">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-5 text-center text-lg-left">
              <h1>Join The Community Of Naturopaths On <span class="text-orange">HealthBuddha</span></h1>
              <div class="pt-3">
                <a href="{{ url('join') }}" title="Join HealthBuddha For Free" class="btn btn-green btn-lg">Join HealthBuddha For Free</a>
              </div>
            </div>
            <div class="col-lg-6 text-center">
              <img src="{{ asset('home/banner-img.png')}}" alt="HealthBuddha Home - Banner" class="img-fuild">
            </div>
          </div>
        </div>
      </section> -->
      <section id="herobanner" class="py-0 d-none d-md-block">
        <div class="herobanner-slider portal-home-slider">
          <div class="single-slide">
            <a href="https://portal.healthbuddha.ca/join" title="Join HealthBuddha For Free"><img src="{{ asset('home/slider-img-1.png') }}" alt="Join HealthBuddha For Free" class="img-fluid w-100"></a>
          </div>
        {{-- <div class="single-slide d-none">
            <a href="https://scaleup42.com/anniversary-contest-2023.php" target="_blank" title="Anniversary Contest 2023"><img src="{{ asset('home/slider-img-2.png') }}" alt="Anniversary Contest 2023" class="img-fluid w-100"></a>
          </div> --}}
        <div class="single-slide">
            <a href="https://calendly.com/ameya42" target="_blank" title="Be A Speaker"><img src="{{ asset('home/slider-img-3.png') }}" alt="Be A Speaker" class="img-fluid w-100"></a>
          </div>
        </div>
      </section>
      <section id="mob-herobanner" class="py-0 d-md-none">
        <div class="mob-herobanner-slider portal-home-slider">
          <div class="single-slide">
            <a href="https://portal.healthbuddha.ca/join" title="Join HealthBuddha For Free"><img src="{{ asset('home/slider-mob-img-1.png') }}" alt="Join HealthBuddha For Free" class="img-fluid w-100"></a>
          </div>
        {{-- <div class="single-slide d-none">
            <a href="https://scaleup42.com/anniversary-contest-2023.php" target="_blank" title="Anniversary Contest 2023"><img src="{{ asset('home/slider-mob-img-2.png') }}" alt="Anniversary Contest 2023" class="img-fluid w-100"></a>
          </div> --}}
        <div class="single-slide">
            <a href="https://calendly.com/ameya42" target="_blank" title="Be A Speaker"><img src="{{ asset('home/slider-mob-img-3.png') }}" alt="Be A Speaker" class="img-fluid w-100"></a>
          </div>
        </div>
      </section>
      <!-- End Herobanner -->
      <!-- Main -->
      <main id="main">
        <!-- Join Filler -->
        <section id="join-filler">
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <h3>Join <span class="text-orange">100s</span> of Naturopaths empowering women to live their best lives</h3>
              </div>
            </div>
          </div>
        </section>
        <!-- End Join Filler -->
        <!-- Courses Programs -->
        <section id="courses-programs">
          <div class="container">
            <div class="row cp-boxes">
              <div class="col-md-4">
                <div class="cp-single-box text-center px-lg-5">
                  <div class="icon">
                    <a href="<?php echo $wp_url; ?>practice-opportunity/" target="_blank"><img src="{{ asset('home/practice-opportunities-icon.png')}}" alt="Practice Opportunities" class="img-fuild"></a>
                  </div>
                  <h4 class="font-weight-500">Practice Opportunities</h4>
                  <p>Promising career paths for Naturopaths.</p>
                  @if($logged_in_user !='' )
                  <p><a href="<?php echo $wp_url; ?>practice-opportunity/" target="_blank" class="link">View Openings</a></p>
                  @else
                  <p><a href="<?php echo $wp_url; ?>practice-opportunity/" target="_blank" class="link">Login to View Openings</a></p>
                  @endif
                </div>
              </div>
              <div class="col-md-4">
                <div class="cp-single-box text-center px-lg-5">
                  <div class="icon">
                    <a href="<?php echo $wp_url; ?>naturopathy-courses/" target="_blank"><img src="{{ asset('home/ce-courses-icon.png')}}" alt="CE Courses" class="img-fuild"></a>
                  </div>
                  <h4 class="font-weight-500">CE Courses</h4>
                  <p>CE programs empowering ND's to advance their skills and expertise.</p>
                  <p><a href="<?php echo $wp_url; ?>naturopathy-courses/" target="_blank" class="link">View Courses</a></p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="cp-single-box text-center px-lg-5">
                  <div class="icon">
                    <a href="<?php echo $wp_url; ?>free-new-grad-launch-business-program/" target="_blank"><img src="{{ asset('home/free-launch-program-icon.png')}}" alt="FREE New Grad Business Launch Program" class="img-fuild"></a>
                  </div>
                  <h4 class="font-weight-500">FREE New Grad Business Launch Program</h4>
                  <p>Effectively attract new patients and pave your path to financial stability.</p>
                  @if($logged_in_user !='' )
                  <p><a href="<?php echo $wp_url; ?>free-new-grad-launch-business-program/" target="_blank" class="link">Learn More</a></p>
                  @else
                  <p><a href="<?php echo $wp_url; ?>free-new-grad-launch-business-program/" target="_blank" class="link">Login to Learn More</a></p>
                  @endif
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Courses Programs -->
        <!-- Education Partners -->
        <section id="education-partners" class="bg-light-green">
          <div class="container">
            <div class="section-title text-center mb-4">
              <h2 class="text-orange font-weight-600">Our Education Partners</h2>
            </div>
            <div class="row justify-content-center mb-4">
              <div class="col-lg-2 col-md-3 col-6 my-3 my-md-0">
                <div class="partner-box box-shadow h-100 radius-5">
                  <a href="http://exceptionalnd.ca/" target="_blank"><img src="{{ asset('home/exceptionalnd-h-logo.png')}}" alt="Exceptional ND"></a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-6 my-3 my-md-0">
                <div class="partner-box box-shadow h-100 radius-5">
                  <a href="https://www.healthcarece.ca/" target="_blank"><img src="{{ asset('home/healthcarece-logo.jpg')}}" alt="Healthcare CE"></a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-6 my-3 my-md-0">
                <div class="partner-box box-shadow h-100 radius-5">
                  <a href="https://collaborativeeducation.ca/" target="_blank"><img src="{{ asset('home/Collaborative-Education-Logo.png')}}" alt="Collaborative Education"></a>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-6 my-3 my-md-0">
                <div class="partner-box box-shadow h-100 radius-5">
                  <a href="https://www.canadianfertilityshow.ca/" target="_blank"><img src="{{ asset('home/canadianfertilityshow-logo.jpg')}}" alt="Canadian Fertility Show"></a>
                </div>
              </div>
            </div>
            <div class="pt-4 mb-2 text-center">
              <a href="<?php echo $wp_url; ?>naturopathy-courses/" title="Join HealthBuddha For Free" class="btn btn-orange btn-lg">View All Courses</a>
            </div>
          </div>
        </section>
        <!-- End Education Partners -->
        <!-- How We Help -->
        <section id="howwehelp" class="py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <img src="{{ asset('home/howwehelp-img.jpg')}}" alt="How We Help" class="radius-5">
              </div>
              <div class="col-lg-6">
                <div class="howwehelp-text px-lg-5 pt-4 pt-lg-0">
                  <div class="section-title mb-3 pb-1">
                    <h2 class="text-orange font-weight-600">Are you?</h2>
                  </div>
                  <ul class="howwehelp-points mb-0">
                    <li class="row mb-3">
                      <div class="col-auto pr-0">
                        <img src="{{ asset('home/howwehelp-checkmark.png')}}" alt="">
                      </div>
                      <div class="col">
                        <h3 class="font-weight-500">New to the <span class="text-green">Naturopathic Industry</span>?</h3>
                      </div>
                    </li>
                    <li class="row mb-3">
                      <div class="col-auto pr-0">
                        <img src="{{ asset('home/howwehelp-checkmark.png')}}" alt="">
                      </div>
                      <div class="col">
                        <h3 class="font-weight-500">Too busy to <span class="text-green">Focus On Marketing</span>?</h3>
                      </div>
                    </li>
                    <li class="row mb-3">
                      <div class="col-auto pr-0">
                        <img src="{{ asset('home/howwehelp-checkmark.png')}}" alt="">
                      </div>
                      <div class="col">
                        <h3 class="font-weight-500">Looking for <span class="text-green">New Patients</span>?</h3>
                      </div>
                    </li>
                    <li class="row mb-3">
                      <div class="col-auto pr-0">
                        <img src="{{ asset('home/howwehelp-checkmark.png')}}" alt="">
                      </div>
                      <div class="col">
                        <h3 class="font-weight-500"><span class="text-green">Expanding Your Practice</span>?</h3>
                      </div>
                    </li>
                  </ul>
                  <div class="pt-3 mb-2 text-center text-lg-left">
                    <a href="{{ url('join') }}" title="Join HealthBuddha For Free" class="btn btn-green btn-lg">Join HealthBuddha For Free</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End How We Help -->
        <!-- Featured Guest Speakers -->
        <section id="guest-speakers">
          <div class="container">
            <div class="section-title text-center mb-4 pb-1">
              <h2 class="text-orange font-weight-600">Featured Guest Speakers</h2>
            </div>
            <div class="row practitioner-list px-lg-5">
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-jodie-peacock/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2022/02/dr-jodie-peacock-nd.jpg" alt="Dr. Jodie Peacock">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Jodie Peacock</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-jenna-priestap/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2022/02/dr-jenna-priestap-nd.jpg" alt="Dr. Jenna Priestap">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Jenna Priestap</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-christina-christoforou/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2022/02/dr-christina-christoforou-nd.jpg" alt="Dr. Christina Christoforou">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Christina Christoforou</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-robyn-murphy-nd/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/06/dr-robyn-murphy-nd.jpg" alt="Dr. Robyn Murphy">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Robyn Murphy</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Featured Guest Speakers -->
        <!-- Everyday Searches Filler -->
        <section id="searches-filler">
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="img">
                  <img src="{{ asset('home/searches-filler-img.png')}}" alt="" style="max-width: 350px;">
                </div>
                <h3>Everyday <span class="text-orange">thousands</span> of searches happen on Google and other search engines... </h3>
                <div class="pt-3 mb-2">
                  <a href="{{ url('join') }}" title="Join HealthBuddha For Free" class="btn btn-green btn-lg">List Your Practice</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Everyday Searches Filler -->
        <!-- Featured Hosts -->
        <section id="host-speakers" class="bg-light-green">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="section-title text-center mb-3 pb-1">
                  <h2 class="text-orange font-weight-600">Lunch & Learn Webinar Hosts</h2>
                  <p>Expand your influence as a Naturopathic Doctor!  Host engaging Lunch & Learn webinars to showcase
                  your expertise, amplify your brand, and contribute to the industry. Join the roster of hosts at HealthBuddha!</p>
                </div>
              </div>
            </div>
            <div class="row practitioner-list px-lg-5">
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-danielle-oconnor-nd/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2022/12/dr-danielle-oconnor-nd.png" alt="Dr. Danielle O’Connor">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Danielle O’Connor</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-breanne-kallonen/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2022/02/dr-breanne-kallonen.jpg" alt="Dr. Breanne Kallonen">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Breanne Kallonen</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-christina-de-avila/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2022/02/dr-christina-de-avila-nd-cde.jpg" alt="Dr. Christina De Avila">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Christina De Avila</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-practitioner text-center">
                  <a href="<?php echo $wp_url; ?>practitioners/dr-jenna-priestap/" target="_blank">
                    <div class="practitioner-img mb-4">
                      <img src="<?php echo $wp_url; ?>wp-content/uploads/2022/02/dr-jenna-priestap-nd.jpg" alt="Dr. Jenna Priestap">
                    </div>
                    <h4 class="text-orange font-weight-600 mb-0">Dr. Jenna Priestap</h4>
                  </a>
                  <p>Naturopathic Doctor</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Featured Hosts -->
        <!-- Featured Products -->
        <section id="featured-products">
          <div class="container">
            <div class="section-title text-center mb-4">
              <h2 class="text-orange font-weight-600">Featured Products</h2>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-product text-center">
                  <a href="https://tankskincare.com/products/wash" target="_blank">
                    <div class="product-img border mb-3 radius-5">
                      <img src="{{ asset('home/product-wash.png')}}" alt="Wash">
                    </div>
                    <h4 class="font-weight-500">Wash</h4>
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-product text-center">
                  <a href="https://tankskincare.com/products/clear" target="_blank">
                    <div class="product-img border mb-3 radius-5">
                      <img src="{{ asset('home/product-clear.png')}}" alt="Clear">
                    </div>
                    <h4 class="font-weight-500">Clear</h4>
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-product text-center">
                  <a href="https://integrityhealthnaturals.com/products/enhanced-%F0%9D%9D%AE3" target="_blank">
                    <div class="product-img border mb-3 radius-5">
                      <img src="{{ asset('home/product-enhanced.png')}}" alt="Enhanced 𝝮3">
                    </div>
                    <h4 class="font-weight-500">Enhanced 𝝮3</h4>
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-6">
                <div class="single-product text-center">
                  <a href="https://integrityhealthnaturals.com/products/hsp-complete-50" target="_blank">
                    <div class="product-img border mb-3 radius-5">
                      <img src="{{ asset('home/product-hsp-complete-50.png')}}" alt="HSP Complete 50">
                    </div>
                    <h4 class="font-weight-500">HSP Complete 50</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Featured Products -->
        <!-- Featured Partners -->
        <section id="featured-partners">
          <div class="container">
            <div class="section-title text-center mb-4">
              <h2 class="text-orange font-weight-600">Featured Partners</h2>
            </div>
            <div class="row sponsors-block justify-content-center">
              <div class="col-lg-3 col-md-4 col-6 single-block text-center my-3">
                <a href="https://integrityhealthnaturals.com/" target="_blank">
                  <span class="img">
                    <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/02/IHN-Logo.png" alt="Integrity Health Naturals">
                  </span>
                </a>
              </div>
              <div class="col-lg-3 col-md-4 col-6 single-block text-center my-3">
                <a href="https://www.natures-source.com/" target="_blank">
                  <span class="img">
                    <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/02/NS-logo.png" alt="Natures Source">
                  </span>
                </a>
              </div>
              <div class="col-lg-3 col-md-4 col-6 single-block text-center my-3">
                <a href="http://exceptionalnd.ca/" target="_blank">
                  <span class="img">
                    <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/02/exceptionalnd-h-logo.png" alt="Exceptional ND">
                  </span>
                </a>
              </div>
              <div class="col-lg-3 col-md-4 col-6 single-block text-center my-3">
                <a href="https://www.healthcarece.ca/" target="_blank">
                  <span class="img">
                    <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/01/healthcarece-logo.jpg" alt="Health Care CE">
                  </span>
                </a>
              </div>
              <div class="col-lg-3 col-md-4 col-6 single-block text-center my-3">
                <a href="https://collaborativeeducation.ca/" target="_blank">
                  <span class="img">
                    <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/03/Collaborative-Education-Logo.png" alt="Collaborative Education">
                  </span>
                </a>
              </div>
              <div class="col-lg-3 col-md-4 col-6 single-block text-center my-3">
                <a href="https://www.canadianfertilityshow.ca/" target="_blank">
                  <span class="img">
                    <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/02/canadianfertilityshow-logo.jpg" alt="Canadian Fertility Show">
                  </span>
                </a>
              </div>
              <div class="col-lg-3 col-md-4 col-6 single-block text-center my-3">
                <a href="https://tankskincare.com/" target="_blank">
                  <span class="img">
                    <img src="<?php echo $wp_url; ?>wp-content/uploads/2023/03/TankNation-logo.png" alt="Tankskincare">
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <!-- End Featured Partners -->
      </main>
      <!-- End Main -->
@endsection
