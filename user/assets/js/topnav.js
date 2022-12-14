var topbar = document.querySelector('.topbar');
var content = document.querySelector('#content');
content.classList.add('bg-dark')
topbar.innerHTML += 
`
<style>
div, p, span {color: #fff;}
::-webkit-scrollbar {
    display: none;
}
body {
    user-select: none;
    --webkit-user-select: none;
}
</style>
<div class="container-fluid">
    <button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
        <i class="fas fa-bars"></i>
    </button>
  <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div class="input-group">
        <input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
        <button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button>
    </div>
  </form>
  <ul class="navbar-nav flex-nowrap ms-auto">
      <li class="nav-item dropdown d-sm-none no-arrow">
        <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
            <i class="fas fa-search"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
            <form class="me-auto navbar-search w-100">
                <div class="input-group">
                    <input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                    <div class="input-group-append">
                        <button class="btn btn-primary py-0" type="button">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </li>
      <li class="nav-item dropdown no-arrow mx-1">
          <div class="nav-item dropdown no-arrow">
            <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                <span class="badge bg-danger badge-counter"></span>
                <i class="fas fa-bell fa-fw"></i>
            </a>
              <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                  <h6 class="dropdown-header">alerts </h6>
                  
                  <!--<a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="me-3">
                          <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                      </div>
                      <div><span class="small text-gray-500">December 12, 2019</span>
                          <p>A new monthly report is ready to download!</p>
                      </div>
                  </a>-->
                  
                  <a class="dropdown-item text-center small text-gray-500" href="#">No New Alerts</a>
              </div>
          </div>
      </li>

      <li class="nav-item dropdown no-arrow mx-1">
          <div class="nav-item dropdown no-arrow">
          <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
          <span class="badge bg-danger badge-counter"></span>
          <i class="fas fa-envelope fa-fw"></i>
          </a>
              <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                  <h6 class="dropdown-header">Messages</h6>
                  
                  <!--<a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="dropdown-list-image me-3"><img class="rounded-circle" src="assets/img/avatars/avatar4.jpeg">
                          <div class="bg-success status-indicator"></div>
                      </div>
                      <div class="fw-bold">
                          <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                          <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                      </div>
                  </a>-->

                  <a class="dropdown-item text-center small text-gray-500" href="#">No New Messages</a>
              </div>
          </div>
          <div class="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
      </li>
      <div class="d-none d-sm-block topbar-divider"></div>
      <li class="nav-item dropdown no-arrow">
          <div class="nav-item dropdown no-arrow">
            <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                <span class="d-none d-lg-inline me-2 text-gray-600 small">Arjun sharma</span>
                <img class="border rounded-circle img-profile" src="assets/img/avatars/profile_pic.png">
            </a>
              <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                <a class="dropdown-item" href="profile.html">
                    <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings
                </a>
                <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log
                </a>
                  <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="../index.html">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout
                </a>
              </div>
          </div>
      </li>
  </ul>
</div>
`;