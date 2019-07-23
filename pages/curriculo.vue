<template xmlns="http://www.w3.org/1999/html">
  <div class="curriculo">
    <div class="item">
      <h1>{{curriculo.nome}}</h1>
      <h2>{{curriculo.titulo}}</h2>
      <c-contato v-bind:contato="curriculo.contato"></c-contato>
      <c-formacao v-bind:formacao="curriculo.formacao"/>
    </div>
    <div class="item">
      <c-experiencia v-bind:experiencias="curriculo.experiencias"/>
    </div>


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
  .curriculo {
    margin: 0 auto;
    padding: 5rem 10rem;
    border: 1px solid #ccc;
    display: flex;

    .item {
      margin: 5px;
      background: tomato;
      text-align: left;
      padding: 1rem;
      font-size: 1.5em;
      flex: 1;
      border: 0 solid rgba(0, 0, 0, .125);
      border-radius: .625rem;
      box-shadow: none;

      &:first-child {
      }
    }


  }


</style>
