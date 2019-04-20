<template>

  <div>
    <div class="Home__buttons">
      <nuxt-link to="/" class="Home__button button button--secondary">Home</nuxt-link>
      <nuxt-link to="/contact" class="Home__button button button--primary">Contate-me!</nuxt-link>
    </div>
  </div>

</template>

<script>
    export default {
      components: {
        transition: 'tweakOpacity'
      }
    }
</script>

<style scoped>

</style>
