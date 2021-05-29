<template>
  <div id="plantSearchPanel">
    <router-link v-if="isLogged" to="/createplant" id="createPlantButton">
      <p>
        Create Plant
      </p>
    </router-link>
    <input id="searchBar" type="text" :oninput="updateSearchInput">    
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

  display: flex;
  justify-content: flex-end;
}
#createPlantButton
{
  width: 20vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: 1px solid black;
}
#createPlantButton p
{
  margin: 0 10%;
  
  text-align: center;

  font-size: 1.2em;
  white-space: nowrap;
}
</style>