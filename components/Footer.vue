<template>

  <footer>
    <section class="mailme">
      <p>Deseja entrar em contato?</p>
      <p>Sinta-se livre para mandar um "Oi ou Olá".</p>
      <p>Envie-me um email!</p>

      <a href="mailto:vitormarcal8@gmail.com" title="Email me" target="_blank">
        <img src="~/assets/images/mailme.svg" alt="Email me "/>
      </a>
    </section>
    <p>© {{year}} — Web app designed and coded by Vítor Marçal using Vue.js + Nuxt.</p>
  </footer>
    
</template>

<script>
    export default {
      computed: {
        year () {
          return new Date().getFullYear()
        }
      }
    }
</script>

<style scoped lang="scss">

  footer {
    background-color: aquamarine;
    padding: 5px;
    text-align: center;

    .mailme * {
      margin: 1px;
      font-size: 36px;
      text-align: center;

      a {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }

    }

  }



  p {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 18px;
  }



</style>
