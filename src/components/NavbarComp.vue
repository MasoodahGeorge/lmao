<!-- <template>
    <nav class="nav-sec">
      <div class="fixed-top">
        <nav class="navbar navbar-expand-lg" id="nv">
          <div class="container-fluid">
            <a class="navbar-brand" href="../views/HomeView.vue">
              <img src="https://i.postimg.cc/pLfnPJR0/B-1-removebg-preview.png" alt="Logo" class="d-inline-block align-text-top"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item active">
                    <a to="/" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a to="/about" class="nav-link">About</a>
                  </li>
                  <li class="nav-item">
                    <a to="/resume" class="nav-link">Resume</a>
                  </li>
                  <li class="nav-item">
                    <a to="/skills" class="nav-link">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a to="/testimonials" class="nav-link">Testimonials</a>
                  </li>
                  <li class="nav-item">
                    <a to="/projects" class="nav-link">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a to="/contact" class="nav-link">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </template>
<script>  

export default {
  name: 'NavbarComp',
};
</script>

<style scoped>
.d-inline-block {
  width: 100%;
  height: 60px;
}

#nv {
  background-color: #F3F3F3;
  height: 50%;
  /* border-bottom: 1px solid #eaff9e; */
}

.offcanvas-body {
  color: rgb(90, 90, 90);
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.nav-link {
  color: inherit; /* Use the inherited color from the parent element */
  text-decoration: none; /* Remove the underline */
  transition: color 0.3s ease, transform 0.3s ease; /* Add a transition for the color and transform properties */

}

.nav-link:hover {
  color: #806088; /* Change color on hover, if desired */
  transform: scale(1.1); /* Add a zoom effect on hover */

}
</style>
 -->

 <template>
  <nav class="nav-sec">
    <div class="fixed-top">
      <nav class="navbar navbar-expand-lg" id="nv">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">
            <img src="https://i.postimg.cc/pLfnPJR0/B-1-removebg-preview.png" alt="Logo" class="d-inline-block align-text-top"/>
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a href="/" class="nav-link" exact>Home</a>
                </li>
                <li class="nav-item">
                  <a href="/about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                  <a href="/resume" class="nav-link">Resume</a>
                </li>
                <li class="nav-item">
                  <a href="/skills" class="nav-link">Skills</a>
                </li>
                <li class="nav-item">
                  <a href="/testimonials" class="nav-link">Testimonials</a>
                </li>
                <li class="nav-item">
                  <a href="/projects" class="nav-link">Projects</a>
                </li>
                <li class="nav-item">
                  <a href="/contact" class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
};
</script>

<style scoped>
.d-inline-block {
  width: 100%;
  height: 60px;
}

#nv {
  background-color: #F3F3F3;
  height: 50%;
}

.offcanvas-body {
  color: rgb(90, 90, 90);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: #806088;
  transform: scale(1.1);
}
</style>
