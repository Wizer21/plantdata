<template>
  <Navigator />
  <router-view />  
</template>

<script>
import Navigator from './components/Navigator.vue'
import { refreshUser } from './requester.js'

export default {
  name: "App",
  components: { Navigator },
  methods: {
    updateUser(response){      
      this.$store.commit('login', {
        user: response
      })
    }
  },
  beforeMount(){
    if (this.$store.state.logged){
      refreshUser(this.updateUser, this.$store.state.user.id)
    }
  }
}
</script>

<style>
#starsHolder
{
  display: flex;
  justify-content: space-between;
  width: min-content;
  align-items: center;
}
.stars
{
  height: 3vh;
  width: 3vh;
  background-color: #e9ab37;

  margin: 1%;
  cursor: pointer;

  transition-duration: 200ms;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>