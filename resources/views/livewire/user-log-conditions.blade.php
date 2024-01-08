<div class="container">
    <div class="row d-none">
        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
            <h4>Total Users Visited</h4>
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-9">
                            <div class="align-items-center align-self-start">
                                <h4 class="mb-0">{{ $user_activities_log_condition_count }}</h4>
                                <small></small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="icon icon-box-success ">
                                <span class="mdi mdi-arrow-top-right icon-item"></span>
                            </div>
                        </div>
                    </div>
                    <h6 class="custom-heading text-muted font-weight-normal mt-2">Users Visited</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h4>Conditions Visited From Homepage</h4>
            <table id="userLogConditionsHome" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Condition Name</th>
                        <th>User Visits</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $serial_no = 0;
                    @endphp
                    @foreach ($condition_count_home as $condition => $count)
                        @php
                            $serial_no++;
                        @endphp
                        <tr>
                            <td scope="row">{{ $serial_no }}</td>
                            <td>{{ $condition }}</td>
                            <td>{{ $count }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <hr>

    <div class="row">
        <div class="col">
            <h4>Condition Based Pages Visited</h4>
            <table id="userLogConditions" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Condition Name</th>
                        <th>User Visits</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $serial_no = 0;
                    @endphp
                    @foreach ($condition_count as $condition => $count)
                        @php
                            $serial_no++;
                        @endphp
                        <tr>
                            <td scope="row">{{ $serial_no }}</td>
                            <td>{{ $condition }}</td>
                            <td>{{ $count }}</td>
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
        $j("#userLogConditions").DataTable();
        $j("#userLogConditionsHome").DataTable();
    });
</script>
