<template>
  <div>
    <div class="email">{{contato.email}}</div>
    <div class="telefone">{{contato.telefone}}</div>
    <div class="endereco">
      <span>{{contato.endereo}}</span>
      <span>{{contato.municipio}}</span>
      <span>{{contato.uf}}</span>
    </div>
    <div class="links">
      <span>{{contato.site}}</span>
      <span>{{contato.sobre}}</span>
      <span>{{contato.curriculo}}</span>
      <span>{{contato.linkedin}}</span>
      <span>{{contato.github}}</span>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Contato",
    props: ['contato']
  }
</script>

<style scoped>

</style>
