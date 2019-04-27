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
      color: black;
    }

    &:after {
      content: "}";
      color: #2e7eb3;
    }

    a {
      color: black;
      text-decoration: none;

      span {
        color: #2e7eb3;
      }

      &:hover,
      &:focus {
        color: #2e7eb3;

        span {
          color: black;
        }
      }
    }
  }

</style>
