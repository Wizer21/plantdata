<template>
  <div id="plantSearchPanel">
    <input id="searchBar" type="text" :oninput="updateSearchInput">    
    <router-link v-if="isLogged" to="/createplant" >Create Plant</router-link>
  </div>
  <div id="plantList">
    <template v-for='plant of plantList' :key="plant.id">
      <PlantCard v-if="testSearchInput(plant.name)" :plant="plant"/>
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
      plantList: [],
      searchInput: null
    }
  },
  computed: {
    isLogged(){
      return this.$store.state.logged
    }
  },
  methods: {
    applyPlantList(plantList){
      this.plantList = plantList
    },
    updateSearchInput(){  
      this.searchInput = document.getElementById('searchBar').value
    },
    testSearchInput(plantName){
      if (!this.searchInput){
        return true
      }
      if (plantName.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1){
        return true
      }
      else
      {
        return false
      }      
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
  flex-wrap: wrap;
  justify-content: center;
}
#plantSearchPanel
{
  height: 8vh;
  width: 100vw;
  background-color: blueviolet;

  display: flex;
}
</style>