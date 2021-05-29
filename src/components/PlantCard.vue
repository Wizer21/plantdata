<template>
  <router-link :to="url" id="cardBody">
    <div id="cardContent">
      <div id="cardImagePart">
        <img :src="plant.image" id="plantImage"/>
      </div>
      <div id="cardTextPart">
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
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PlantCart',
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
  },
  mounted(){
    const plantImage = document.getElementById('plantImage')
    console.log(plantImage.clientWidth);
  }
}
</script>

<style>
#cardBody
{
  width: 20vh;
  height: 20vh;

  cursor: pointer;

  overflow: hidden;
  flex-grow: 1;
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

  transition-duration: 500ms;
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
</style>