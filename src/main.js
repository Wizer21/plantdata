import { createApp, h } from 'vue'

import Home from './pages/Home.vue'
import Plants from './pages/Plants.vue'

const routes = {
  '/': Home,
  '/plants': Plants
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || Error
    },
  },

  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')