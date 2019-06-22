<template>
    <nav>
      <ul>
        <li><nuxt-link class="nav-link" to="/" title="Página inicial"><span>{ </span>inicio<span> }</span></nuxt-link></li>
        <li><nuxt-link class="nav-link"to="/sobre" title="Sobre mim"><span>{ </span>sobre<span> }</span></nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/contato" title="Mande uma mensagem"><span>{ </span>contato<span> }</span></nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/blog" title="Meus artigos"><span>{ </span>blog<span> }</span></nuxt-link></li>
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
        margin: 0 auto;
      }
    }

    a {
      position: relative;
      text-decoration: none;
      color: #225A81;

      span {
        color: transparent;
      }

      &:hover,
      &.nuxt-link-exact-active,
      &:focus {
        color: black;
        span {
          color: black;
        }
      }
    }
  }

</style>
