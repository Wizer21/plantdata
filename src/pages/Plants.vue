<template>
  <Navigator />
  <div>
    PLANTS !
  </div>
  <div v-for='plant of plantList' :key="plant.id">
    <p>
      {{ plant.name }}
    </p>
    <p>
      {{ plant.description }}
    </p>
    <p>
      {{ plant.difficulty }}
    </p>
  </div>
</template>

<script>
import Navigator from '../components/Navigator.vue'
import { getPlantList } from '../requester.js'

export default {
  name: "Plants",
  components: { Navigator },
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

</style>