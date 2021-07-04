<template>
  <router-link :to="url" id="cardBody">
    <div id="cardContent">
      <div id="cardImagePart">
        <img :src="plant.image" id="plantImage"/>
      </div>
      <div id="cardTextPart">
        <p id="plantCardTitle">
          {{ plant.name }}
        </p>
        <StarCount :level="parseInt(plant.difficulty)" />
      </div>
    </div>
  </router-link>
</template>

<script>
import StarCount from './StarCount.vue'

export default {
  name: 'PlantCart',
  components: { StarCount },
  props: {
    plant: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      url: `/plant/${this.plant.id}`
    }
  }
}
</script>

<style scoped>
#cardBody
{
  cursor: pointer;
  overflow: hidden;
}
#cardBody:hover #cardContent
{
  transform: translateX(-51%);
}
#cardContent
{  
  height: 100%;
  width: 200%;
  pointer-events: none;

  display: flex;
  flex-direction: row;

  transition: transform 500ms;
  transform: translateX(0%);
}
/* image */
#cardImagePart
{  
  height: 100%;
  width: 50%;
}
#cardImagePart img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
/* text */
#cardTextPart
{
  height: 90%;
  width: 40%;
  padding: 5%;
  
  font-size: 80%;
}
#plantCardTitle
{
  font-size: 1.5em;
}
</style>