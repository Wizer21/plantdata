<template>
  <div>
    <div>
      <p>LOGIN PAGE</p>
    </div>
    <div id="googleButton" class="g-signin2" data-onsuccess="onSignIn" ></div>
  </div>
</template>

<script>
import { loginOrCreateUser } from '../requester.js'

export default {
  name: 'Login',
  methods: {    
    onSignIn(googleUser){
      console.log("IN");
      console.log(JSON.stringify(googleUser.getBasicProfile()))
    },
    loginTry(response){
      console.log(response);
    }
  },  
  mounted(){    
    const googleButton =  document.getElementById('googleButton')
    googleButton.addEventListener('call', event => {
      loginOrCreateUser(this.loginTry, event.detail.NT, event.detail.xV, event.detail.uK)
      console.log("received call !", event);
    })
  }
}
</script>

<style>

</style>