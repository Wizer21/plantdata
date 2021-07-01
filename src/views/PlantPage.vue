<template>
  <div id="plantPage">
    <template v-if="plant">
      <div id="plantImageHolder">
        <img :src="plant.image">
      </div>
      <div id="plantTextHolder">
        <div id="titleAndFav">
          <p id="plantName">
            {{ plant.name }}
          </p>          
          <div id="favHolder" v-on="isLogged ? {click: toggleLike} : {}" :class="isLogged ? clickable : ''">
            {{ plant.likes }}       
            <div id="favIconHolder">
              <img :src="isFav" >
            </div>   
          </div>
        </div>
        <p>
          {{ plant.description }}
        </p>
        <div id="plantDataHolder">
          <div class="plantSubLine">
            <p class="plantSubLineTitle">
              Difficulty
            </p>
            <p class="plantSubLineData">
              {{ plant.difficulty }}
            </p>
          </div>
          <div class="plantSubLine">
            <p class="plantSubLineTitle">
              Luminosity
            </p>
            <p class="plantSubLineData">
              {{ plant.luminosity }}
            </p>
          </div>
          <div class="plantSubLine">
            <p class="plantSubLineTitle">
              Fogging
            </p>
            <p class="plantSubLineData">
              {{ plant.fogging }}
            </p>
          </div>
          <div class="plantSubLine">
            <p class="plantSubLineTitle">
              Mature height
            </p>
            <p class="plantSubLineData">
              {{ plant.matureheight }} m
            </p>
          </div>
          <div class="plantSubLine">
            <p class="plantSubLineTitle">
              Required heat
            </p>
            <p class="plantSubLineData">
              {{ plant.requiredheat }} c°
            </p>
          </div>
        </div>
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
    userPageLink(){
      return `/userprofile/${this.plant.user.id}`
    },
    isLogged(){
      return this.$store.state.logged
    },
    isFav(){
      if (this.isLiked)
      {
        return require('../assets/icons/heart.png')
      }
      else{
        return require('../assets/icons/heart-outline (1).png')
      }
    }
  },
  methods: {
    applyPlant(plant){
      this.plant = plant
      
      // If logged -> Check if is liked
      console.log(this.$store.state.user);
      if(this.$store.state.logged){
        this.isLiked = this.$store.state.user.favorites.includes(this.plant.id)
      }
      console.log(this.isLiked);
    },
    toggleLike(){
      console.log(this.$store.state.user)

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
        this.plant.likes = parseInt(this.plant.likes) + 1

        this.$store.state.user.favorites.push(this.plant.id)
        updateUserAddFavorite(this.$store.state.user.id, this.plant.id)
      }   
      console.log(this.$store.state.user)
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
#plantName
{
  font-size: 2em;
  margin: 0;
  width: min-content;
}
/* Fav */
.clickable
{
  cursor: pointer;
}
#favIconHolder
{
  height: 5vh;
  width: 5vh;
}
#favIconHolder img
{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
#favHolder
{
  display: flex;
  flex-direction: row;
  align-items: center;
}
#titleAndFav
{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* Plant Data */
#plantDataHolder
{
  border: 1px solid black;
  padding: 5%;
  border-radius: 4px;
}
.plantSubLine
{
  display: flex;
  flex-direction: row;

  justify-content: space-between;
}
.plantSubLineTitle
{
  opacity: 0.7;
  width: 50%;
}
.plantSubLineData
{
  text-align: right;
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