<html>

<head>
    <title>HB Admin</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    @livewireStyles
    <wireui:scripts />
    @powerGridStyles

    @vite(['resources/sass/admin.scss', 'resources/js/onboarding.js'])
    <script src="//unpkg.com/alpinejs" defer></script>
    <style>
        .pac-container {
            z-index: 10000 !important;
        }
    </style>
</head>

<body class="antialiased">

    @extends('adminlte::page')

    @section('content')
    <div class="p-2">
        {!! $slot !!}
    </div>
    @stop

    @livewireScripts

    @powerGridScripts

    @stack('scripts')
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <x-notifications z-index="z-50" position="top-center" />
    <x-dialog z-index="z-50" />

    {{-- @include('layouts.footer') --}}

    <script>
        function getElementByXPath(xPath) {
            return document.evaluate(xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        }
    </script>
</body>

</html>
