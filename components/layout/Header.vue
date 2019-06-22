<template>
  <header>
    <brand/>
    <nav-bar/>

  </header>
    
</template>

<script>
    import NavBar from "./NavBar";
    import Brand from "./Brand";
    export default {
      components: {Brand, NavBar}
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
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2375rem 2.5rem;
    top: 0;

    @media (max-width: 720px)  {
      display: block;
    }
    

  }

</style>
