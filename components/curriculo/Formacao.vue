<template>
  <section>
    <h3>Formação</h3>
    <article v-for="item in formacao">
      <header>
        <div>{{item.curso}}</div>
        <div>{{item.local}}</div>
        <div>{{item.concluidoEm}}</div>
      </header>
      <span v-if="item.descricao">{{item.descricao}}</span>
      <span v-for="topico in item.topicos">{{topico}}</span>
    </article>

  </section>
</template>

<script>
  export default {
    name: "Formacao",
    props: ['formacao']
  }
</script>

<style scoped>

</style>
