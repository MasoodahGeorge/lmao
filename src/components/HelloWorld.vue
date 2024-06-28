<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <div v-if="home">
      <h2>{{ home.name }} {{ home.surname }}</h2>
      <p>{{ home.title }}</p>
      <img :src="home.image" alt="Profile Image">
    </div>
    <div v-else>
      Loading...
    </div> -->
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      home: null
    };
  },
  // mounted() {
  //   axios.get('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
  //     .then(response => {
  //       this.home = response.data.home; // Assuming your JSON structure has a 'home' object
  //     })
  //     .catch(error => {
  //       console.error('Error fetching home data:', error);
  //     });
  // }
};
</script>

<style scoped>
/* Add scoped styles here */
</style>
