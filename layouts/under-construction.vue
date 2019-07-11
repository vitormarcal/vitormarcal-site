<template>

  <div class="image">
    <c-header/>
    <main>
      <h1>Página em construção.
        <p>Em breve estará no ar!</p>
      </h1>
      <nuxt/>
    </main>
  </div>

</template>

<script>

  export default {
    name: "UnderConstruction",
    components: {
      CHeader: () => import('~/components/layout/Header'),
    },
    head: {
      bodyAttrs: {
        class: "bg-color__under-construction"
      }
    }

  }
</script>

<style scoped lang="scss">

  h1 {
    color: $blue-light;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    text-align: center;
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      color: $black;
      font-size: 32px;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }
  }

  .image {
    background-image:  url(~assets/images/cute-cat.gif);
    background-size: 300px 224px;
    background-position: center;
    background-repeat: no-repeat;

    position: absolute;
    top: 155px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

  }



</style>
