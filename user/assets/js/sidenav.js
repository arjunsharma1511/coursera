var sidenav = document.querySelector('.sidebar');
sidenav.classList.add('toggled','sidebar-dark','accordion','p-0','navbar','navbar-dark','align-items-start');
sidenav.innerHTML +=
`
<style>
  :root {
    --topbar-color: var(--dark-2);
    --sidebar-color: #2412c5;
    --dark-1: #27262e;
    --dark-2: #2d2c38;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .sidebar {
    background: var(--sidebar-color) !important;
  }
  .topbar {
    background: var(--topbar-color) !important;
    border-bottom: 1px solid #fff;
  }
  .dropdown-item:hover {
    background: none;
  }
  .card {
    background: var(--dark-1);
    border: none;
  }
  .card .card-header, .card .card-body {
    background: var(--dark-1);
  }
  .card input {
    background: var(--dark-2);
  }
</style>

<div class="container-fluid d-flex flex-column p-0">
  <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
    <div class="sidebar-brand-text mx-3"><span>Brand</span></div>
  </a>
  
  <hr class="sidebar-divider my-0">
  
  <ul class="navbar-nav text-light" id="accordionSidebar">
    <li class="nav-item"><a class="nav-link nav-home" href="index.html"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
    <li class="nav-item"><a class="nav-link nav-profile" href="profile.html"><i class="fas fa-user"></i><span>Profile</span></a></li>
    <li class="nav-item"><a class="nav-link nav-projects" href="table.html"><i class="fas fa-table"></i><span>Table</span></a></li>
    <li class="nav-item"><a class="nav-link nav-" href="register.html"><i class="fas fa-user-circle"></i><span>Register</span></a></li>
    <!-- <li class="nav-item"><a class="nav-link" href="register.html"><i class="fas fa-user-circle"></i><span>Workshops</span></a></li> -->
    <div class="dropdown nav-item">
      <a class="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
        Workshops
      </a>
      <ul class="dropdown-menu p-0 m-0 position-absolute top-0" style="left: 105px;background: var(--sidebar-color);">
        <li><a class="dropdown-item text-light" href="#">My workshops</a></li>
        <li><a class="dropdown-item text-light" href="#">All workshops</a></li>
      </ul>
    </div>
  </ul>
  
  <div class="text-center d-none d-md-inline">
    <button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
  </div>
</div>
`;
