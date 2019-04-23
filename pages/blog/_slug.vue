<template>
      <div class="container">
        <div v-html="content"></div>
      </div>
</template>
<script>
  export default {
    async asyncData ({params}) {
      const fileContent = await import(`~/static/blog/${params.slug}.md`);
      return {
        content: fileContent.default
      }
    }
  }
</script>

<style  lang="scss">
</style>
