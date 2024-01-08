<x-admin-layout>
<div class="content">
      <div class="container-fluid">
      <div>
  
  @if (session()->has('message'))
      <div class="alert alert-success">
          {{ session('message') }}
      </div>
  @endif

  @if($updateMode)
      @include('livewire.update')
  @else
      @include('livewire.create')
  @endif

  <table class="table table-bordered mt-5">
      <thead>
          <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th width="150px">Action</th>
          </tr>
      </thead>
      <tbody>
          @foreach($categories as $category)
          <tr>
              <td>{{ $category->id }}</td>
              <td>{{ $category->category_title }}</td>
              <td>{{ $category->category_description }}</td>
              <td>
              <button wire:click="edit({{ $category->id }})" class="btn btn-primary btn-sm">Edit</button>
                  <button wire:click="delete({{ $category->id }})" class="btn btn-danger btn-sm">Delete</button>
              </td>
          </tr>
          @endforeach
      </tbody>
  </table>
</div>
      </div>
</div>
</x-admin-layout>
