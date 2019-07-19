<template xmlns="http://www.w3.org/1999/html">
  <div class="curriculo">
    <h1>{{curriculo.nome}}</h1>
    <h2>{{curriculo.titulo}}</h2>

    <c-contato v-bind:contato="curriculo.contato"></c-contato>
    <c-experiencia v-bind:experiencias="curriculo.experiencias"/>
    <c-formacao v-bind:formacao="curriculo.formacao"/>

  </div>
</template>

<script>
  import curriculo from '~/content/curriculo.json'

  export default {
    name: "curriculo",
    components: {
      CContato: () => import('~/components/curriculo/Contato'),
      CExperiencia: () => import('~/components/curriculo/Experiencia'),
      CFormacao: () => import('~/components/curriculo/Formacao')
    },
    computed: {
      curriculo: () => curriculo,
    }
  }
</script>

<style scoped lang="scss">


</style>
