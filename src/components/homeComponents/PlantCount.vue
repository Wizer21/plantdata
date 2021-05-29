<template>
  <p id="plantCount">
    Already {{ count }} plants submitted !
  </p>
</template>

<script>
export default {
  name: 'PlantCount',
  props: {
    count: {
      type: Number,
      require: true
    }
  }
}
</script>

<style>
#plantCount
{
  text-align: center;
}
</style>