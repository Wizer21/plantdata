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
          plant
        </div>
        <div id="userPanel">
          <UserSubmitCard v-for="user of userList" :key="user.id" :user="user"/>
        </div>
        <div id="toFavorite">
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
      this.closeElem(document.getElementById('favButtonBackground'), document.getElementById('toFavorite'))
    },
    toUsers(){
      this.closeElem(document.getElementById('plantzButtonBackground'), document.getElementById('plantzPanel'))
      this.openElem(document.getElementById('userButtonBackground'), document.getElementById('userPanel'))
      this.closeElem(document.getElementById('favButtonBackground'), document.getElementById('toFavorite'))
    },
    toFavorite(){
      this.closeElem(document.getElementById('plantzButtonBackground'), document.getElementById('plantzPanel'))
      this.closeElem(document.getElementById('userButtonBackground'), document.getElementById('userPanel'))
      this.openElem(document.getElementById('favButtonBackground'), document.getElementById('toFavorite'))
    },
    openElem(button, panel) {
      button.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      panel.style.width = "100%"
    },
    closeElem(button, panel){
      button.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
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
  margin: 5%;
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
  transform: rotate(-90deg) translateX(50%);
  margin: 0;
  font-size: 2em;
  cursor: pointer;
  transition-duration: 500ms;
  z-index: 2;

  width: 2em;
  bottom: 0;
  white-space: nowrap;

  border-bottom: 1px solid black;
}
.oneButtonHolder:hover p 
{
  transform: rotate(-90deg) translateX(70%);
}
#plantzButtonBackground,
#userButtonBackground,
#favButtonBackground
{
  width: 100%;
  height: 100%;
  background-color: rgb(59, 59, 59, 0.4);

  transition-duration: 500ms;
}
/* Hodlers */
#panelsHolder
{
  width: 100%;

  display: flex;
  flex-direction: row;
}
#panelsHolder div
{
  width: 0%;
  height: 100%;
  transition-duration: 500ms;

  overflow: hidden;
}
#plantzPanel
{
  background-color: red;
}
#userPanel
{
  background-color: blue;
}
#toFavorite
{
  background-color: green;
}
</style>
