<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Find Licensed Naturopathic Practioners and Clinic in Canada | Health Buddha</title>

    <!-- Favicons -->
    <link rel="shortcut icon" href="{{ asset('favicon.png')}}">
    <link rel="apple-touch-icon" href="{{ asset('favicon.png')}}">


    @vite([ 'resources/js/onboarding.js','resources/sass/app.scss','resources/css/onboarding.css'])
    @include('google-tag.ga-tag-head')
    {{-- <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script>
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
        googletag.defineSlot('/23008631388/Portal-Onboarding-970X250', [970, 250], 'div-gpt-ad-1704170790999-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });
    </script> --}}
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script>
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
        googletag.defineSlot('/23008631388/In-House-Ad-Unit-97090', [970, 90], 'div-gpt-ad-1704269298976-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });
    </script>
</head>


<body class="antialiased" style="width: 100%; height:auto; background-color: #F5F5F5;">
    @include('google-tag.ga-tag-body')
    <div class="main-wrapper">
        <header id="header" class="header">
            <div class="container">
                <div class="navbar align-items-center px-0">
                    <div class="logo">
                        <a href="{{ URL::to('/') }}"><img src="{{ asset('logo.png') }}" alt="Health Buddha"></a>
                    </div>
                </div>
            </div>
        </header>

        <div class="form-section">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-2 text-center text-lg-right d-none d-xl-block">
                        <img src="{{ asset('left_image.png') }}" alt="tag">
                    </div>
                    <div class="col-xl-8 col-lg-12">
                        <div align="center" class="mb-4 d-none d-lg-block">
                            {{-- <!-- /23008631388/Portal-Onboarding-970X250 -->
                                <div id='div-gpt-ad-1704170790999-0' style='min-width: 970px; min-height: 250px;'>
                                    <script>
                                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1704170790999-0'); });
                                    </script>
                                </div> --}}
                                <!-- /23008631388/In-House-Ad-Unit-97090 -->
                                <div id='div-gpt-ad-1704269298976-0' style='min-width: 970px; min-height: 90px;'>
                                    <script>
                                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1704269298976-0'); });
                                    </script>
                                </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-9">
                            <h1>Welcome to HealthBuddha <span>Onboarding!</span></h1>


                            <div id="ac_if_not_nd">
                                <div class="_form_37"></div>
                                <script src="https://healthbuddha.activehosted.com/f/embed.php?id=37" type="text/javascript" charset="utf-8"></script>
                            </div>
                            <div id="app" class="app">

                            <script>
                                    var qid = "{{$qid}}";
                                </script>
                                <script>
                                    var check_name = false;
                                    var check_area = 'true';
                                    var pract_email = '';
                                    var referal_email = false
                                    var counter = 1;
                                </script>
                                <script>
                                    var website_address = "true";
                                </script>
                                <script>
                                    var email_address = "true";
                                </script>
                                <script>
                                    var date_address = "true";
                                </script>

                            </div>
                            </div>
                         </div>
                    </div>
                    <div class="col-xl-2 text-center text-lg-left d-none d-xl-block">
                        <img src="{{ asset('right_image.png') }}" alt="tag">
                    </div>

                    <div id="name_error">
                        <span> Enter a valid Name! </span>
                    </div>
                    <div id="referal_email_error">
                        <span> Enter valid Email(s)! </span>
                    </div>
                    <div id="website_error">
                        <span> Enter a valid URL! </span>
                    </div>

                    <div id="email_error">
                        <span> Enter a valid Email! </span>
                    </div>

                    <div id="date_error">
                        <span> Enter a valid year! </span>
                    </div>
                    <div id="area_error">
                        <span> Please select only Three! </span>
                    </div>

                </div>
            </div>
        </div>

        <!-- <span class="error_msg" style="margin-left: 60%; position: relative; bottom: 155px;">Invalid Email!</span> -->

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

        <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCM4YQppR1MGzngkbEL7L1jWoOxsVT6L0o"></script>

</body>

</html>
