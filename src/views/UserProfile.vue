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
      <p @click="toPublications">
        Publications
      </p>
      <p @click="toFavorites">
        Favorite
      </p>
    </div>
    <div id="listPart">
      <div id="publicationList">
        <PlantCard v-for="plant of user.publications" :key="plant.id" :plant="plant"/>
      </div>
      <div id="favoriteList">
        <PlantCard v-for="plant of user.favorites" :key="plant.id" :plant="plant"/>
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

  height: 100vh;
}
#descriptionPart
{
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: rgb(236, 236, 236);

  height: 100vh;
  width: 33vw; 
}
#profileImageHolder
{
  height: 33vw;
  width: 33vw;
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
  margin-left: 33vw;
  width: 134vw;
  z-index: 0;

  transition-duration: 500ms;

  display: flex;
  flex-direction: row;
}
#favoriteList,
#publicationList
{
  width: 67vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>