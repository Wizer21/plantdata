<template>
  <div id="loginPage">
    <div>
      <p>LOGIN PAGE</p>
      <div id="googleButton" class="g-signin2" data-onsuccess="onSignIn" ></div>
    </div>
  </div>
</template>

<script>
import { loginOrCreateUser } from '../requester.js'

export default {
  name: 'Login',
  methods: {
    loginResponse(response){
      this.$store.commit('login', {
        user: response
      })
    }
  },  
  mounted(){    
    const googleButton =  document.getElementById('googleButton')

    // Google Button Event 
    googleButton.addEventListener('call', event => {
      loginOrCreateUser(this.loginResponse, event.detail.NT, event.detail.xV, event.detail.uK)
    })
    
    // Load Google script 
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
    document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>
#loginPage
{
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
}
#googleButton
{
  position: relative;
  z-index: 0;
}
</style>