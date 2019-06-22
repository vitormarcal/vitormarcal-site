<template>
  <div class="container">

    <div class="content">
      <CPostCabecalho v-bind:attr="attr" v-bind:estilos="estiloTag"/>

      <div v-html="post" class="content__post"></div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
      CPostCabecalho: () => import('~/components/blog/PostCabecalho'),
    },
    async asyncData({params}) {
      const fileContent = await import(`~/content/blog/${params.slug}.md`);
      const post = fileContent.default.html;
      const attr = fileContent.default.attributes;
      return {
        post: post,
        attr: attr
      }
    },
    methods: {},
    computed: {
      atributos() {
        this.$store.commit('headers/aplicaHead', this.attr);
        this.$store.commit('keywords/color', this.attr.tags)
        return this.$store.state.headers.head
      },
      estiloTag() {
        return this.$store.state.keywords.tagColor;
      }

    },
    head() {
      return this.atributos
    }

  }
</script>

<style scoped lang="scss">

  .content__post {
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

    .content {
      max-width: 700px;
      padding-left: 20px;
      padding-right: 20px;
      margin: 0 auto;

      .content__post {
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

    }

  }
</style>
