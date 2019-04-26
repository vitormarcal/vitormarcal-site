<template>
    <nav>
      <ul>
        <li><nuxt-link to="/" title="Página inicial">inicio</nuxt-link></li>
        <li><nuxt-link to="/sobre" title="Sobre mim">sobre</nuxt-link></li>
        <li><nuxt-link to="/contato" title="Mande uma mensagem">contato</nuxt-link></li>
        <li><nuxt-link to="/blog" title="Meus artigos">blog</nuxt-link></li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>
