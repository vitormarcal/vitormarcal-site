<template>

      <div class="content">
        <div v-html="content"></div>
      </div>





</template>

<script>
  export default {
    data() {
      return {
        file: {}
      }
    },
    async asyncData ({params}) {
      const fileContent = await import(`~/static/articles/${params.slug}.md`)
      return {
        content: fileContent.default
      }
    }
  }
</script>

<style scoped lang="sass">


</style>
