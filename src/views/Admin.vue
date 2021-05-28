<template>
  <div v-if="isAdmin">
    Admin
    <div id="verifyList">
      <VerifyCard v-for="plant of verifyStack" :key="plant.id" :plant="plant"/>
    </div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    applyStack(response){
      this.verifyStack = response
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>