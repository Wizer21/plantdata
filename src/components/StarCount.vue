<template>
  <div id="starsHolder">
    <div v-for="i in level" :key="i" class="stars"></div>
  </div>
</template>

<script>
export default {
  name: 'StarCount',
  props:{
    level: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
</style>