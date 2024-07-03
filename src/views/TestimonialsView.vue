<template>
  <div class="testimonials" id="testimonials">
    <br />
    <div v-if="testimonials" class="testimonials-container">
      <h1>{{ testimonials.heading }}</h1>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button v-for="(item, index) in testimonials.items" :key="index"
                  type="button" data-bs-target="#carouselExampleCaptions"
                  :data-bs-slide-to="index" :class="{ active: index === 0 }"
                  aria-current="true" :aria-label="'Slide ' + (index + 1)"></button>
        </div>
        <div class="carousel-inner">
          <div v-for="(item, index) in testimonials.items" :key="index"
               :class="['carousel-item', index === 0 ? 'active' : '']">
            <div class="testimonial">
              <img :src="item.image" class="d-block w-100 testimonial-image" :alt="item.name">
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ item.name }}</h5>
                <p>{{ item.testimonial }}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
}

.testimonials-container {
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 800px; /* Adjust as needed */
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.carousel {
  width: 100%;
}

.carousel-item {
  text-align: center;
}

.testimonial-image {
  border-radius: 8px;
  object-fit: cover;
  height: 550px;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5); /* Adjust background color and opacity */
  color: #fff; /* Adjust text color */
  border-radius: 8px;
  padding: 2%;
  text-align: center;
}

.carousel-caption h5 {
  font-size: 1.5em; /* Adjust title font size */
  margin-bottom: 10px;
}

.carousel-caption p {
  font-size: 1.2em; /* Adjust text font size */
}
</style>
