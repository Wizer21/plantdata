<template>
  <div>
    <p>
      page
    </p>
  </div>
</template>

<script>
export default {
  name: 'PlantPage',
  mounted(){
    console.log(this.$route.params.id);
  }
}
</script>

<style>

</style>