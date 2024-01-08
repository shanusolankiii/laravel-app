<x-admin-layout>
        <div class="content">
            <div class="container-fluid">
                <div class="row">

                        <div class="col-lg-6">
                            <div class="card card-info">
                                <div class="card-header">
                                    
                                    <div class="pull-left">
            <h3>Show Role</h3>
        </div>
        <div class="pull-right">
            <a class="btn btn-danger float-right" href="{{ url('hb-cpanel/roles') }}"> Back</a>
        </div>
                                </div>
                                <div class="card-body">
                                
                                    <div class="form-group">
                                        <strong>Name: </strong>
                                        {{ $role->name }}
                                    </div>                              
                                    <div class="form-group">
                                    <strong>Permissions:</strong>
                                    @if(!empty($rolePermissions))
                                        @foreach($rolePermissions as $v)
                                            <label class="label label-success">{{ $v->name }},</label>
                                        @endforeach
                                    @endif
                                </div>
                                    
                                </div>
                            </div>

                        </div>
                        <!-- /.col-md-6 -->
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="m-0">Featured</h5>
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">Special title treatment</h6>

                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <!-- /.col-md-6 -->
                    </div>
                    <!-- /.row -->
               
            </div><!-- /.container-fluid -->
        </div>
    </x-admin-layout>
