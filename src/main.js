import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming you have a 'router.js' file where you configure Vue Router
import store from './store'; // Assuming you have a 'store.js' or Vuex store setup

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
