<template>
  <div id="plantPage">
    <template v-if="plant">
      <div id="plantImageHolder">
        <img :src="plant.image">
      </div>
      <div id="plantTextHolder">
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
          Max Height: {{ plant.matureheight }} m
        </p>
        <p>
          Min heat: {{ plant.requiredheat }} c°
        </p>
        <template v-if="isLogged">
          <p id="likeButton" @click="toggleLike">
            <template v-if="isLiked">
              Likes: {{ plant.likes }} liked
            </template>
            <template v-else>
              Likes: {{ plant.likes }} Not liked
            </template>
          </p>
        </template>
        <template v-else>
          <p>
            Likes: {{ plant.likes }}
          </p>
        </template>
        <router-link :to="userPageLink" class="navigationButton">Posted by {{ plant.user.username }}</router-link>
      </div>
    </template>
  </div>
</template>

<script>
import { getOnePlant, updateUserAddFavorite, updateUserDeleteFavorite } from '../requester.js'

export default {
  name: 'PlantPage',
  data(){
    return{
      plant: null,
      isLiked: false
    }
  },
  computed: {
    isLogged(){
      return this.$store.state.logged
    },
    userPageLink(){
      return `/userprofile/${this.plant.user.id}`
    }
  },
  methods: {
    applyPlant(plant){
      this.plant = plant

      console.log(this.plant);
      
      // If logged -> Check if is liked
      if(this.$store.state.logged){
        this.isLiked = this.$store.state.user.favorites.includes(this.plant.id)
      }
    },
    toggleLike(){
      if (this.isLiked){
        this.isLiked = false
        this.plant.likes -= 1
        
        // Search and remove the plant from favorite list
        const array = this.$store.state.user.favorites
        for( var i = 0; i < array.length; i++){     
          if ( array[i] === this.plant.id) {     
            this.$store.state.user.favorites.splice(i, 1)
          }        
        }

        updateUserDeleteFavorite(this.$store.state.user.id, this.plant.id)
      }
      else{
        this.isLiked = true
        this.plant.likes += 1

        this.$store.state.user.favorites.push(this.plant.id)
        updateUserAddFavorite(this.$store.state.user.id, this.plant.id)
      }   
      console.log(this.$store.state.user.favorites)
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
  font-size: 1.5em;
  padding: 5%;
  
  height: 100%;
  width: 40%;
}
#likeButton
{
  color: rgb(238, 49, 49);
  cursor: pointer;
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