
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Login | HB C-PANEL</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

   
    <!-- Favicons -->
    <link rel="shortcut icon" href="{{ asset('favicon.png')}}">
    <link rel="apple-touch-icon" href="{{ asset('favicon.png')}}">

  @vite(['resources/css/onboarding.css','resources/sass/app.scss'])
    <style>       

			.form_container {
			margin-top: 100px;
		}
		

			.input-group-text {
			background: #f31010 !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
	
        }


		/* Buzz Out */
@-webkit-keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
@keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
.hvr-buzz-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {
  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}


    </style>

</head>
{{-- @vite(['resources/css/app.css', 'resources/js/app.js']) --}}


<body class="antialiased" style="width: 100%; height:auto; background-color: #F5F5F5;">
    <div class="main-wrapper">
        <header id="header" class="header">
            <div class="container">
                <div class="navbar align-items-center px-0">
                    <div class="logo">
                        <a href="https://healthbuddha.ca/"><img src="{{asset('logo.png')}}" alt="Health Buddha"></a>
                    </div>
                </div>
            </div>
        </header>

        <div class="form-section">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-3 text-center text-lg-right d-none d-lg-block">
                        <img src="{{asset('left_image.png')}}" alt="tag">
                    </div>
                    <div class="col-lg-6" style="border-radius: 50px;
					background: #e0e0e0;
					box-shadow:  20px 20px 60px #bebebe,
								 -20px -20px 60px #ffffff;">
                        <h1 class="mt-5">Welcome to HealthBuddha </h1>
                        <div id="app" class="my-5">

							<div class="d-flex justify-content-center form_container" >
								<form method = "POST" action= "auth/redirect">
									{{-- <div class="input-group mb-4">
										<div class="input-group-append">
											<span class="input-group-text"><i class="fas fa-user"></i></span>
										</div> --}}
									
									<div class="text-center">
										
											
										<a class="btn btn-dark text-white font-weight-bold hvr-buzz-out" href="auth/redirect" role="button" style="text-transform:none; border-radius: 12px">
											<img width="15px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
											Login with Google
										</a>
									  </div>
										
									
			
								    </div>
								</form>
							{{-- </div> --}}


                        </div>
                    </div>
                    <div class="col-lg-3 text-center text-lg-left d-none d-lg-block">
                        <img src="{{asset('right_image.png')}}" alt="tag">
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="copyright border-top py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg copyright text-center text-lg-left">
                            <p>© 2022. www.healthbuddha.ca. All rights reserved.</p>
                        </div>
                        <div class="col-lg-auto ml-auto text-center text-lg-right">
                            <p>Designed &amp; Developed by <a href="https://www.scaleup42.com/" target="_blank">ScaleUp42.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</body>
</html>