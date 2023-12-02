<template>
  <nav>
    <ul>
      <li v-for="item in navItems.filter(i => i.ativo)">
        <a v-if="item.externo" :href="item.link" :title="item.title" class="nav-link">
          <span>{</span>
          {{item.text}}
          <span>}</span>
        </a>
        <nuxt-link v-else class="nav-link" :to="item.link" :title="item.title">
          <span>{</span>
          {{item.text}}
          <span>}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        navItems: [
          {
            link: '/',
            title: 'Página inicial',
            text: 'inicio',
            ativo: true
          },
          {
            link: 'https://marcal.dev/',
            title: 'Novo Site',
            text: 'novo site',
            ativo: true,
            externo: true
          },
          {
            link: '/sobre',
            title: 'Sobre mim',
            text: 'sobre',
            ativo: true
          },
          {
            link: '/portfolio',
            title: 'Portfolio',
            text: 'portfolio',
            ativo: true
          },
          {
            link: '/contato',
            title: 'Contato',
            text: 'contato',
            ativo: false
          },
          {
            link: '/blog',
            title: 'Meus artigos',
            text: 'blog',
            ativo: true
          }
        ]
      }
    }
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
        color: $black;

        span {
          color: $black;
        }
      }
    }
  }

</style>
