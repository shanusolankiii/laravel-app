<div class="container">
    <div class="row">
        <div class="col">
            <h4>Condition Viewed From Cities</h4>
            <table id="userLogCityConditions" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Condition</th>
                        <th>Users Visited</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($conditionCounts as $cityName => $conditions)
                        @foreach ($conditions as $conditionName => $count)
                            <tr>
                                <td>{{ $cityName }}</td>
                                <td>{{ $conditionName }}</td>
                                <td>{{ $count }}</td>
                            </tr>
                        @endforeach
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
        $j("#userLogCityConditions").DataTable();
    });
</script>
