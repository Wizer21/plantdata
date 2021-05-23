<template>
  <div>
    <router-link :to="url">
      <div id="cardBody" @click="openPlant">
        <div id="cardContent">
          <div id="cardImagePart">
            <img :src="plant.image.url">
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
      </div>
    </router-link>
  </div>
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
  }
}
</script>

<style>
#cardBody
{
  height: 20vh;
  width: 13vh;
  margin: 1vh;

  border-radius: 10px;
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