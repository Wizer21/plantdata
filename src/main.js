import store from './store'
import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'

import Home from './views/Home.vue'
import Plants from './views/Plants.vue'
import PlantPage from './views/PlantPage.vue'
import Login from './views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plants',
    name: 'Plants',
    component: Plants,
  },
  {
    path: '/plant/:id',
    name: 'Plant',
    component: PlantPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})


createApp(App).use(router).use(store).mount('#app')