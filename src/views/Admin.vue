<template>
  <div>
    Admin
  </div>
</template>

<script>
import { getOnePost } from '../requester.js'

export default {
  name: 'Admin',
  data(){
    return {
      plant: null
    }
  },
  methods: {
    applyPlant(response){
      this.plant = response
    }
  },
  mounted(){
    getOnePost(this.applyPlant, this.$route.params.id)
  }
}
</script>

<style>

</style>