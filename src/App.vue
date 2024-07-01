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
  </div>

</template>

<script>
import Navbar from './components/NavbarComp.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  }
};
</script>

<style scoped>
#app {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#F3F3F3;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #ea00ff;
} */
</style>
