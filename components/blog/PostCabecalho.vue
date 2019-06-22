<template>
  <div class="chamada">
    <h1>{{attr.title}}</h1>
    <p>{{attr.description}}</p>
    <div class="meta" style="margin-top: 2rem">Escrito por {{attr.author}} em {{attr.created_at}}</div>
    <div class="meta" v-if="attr.obs"  v-html="attr.obs"></div>
    <div class="meta">
      <span class="tag" :style="estilos[tag]" v-for="(tag, index) in attr.tags"> #{{tag}} </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PostCabecalho",
        props: ['attr', 'estilos']
    }
</script>

<style scoped lang="scss">

  .meta {
    margin-top: 5px;
  }

  .tag {
    margin: 3px;
    font-size: 13px;
    padding: 2px 5px 3px;
    border-radius: 2px
  }


  .chamada {
    margin-top: 2rem;

    h1 {
      line-height: 1.2
    }

    h1, p, .meta {
      margin-top: 5px;
    }

    h1, p {
      margin-bottom: 1px;
    }

    p, .meta {
      color: $gray-dark;
      font-weight: bold;
    }

    .tag__list {
      margin-top: 5px;
    }
  }

</style>
