<template>
  <div id="navigator">
    <div id="toggleNavigationButton" @click="togglePanel">
      <p>
        B
      </p>
    </div>
    <div id="panel">
      <a href="./">
        <p class="navigationButton">
          Home
        </p>
      </a>
      <a href="./plants">
        <p class="navigationButton">
          Plants
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  data(){
    return {
      isPanelOpen: false
    }
  },
  methods: {
    togglePanel(){
      const panel = document.getElementById('panel')

      if (this.isPanelOpen){
        this.isPanelOpen = false
        panel.style.transform = "translateY(-100vh)"       
      }
      else{
        this.isPanelOpen = true   
        panel.style.transform = "translateY(0vh)"
      }
    }
  }
}
</script>

<style scoped>
#navigator
{
  position: fixed;
  top: 0px;
  left: 0px;
}
#toggleNavigationButton
{
  position: absolute;
  z-index: 2;
  cursor: pointer;  
  
  margin: 1vh;
}
#panel
{
  position: relative;

  height: 100vh;
  width: 100vw;
  background-color: rgb(165, 42, 42, 0.5);

  transform: translateY(-100vh);
  transition-duration: 500ms;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>