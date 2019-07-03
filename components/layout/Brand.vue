<template>
  <h1 class="brand">
    <nuxt-link to="/"> vitor<span>marcal </span></nuxt-link>
  </h1>
</template>

<script>
  export default {
    name: "Brand"
  }
</script>

<style scoped lang="scss">

  .brand {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 800;
    &:before {
      content: "{";
      color: $black;
    }

    &:after {
      content: "}";
      color: $blue-light;
    }

    a {
      color: $black;
      text-decoration: none;

      span {
        color: $blue-light;
      }

      &:hover,
      &:focus {
        color: $blue-light;

        span {
          color: $black;
        }
      }
    }
  }

</style>
