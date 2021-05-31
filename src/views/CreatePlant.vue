<template>
  <div id="createPlant" v-if="isLogged">
    <p>Name</p>  
    <input type="text" placeholder="Name" id="nameInput">
    <p>Description</p>  
    <textarea placeholder="What an awesome plant!" id="descriptionInput"></textarea>  
    <p>Difficulty</p>  
    <div id="starsHolder">
      <div v-for="i in 5" :key="i" class="stars"></div>
    </div>
    <p>Luminosity</p>  
    <select id="luminosityInput">
      <option selected disabled hidden></option>
      <option v-for="value of plantFields.luminosity" :key="value" :value="value">{{ value }}</option>
    </select>
    <p>Fogging</p>  
    <select id="foggingInput">
      <option selected disabled hidden></option>
      <option v-for="value of plantFields.fogging" :key="value" :value="value">{{ value }}</option>
    </select>
    <p>Mature Height</p>  
    <input type="number" id="heightInput">
    <p>Required Heat</p>  
    <input type="number" id="heatInput">
    <p>Plant image</p>    
    <input type="file" accept="image/jpeg" id="imageInput">
    <button @click="submit" id="submitButton">
      Submit  
    </button>
  </div>
  <div v-else id="offlinePage">
    <p>
      This page is reserved to logged users.
    </p>
    <router-link to="/login" id="logginButton" @click="togglePanel">
      <p>
        Login
      </p>
      <div id="loginBackground">
      </div>
    </router-link>
  </div>
</template>

<script>
import { sendNewPlant } from '../requester.js'

export default {
  name: 'CreatePlant',
  data(){
    return {
      newPlant: {
        name: "",
        description: "",
        matureheight: "",
        requiredheat: "",
        difficulty: "",
        luminosity: "",
        fogging: "",
        image: "",
        creator: ""
      },
      isPlantReady: false,
      plantFields: require('../assets/plantValue.json')
    }
  },
  computed: {
    isLogged(){
      return this.$store.state.logged
    }
  },
  methods: {
    submit(){
      if (this.$store.state.logged && this.isPlantReady){
        sendNewPlant(this.newPlant)
      }    
    }    
  },
  mounted(){  
    if (!this.$store.state.logged){
      return
    }
    this.newPlant.creator = this.$store.state.user.googlekey
    
    const local = this

    const nameInput = document.getElementById('nameInput')
    const descriptionInput = document.getElementById('descriptionInput')
    const heightInput = document.getElementById('heightInput')
    const heatInput = document.getElementById('heatInput')
    const luminosityInput = document.getElementById('luminosityInput')
    const foggingInput = document.getElementById('foggingInput')
    const image = document.getElementById('imageInput')
    const submitButton = document.getElementById('submitButton')

    const reader  = new FileReader();   

    const dataList = ["name", "description"]
    const inputList = [nameInput, descriptionInput]
    for (let i = 0; i < inputList.length; i++){
      inputList[i].addEventListener('keyup', () => {
        this.newPlant[dataList[i]] = inputList[i].value
        checkPlantReady()
      })
    }

    const comboDataList = ["matureheight", "requiredheat", "luminosity", "fogging"]
    const comboBoxElements =  [heightInput, heatInput, luminosityInput, foggingInput]
    for (let i = 0; i < comboBoxElements.length; i++){
      comboBoxElements[i].addEventListener('change', () => {
        this.newPlant[comboDataList[i]] = comboBoxElements[i].value
        checkPlantReady()
      })
    }

    // Image
    image.addEventListener('change', () => {
      if (image.files[0]){
        reader.readAsDataURL(image.files[0])
      }
      reader.onloadend = function () {
        local.newPlant.image = reader.result
        checkPlantReady()     
      }   
    })

    function checkPlantReady(){
      for(let data in local.newPlant){
        if(local.newPlant[data] == ""){
          submitButton.style.cursor = "unset"
          submitButton.style.color = "red"

          local.isPlantReady = false
          return
        }
      }
      
      submitButton.style.cursor = "pointer"
      submitButton.style.color = "green"
      local.isPlantReady = true
    }

    // Stars animation
    const stars = document.getElementsByClassName('stars')
    let isMouseHold = false
    for (let i = 0; i < stars.length; i++){
      stars[i].addEventListener("mouseenter", () => {
        if (isMouseHold){
          updateStars(i)
        }
      })
      stars[i].addEventListener("mousedown", () => {
        isMouseHold = true
        updateStars(i)
      })
      stars[i].addEventListener("mouseup", () => {
        isMouseHold = false
        updateStars(i)
      })
    }

    function updateStars(i){      
      local.newPlant['difficulty'] = i + 1
      checkPlantReady()     

      for (let e = 0; e < stars.length; e++){
        if (e <= i){
          stars[e].style.backgroundColor = "red"
        }
        else{
          stars[e].style.backgroundColor = "pink"
        }
      }
    }
    updateStars(2)
  }
}
</script>

<style>
#createPlant
{
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#createPlant p
{
  margin-bottom: 0;
}
#offlinePage
{
  height: 100vh;
  width: 100vw;
  font-size: 1.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
#logginButton
{
  border-radius: 4px;
}
#logginButton p
{
  position: relative;
  z-index: 1;

  transition-duration: 400ms;
  margin: 0;
  padding: 1vh;
}
#loginBackground
{
  position: relative;
  height: 101%;
  width: 101%;
  z-index: 0;

  top: -100%;

  background-color: rgb(43, 43, 43);

  transition-duration: 400ms;
  clip-path: polygon(0 98%, 100% 98%, 100% 100%, 0 100%);
}
#logginButton:hover #loginBackground
{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
#logginButton:hover p
{
  color: rgb(218, 216, 216);
}
#starsHolder
{
  display: flex;
  justify-content: space-between;
}
.stars
{
  height: 2vh;
  width: 2vh;

  background-color: red;
  margin: 1%;
}
</style>