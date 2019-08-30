<template>
  <div class="chamada">
    <h1>{{attr.title}}</h1>
    <p>{{attr.description}}</p>
    <div class="meta" style="margin-top: 2rem">Escrito por {{attr.author}} em {{attr.created_at}}<br/>
      <CReadingTime :post="post"/>
    </div>
    <div class="meta" v-if="attr.obs" v-html="attr.obs"></div>
    <CTagArticle v-bind:tags="attr.tags" v-bind:estilos="estilos"/>
  </div>
</template>

<script>
  export default {
    components: {
      CTagArticle: () => import('~/components/blog/TagArticle'),
      CReadingTime: () => import('~/components/blog/ReadingTime'),
    },
    name: "PostCabecalho",
    props: ['attr', 'estilos', 'post']
  }
</script>

<style scoped lang="scss">

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
      color: $gray;
    }
  }

</style>
