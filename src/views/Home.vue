<template>
  <div>
    <Hero />
    <PlantCount :count="plantsCount"/>
    <div>
      <UserSubmitCard v-for="user of userList" :key="user.id" :user="user"/>
    </div>
  </div>
</template>

<script>
import Hero from '../components/homeComponents/Hero.vue'
import PlantCount from '../components/homeComponents/PlantCount.vue'
import UserSubmitCard from '../components/homeComponents/UserSubmitCard.vue'

import { getPlantList, getUsers } from '../requester.js'

export default {
  name: 'Home',
  components: { Hero, PlantCount, UserSubmitCard },
  data(){
    return{
      plant: 0,
      plantsCount: 0,
      userList: {}
    }
  },
  methods: {
    applyPlant(response){
      this.plant = response
      this.plantsCount = Object.keys(this.plant).length
    },
    applyUsers(response){
      this.userList = response
      this.userList.sort(this.sortList)
      this.userList = this.userList.slice(0, 5)
    },
    sortList(a, b){
      const aInt = parseInt(a.validatedpublications)
      const bInt = parseInt(b.validatedpublications)

      if (aInt < bInt){
        return 1
      }
      if (aInt > bInt){
        return -1
      }
      return 0
    }
  },
  mounted(){
    getPlantList(this.applyPlant)
    getUsers(this.applyUsers)
  }
}
</script>

<style scoped>
</style>
