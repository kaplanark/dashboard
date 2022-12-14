import { createApp } from 'vue'
import './main.scss'
import App from './App.vue'
import router from './router/index'
import global from './global';
import store from './store/index'

const app = createApp(App);
app.use(router);
app.use(global);
app.use(store);
app.mount('#app');
