<template>
  <div id="home">
    <h1>
      Plantz
    </h1>
    <div id="holdersHodler">      
      <div id="buttonsHolder">
        <div class="oneButtonHolder">
          <p @click="toPlantz">
            Plantz
          </p>
          <div id="plantzButtonBackground"></div>
        </div>
        <div class="oneButtonHolder">
          <p @click="toUsers">
            Contributors
          </p>       
          <div id="userButtonBackground"></div>   
        </div>
        <div class="oneButtonHolder">
          <p @click="toFavorite">
            Favorites plants
          </p>      
          <div id="favButtonBackground"></div>      
        </div>
        <div id="selecteBackground"></div>
      </div>
      <div id="panelsHolder">
        <div id="plantzPanel">  
          <div id="topPlantContent">
            <p class="plantText">
              Where plants addicts discover 
            </p>
            <div id="plantImageOneHolder">
              <img :src="require('../assets/Home/home.jpg')" alt="plant house">
            </div>
          </div>
          <div id="botPlantContent">
            <div id="plantImageTwoHolder">
              <img :src="require('../assets/Home/plant.jpeg')" alt="plant house">
            </div>
            <p class="plantText">
              {{ plantsCount }} available plants
            </p>
          </div>
        </div>
        <div id="userPanel" >
          <UserSubmitCard class="homeUserCard" v-for="user of userList" :key="user.id" :user="user"/>
        </div>
        <div id="favoritePanel">
          fav
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSubmitCard from '../components/homeComponents/UserSubmitCard.vue'

import { getPlantList, getUsers } from '../requester.js'

export default {
  name: 'Home',
  components: { UserSubmitCard },
  data(){
    return{
      plant: 0,
      plantsCount: 0,
      userList: {}
    }
  },
  methods: {
    applyPlant(response){
      this.plant = response
      this.plantsCount = Object.keys(this.plant).length
    },
    applyUsers(response){
      this.userList = response
      this.userList.sort(this.sortList)
      this.userList = this.userList.slice(0, 5)
    },
    sortList(a, b){
      const aInt = parseInt(a.publications.length)
      const bInt = parseInt(b.publications.length)

      if (aInt < bInt){
        return 1
      }
      if (aInt > bInt){
        return -1
      }
      return 0
    },
    toPlantz(){      
      this.openElem(document.getElementById('plantzButtonBackground'), document.getElementById('plantzPanel'))
      this.closeElem(document.getElementById('userButtonBackground'), document.getElementById('userPanel'))
      this.closeElem(document.getElementById('favButtonBackground'), document.getElementById('favoritePanel'))
    },
    toUsers(){
      this.closeElem(document.getElementById('plantzButtonBackground'), document.getElementById('plantzPanel'))
      this.openElem(document.getElementById('userButtonBackground'), document.getElementById('userPanel'))
      this.closeElem(document.getElementById('favButtonBackground'), document.getElementById('favoritePanel'))
    },
    toFavorite(){
      this.closeElem(document.getElementById('plantzButtonBackground'), document.getElementById('plantzPanel'))
      this.closeElem(document.getElementById('userButtonBackground'), document.getElementById('userPanel'))
      this.openElem(document.getElementById('favButtonBackground'), document.getElementById('favoritePanel'))
    },
    openElem(button, panel) {
      button.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"

      panel.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      panel.style.width = "100%"
    },
    closeElem(button, panel){
      button.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"

      panel.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      panel.style.width = "0%"
    }
  },
  mounted(){
    getPlantList(this.applyPlant)
    getUsers(this.applyUsers)
    
    this.toPlantz()
  }
}
</script>

<style scoped>
#home
{
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#home h1
{
  font-size: 5em;
  margin: 3vh;
  margin-left: 20%
}
#holdersHodler
{
  display: flex;
  flex-direction: row;
  margin: 2%;
  height: 80%;
}
/* Buttons */
#buttonsHolder
{
  width: 10em;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}
.oneButtonHolder
{
  height: 100%;
  width: 33.33%;

  display: flex;
  justify-content: center;
}
.oneButtonHolder p
{
  position: absolute;
  height: min-content;
  transform: rotate(-90deg) translateX(120%);
  margin: 0;
  font-size: 2em;
  cursor: pointer;
  transition-duration: 500ms;
  z-index: 2;

  width: 2em;
  bottom: 0;
  white-space: nowrap;
}
.oneButtonHolder:hover p 
{
  transform: rotate(-90deg) translateX(140%);
}
#plantzButtonBackground,
#userButtonBackground,
#favButtonBackground
{
  width: 100%;
  height: 100%;
  background-color: rgb(59, 59, 59, 0.4);

  transition-duration: 1000ms;
}
/* Hodlers */
#panelsHolder
{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
}
#plantzPanel,
#userPanel,
#favoritePanel
{
  width: 0%;
  height: 75vh;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;

  /* overflow: hidden; */
}
#plantzPanel
{
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
#userPanel
{
  background-color: rgb(194, 194, 194);
}
#favoritePanel
{
  background-color: green;
}
/* Plant Panel */
#plantImageOneHolder,
#plantImageTwoHolder
{  
  height: 100%;
  width: 50%;
}
#plantImageTwoHolder img,
#plantImageOneHolder img
{
  height: 100%;
  width: 100%;

  object-fit: contain;
}
#topPlantContent
{
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.plantText
{
  margin: 2vh;
  font-size: 4vw;

  flex-wrap: nowrap;
  height: min-content;
}
#botPlantContent
{
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

}
/* User Panel */
#userPanel
{
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
</style>
