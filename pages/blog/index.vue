<template>

  <section class="container">
    <nuxt-child />

    <div class="content">
      <div class="content__title">
        <h1>Artigos</h1>
        <h2>Histórias, dicas, tutoriais, espero que o registro de minhas experiências possa lhe ajudar!</h2>

      </div>
      <div v-for="post in postList" class="content__articles">
        <CItemArticle v-bind:post="post"/>
      </div>
    </div>

  </section>

</template>

<script>
  export default {
    name: "index",
    components: {
      CItemArticle: () => import('~/components/blog/ItemArticle'),
    },
    data: () => ({}),
    async asyncData() {
      const posts = await import(`~/content/posts.js`);

      const postList = posts.default.map(e => {
        e.link = `/blog/${e.name}`;
        return e
      });

      return {postList: postList};
    }
  }
</script>

<style scoped lang="scss">

  .content {
    .content__title {
      /*border-bottom: 1px solid #ececea;*/
      margin-bottom: 3rem;

      h1 {
        margin-bottom: 0;
      }

      h2 {
        font-size: 25px;
        margin-top: 0;
      }
    }

    .content__articles {
      margin-top: 2rem;
    }
  }

</style>
