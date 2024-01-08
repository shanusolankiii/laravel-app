<html>

<head>
    <title>HB C-PANEL</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    
    <!-- Include DataTables CSS -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap4.min.css">
    
    @livewireStyles
    <wireui:scripts />
    @powerGridStyles

    @vite(['resources/sass/admin.scss', 'resources/js/onboarding.js'])
    <script src="//unpkg.com/alpinejs" defer></script>
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
