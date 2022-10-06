import { createApp } from 'vue'
import './main.scss'
import App from './App.vue'
import global from './global';

const app = createApp(App);
app.use(global);
app.mount('#app');
