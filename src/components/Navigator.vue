<template>
  <div id="navigator">
    <div id="toggleNavigationButton" @click="togglePanel">
      <div id="menuButton">
        <div id="menuBar1"></div>
        <div id="menuBar2"></div>
        <div id="menuBar3"></div>
      </div>
      <div id="crossButton">
        <div id="crossBar1"></div>
        <div id="crossBar2"></div>
      </div>
    </div>
    <div id="panel">          
      <div id="panelNavigator">
        <div class="buttonHandler">
          <router-link to="/" class="navigationButton" @click="togglePanel">Home</router-link>
        </div>
        <div class="buttonHandler">
          <router-link to="/plants" class="navigationButton" @click="togglePanel">Plants</router-link>
        </div>
        <div class="buttonHandler">
          <router-link v-if="isAdmin" to="/admin" class="navigationButton" @click="togglePanel">Admin</router-link>
        </div>
      </div>
      <div id="panelLogin">
        <template v-if="getStore.logged">
          <div class="buttonHandler">
            <router-link :to="userProfilePath" class="navigationButton" @click="togglePanel">{{ getStore.user.username }}</router-link>   
          </div>        
          <div class="buttonHandler"> 
            <span @click="logout" class="navigationButton">
              Logout
            </span>
          </div>        
        </template>
        <template v-else>
          <div class="buttonHandler">
            <router-link to="/login" class="navigationButton" @click="togglePanel">Login</router-link>
          </div>        
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  data(){
    return {
      isPanelOpen: false,
    }
  },
  computed: {
    getStore(){
      return this.$store.state
    },
    userProfilePath(){
      return `/userprofile/${this.$store.state.user.id}`
    },
    isAdmin(){
      return this.$store.state.admin
    }
  },
  methods: {
    togglePanel(){
      const panel = document.getElementById('panel')

      if (this.isPanelOpen){
        this.isPanelOpen = false
        panel.style.transform = "translateY(-100vh)"   

        this.iconToMenu()  
      }
      else{
        this.isPanelOpen = true   
        panel.style.transform = "translateY(0vh)"
  
        this.iconToCross()    
      }
    },
    iconToCross(){
      // Close Menu
      const menuBars = [document.getElementById('menuBar1'), document.getElementById('menuBar2'), document.getElementById('menuBar3')]
      for (let bar of menuBars){
        bar.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
      }      
      
      // Open Cross
      setTimeout(() => {
        const crossBars = [document.getElementById('crossBar1'), document.getElementById('crossBar2')]
        for (let bar of crossBars){
          bar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }
      }, 400)
    },
    iconToMenu(){
      // Close Cross
      const crossBars = [document.getElementById('crossBar1'), document.getElementById('crossBar2')]
      for (let bar of crossBars){
        bar.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
      }

      // Open Menu
      setTimeout(() => {
        const menuBars = [document.getElementById('menuBar1'), document.getElementById('menuBar2'), document.getElementById('menuBar3')]
        for (let bar of menuBars){
          bar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }
      }, 400)
    },
    logout(){
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>
#navigator
{
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;

  pointer-events: none;
}
.navigationButton
{
  cursor: pointer;  
  font-size: 4em;
  transition-duration: 500ms;
  padding: 0 1em;
  margin: 0;
}
.navigationButton:hover
{
  color: rgb(218, 216, 216);
}
.buttonHandler
{
  position: relative;
  transition-duration: 400ms;
}
.buttonHandler::after
{
  position: absolute;
  content: "";

  height: 100%;
  width: 100%;
  z-index: -1;

  transform: translateX(-100%);
  transition-duration: 500ms;
  transition-timing-function: ease-out;

  background-color: rgb(43, 43, 43);
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);;
}
.buttonHandler:hover::after
{  
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);;
}
#panel
{
  position: relative;
  pointer-events: all;

  height: 100vh;
  width: 100vw;
  background-color: rgb(218, 216, 216);

  transform: translateY(-100vh);
  transition-duration: 500ms;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#panelNavigator
{
  height: 80%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
#panelNavigator div
{
  width: fit-content;
}
#panelLogin
{
  height: 20%;
  width: 100%;
  
  background-color: rgb(165, 165, 165);

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  z-index: -1;
}
#panelLogin div *
{
  font-size: 1.7em;
}
/* TOGGLE BUTTON */
#toggleNavigationButton
{
  position: absolute;
  z-index: 2;
  cursor: pointer;  
  pointer-events: all;
  transition-duration: 300ms;

  height: 6vh;
  width: 6vh;  
  margin: 2vh;

  border: 2px solid transparent;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(218, 216, 216);
}
#toggleNavigationButton:hover
{
  border: 2px solid rgb(43, 43, 43);
}
/* Menu */
#menuButton
{
  position: absolute;
  height: 60%;
  width: 60%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
#crossBar1,
#crossBar2,
#menuBar1,
#menuBar2,
#menuBar3
{
  position: relative;
  height: 12%;
  width: 100%;

  transition-duration: 500ms;

  background-color: rgb(43, 43, 43);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  border-radius: 4px;
}
#crossBar1,
#crossBar2{
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
}
#menuBar1
{
  transition-delay: 200ms;
}
#menuBar2
{
  transition-delay: 100ms;
}
/* Cross */
#crossButton
{
  position: absolute;
  height: 80%;
  width: 80%;

  display: flex;
  flex-direction: column;

  transform: translateY(43%);
}
#crossBar1
{
  position: absolute;
  transform: rotate(45deg);
}
#crossBar2
{
  transition-delay: 100ms;
  position: absolute;
  transform: rotate(-45deg);
}
</style>