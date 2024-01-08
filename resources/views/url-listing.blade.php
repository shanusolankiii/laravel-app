<!doctype html>
<html lang="en">

<head>
    <title>URLs</title>
    <!-- Required meta tags -->
    <!-- Favicons -->
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('favicon.png') }}">
    <!-- Meta Tags -->
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

    </style>
</head>

<body>
    <div>
        @php
        $wp_site_url = config('scaleup.WP_SITE_URL');
        @endphp
        <h2>Sitemaps</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Sitemap URL</th>
                </tr>
            </thead>
            @foreach($links as $index => $link)
                <tbody>
                    <tr>
                        <td scope="row">{{ $index+1 }}</td>
                        <td><a href="{{ $link }}" target="_blank">{{ $link }}</a></td>
                    </tr>
                </tbody>
            @endforeach
        </table>
        <h2>Static Pages</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Page ID</th>
                    <th>Page Name</th>
                    <th>Page URL</th>
                   
                    
                </tr>
            </thead>
            <tbody>
                @foreach ($static_pages_data as $index => $static_page)
                <tr>
                    <td>{{ $index + 1 }}</td>                    
                    <td>{{ $static_page['ID'] }}</td>
                    <td>{{ $static_page['post_title'] }}</td>
                    <td>
                        <a id="copy_condition" href="{{ $static_page['static_page_url'] }}" target="_blank" rel="noopener noreferrer">
                        {{ $static_page['static_page_url'] }}
                        </a>
                    </td>
                   
                    <td class="d-none">
                        <div class="d-flex align-items-center">
                            <span class="mr-2">
                                <svg onclick="copyToClipboard('copy_condition')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </span>
                            <small id="message_condition" style="display: none;" class="text-success">Copied!</small>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <h2>Webinars</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Webinar ID</th>
                    <th>Webinar Name</th>
                    <th>Webinar URL</th>
                    <th>Webinar New URL</th>
                    
                </tr>
            </thead>
            <tbody>
                @foreach ($webinars_data as $index => $webinar)
                <tr>
                    <td>{{ $index + 1 }}</td>                    
                    <td>{{ $webinar['ID'] }}</td>
                    <td>{{ $webinar['post_title'] }}</td>
                    <td>
                        <a id="copy_condition" href="{{ $webinar['webinar_url'] }}" target="_blank" rel="noopener noreferrer">
                        {{ $webinar['webinar_url'] }}
                        </a>
                    </td>
                    <td>
                        <a id="copy_condition" href="{{ $webinar['webinar_url_new'] }}" target="_blank" rel="noopener noreferrer">
                        {{ $webinar['webinar_url_new'] }}
                        </a>
                    </td>
                    <td class="d-none">
                        <div class="d-flex align-items-center">
                            <span class="mr-2">
                                <svg onclick="copyToClipboard('copy_condition')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </span>
                            <small id="message_condition" style="display: none;" class="text-success">Copied!</small>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <h2>Conditions</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Condition ID</th>
                    <th>Condition Name</th>
                    <th>Condition Meta Title </th>
                    <th>Condition Meta Description </th>
                    <th>Condition Canonical URL </th>
                    <th>Condition Old URL</th>
                    <th>Condition New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($condition_data as $index => $condition)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $condition['conditions_id'] }}</td>
                    <td>{{ $condition['condition_name'] }}</td>
                    <td>{{ $condition['condition_meta_title'] }}</td>
                    <td>{{ $condition['condition_meta_description'] }}</td>
                    <td>{{ $condition['condition_canonical_url'] }}</td>
                    <td>
                        <a id="copy_condition{{ $condition['conditions_id'] }}" href="{{ $condition['condition_url'] }}" target="_blank" rel="noopener noreferrer">
                        {{ $condition['condition_url'] }}
                        </a>
                    </td>
                    <td>
                        <a id="copy_condition{{ $condition['conditions_id'] }}" href="{{ $condition['condition_url_new'] }}" target="_blank" rel="noopener noreferrer">
                        {{ $condition['condition_url_new'] }}
                        </a>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="mr-2">
                                <svg onclick="copyToClipboard('copy_condition{{ $condition['conditions_id'] }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </span>
                            <small id="message_condition{{ $condition['conditions_id'] }}" style="display: none;" class="text-success">Copied!</small>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <h2>Conditions List</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Condition ID</th>
                    <th>Condition Name</th>
                    <th>Condition Meta Title </th>
                    <th>Condition Meta Description </th>
                    <th>Condition Canonical URL </th>
                    <th>Condition Old URL</th>
                    <th>Condition New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($condition_data_list as $index => $condition)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $condition['conditions_id'] }}</td>
                    <td>{{ $condition['condition_name'] }}</td>
                    <td>{{ $condition['condition_meta_title'] }}</td>
                    <td>{{ $condition['condition_meta_description'] }}</td>
                    <td>{{ $condition['condition_canonical_url'] }}</td>
                    <td>
                        <a id="copy_cl{{ $condition['conditions_id'] }}" href="{{$condition['condition_url']}}" target="_blank" rel="noopener noreferrer">
                            {{ $condition['condition_url'] }}
                        </a>
                    </td>
                    <td>
                        <a id="copy_cl{{ $condition['conditions_id'] }}" href="{{ $condition['condition_url_new'] }}/list/" target="_blank" rel="noopener noreferrer">
                            {{ $condition['condition_url_new'] }}
                        </a>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="mr-2">
                                <svg onclick="copyToClipboard('copy_cl{{ $condition['conditions_id'] }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </span>
                            <small id="message_cl{{ $condition['conditions_id'] }}" style="display: none;" class="text-success">Copied!</small>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <h2>Services</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Service ID</th>
                    <th>Service Name</th>
                    <th>Service Meta title</th>
                    <th>Service Meta Description</th>
                    <th>Service Canonical URL</th>
                    <th>Service Old URL</th>
                    <th>Service New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($service_data as $index => $service)                
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $service['services_id'] }}</td>
                    <td>{{ $service['service_name'] }}</td>                  
                    <td>{{ $service['service_meta_title'] }}</td>                  
                    <td>{{ $service['service_meta_description'] }}</td>                  
                    <td>{{ $service['service_canonical_url'] }}</td>                  
                    <td>
                        <a id="copy_services{{ $service['services_id'] }}" href="{{ $service['service_url'] }}" target="_blank" rel="noopener noreferrer">{{ $service['service_url']  }}</a>
                    <td>
                        <a id="copy_services{{ $service['services_id'] }}" href="{{ $service['service_url_new'] }}" target="_blank" rel="noopener noreferrer">{{ $service['service_url_new'] }}</a>
                    </td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_services{{ $service['services_id'] }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_services{{ $service['services_id'] }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>               
                @endforeach
            </tbody>
        </table>

        <h2>Services List</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Service ID</th>
                    <th>Service Name</th>
                    <th>Service Meta title</th>
                    <th>Service Meta Description</th>
                    <th>Service Canonical URL</th>
                    <th>Service Old URL</th>
                    <th>Service New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($service_data_list as $index => $service)
               
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $service['services_id'] }}</td>
                    <td>{{ $service['service_name'] }}</td>                  
                    <td>{{ $service['service_meta_title'] }}</td>                  
                    <td>{{ $service['service_meta_description'] }}</td>                  
                    <td>{{ $service['service_canonical_url'] }}</td> 
                   
                    <td>
                        <a id="copy_listservices{{ $service['services_id'] }}" href="{{ $service['service_url'] }}" target="_blank" rel="noopener noreferrer">{{ $service['service_url']  }}</a>
                    <td>
                        <a id="copy_listservices{{ $service['services_id'] }}" href="{{ $service['service_url_new'] }}" target="_blank" rel="noopener noreferrer">{{ $service['service_url_new'] }}</a>
                    </td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_listservices{{$service['services_id'] }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_listservices{{ $service['services_id'] }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>               
                @endforeach
            </tbody>
        </table>

        <h2>Popular Cities</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>City Name</th>
                    <th>City Meta title</th>
                    <th>City Meta Description</th>
                    <th>City Canonical URL</th>
                    <th>Clinic City Old URL</th>
                    <th>Clinic City New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
            
                @foreach ($our_cities_data as $slug => $our_city)
            
                <tr>
                    <td>{{ $our_city['city_id'] }}</td>
                    <td>{{ $our_city['city_name'] }}</td>
                    <td>{{ $our_city['city_meta_title'] }}</td>                  
                    <td>{{ $our_city['city_meta_description'] }}</td>                  
                    <td>{{ $our_city['city_canonical_url'] }}</td> 
                    <td><a id="copy_clinics{{ $our_city['city_id'] }}" href="{{ $our_city['city_url'] }}" target="_blank">{{
                        $our_city['city_url'] }}</a>
                    </td>
                    <td><a id="copy_clinics{{ $our_city['city_id'] }}" href="{{ $our_city['city_url_new'] }}" target="_blank">{{
                            $our_city['city_url_new'] }}</a>
                    </td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_clinics{{  $our_city['city_id'] }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_clinics{{  $our_city['city_id'] }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                
                @endforeach
            </tbody>
        </table>

        <h2>Popular Cities List</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>City Name</th>
                    <th>City Meta title</th>
                    <th>City Meta Description</th>
                    <th>City Canonical URL</th>
                    <th>Clinic City Old URL</th>
                    <th>Clinic City New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
            
                @foreach ($our_cities_list_data as $slug => $our_city)
            
                <tr>
                    <td>{{ $our_city['city_id'] }}</td>
                    <td>{{ $our_city['city_name'] }}</td>
                    <td>{{ $our_city['city_meta_title'] }}</td>                  
                    <td>{{ $our_city['city_meta_description'] }}</td>                  
                    <td>{{ $our_city['city_canonical_url'] }}</td> 
                    <td><a id="copy_listclinics{{ $our_city['city_id'] }}" href="{{ $our_city['city_url'] }}" target="_blank">{{
                        $our_city['city_url'] }}</a>
                    </td>
                    <td><a id="copy_listclinics{{ $our_city['city_id'] }}" href="{{ $our_city['city_url_new'] }}" target="_blank">{{
                            $our_city['city_url_new'] }}</a>
                    </td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_listclinics{{  $our_city['city_id'] }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_clinics{{  $our_city['city_id'] }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                
                @endforeach
            </tbody>
        </table>

        <h2>Condition and Services</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Condition</th>
                    <th>Service</th>
                    <th>URL</th>                    
                    <th>New URL</th>                    
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number_condition_services = 1; @endphp
                @foreach ($conditions_services_combinations as $combination)
                <tr>
                    <td>{{ $serial_number_condition_services }}</td>
                    <td>{{ $combination['conditions_name'] }}</td>
                    <td>{{ $combination['service_name'] }}</td>
                    <td>
                        <a id="copy_cs{{ $serial_number_condition_services }}" href="{{ $combination['url'] }}" target="_blank">{{ $combination['url'] }}</a>
                    </td>
                    
                    <td>   
                        <a id="copy_csn{{ $serial_number_condition_services }}" href="{{ $combination['url_new'] }}" target="_blank">{{ $combination['url_new'] }}</a></td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_cs{{ $serial_number_condition_services }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_cs{{ $serial_number_condition_services }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number_condition_services++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2 class="">Condition and Service List</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" class="" >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Condition</th>
                    <th>Service</th>
                    <th>List URL</th>
                    <th>List New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($condition_and_service_list as $list)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $list['conditions_name'] }}</td>
                    <td>{{ $list['service_name'] }}</td>
                    <td><a id="copy_csl{{ $serial_number }}" href="{{ $list['url'] }}" target="_blank">{{ $list['url'] }}</a></td>
                    <td><a id="copy_csln{{ $serial_number }}" href="{{ $list['url_new'] }}" target="_blank">{{ $list['url_new'] }}</a></td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_csl{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_csl{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2>City and Condition</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>City</th>
                    <th>Condition</th>
                    <th>URL</th>
                    <th>New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($city_condition_combinations as $combination)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $combination['city_name'] }}</td>
                    <td>{{ $combination['conditions_name'] }}</td>
                    <td><a id="copy_cc{{ $serial_number }}" href="{{ $combination['url'] }}" target="_blank">{{
                            $combination['url'] }}</a></td>
                    <td><a id="copy_ccn{{ $serial_number }}" href="{{ $combination['url_new'] }}" target="_blank">{{
                            $combination['url_new'] }}</a></td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_cc{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_cc{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2>City and Condition List</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>City</th>
                    <th>Condition</th>
                    <th>URL</th>
                    <th>New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($city_condition_combinations as $combination)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $combination['city_name'] }}</td>
                    <td>{{ $combination['conditions_name'] }}</td>
                    <td>
                        <a id="copy_ccl{{ $serial_number }}" href="{{ $combination['url_list'] }}" target="_blank">{{
                            $combination['url_list'] }}</a>
                    </td>
                    <td>
                        <a id="copy_ccl{{ $serial_number }}" href="{{ $combination['list_url_new'] }}" target="_blank">{{
                            $combination['list_url_new'] }}</a>
                    </td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_ccl{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_ccl{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2>City and Services</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>City</th>
                    <th>Service</th>
                    <th>URL</th>
                    <th>New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($city_services_combinations as $combination)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $combination['city_name'] }}</td>
                    <td>{{ $combination['service_name'] }}</td>
                    <td>
                        <a id="copy_csc{{ $serial_number }}" href="{{ $combination['url'] }}" target="_blank">{{
                            $combination['url'] }}
                        </a>
                    </td>
                    <td>
                        <a id="copy_csc{{ $serial_number }}" href="{{ $combination['url_new'] }}" target="_blank">{{
                            $combination['url_new'] }}
                        </a>
                    </td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_csc{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_csc{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2>City and Services List</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>City</th>
                    <th>Service</th>
                    <th>URL</th>
                    <th>New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($city_services_combinations as $combination)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $combination['city_name'] }}</td>
                    <td>{{ $combination['service_name'] }}</td>
                    <td>
                        <a id="copy_csrvl{{ $serial_number }}" href="{{ $combination['url_list'] }}" target="_blank">{{
                            $combination['url_list'] }}</a>
                    </td>
                    <td>
                        <a id="copy_csrvl{{ $serial_number }}" href="{{ $combination['list_url_new'] }}" target="_blank">{{
                            $combination['list_url_new'] }}</a>
                    </td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_csrvl{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_csrvl{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2 class="">City, Conditions and Services</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" class="" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>City</th>
                    <th>Condition</th>
                    <th>Service</th>
                    <th>URL</th>
                    <th>New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($city_condition_services_combinations as $combination)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $combination['city_name'] }}</td>
                    <td>{{ $combination['conditions_name'] }}</td>
                    <td>{{ $combination['service_name'] }}</td>
                    <td><a id="copy_ccs{{ $serial_number }}" href="{{ $combination['url'] }}" target="_blank">{{
                            $combination['url'] }}</a></td>
                    <td><a id="copy_ccs{{ $serial_number }}" href="{{ $combination['url_new'] }}" target="_blank">{{
                            $combination['url_new'] }}</a></td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_ccs{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_ccs{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2 class="">City, Conditions and Services List</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" class="" >
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>City</th>
                    <th>Condition</th>
                    <th>Service</th>
                    <th>URL</th>
                    <th>New URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($city_condition_services_combinations as $combination)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $combination['city_name'] }}</td>
                    <td>{{ $combination['conditions_name'] }}</td>
                    <td>{{ $combination['service_name'] }}</td>
                    <td><a id="copy_ccsl{{ $serial_number }}" href="{{ $combination['url_list'] }}" target="_blank">{{
                            $combination['url_list'] }}</a></td>
                    <td><a id="copy_ccsl{{ $serial_number }}" href="{{ $combination['list_url_new'] }}" target="_blank">{{
                            $combination['list_url_new'] }}</a></td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_ccsl{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_ccsl{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2 class="d-none">All Cities</h2>
         <table cellpadding="6" cellspacing="0" style="width:100%" class="d-none" >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>City Name</th>
                    <th>Clinic URL</th>
                    <th>Copy to Clipboard</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($clinics_data as $clinic)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $clinic['city_name'] }}</td>
                    <td><a id="copy_ac{{ $serial_number }}" href="{{ $clinic['clinic_url'] }}" target="_blank">{{ $clinic['clinic_url'] }}</a></td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_ac{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_ac{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach
            </tbody>
        </table>

        <h2>Practitioners</h2>
        <table cellpadding="6" cellspacing="0" style="width:100%" >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Meta Title</th>
                    <th>Meta Description</th>
                    <th>URL</th>
                    <th>New URL</th>
                    <th>Copy to Clipboard</th>
                    <th>Site Index URL</th>
                </tr>
            </thead>
            <tbody>
                @php $serial_number = 1; @endphp
                @foreach ($practitioner_data as $practitioner)
                <tr>
                    <td>{{ $serial_number }}</td>
                    <td>{{ $practitioner['pract_id'] }}</td>
                    <td>{{ $practitioner['pract_name'] }}</td>
                    <td>{{ $practitioner['pract_meta_title'] }}</td>
                    <td>{{ $practitioner['pract_meta_desc'] }}</td>
                    <td><a id="copy_pseo{{ $serial_number }}" href="{{ $practitioner['pract_url'] }}" target="_blank">{{ $practitioner['pract_url'] }}</a></td>
                    <td><a id="copy_pseo{{ $serial_number }}" href="{{ $practitioner['url_new'] }}" target="_blank">{{ $practitioner['url_new'] }}</a></td>
                    <td>
                        <span>
                            <svg onclick="copyToClipboard('copy_pseo{{ $serial_number }}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <small id="message_pseo{{ $serial_number }}" style="display: none;" class="text-success">Copied!</small>
                    </td>
                    <td><a href="https://www.google.com/search?q={{ $practitioner['indexing_url'] }}" target="_blank">{{ $practitioner['indexing_url'] }}</a></td>
                </tr>
                @php $serial_number++; @endphp
                @endforeach                
            </tbody>
        </table>

    </div>

</body>
<script>
    function copyToClipboard(elementId) {
        console.log(elementId);
        const element = document.getElementById(elementId);
        // console.log(element);
        const textToCopy = element.textContent;
        const tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        const messageId = "message_" + elementId.split('_')[1];
        const messageElement = document.getElementById(messageId);
        messageElement.style.display = "inline";
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 1500); // Hide message after 1.5 seconds
    }

</script>


</html>