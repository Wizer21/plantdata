<template>
  <div>
    <div v-if="plant" id="plantPage">
      <div id="plantImageHolder">
        <img :src="plant.image.url">
      </div>
      <div id="plantTextHolder">
        <p>
          {{ plant.name }}
        </p>
        <p>
          {{ plant.description }}
        </p>
        <p>
          Rarity: {{ plant.rarity }}
        </p>
        <p>
          Difficulty: {{ plant.difficulty }}
        </p>
        <p>
          Luminosity: {{ plant.requiredluminosity }}
        </p>
        <p>
          Moisten: {{ plant.moisten }}
        </p>
        <p>
          Max Height: {{ plant.maxheight }} m
        </p>
        <p>
          Min heat: {{ plant.minheat }} c°
        </p>
        <p>
          Likes: {{ plant.likes }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getOnePlant } from '../requester.js'

export default {
  name: 'PlantPage',
  data(){
    return{
      plant: null
    }
  },
  methods: {
    applyPlant(plant){
      console.log(plant);
      this.plant = plant
    }
  },
  mounted(){
    getOnePlant(this.applyPlant, this.$route.params.id)
  }
}
</script>

<style scoped>
#plantPage
{
  display: flex;
  flex-direction: row;

  height: 100vh;
  width: 100vw;
}
#plantImageHolder
{
  height: 100%;
  width: 60%;
}
#plantImageHolder img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
#plantTextHolder
{
  font-size: 2em;
  padding: 5%;
  
  height: 100%;
  width: 40%;
}
@media screen and (max-width: 800px) {  
  #plantPage
  {
    height: 200vh;
    flex-direction: column;
  }
  #plantImageHolder
  {
    height: 100%;
    width: 100%;
  }
  #plantTextHolder
  {
    height: 100%;
    width: 100%;
  }
}
</style>