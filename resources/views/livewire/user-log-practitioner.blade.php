<div class="container">
    <div class="row">
        <div class="col">
            <h4>Practitioners</h4>
            <table id="userLogPractitioners" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Profile Visit</th>
                        <th>Discovery Call Button Clicked</th>
                        <th>Discovery Call Booked</th>
                        <th>Last Login</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($all_practitioners as $practitioner)
                        <tr>
                            <td>{{ $practitioner->id }}</td>
                            <td>{{ $practitioner->pract_name }}</td>
                            <td>{{ $practitioner->profile_users_visit }}</td>
                            <td>{{ $practitioner->bad_clicked }}</td>
                            <td>{{ $practitioner->discovery_call_booked }}</td>
                            <td>{{ $practitioner->last_login_at ?? 'Not Login Yet' }}</td>
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
        $j("#userLogPractitioners").DataTable();
    });
</script>
