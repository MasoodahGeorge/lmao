<template>
  <div class="home">
    <div v-if="home">
      <img :src="home.image" alt="Profile Image" class="profile-image">
      <h1>{{ home.name }} {{ home.surname }}</h1>
      <h2>{{ home.title }}</h2>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5em;
  margin: 10px 0;
}

h2 {
  font-size: 1.5em;
  color: #42b983;
}
</style>
