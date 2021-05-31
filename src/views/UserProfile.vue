<template>
  <div id="profilePage" v-if="user">
    <div id="descriptionPart">
      <div id="profileImageHolder">
        <img :src="user.profileimage">
      </div>
      <p>
        {{ user.username }}
      </p>
      <p>
        Submissions {{ user.publications.length }}
      </p>
      <div>
        <div @click="toPublications" class="profileSubButton">
          <p>
            Publications
          </p>
          <div>
          </div>
        </div>
        <p @click="toFavorites" class="profileSubButton">
          Favorite
        </p>
      </div>
    </div>
    <div id="listPart">
      <div id="publicationList">
        <PlantCard class="plantCard" v-for="plant of user.publications" :key="plant.id" :plant="plant"/>
      </div>
      <div id="favoriteList">
        <PlantCard class="plantCard" v-for="plant of user.favorites" :key="plant.id" :plant="plant"/>
      </div>
    </div>
  </div>
</template>

<script>
import { getOneUser } from '../requester.js'
import PlantCard from '../components/PlantCard.vue'

export default {
  name: "UserProfile",
  components: { PlantCard },
  data(){
    return {
      user: null
    }
  },
  methods: {
    applyUser(response){
      this.user = response
    },
    toFavorites(){
      document.getElementById('listPart').style.transform = "translateX(-50%)"
    },
    toPublications(){
      document.getElementById('listPart').style.transform = "translateX(0%)"
    }
  },
  mounted(){
    getOneUser(this.applyUser ,this.$route.params.id)  
  }
}
</script>

<style>
#profilePage
{
  display: flex;
  flex-direction: row;
}
#descriptionPart
{
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: rgb(236, 236, 236);

  height: 100vh;
  width: 15vw; 
}
#profileImageHolder
{
  height: 15vw;
  width: 15vw;
}
#profileImageHolder img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
/* Lists */
#listPart
{
  margin-left: 15vw;
  width: 170vw;
  z-index: 0;

  transition: transform 500ms;

  display: flex;
  flex-direction: row;
}
#favoriteList,
#publicationList
{
  width: 85vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
.plantCard
{
  height: 17vw;
  width: 17vw;
}
.profileSubButton
{
  width: 100%;
  height: 2em;

  font-size: 1.5em;
  text-align: center;
  background-color: rgb(37, 37, 37, 0.2);
  margin: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;
}
@media screen and (max-width: 800px) {  
  #profilePage
  {
    flex-direction: column;
  }
  #descriptionPart
  {
    height: 50vh;
    width: 100vw; 
  }
  #profileImageHolder
  {
    height: 35vw;
    width: 35vw;
  }
  #listPart
  {
    margin-left: 0;
    margin-top: 50vh;
    width: 200vw;
  }
  #favoriteList,
  #publicationList
  {
    width: 100vw;
  }
  .plantCard
  {
    height: 50vw;
    width: 50vw;
  }
}
</style>