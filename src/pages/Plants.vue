<template>
  <div>
    PLANTS !
  </div>
  <div id="plantList">
    <template v-for='plant of plantList' :key="plant.id">
      <PlantCard :plant="plant"/>
    </template>
  </div>
</template>

<script>
import PlantCard from '../components/PlantCard.vue'
import { getPlantList } from '../requester.js'

export default {
  name: "Plants",
  components: { PlantCard },
  data(){
    return {
      plantList: []
    }
  },
  methods: {
    applyPlantList(plantList){
      this.plantList = plantList
    },
  },
  mounted(){
    getPlantList(this.applyPlantList)
  }
}
</script>

<style scoped>
#plantList
{
  display: flex;
  
}
</style>