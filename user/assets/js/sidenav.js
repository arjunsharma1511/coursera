var sidenav = document.querySelector('.sidebar');
sidenav.innerHTML =`
<style>
        :root {
            --topbar-color: #2d2c38;
            --sidebar-color: #2412c5;
            /* --sidebar-color: #19f5aa; */
            --bg-1: #27262e;
        }
        .sidebar {
          background: var(--sidebar-color) !important;
        }
        .topbar {
          background: var(--topbar-color) !important;
        }
    </style>
<div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>Brand</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><a class="nav-link active" href="index.html"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="profile.html"><i class="fas fa-user"></i><span>Profile</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="table.html"><i class="fas fa-table"></i><span>Table</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html"><i class="far fa-user-circle"></i><span>Login</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="register.html"><i class="fas fa-user-circle"></i><span>Register</span></a></li>
                    <!-- <li class="nav-item"><a class="nav-link" href="register.html"><i class="fas fa-user-circle"></i><span>Workshops</span></a></li> -->
                    <div class="dropdown nav-item">
                        <a class="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                          Workshops
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">My workshops</a></li>
                          <li><a class="dropdown-item" href="#">All workshops</a></li>
                        </ul>
                      </div>
                </ul>
                <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
            `