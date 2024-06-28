<template>
  <div class="home">
    <div v-if="home" class="profile-container">
      <img :src="home.image" alt="Profile Image" class="profile-image">
      <h1>{{ home.name }} {{ home.surname }}</h1>
      <h2>{{ home.title }}</h2>
    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import Navbar from '../components/NavbarComp.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      home: null
    };
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
      .then(response => {
        this.home = response.data.home; // Assuming your JSON structure has a 'home' object
      })
      .catch(error => {
        console.error('Error fetching home data:', error);
      });
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-image: url('https://i.postimg.cc/pL2pKB9Y/home.png');
  background-size: cover;
  background-repeat: repeat-y;
  text-align: center;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d3cfde;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.profile-image {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5em;
  margin: 10px 0;
  color: #333;
}

h2 {
  font-size: 1.5em;
  color: #806088;
}

.loading {
  font-size: 1.5em;
  color: #5d5d5d;
}
</style>
