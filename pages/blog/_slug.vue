<template>
      <div class="container">
        <div v-html="content" class="content">
        </div>
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
  .content {
    max-width: 700px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }
</style>
