<template>
  <section class="experiencias">
    <h3>Experiencias</h3>
    <article class="experiencia_item" v-for="experiencia in experiencias">
      <header>
        <div>{{experiencia.empresa}}</div>
        <div v-for="titulo in experiencia.titulos">
          <span>{{titulo.cargo}}</span>
          <span>{{titulo.periodo}}</span>
        </div>
      </header>
      <span>{{experiencia.decricao}}</span>
      <span v-for="item in experiencia.itensGerais">{{item}}</span>
    </article>
  </section>
</template>

<script>
    export default {
        name: "Experiencia",
        props: ['experiencias']
    }
</script>

<style scoped>

</style>
