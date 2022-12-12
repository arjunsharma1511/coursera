var navbar = document.querySelector('nav');

navbar.innerHTML+=
`
<div class="container">
<a class="navbar-brand d-flex align-items-center" href="index.html">
<span class="d-flex justify-content-center align-items-center">
<img src="assets/icon/android-chrome-192x192.png" style="height: 80px;margin: -25px 0px -38px 0">
</span>
</a>
<button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2">
<span class="visually-hidden">Toggle navigation</span>
<span class="navbar-toggler-icon"></span>
</button>
    <div class="collapse navbar-collapse" id="navcol-2">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
            <li class="nav-item"><a class="nav-link active" href="contacts.html">Contacts</a></li>
        </ul><a class="nav-link" href="login.html"><button class="btn btn-primary" type="button">Login</button></a>
    </div>
</div>
`