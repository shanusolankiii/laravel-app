<!-- Sidebar -->
<div class="sidebar" id="sidebar">
  <div class="sidebar-inner">
    <div id="sidebar-menu" class="sidebar-menu">
      <ul class="list">
        <li class="menu-title">
          <span>Main</span>
        </li>
        <li class="{{ Route::currentRouteNamed( 'practitioner-dashboard' ) ?  'active' : '' }}"><a href="{{ route('practitioner-dashboard') }}"><i class="material-symbols-outlined">dashboard</i> <span>Dashboard</span></a></li>
        <li class="{{ Route::currentRouteNamed( 'practitioner-profile' ) ?  'active' : '' }}"><a href="{{ route('practitioner-profile') }}"><i class="material-symbols-outlined">person</i> <span>Profile</span></a></li>        
        <li class="{{ Route::currentRouteNamed('hb-academy') ?  'active' : '' }}" ><a href="{{ route('hb-academy') }}"><i class="material-symbols-outlined">menu_book</i> <span>HB Academy</span></a></li>        
      </ul>
    </div>
  </div>
</div>
<!-- /Sidebar -->