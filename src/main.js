//import { createApp, h } from 'vue'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import Home from './pages/Home.vue'
import Plants from './pages/Plants.vue'
import PlantPage from './pages/PlantPage.vue'
import App from './App.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})


createApp(App).use(router).mount('#app')