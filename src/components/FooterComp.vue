<template>
    <footer class="footer">
      <p>&copy; {{ currentYear }} Masoodah George. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: white;
    width: 100%;
    text-align: center;
  }
  
  .footer p {
    margin: 0;
  }
  </style>
  