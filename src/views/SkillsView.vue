<template>
    <div class="skills">
      <h1>{{ skills.heading }}</h1>
      <div class="skills-container">
        <div v-for="skill in skills.items" :key="skill.name" class="skill-item">
          <img :src="skill.image" :alt="skill.name" class="skill-image" />
          <p class="skill-name">{{ skill.name }}</p>
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
.skills {
  text-align: center;
  padding: 20px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 150px;
}

.skill-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}

.skill-name {
  font-size: 1.2em;
  color: #333;
}
</style>
