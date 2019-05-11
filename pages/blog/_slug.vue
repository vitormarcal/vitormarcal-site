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

<style scoped lang="scss">
  .container {
    overflow: hidden;
    padding-top: 5rem;
  }
  .content {
    max-width: 700px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;

    img {
      transition: transform .2s; /* Animation */
      width: 100%;

      grid-column: 1 / -1;
      margin: 20px 0;


      &:hover {
        width: 100%;
        transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
      }
    }






  }
</style>
