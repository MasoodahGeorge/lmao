<template>
    <div class="resume" id="resume">
      <BR></BR>
      <BR></BR>
      <div class="resume-container">
        <h1>{{ resume.heading }}</h1>
        <div v-for="(item, index) in resume.timeline" :key="index" class="timeline-item">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <span>{{ item.duration }}</span>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'ResumeView',
  data() {
    return {
      resume: {
        heading: "",
        timeline: []
      }
    };
  },
  mounted() {
    axios.get('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
      .then(response => {
        this.resume = response.data.resume; // Assuming your JSON structure has a 'resume' object
      })
      .catch(error => {
        console.error('Error fetching resume data:', error);
      });
  }
};
</script>

<style scoped>
.resume {
  margin-top: 100px;
  padding: 20px;
  text-align: center;
}

.resume-container{
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

.timeline-item {
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #806088;
}

p {
  font-size: 1.2em;
  color: #666;
}

span {
  font-size: 1em;
  color: #999;
}
</style>
