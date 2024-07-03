<template>
  <div class="about" id="about">
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
</template>

<script>
import axios from 'axios';

export default {
  name: 'AboutView',
  data() {
    return {
      about: null
    };
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
      .then(response => {
        this.about = response.data.about; // Assuming your JSON structure has an 'about' object
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
  padding: 20px;
  /* background-image: url('https://i.postimg.cc/Jn3T2wbF/Untitled-design-10.png'); */
  /* background-size: cover;
  background-repeat: repeat-y; */
  text-align: center;
}

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(243, 243, 243, 0.9); /* slightly transparent background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
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
</style>