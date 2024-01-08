<x-admin-layout>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h2>Users Management</h2>
                    </div>
                    <div class="pull-right">
                        <a class="btn btn-primary" href="{{ route('users.create') }}">Create New User</a>
                    </div>
                    <br>
                </div>
            </div>
            @if ($message = Session::get('success'))
                <div class="alert alert-success">
                    <p>{{ $message }}</p>
                </div>
            @endif
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th width="1%">No.</th>
                        <th width="15%">Name</th>
                        <th>Email</th>
                        <th width="10%">Roles</th>
                        <th width="280px">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                        <tr>
                            <th scope="row">{{ $user->id }}</th>
                            <td>
                                @if ($user->user_profile != null)
                                    {{ $user->user_profile->pract_name }}
                                @else
                                    {{ $user->name }}
                                @endif
                            </td>
                            <td>{{ $user->email }}</td>
                            <td>
                                @foreach ($user->roles as $role)
                                    <span class="badge bg-success">{{ $role->name }}</span>
                                @endforeach
                            </td>
                            <td><a href="{{ route('users.show', $user->id) }}" class="btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm">Show</a>
                                {{-- <a href="{{ route('users.edit', $user->id) }}" class="btn btn-info btn-sm">Edit</a> --}}

                                {{-- {!! Form::open(['method' => 'DELETE', 'route' => ['users.destroy', $user->id], 'style' => 'display:inline']) !!}
                                {!! Form::submit('Delete', ['class' => 'btn btn-danger btn-sm']) !!}
                                {!! Form::close() !!} --}}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {!! $users->render() !!}
        </div>
    </div>
</x-admin-layout>
