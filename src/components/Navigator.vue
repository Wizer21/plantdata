<template>
  <div id="navigator">
    <div id="toggleNavigationButton" @click="togglePanel">
      <p>
        B
      </p>
    </div>
    <div id="panel">          
      <nav id="panelNavigator">
        <router-link to="/" class="navigationButton" @click="togglePanel">Home</router-link>
        <router-link to="/plants" class="navigationButton" @click="togglePanel">Plants</router-link>
      </nav>
      <div id="panelLogin">
        <template v-if="getStore.logged">
          <router-link :to="userProfilePath" class="navigationButton" @click="togglePanel">{{ getStore.user.username }}</router-link>            
          <button @click="logout">
            Logout
          </button>
        </template>
        <template v-else>
          <router-link to="/login" class="navigationButton" @click="togglePanel">Login</router-link>
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
    }
  },
  methods: {
    togglePanel(){
      const panel = document.getElementById('panel')

      if (this.isPanelOpen){
        this.isPanelOpen = false
        panel.style.transform = "translateY(-100vh)"       
      }
      else{
        this.isPanelOpen = true   
        panel.style.transform = "translateY(0vh)"
      }
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
  z-index: 2;

  pointer-events: none;
}
#toggleNavigationButton
{
  position: absolute;
  z-index: 2;
  cursor: pointer;  
  pointer-events: all;
  
  margin: 1vh;
}
.navigationButton
{
  cursor: pointer;  
}
#panel
{
  position: relative;
  pointer-events: all;

  height: 100vh;
  width: 100vw;
  background-color: rgb(165, 42, 42);

  transform: translateY(-100vh);
  transition-duration: 500ms;
}
#panelNavigator
{
  height: 70%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
#panelLogin
{
  height: 30%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
</style>