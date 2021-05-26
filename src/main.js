import store from './store'
import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'

import Home from './views/Home.vue'
import Plants from './views/Plants.vue'
import PlantPage from './views/PlantPage.vue'
import Login from './views/Login.vue'
import UserProfile from './views/UserProfile.vue'
import Admin from './views/Admin.vue'
import CreatePlant from './views/CreatePlant.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/plants',
    component: Plants,
  },
  {
    path: '/plant/:id',
    component: PlantPage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/userprofile/:id',
    component: UserProfile
  },
  {
    path: '/createplant',
    component: CreatePlant
  },
  {
    path: '/admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})


createApp(App).use(router).use(store).mount('#app')