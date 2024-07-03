<template>
  <BR></BR>
  <BR></BR>
  <div class="testimonials" id="testimonials">
    <BR></BR>
    <div v-if="testimonials" class="testimonials-container">
      <h1>{{ testimonials.heading }}</h1>
      <div class="testimonials-list">
        <div v-for="(item, index) in testimonials.items" :key="index" class="card testimonial-card">
          <img :src="item.image" class="card-img-top testimonial-image" :alt="item.name">
          <div class="card-body">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-text">{{ item.testimonial }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TestimonialsView',
  data() {
    return {
      testimonials: null
    };
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
      .then(response => {
        this.testimonials = response.data.testimonials; // Assuming your JSON structure has a 'testimonials' object
      })
      .catch(error => {
        console.error('Error fetching testimonials data:', error);
      });
  }
};
</script>

<style scoped>
.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  /* background-color: rgba(243, 243, 243, 0.9); slightly transparent background */
}

.testimonials-container {
  background: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
  width: 100%;
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.testimonials-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* Ensure wrapping for smaller screens */
}

.testimonial-card {
  flex: 1 1 15%; /* Adjust based on the desired number of cards per row */
  max-width: 3  30%; /* Ensure the cards don't exceed 30% of the container's width */
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonial-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
}

.card-text {
  font-size: 1em;
  color: #666;
}

.loading {
  font-size: 1.5em;
  color: #999;
}
</style>