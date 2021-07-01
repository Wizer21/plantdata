<template>
  <div id="loginPage">
    <h2 id="loginTitle">Plantz</h2>
    <div id="googleButton" class="g-signin2" data-onsuccess="onSignIn" ></div>
    <div v-if="checkIsLogged" id="loggedUserPanel" class="fadeElement">
      <p>
        {{ userUsername }}
      </p>
      <p @click="logout" id="logoutButton">
        Logout
      </p>
    </div>
  </div>
</template>

<script>
import { loginOrCreateUser } from '../requester.js'

export default {
  name: 'Login',
  computed: {
    checkIsLogged(){
      return this.$store.state.logged
    },
    userUsername(){
      return this.$store.state.user.username
    }
  },
  methods: {
    loginResponse(response){
      this.$store.commit('login', {
        user: response
      })
    },
    logout(){
      this.$store.commit('logout')
    }
  },  
  mounted(){    
    const googleButton =  document.getElementById('googleButton')

    // Google Button Event 
    googleButton.addEventListener('call', event => {
      loginOrCreateUser(this.loginResponse, event.detail.LS, event.detail.uU, event.detail.CJ)
    })
    
    // Load Google script 
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
    document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>
#loginTitle
{
  font-size: 5em;
}
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
.fadeElement {
  animation: fadeElement 4s;
}
#logoutButton
{
  border-top: 1px solid black;
  border-bottom: 1px solid transparent;

  cursor: pointer;
  transition-duration: 500ms;
}
#logoutButton:hover
{
  border-bottom: 1px solid black;
}
#loggedUserPanel
{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5%;
  font-size: 2em;
  width: 5em;
  border-radius: 4px;

  border: 1px solid black;
}

@keyframes fadeElement {
  0%{
    opacity: 0;
    height: 0em;
  }
  100%{
    opacity: 1;
    height: 1em;
  }
}
</style>