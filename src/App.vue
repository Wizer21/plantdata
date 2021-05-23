<template>
  <div>
    <Navigator />
    <router-view />  
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'

export default {
  name: "App",
  components: { Navigator }
}
</script>

<style>
</style>