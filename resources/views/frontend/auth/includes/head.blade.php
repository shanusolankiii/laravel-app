<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
		<meta name="description" content="Smarthr - Bootstrap Admin Template">
		<meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects">
		<meta name="author" content="Dreamguys - Bootstrap Admin Template">
		<meta name="robots" content="noindex, nofollow">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		@stack('title')
		<!-- Favicon -->
		<link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/images/favicon.png') }}">

		<!-- Google Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        @vite(['resources/sass/app.scss','resources/frontend/css/frontend.css', 'resources/frontend/js/frontend.js'])
		@include('google-tag.ga-tag-head')
        {{-- GAM Started --}}
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            googletag.defineSlot('/23008631388/SU42-SEO-300x300', [300, 300], 'div-gpt-ad-1704199303051-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
        </script>
        {{-- GAM Ended  --}}
        {{-- Second GAM Started --}}
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            googletag.defineSlot('/23008631388/In-House-Ad-Unit-97090', [970, 90], 'div-gpt-ad-1704125482327-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
        </script>
        {{-- Second GAM Ended --}}
		<style>
			.pac-container {
				z-index: 10000 !important;
			}

			ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,
			.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners {
				height: 400px;
			}

			.profile-score .percent {
				position: relative;
				height: 30px;
			}

			.profile-score svg {
				position: relative;
				width: 30px;
				height: 30px;
				transform: rotate(-90deg);
			}

			.profile-score svg circle {
				width: 100%;
				height: 100%;
				fill: none;
				stroke: #f0f0f0;
				stroke-width: 2;
				stroke-linecap: round;
			}

			.profile-score svg circle:last-of-type {
				stroke-dasharray: 86px;
				stroke-dashoffset: calc(86px - (86px * var(--percent)) / 100);
				stroke: #2ecc71;
			}

			.profile-score .number {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			.profile-score .number p {
				font-weight: 200;
				font-size: 9px;
				margin: 0;
			}

			.profile-score .number h3 span {
				font-size: 9px;
			}

			.profile-score-container {
				display: inline-flex;
				align-items: center;
			}

			.score-text {
				font-size: 12px;
				/* Adjust font size as needed */
				margin: 0;
				padding: 0;
				vertical-align: middle;
				margin-left: 10px;
			}

			.select2-container--default .select2-search--inline .select2-search__field {
				width: 300px !important;
			}
			.custom-add-clinic {
				color: #f38a00;
			}
			.custom-add-clinic:hover {
				color: #44a86b;
			}
			.clinics-add-button{
				text-align: left;
			}
			.mini-statement-textarea{
				background-color: white;
			}
			.mini-statement-textarea:hover{
				background-color: white;
			}
			@media only screen and (max-width: 600px) {
				.image-edit-icon {
					margin-right: 125px;
				}
			}
		</style>
</head>

