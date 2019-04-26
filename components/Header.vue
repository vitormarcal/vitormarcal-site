<template>
  <header>
    <nav-bar></nav-bar>

  </header>
    
</template>

<script>
    import NavBar from "./NavBar";
    export default {
      components: {NavBar}
    }
</script>

<style scoped lang="scss">

  header {
    background-color: white;
    position: fixed;
    min-height: 80px;
    width: 100%;
    z-index: 1000;
    border-bottom: .0625rem solid rgba(0,0,0,.05);
  }

</style>
