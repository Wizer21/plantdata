<template>
  <div id="userCard">
    <div id="userImage">
      <img :src="user.profileimage">
    </div>
    <div id="userData">
      <p>
        {{ user.username }}
      </p>
      <p>
        {{ user.validatedpublications }} submission
      </p>
    </div>
  </div>
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
  mounted(){
    console.log(this.user);
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