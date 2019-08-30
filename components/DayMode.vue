<template>
  <div class="wrapper">
    <input type="checkbox" checked>
  </div>
</template>

<script>
  export default {
    name: "DayMode"
  }
</script>

<style>

  .wrapper{
    position: absolute;
    width: 130px;
    height: 100px;
    top: 8%;
    left: 75%;
    z-index: 1000;
    transform: translate(-50%, -50%);
  }


</style>
