<template>
  <div>
    <Navigator />
    <h1 id="test">
      Coucou
    </h1>
  </div>
</template>

<script>
import Navigator from '../components/Navigator.vue'

export default {
  name: 'Home',
  components: { Navigator }
}
</script>

<style scoped>
#test{
  height: 200vh;
}
</style>
