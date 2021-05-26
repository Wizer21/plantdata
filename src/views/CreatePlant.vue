<template>
  <div id="createPlant" v-if="isLogged">
    <p>Name</p>  
    <input type="text" placeholder="Name" id="nameInput">
    <p>Description</p>  
    <textarea placeholder="Description" id="descriptionInput"></textarea>  
    <p>Rarity</p>  
    <select id="rarityInput">
      <option v-for="option of options.rarity" :key="option" :v-else="option">{{ option }}</option>
    </select>
    <p>Difficulty</p>  
    <select id="difficultyInput">
      <option v-for="option of options.difficulty" :key="option" :v-else="option">{{ option }}</option>
    </select>
    <p>Luminosity</p>  
    <select id="luminosityInput">
      <option v-for="option of options.requiredluminosity" :key="option" :v-else="option">{{ option }}</option>
    </select>
    <p>Moisten</p>  
    <select id="moistenInput">
      <option v-for="option of options.moisten" :key="option" :v-else="option">{{ option }}</option>
    </select>
    <p>Max Height</p>  
    <input type="text" placeholder="Max Height" id="heightInput">
    <p>Min heat</p>  
    <input type="text" placeholder="Min heat" id="heatInput">
    <p>Plant image</p>    
    <input type="file" accept="image/jpeg" id="imageInput">
    <button @click="submit" id="submitButton">
      Submit  
    </button>
  </div>
</template>

<script>
export default {
  name: 'CreatePlant',
  data(){
    return {
      options: require('../assets/acfOptions.json'),
      newPlant: {
        name: "",
        description: "",
        maxheight: "",
        minheat: "",
        rarity: "",
        difficulty: "",
        luminosity: "",
        moisten: "",
        image: ""
      },
      isPlantReady: false
    }
  },
  computed: {
    isLogged(){
      return this.$store.state.logged
    }
  },
  methods: {
    submit(){
      if (this.$store.state.logged){
        
      }    
    }    
  },
  mounted(){    
    const local = this

    this.newPlant.rarity = this.options.rarity[0]
    this.newPlant.difficulty = this.options.difficulty[0]
    this.newPlant.luminosity = this.options.requiredluminosity[0]
    this.newPlant.moisten = this.options.moisten[0]

    const nameInput = document.getElementById('nameInput')
    const descriptionInput = document.getElementById('descriptionInput')
    const heightInput = document.getElementById('heightInput')
    const heatInput = document.getElementById('heatInput')
    const rarityInput = document.getElementById('rarityInput')
    const difficultyInput = document.getElementById('difficultyInput')
    const luminosityInput = document.getElementById('luminosityInput')
    const moistenInput = document.getElementById('moistenInput')
    const image = document.getElementById('imageInput')
    const reader  = new FileReader();   

    const submitButton = document.getElementById('submitButton')

    // Text
    nameInput.addEventListener('keyup', () => {
      this.newPlant.name = nameInput.value
      checkPlantReady()
    })
    descriptionInput.addEventListener('keyup', () => {
      this.newPlant.description = descriptionInput.value
      checkPlantReady()
    })
    heightInput.addEventListener('keyup', () => {
      this.newPlant.maxheight = heightInput.value
      checkPlantReady()
    })
    heatInput.addEventListener('keyup', () => {
      this.newPlant.minheat = heatInput.value
      checkPlantReady()
    })

    // Box
    rarityInput.addEventListener('change', () => {
      this.newPlant.rarity = rarityInput.value
      checkPlantReady()
    })
    difficultyInput.addEventListener('change', () => {
      this.newPlant.luminosity = difficultyInput.value
      checkPlantReady()
    })
    luminosityInput.addEventListener('change', () => {
      this.newPlant.rarity = luminosityInput.value
      checkPlantReady()
    })
    moistenInput.addEventListener('change', () => {
      this.newPlant.moisten = moistenInput.value
      checkPlantReady()
    })

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
        console.log(local.newPlant[data]);
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
  }
}
</script>

<style>
#createPlant
{
  height: 80vh;
  width: 80vw;
  padding: 10vh 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#createPlant p
{
  margin-bottom: 0;
}
</style>