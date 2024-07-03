<template>
  <div class="skills" id="skills">
    <BR></BR>
    <BR></BR>
    <BR></BR>
    <BR></BR>
    <div class="skills-container">
      <BR></BR>
      <h1>{{ skills.heading }}</h1>
      <div class="skills-cont">
      <div v-for="skill in skills.items" :key="skill.name" class="skill-item">
        <img :src="skill.image" :alt="skill.name" class="skill-image" />
        <p class="skill-name">{{ skill.name }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
name: 'SkillsView',
data() {
  return {
    skills: {
      heading: '',
      items: []
    }
  };
},
mounted() {
  axios.get('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json') // Replace with your API endpoint
    .then(response => {
      this.skills = response.data.skills; // Assuming your JSON structure has a 'skills' object
    })
    .catch(error => {
      console.error('Error fetching skills data:', error);
    });
}
};
</script>

<style scoped>
.skills-cont {
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
}

.skills-container {
text-align: center;
max-width: 800px;
margin: 0 auto;
background-color: rgba(243, 243, 243, 0.9);
border-radius: 10px;
}

h1 {
font-size: 2.5em;
margin-bottom: 20px;
color: #333;
}

.skills-list {
display: flex;
justify-content: center;
align-items: center;
gap: 20px; /* Adjust the gap between images */
}

img {
width: 100px; /* Adjust image size as needed */
height: auto;
}
</style>