<style>
#course-listing {
  position: relative;
}
.course-filter-btn-wrap,
.courses-sidebar-close-wrap {
  display: none;
}
#course-listing .card {
  padding: 1rem;
}
#course-listing .card .card-body {
  padding: 0;
}
#course-listing .card .course-img {
  height: 80px;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
}
#course-listing .card .course-img img {
    height: 100%;
    max-height: 80px;
    width: auto;
    padding: 0.625rem 0 0;
}
#course-listing .preload{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, .8);
}
#course-listing .preload img{
  max-width: 50px;
}
#course-listing .card .card-body h6 {
  margin-bottom: .5rem;
}
#course-listing .card .card-body h6 a {
  max-height: 44px;
  min-height: 44px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  color: #585858;
}
#course-listing .card:hover .card-body h6 a,
#course-listing .card .card-body h6 a:hover {
  color: #44A86B;
}
#course-listing .card .card-body .description {
  max-height: 50px;
  min-height: 50px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
</style>
<div class="showlist border-top" id="course-listing">    
    @if (count($courses) > 0)      
    <div class="row">
        @php 
        foreach($courses as $course) {				
            $courselogo = $course->course_logo;
            $showtitle = $course->course_title;
            $showdesc = $course->course_description;
            $creator = $course->course_creator;
            $instructors = $course->instructors;
            $credit = $course->credit_counts;
            $category = $course->category;
            $price = $course->price;
            $ctalabel = $course->cta_label;
            $ctalink = $course->cta_link;
        @endphp
        <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 mb-4">
            <div class="card h-100">
                <div class="course-img">
                    <img src="{{ $courselogo }}" alt="{{ $showtitle }}" class="card-img-top">
                </div>
                <div class="card-body">
                    <h6 class="font-weight-bold">{{ $showtitle }}</h6>
                    <div class="text-muted description">
                        <p class="mb-0"><strong>Category:</strong> {{ $category }}</p>
                        <p><strong>Course Creator:</strong>
                            @foreach ($course_creators as $course_creator)
                                @if ($course_creator->id == $creator)
                                    {{ $course_creator->course_creator_name }}
                                @endif
                            @endforeach
                        </p>
                        <p class="mb-lg-0">{{ $showdesc }}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-between">
                        <div class="h6 font-weight-bold">{{ strip_tags($price) }}</div>
                        <a href="{{ $ctalink }}" target="_blank" class="btn btn-orange btn-sm">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
        @php } @endphp
    </div>
    @else
    <div class="row">
        <h3>No Course Found.</h3>
    </div>
    @endif  
</div>