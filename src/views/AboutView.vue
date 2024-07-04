<template>
  <div class="about" id="about">
    <div class="container text-center">
      <BR></BR>
      <BR></BR>
      <BR></BR>
      <BR></BR>
  <div class="row align-items-center">
    <div class="col">
      <img src="https://i.postimg.cc/sXtMFSNQ/omg.avif" class="profile-image">
    </div>
    <div class="col">
      <div v-if="about" class="about-container">
        <BR></BR>
        <BR></BR>
        <h1>{{ about.heading }}</h1>
        <p>{{ about.description }}</p>
      </div>
      <div v-else class="loading">
        Loading...
      </div>
    </div>
    </div>
  </div>
</div>

</template>

<script>
// import axios from 'axios';

export default {
  name: 'AboutView',
  data() {
    return {
      about: null
    };
  },
  mounted() {
  fetch('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      this.about = data.about;
    })
    .catch(error => {
      console.error('Error fetching about data:', error);
    });
}

};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  /* background-size: cover;
  background-repeat: repeat-y; */
  /* started changes */
}

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(243, 243, 243, 0.5); /* slightly transparent background */
  padding: 5%;
  border-radius: 10px;
  max-width: 100%;
  margin: 0 auto;
}

.profile-image {
  width: 70%;
  height: 55vh;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.6;
}

.loading {
  font-size: 1.5em;
  color: #999;
}
</style>{}