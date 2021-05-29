<template>
  <div id="hero">
    <p id="mainTitle">
      Plantz
    </p>
    <p>
      Plantz is a community encyclopedia where anyone can submit new plants.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style>
#hero
{
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
#mainTitle
{
  font-size: 15vw;
  text-align: center;
  margin: 0;
  margin-left: -20vw;
}
</style>