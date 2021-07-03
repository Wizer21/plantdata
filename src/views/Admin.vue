<template>
  <div v-if="isAdmin">
    <div id="verifyList">
      <p v-if="isListEmpty" id="noPostMessage">
        No pending posts
      </p>
      <VerifyCard v-else v-for="plant of verifyStack" :key="plant.id" :plant="plant" @archived="archivedPlant"/>
    </div>
  </div>
  <div v-else id="notAdminPage">
    <p>
      This page is reserved to admin users.
    </p>
  </div>
</template>

<script scoped>
import { getVerifyStack } from '../requester.js'
import VerifyCard from '../components/VerifyCard.vue'

export default {
  name: 'Admin',
  components: { VerifyCard },
  data(){
    return {
      verifyStack: null
    }
  },
  computed: {
    isAdmin(){
      return this.$store.state.admin
    },
    isListEmpty(){      
      if (!this.verifyStack || Object.keys(this.verifyStack).length < 1 ){
        return true
      }
      else{
        return false
      }
    }
  },
  methods: {
    applyStack(response){
      this.verifyStack = response
    },
    archivedPlant(id){
      const size = Object.keys(this.verifyStack).length
      for (let i = 0; i < size; i++){
        if (this.verifyStack[i].id == id){
          this.verifyStack.splice(i, 1)          
          return
        }
      }
    }
  },
  mounted(){
    getVerifyStack(this.applyStack)
  }
}
</script>

<style>
#verifyList
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
#notAdminPage
{
  height: 100vh;
  width: 100vw;
  font-size: 1.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#noPostMessage
{
  text-align: center;
  font-size: 5vw;
}
</style>