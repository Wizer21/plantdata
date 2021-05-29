<template>
  <div>
    <Hero />
    <PlantCount :count="plantsCount"/>
  </div>
</template>

<script>
import Hero from '../components/homeComponents/Hero.vue'
import PlantCount from '../components/homeComponents/PlantCount.vue'

import { getPlantList } from '../requester.js'

export default {
  name: 'Home',
  components: { Hero, PlantCount },
  data(){
    return{
      plant: 0,
      plantsCount: 0
    }
  },
  methods: {
    applyPlant(response){
      this.plant = response
      this.plantsCount = Object.keys(this.plant).length
    }
  },
  mounted(){
    getPlantList(this.applyPlant)
  }
}
</script>

<style scoped>
</style>
