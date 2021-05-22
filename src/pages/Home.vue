<template>
  <div>
    <Navigator />
    <h1 id="test">
      Coucou
    </h1>
  </div>
</template>

<script>
import Navigator from '../components/Navigator.vue'

export default {
  name: 'Home',
  components: { Navigator } ,
  methods: {
    request(method, url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
      })
    }
  },   
  mounted(){
    // const local = this
    
    // this.request('GET', `https://localhost/wp-site/wp-json/wp/v2/posts/?#content`)
    // .then(function (e) {
    //   local.plants = JSON.parse(e.target.response)
    //   console.log(local.plants);
    // }) 
  }
}
</script>

<style scoped>
#test{
  height: 200vh;
}
</style>
