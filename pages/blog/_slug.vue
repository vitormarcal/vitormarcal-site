<template>
  <div class="container">
    <CPullRequest :href="uriPullRequest"/>
    <div class="content">
      <CArticleCabecalho v-if="attr" v-bind:attr="attr" v-bind:estilos="estiloTag"/>

      <div v-if="post" v-html="post" class="content__post"></div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
      CArticleCabecalho: () => import('~/components/blog/ArticleCabecalho'),
      CPullRequest: () => import('~/components/PullRequest'),
    },
    async asyncData({params, error, store}) {

      try {
        const file = await import(`~/content/blog/${params.slug}.md`);
        const post = file.default.html;
        const attr = file.default.attributes;
        store.dispatch('pull_request/definirUrlBlog', attr.name);
        return {
          post: post,
          attr: attr
        }

      } catch (e) {
        let message = 'Ops, algo estranho e inexperado ocorreu';
        let statusCode = 400;
        if (e.code.startsWith("MODULE_NOT_FOUND")) {
          message = 'Post não encontrado';
          statusCode = 404;
        }
        error({statusCode: statusCode, message: message})
      }

    },
    methods: {},
    computed: {
      atributos() {
        this.$store.commit('headers/aplicaHead', this.attr);
        this.$store.commit('keywords/color', this.attr.tags);
        return this.$store.state.headers.head
      },
      estiloTag() {
        return this.$store.state.keywords.tagColor;
      },
      uriPullRequest() {
        return this.$store.state.pull_request.href;
      }

    },
    head() {
      return this.atributos
    }

  }
</script>

<style scoped lang="scss">

  .container {
    margin: 1rem;
  }
</style>
