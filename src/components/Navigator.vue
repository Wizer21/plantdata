<template>
  <div id="navigator">
    <div id="button" @click="togglePanel">
      <p>
        B
      </p>
    </div>
    <div id="panel">

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
#button
{
  position: absolute;
  z-index: 2;
  cursor: pointer;
}
#panel
{
  position: relative;

  height: 100vh;
  width: 100vw;
  background-color: rgb(165, 42, 42, 0.5);

  transform: translateY(-100vh);
  transition-duration: 500ms;
}
</style>