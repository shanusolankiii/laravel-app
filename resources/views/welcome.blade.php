<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Find Licensed Naturopathic Practioners and Clinic in Canada | Health Buddha</title>
  <!-- Favicons -->
  <link rel="shortcut icon" href="{{ asset('favicon.png')}}">
  <link rel="apple-touch-icon" href="{{ asset('favicon.png')}}">
  <!-- Meta Tags -->
  <meta name="description" content="" />
  <meta name="keywords" content="" />
    @vite(['resources/js/onboarding.js','resources/sass/app.scss','resources/css/onboarding.css'])
</head>

<body>
  <div class="main-wrapper">

    <header id="header" class="header">
      <div id="announcement-bar" class="bg-green border-bottom">
          <div class="container py-1 text-center d-none">
              <p class="my-1 text-white"> HealthBuddha's FREE New Grad Launch Business Program - <a class="mx-1 font-weight-600 btn btn-sm btn-orange" href="https://healthbuddha.ca/free-new-grad-launch-business-program/" target="_blank">Tell Me More About It</a></p>  
          </div>  
      </div>
      <div class="container">
        <div class="navbar align-items-center px-0">
          <div class="logo">
            <a href="https://healthbuddha.ca/"><img src="{{ asset('logo.png') }}" alt="Health Buddha"></a>
          </div>
          <!-- Menu -->
						<div class="d-flex align-items-center">							
							<nav class="nav-menu d-none d-xl-block">
								<ul class="mb-0 menu">
                  <li><a href="https://healthbuddha.ca/naturopathy-courses/" title="CE Course HUB" class="">CE Course HUB</a></li>
									<li><a href="{{ route('practitioner-login') }}" title="Practitioner Login" class="">Login</a></li>
									<li><a href="{{ url('join') }}" title="Join HealthBuddha" class="btn btn-green">Join HealthBuddha</a></li>
								</ul>
							</nav>
              <nav class="nav-menu d-block d-xl-none">
                <ul class="mb-0 menu">
                  <li><a href="{{ route('practitioner-login') }}" title="Practitioner Login" class="btn btn-green">Login</a></li>
                </ul>
            </nav>							
						</div>
						<!-- Menu End -->
        </div>
      </div>
    </header>

    <!-- Slide 1 -->
    <section class="slide slide-1 bg-fixed top-bg py-5 h-auto pb-0">
      <div class="container">
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="row justify-content-between align-items-center">
            <div class="col-xl-6 col-lg-6 col-12 content-box">
              <div class="logo-img">
                <!-- <img src="{{ asset('logo.png') }}" alt="" class="w-100"> -->
              </div>
              <h3>Join the community of 400+ Naturopaths</h3>
              <div class="mt-3 d-none d-md-block">
                <a href="{{ url('join') }}" class="btn btn-green btn-lg font-weight-600">Join HealthBuddha</a>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-12">
            <div class="hb_image_box">
              <img src="{{ asset('assets/images/login-img-1.png') }}" alt="Health Buddha Home - Banner" class="img-fuild hb_hero_image w-100">
            </div>
              <div class="row justify-content-center d-none">
                <!-- 1 -->
                <div class="col-md-6 col-6 mb-md-4 mb-3">
                  <div class="single-health-goal p-2 box-shadow">
                    <div class="img text-center">
                      <img src="{{asset('menopause-icon.png')}}" alt="">
                    </div>
                    <h5>Perimenopause &amp; Menopause</h5>
                  </div>
                </div>
                <!-- 2 -->
                <div class="col-md-6 col-6 mb-md-4 mb-3">
                  <div class="single-health-goal p-2 box-shadow">
                    <div class="img text-center">
                      <img src="{{asset('fertility-icon.png')}}" alt="">
                    </div>
                    <h5>Fertility &amp; Pregnancy</h5>
                  </div>
                </div>
                <!-- 3 -->
                <div class="col-md-6 col-6 mb-md-4 mb-3">
                  <div class="single-health-goal p-2 box-shadow">
                    <div class="img text-center">
                      <img src="{{asset('pcos-icon.png')}}" alt="">
                    </div>
                    <h5>PCOS/PMS</h5>
                  </div>
                </div>
                <!-- 4 -->
                <div class="col-md-6 col-6 mb-md-4 mb-3">
                  <div class="single-health-goal p-2 box-shadow">
                    <div class="img text-center">
                      <img src="{{asset('acne-icon.png')}}" alt="">
                    </div>
                    <h5>Acne</h5>
                  </div>
                </div>
                <!-- 5 -->
                <div class="col-md-6 col-6 mb-md-4 mb-3">
                  <div class="single-health-goal p-2 box-shadow">
                    <div class="img text-center">
                      <img src="{{asset('thyroid-icon.png')}}" alt="">
                    </div>
                    <h5>Thyroid Support</h5>
                  </div>
                </div>
                <!-- 6 -->
                <div class="col-md-6 col-6 mb-md-4 mb-3">
                  <div class="single-health-goal p-2 box-shadow">
                    <div class="img text-center">
                      <img src="{{asset('weightmanagement-icon.png')}}" alt="">
                    </div>
                    <h5>Weight Management</h5>
                  </div>
                </div>
              </div>
              <div class="mt-3 d-md-none text-center">
                <a href="{{ url('join') }}" class="btn btn-green btn-lg font-weight-600">Join HealthBuddha</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- New Grad Banner -->
    <section class="slide slide-sh new-grad-launch-slide pt-4 pt-lg-5 pb-0">
      <div class="container">
			<div class="row">
				<div class="col-md-4">
				<a href="https://healthbuddha.ca/practice-opportunity/" target="_blank">
						<img src="{{asset('practice-opportunity.png')}}" alt="" class="w-100">
					</a>
				
				</div>
				<div class="col-md-4">
				<a href="https://healthbuddha.ca/naturopathy-courses/" target="_blank">
						<img src="{{asset('ce-courses.png')}}" alt="" class="w-100">
				</a>
				</div>
				<div class="col-md-4">
					<a href="https://healthbuddha.ca/free-new-grad-launch-business-program/" target="_blank">
				<img src="{{asset('new-grade-program-launch.png')}}" alt="" class="w-100"></a>
				</div>
			</div>
		</div>       
    </section>
	
    <!-- Practice Opportunity -->
    <section class="slide slide-sh practice-opportunity-slide py-4 py-lg-5 d-none">
      <div class="container">
        <a href="https://healthbuddha.ca/practice-opportunity/" target="_blank">
          <img src="{{asset('practice-opportunity-walking-tree.png')}}" alt="Practice Opportunity" class="w-100">
        </a>
      </div>
    </section>

    <!-- /Practice Opportunity -->

    <!-- Slide 2 -->
    <section class="slide slide-2 slide-sh">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container-fluid h-100">
        <!-- <div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div> -->
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="content-box">
                <h2>DO YOU KNOW ...</h2>
                <p><span class="bg-orange text-white px-2">Hundreds of Canadians are looking for Naturopathic Doctors</span>, who can help with the following health challenges: Infertility, PCOS/PMS, Thyroid concerns, Acne, Perimenopause/Menopause, and Weight Management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 3 -->
    <section class="slide slide-3 slide-sh" style="background-color: #1e2c25">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container h-100">
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="row justify-content-center mb-3">
            <div class="col-md-10">
              <div class="content-box text-center mb-3">
                <div class="logo-img">
                  <img src="{{ asset('logo-s-green.png') }}" alt="">
                </div>
                <h3 class="text-white">Everyday, <span class="bg-orange text-white px-1">thousands</span> of searches happen on Google and other search engines... </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="search-img">
          <img src="{{ asset('search-img.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 4 -->
    <section class="slide slide-4 bg-fixed" style="background-image: url('{{asset('slide-4-bg.jpg')}}');">
      <div class="container h-100">
        <!-- <div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div> -->
        <div class="row justify-content-center align-items-center h-100">
          <div class="col">
            <div class="content-box text-white text-center">
              <h2 class="text-white">BUT ...</h2>
              <p>how many of them would be able to find and connect with you,</p>
              <p>or <span class="bg-orange text-white px-2">even know</span> that you are there to help?</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 5 -->
    <!-- <section class="slide slide-5 bg-fixed" style="background-image: url('assets/images/slide-5-bg.jpg');">
				<div class="container-fluid h-100">
					<div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div>
					<div class="d-flex align-items-center justify-content-start h-100">
						<div class="row justify-content-center">
							<div class="col-lg-7 col-md-10 offset-lg-5">
								<div class="content-box">
									<p>Naturopaths are keen on developing their practice and reputation in specific health-related conditions. </p>
									<p><span class="bg-orange text-white px-2">Lack of marketing resources, cost of customer acquisition and time required</span> to develop reputation or brand in a given niche pose critical challenges, and prolong achievement of business goals.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> -->

    <!-- Slide 6 -->
    <section class="slide slide-6">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container h-100">
        <!-- <div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div> -->
        <div class="d-flex align-items-center justify-content-start h-100">
          <div>
            <div class="row justify-content-center align-items-center">
              <div class="col-12 heading text-center">
                <img src="{{ asset('slide-6-heading.png') }}" alt="">
              </div>
              <div class="col-lg-4 order-lg-2 text-center">
                <img src="{{ asset('slide-6-main-img.png') }}" alt="" class="main-img">
              </div>
              <div class="col-lg-4 content-box order-lg-1">
                <div class="row">
                  <div class="col-auto pr-0 icon">
                    <img src="{{ asset('slide-6-icon.png') }}" alt="">
                  </div>
                  <div class="col">
                    <p><span class="text-orange">New</span> to the Naturopathic Industry?</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto pr-0 icon">
                    <img src="{{ asset('slide-6-icon.png') }}" alt="">
                  </div>
                  <div class="col">
                    <p>Looking for <span class="text-orange">New Patients?</span></p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 content-box pl-lg-5 order-lg-3">
                <div class="row">
                  <div class="col-auto pr-0 icon">
                    <img src="{{ asset('slide-6-icon.png') }}" alt="">
                  </div>
                  <div class="col">
                    <p><span class="text-orange">Too Busy</span> to promote your Practice?</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto pr-0 icon">
                    <img src="{{ asset('slide-6-icon.png') }}" alt="">
                  </div>
                  <div class="col">
                    <p><span class="text-orange">Expanding</span> your Practice?</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-12 text-center mt-4 mt-lg-5">
                <a href="{{ url('join') }}" class="btn btn-green btn-lg font-weight-600">Join HealthBuddha</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 7 -->
    <section class="slide slide-7" style="background-color: #1e2c25">
      <div class="bg-circle">
        <span></span>
      </div>
      <div class="container h-100">
        <!-- <div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div> -->
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="row justify-content-lg-start justify-content-center">
            <div class="col-lg-7 col-md-11">
              <div class="content-box text-white">
                <p><img src="{{ asset('logo.png') }}" alt="" class="inline-logo"> is a <span class="bg-orange text-white px-2">FREE</span> platform to list your services.</p>
                <p>With our help, you can <span class="bg-orange text-white px-2">focus</span> on the area of expertise where your patients need you the most.</p>
                <div class=" mt-4 mt-lg-5">
                  <a href="{{ url('join') }}" class="btn btn-green btn-lg font-weight-600">Join HealthBuddha</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-img">
          <img src="{{ asset('slide-7-h-img.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 8 -->
    <section class="slide slide-8">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container-fluid h-100">
        <!-- <div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div> -->
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-5">
              <img src="{{ asset('slide-8-screen-img.png') }}" alt="">
            </div>
            <div class="col-lg-6 col-md-10">
              <div class="content-box">
                <p>Our matchmaking platform <span class="bg-orange text-white px-2">targets users on various Digital Channels</span> such as search engines, websites, social media, which connect them with Naturopaths.</p>
                <p class="text-small">The matchmaking happens based on <span class="underline-text">Users’ Locations, Health Conditions and Practitioners’ Areas of Expertise</span> and Interests. </p>
                <div class=" mt-4 mt-lg-5">
                  <a href="{{ url('join') }}" class="btn btn-green btn-lg font-weight-600">Join HealthBuddha</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 9 -->
    <section class="slide slide-9 bg-fixed slide-sh" style="background-image: url('{{asset('slide-9-bg.jpg')}}');;">
      <div class="bg-circle">
        <span></span>
      </div>
      <div class="container-fluid h-100">
        <!-- <div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div> -->
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="row justify-content-start">
            <div class="col-lg-4 col-md-11 offset-lg-5">
              <div class="content-box text-white">
                <h2 class="font-weight-600"><span class="d-md-none">B</span>enefits for the Users</h2>
                <p>Our goal is to <span class="bg-orange text-white px-2">reduce the time and effort</span> users spend before connecting with a Naturopath of their choice.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="b-img">
          <img src="{{ asset('slide-9-b-img.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 10 -->
    <section class="slide slide-10">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container-fluid h-100">
        <!-- <div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div> -->
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-8 col-md-10">
              <div class="content-box">
                <div class="work-img">
                  <img src="{{ asset('slide-10-main-img.png') }}" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lady-img">
          <img src="{{ asset('slide-10-lady-img.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 11 -->
    <section class="slide slide-11">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container h-100 position-relative">
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="content-box w-100">
            <div class="row justify-content-center align-items-center">
              <div class="col-xl-10">
                <div class="work-img pb-md-5 mb-4">
                  <img src="{{ asset('slide-11-main-img.png') }}" alt="">
                </div>
              </div>
              <div class="col-xl-10">
                <p><span class="point bg-green">1</span> User selects a health condition of their interest.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="arrow-img">
          <img src="{{ asset('slide-11-arrow.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 12 -->
    <section class="slide slide-12">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container h-100 position-relative">
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="content-box w-100">
            <div class="row justify-content-center align-items-center">
              <div class="col-xl-10">
                <div class="work-img pb-md-5 mb-4">
                  <img src="{{ asset('slide-12-main-img.png') }}" alt="">
                </div>
              </div>
              <div class="col-xl-11">
                <div class="row">
                  <div class="col-lg-auto">
                    <p><span class="point bg-orange">2</span> We list the Practitioners:</p>
                  </div>
                  <div class="col">
                    <p class="text-small mb-md-0"><span class="point bg-orange">A</span> who treat the selected condition, and</p>
                    <p class="text-small mb-md-0"><span class="point bg-orange">B</span> naturopaths proximity from the user's location.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="arrow-img">
          <img src="{{ asset('slide-11-arrow.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 13 -->
    <section class="slide slide-13">
      <div class="bg-circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container h-100 position-relative">
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="content-box w-100">
            <div class="row justify-content-center align-items-center">
              <div class="col-xl-11">
                <div class="work-img">
                  <img src="{{ asset('slide-13-main-img.png') }}" alt="">
                </div>
                <p>User requests a discovery call with one or more practitioners.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="arrow-img">
          <img src="{{ asset('slide-13-arrow.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 14 -->
    <section class="slide slide-14 bg-fixed" style="background-image: url('{{asset('slide-14-bg.jpg')}}');">
      <div class="bg-circle">
        <span></span>
      </div>
      <div class="container h-100 position-relative">
        <div class="d-flex align-items-center justify-content-start h-100">
          <div class="content-box w-100">
            <div class="row justify-content-start align-items-center">
              <div class="col-lg-5 col-md-7 pb-md-5">
                <div class="row">
                  <div class="col-auto">
                    <p><span class="point large bg-orange">4</span></p>
                  </div>
                  <div class="col">
                    <p>User makes the final decision based on the outcome of the discovery call</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="arrow-img">
          <img src="{{ asset('slide-14-arrow.png') }}" alt="">
        </div>
      </div>
    </section>

    <!-- Slide 15 -->
    <!-- <section class="slide slide-15 bg-fixed" style="background-image: url('assets/images/slide-15-bg.jpg');">
				<div class="bg-circle">
					<span></span>
					<span></span>
				</div>
				<div class="container-fluid h-100">
					<div class="header-logo">
						<img src="assets/images/logo.png" alt="">
					</div>
					<div class="h-100">
						<div class="row justify-content-center align-items-center h-100">
							<div class="col-xl-6 col-lg-7 offset-xl-5 offset-lg-5">
								<div class="content-box">
									<h2 class="mb-4">How to <span class="bg-green text-white px-2">Engage</span> with Us:</h2>
									<ol>
										<li>Write to us at <a href="mailto:hello@healthbuddha.ca">hello@healthbuddha.ca</a></li>
										<li>Receive a practitioner onboarding form</li>
										<li>We will perform due diligence in order to ensure the safety and security of the users</li>
										<li>Your information will be uploaded, and the onboarding package will be emailed to you.</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> -->

    <div class="footer">
      <div class="copyright border-top py-3">
        <div class="container">
          <div class="row">
          <div class="col-lg copyright text-center text-lg-start">
              <p>© 2023. www.healthbuddha.ca. All rights reserved.</p>
          </div>
          <div class="col-lg-auto ml-auto text-center text-lg-end">
              <p>Designed &amp; Developed by <a href="https://www.scaleup42.com/" target="_blank">ScaleUp42.com</a></p>
          </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</body>

</html>
