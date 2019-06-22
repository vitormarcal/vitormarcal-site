<template>
  <div class="meta">
    <span class="tag" :style="estilos[tag]" v-for="(tag, index) in tags"> #{{tag}} </span>
  </div>
</template>

<script>
  export default {
    name: "TagArticle",
    props: ['tags', 'estilos']
  }
</script>

<style scoped lang="scss">

  .meta {
    margin-top: 10px;
    .tag {
      margin: 3px;
      font-size: 13px;
      padding: 2px 5px 3px;
      border-radius: 2px
    }
  }
</style>
