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

    h1 {
      font-family: 'Amiri', serif;
      font-weight: 400;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: 0;
    }

    p {
      font-family: 'Open Sans', serif;
      font-weight: 400;
      font-style: normal;
      line-height: 1.58;
      letter-spacing: -.003em;
      font-size: 21px;
    }
  }
</style>
