<template>
  <router-link :to="getUserLink"  id="userCard">    
    <div id="userImage">
      <img :src="user.profileimage">
    </div>
    <div id="userData">
      <p>
        {{ user.username }}
      </p>
      <p>
        {{ user.publications.length }} submission
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "UserSubmitCard",
  props: {
    user: {
      type: Object,
      require: true
    }
  },
  computed: {
    getUserLink(){
      return `/userprofile/${this.user.id}`
    }
  }
}
</script>

<style>
#userCard
{
  display: flex;
  flex-direction: row;
}
#userImage
{
  height: 10vh;
  width: 10vh;
}
#userImage img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
#userData
{
  margin-left: 2vh;
}
#userData p
{
  margin: 0;
  margin-bottom: 1vh;
}
</style>