<template>
  <div>
    <Navigator id="navigator"/>
    <router-view id="views"/>  
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
#navigator
{
  z-index: 2;
}
#views
{
  position: relative;
  z-index: 1;
}
</style>