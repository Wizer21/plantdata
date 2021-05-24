<template>
  <div id="profilePage">
    <template v-if="user">
      <div>
        <img :src="user.profileimage">
      </div>
      <p>
        {{ user.username }}
      </p>
    </template>
  </div>
</template>

<script>
import { getOnePost } from '../requester.js'

export default {
  name: "UserProfile",
  data(){
    return {
      user: null
    }
  },
  methods: {
    applyUser(response){
      this.user = response
    }
  },
  mounted(){
    getOnePost(this.applyUser ,this.$route.params.id)  
  }
}
</script>

<style>
#profilePage
{
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>