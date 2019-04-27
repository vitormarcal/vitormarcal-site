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
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin: 0 10px;
      }
    }

    .nav-link {
      position: relative;
    }
  }

</style>
