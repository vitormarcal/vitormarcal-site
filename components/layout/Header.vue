<template>
  <header>
    <c-brand/>
    <c-nav-bar/>

  </header>

</template>

<script>

  export default {
    components: {
      CBrand: () => import('./Brand'),
      CNavBar: () => import('./NavBar'),
    }
  }
</script>

<style scoped lang="scss">

  header {
    background-color: #f6f7fe;
    position: fixed;
    min-height: 80px;
    width: 100%;
    z-index: 1000;
    border-bottom: .0625rem solid rgba(0, 0, 0, .05);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2375rem 2.5rem;
    top: 0;

    @media (max-width: 720px) {
      display: block;
    }


  }

</style>
