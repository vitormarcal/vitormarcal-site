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
      const attr = fileContent.default.attributes;
      return {
        content: fileContent.default.html,
        id: attr.id,
        name: attr.name,
        title: attr.title,
        author: attr.author,
        description: attr.description,
        created_at: attr.created_at,
        tags: attr.tags,
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { charset: 'utf-8' },
          { hid: 'description', name: 'description', content: this.description }
        ],
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

    .roboto {

    }

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
