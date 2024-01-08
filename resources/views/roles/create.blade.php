    <x-admin-layout>
        <div class="content">
            <div class="container-fluid">
            @if (count($errors) > 0)
    <div class="alert alert-danger">
        <strong>Whoops!</strong> There were some problems with your input.<br><br>
        <ul>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
        </ul>
    </div>
@endif
                    <div class="row">
                    
                        <div class="col-lg-6">
                            <div class="card card-warning">
                                <div class="card-header">
                                    
                                  
            <h3>Create New Role</h3>
       
       
            <a class="btn btn-info float-right" href="{{ url('hb-cpanel/roles') }}" class="float-right"> Back</a>
     
                                </div>
                                <div class="card-body">
                                <form method="POST" action="{{ route('role.store') }}">
                                    @csrf
                                    <div class="form-group">
                                        <label for="roleName">Role Name</label>
                                        <input type="text" class="form-control" id="roleName" name="name"
                                            placeholder="Enter Role Name">
                                            
                                    </div>                                   
                                    <div class="form-check">
                                        <strong>Permission:</strong>
                                            <br/>
                                            @foreach($permission as $value)
                                                <input type="checkbox" class="name form-check-input" id="permission_{{ $value->id }}" name="permission[]" value="{{ $value->id }}">
                                            <label for="permission_{{ $value->id }}">       {{ $value->name }}
                                        </label>
                                            <br/>
                                            @endforeach                                      
                                       
                                    </div>
                                    <button type="submit" class="btn btn-primary float-right">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>                        
                    </div>
                    <!-- /.row -->
               
            </div><!-- /.container-fluid -->
        </div>
    </x-admin-layout>
