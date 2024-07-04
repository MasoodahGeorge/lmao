<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <div id="app">
    <Navbar/>
     <router-view></router-view>
  </div>
  <!-- <router-view/> -->

  <div id="app">
    <section id="home-section">
      <router-view name="home"></router-view>
    </section>
    <section id="about-section">
      <router-view name="about"></router-view>
    </section>
    <section id="resume-section">
      <router-view name="resume"></router-view>
    </section>
    <section id="skills-section">
      <router-view name="skills"></router-view>
    </section>
    <section id="testimonials-section">
      <router-view name="testimonials"></router-view>
    </section>
    <section id="projects-section">
      <router-view name="projects"></router-view>
    </section>
    <section id="contact-section">
      <router-view name="contact"></router-view>
    </section>

    <FooterComp/>
  </div>


</template>

<script>
import Navbar from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FooterComp
  }
};

</script>

<style scoped>
#about-section{
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/Untitled%20design%20(13)%20copy.png?raw=true');
  height: 80vh;
}
#resume-section{
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/Untitled%20design%20(15).png?raw=true');
}
#skills-section{
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/0.png?raw=true');
}
#testimonials-section{
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/0.png?raw=true');
}
#projects-section{
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/3.png?raw=true');
}
#contact-section{
  background-image: url('https://github.com/MasoodahGeorge/p3img/blob/main/4.png?raw=true');
}

#app {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#F3F3F3;
  /* background-image: url('https://i.postimg.cc/XYTyBpTf/Untitled-design-8.png'); */
  /* background-image: url('https://raw.githubusercontent.com/MasoodahGeorge/p3img/main/Untitled%20design%20(11).png'); */
  /* background-size: cover; */
  /* background-image: repeat; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #ea00ff;
} */
</style>