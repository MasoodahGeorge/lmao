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
    background-color: #F3F3F3;
    color: rgb(90, 90, 90);
    width: 100%;
    text-align: center;
  }
  
  .footer p {
    margin: 0;
  }
  </style>
  