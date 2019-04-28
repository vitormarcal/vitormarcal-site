<template>
    <nav>
      <ul>
        <li><nuxt-link class="nav-link" to="/" title="Página inicial">inicio</nuxt-link></li>
        <li><nuxt-link class="nav-link"to="/sobre" title="Sobre mim">sobre</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/contato" title="Mande uma mensagem">contato</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/blog" title="Meus artigos">blog</nuxt-link></li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">

  nav {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin: 0 10px;
      }
    }

    a {
      position: relative;
      text-decoration: none;
      color: #225A81;

      &:hover,
      &.nuxt-link-exact-active,
      &:focus {
        color: black;
        &:before {
          content: "{ ";
          color: black;
          left: 0
        }
        &:after {
          content: " }";
          color: black;
          right: 0;
        }
      }
    }
  }

</style>
