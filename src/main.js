import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'



axios.defaults.baseURL = 'https://127.0.0.1:8000/api/';


createApp(App).use(store).use(router).mount('#app')
