@extends('frontend.auth.app')
<style>
    .pac-container {
        z-index: 10000 !important;
    }
	.w-5 {
		display: none;
	}

</style>
@push('title')
    <title> Health Buddha | Academy </title>
@endpush
@section('content')
<!-- Page Wrapper -->
<div class="page-wrapper">
	<!-- Page Content -->
	<div class="content container-fluid center">
		 <!-- Page Header -->
		 <div class="page-header">
			<div class="row align-items-center">
				<div class="col-sm-3">
					<h3 class="page-title">My Profile</h3>
					<ul class="breadcrumb">
						<li class="breadcrumb-item"><a href="{{ route('hb-academy') }}">Dashboard</a></li>
						<li class="breadcrumb-item active">HB Academy</li>
					</ul>
				</div>
				<div class="col-md-3">
					<select name="course_creator" id="course_creator" class="form-control custom-select">
					<option value="">Filter By Course Creator</option>
					@foreach ($course_creators as $course_creator )
						
					<option value="{{$course_creator->id}}">{{$course_creator->course_creator_name}}</option>
					@endforeach
					
				</select></div>
				<div class="col-md-6">
					
					<input type="text" name="serach" id="serach" class="form-control" placeholder="Search By Course Title, Instructor or Category..." />
				
			</div>
			</div>
		</div>
		<!-- /Page Header -->
		<div class="card">
			<div class="card-body">
				<div class="practitioner-profile-view">
					<div class="row">
						<section id="showlist">
							<div class="container">
								<div class="section-title">
									<h2 class="mb-3">CE Courses For You</h2>		
									
									
								</div>
								@include('frontend.auth.course_list')		
									

							</div>
						</section>
						<div class="row">					
						<div class="d-flex justify-content-center footer-pagination py-3 text-center">
							{!! $courses->links() !!}
						</div>
						</div>
						<input type="hidden" name="hidden_page" id="hidden_page" value="1" />
						<input type="hidden" name="route" id="route" value="{{ route('hb-academy')}}" />
					</div>
				</div>
			</div>
		</div>	
	</div>
</div>

@endsection
<script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
<script>
$(document).ready(function(){
    const fetch_data = (page, course_creator, seach_term) => {
        if(course_creator === undefined){
            course_creator = "";
        }
        if(seach_term === undefined){
            seach_term = "";
        }
		let route = $('#route').val();
        $.ajax({ 
            url:route+"?page="+page+"&course_creator="+course_creator+"&seach_term="+seach_term,
            success:function(data){
                $('.showlist').html('');
                $('.showlist').html(data);
            }
        })
    }

    $('body').on('keyup', '#serach', function(){
        var course_creator = $('#course_creator').val();
        var seach_term = $('#serach').val();
        var page = $('#hidden_page').val();
        fetch_data(page, course_creator, seach_term);
    });

    $('body').on('change', '#course_creator', function(){
        var course_creator = $('#course_creator').val();		
        var seach_term = $('#serach').val();
        var page = $('#hidden_page').val();
        fetch_data(page, course_creator, seach_term);
    });

    $('body').on('click', '.pager a', function(event){
        event.preventDefault();
        var page = $(this).attr('href').split('page=')[1];
        $('#hidden_page').val(page);
        var serach = $('#serach').val();
        var seach_term = $('#course_creator').val();
        fetch_data(page,course_creator, seach_term);
    });
});
</script>