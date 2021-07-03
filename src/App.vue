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
</style>