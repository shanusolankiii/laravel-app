<div class="container">
    <div class="row">
        <div class="col">
            <h4>Users Count of Visited Locations</h4>
            <table id="userLocationVisitedCount" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>City Name</th>
                        <th>Number of Users Visited</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $id = 0;
                    @endphp
                    @foreach ($city_count as $city => $count)
                        @php
                            $id++;
                        @endphp
                        @if (!empty($city))
                            <tr>
                                <td>{{ $id }}</td>
                                <td>{{ $city }}</td>
                                <td>{{ $count }}</td>
                            </tr>
                        @endif
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <hr>

    <div class="row">
        <div class="col">
            <h4>User Location Data</h4>
            <table id="userLocationVisited" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Session ID</th>
                        <th>Location Address</th>
                        <th>City</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($get_user_locations as $location)
                        <tr>
                            <td scope="row">{{ $location->id }}</td>
                            <td>{{ $location->session_id }}</td>
                            <td>{{ $location->location_address }}</td>
                            <td>{{ $location->location_city }}</td>
                            <td>{{ $location->created_at }}</td>
                            <td>
                                <a href="{{ route('user-visited-view', $location->id) }}" target="_blank"
                                    class="btn btn-info">View</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
    var $j = jQuery.noConflict();
</script>

<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap4.min.js"></script>

<script>
    $j(document).ready(function() {
        $j("#userLocationVisited").DataTable();
        $j("#userLocationVisitedCount").DataTable();
    });
</script>
