<template>
  <div id="verifyCard" v-if="!isDone">
    <div id="verifyTextPart">
      <p>
        {{ plant.name }}
      </p>
      <p>
        {{ plant.description }}
      </p>
      <p>
        Difficulty: {{ plant.difficulty }}
      </p>
      <p>
        Luminosity: {{ plant.luminosity }}
      </p>
      <p>
        Fogging: {{ plant.fogging }}
      </p>
      <p>
        Mature Height: {{ plant.matureheight }} m
      </p>
      <p>
        Required Heat: {{ plant.requiredheat }} c°
      </p>
    </div>
    <div id="verifyImageContainer">
      <img :src="plant.image">
    </div>
    <div>
      <button @click="deletePlant">
        Refuse
      </button>
      <button @click="addPlant">
        Accept
      </button>
    </div>
  </div>
</template>

<script scoped>
import { deletePost, acceptPlant } from '../requester.js'

export default {
  name: 'VerifyCard',
  props: {
    plant: {
      type: Object,
      require: true,
    }
  },
  data(){
    return {
      isDone: false
    }
  },
  methods: {
    deletePlant(){
      deletePost(this.plant.id)
      this.isDone = true

      this.$emit('archived', this.plant.id)
    },
    addPlant(){
      acceptPlant(this.plant.id)
      this.isDone = true

      this.$emit('archived', this.plant.id)
    }
  }
}
</script>

<style>
#verifyCard
{
  border: 1px solid black;
  margin: 2% 10%;
  padding: 2%;

  max-height: 50vh;

  display: flex;
  flex-direction: row;
}
#verifyImageContainer,
#verifyTextPart
{
  width: 50%;
}
#verifyImageContainer img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>