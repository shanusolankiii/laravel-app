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
            <div class="bg-light p-4 rounded">
                <h1>Add New User</h1>        
                <div class="container mt-4">
                    <form method="POST" action="">
                        @csrf
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input value="{{ old('name') }}" 
                                type="text" 
                                class="form-control" 
                                name="name" 
                                placeholder="Name" required>
        
                            @if ($errors->has('name'))
                                <span class="text-danger text-left">{{ $errors->first('name') }}</span>
                            @endif
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input value="{{ old('email') }}"
                                type="email" 
                                class="form-control" 
                                name="email" 
                                placeholder="Email address" required>
                            @if ($errors->has('email'))
                                <span class="text-danger text-left">{{ $errors->first('email') }}</span>
                            @endif
                        </div>       
                        <button type="submit" class="btn btn-primary">Save user</button>
                        <a href="{{ route('users.index') }}" class="btn btn-default">Back</a>
                    </form>
                </div>        
            </div>
        </div>
    </div>
</x-admin-layout>
