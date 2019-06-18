<template>

  <section class="container">

    <div class="content">
      <div class="content__title">
        <h1>Artigos</h1>
        <h2>Histórias, dicas, tutoriais, espero que o registro de minhas experiências possa lhe ajudar!</h2>

      </div>
      <div v-for="post in postList">
        <nuxt-link :to="{path: post.name}">
          <h3>{{post.title}}</h3>
          <div class="content__description">
            <p>{{post.description}}</p>
          </div>
          <div class="content__meta">
            <div class="content__tag">
              {{post.tags.toString()}}
            </div>
            <span>{{post.author}}</span>
            <span>{{post.created_at}}</span>
          </div>
        </nuxt-link>
      </div>
    </div>

  </section>

</template>

<script>
  export default {
    name: "Blog",
    data: () => ({
    }),
    async asyncData({params}) {
      const postList = [
        {
          title: "Teste 1",
          tags: ['#java', '#certification', '#javascript'],
          author: 'Vítor Marçal',
          description: "Um teste description",
          created_at: '13 May 2019',
          name: 'meu_caminho_para_certificacao_java_se_8'
        },
        {
          title: "Teste 2",
          tags: ['#java', '#certification', '#javascript'],
          author: 'Vítor Marçal',
          description: "Dois teste description",
          created_at: '14 May 2019',
          name: 'meu_caminho_para_certificacao_java_se_8'
        },
        {
          title: "Teste 3",
          tags: ['#java', '#certification', '#javascript'],
          author: 'Vítor Marçal',
          description: "Três teste description",
          created_at: '01 April 2019',
          name: 'meu_caminho_para_certificacao_java_se_8',
        }
      ];

      postList.forEach(e => e.link = `/blog/${e.name}`);

      return {postList: postList};
    }
  }
</script>

<style scoped lang="scss">

  .content {
    .content__title {
      border-bottom: 1px solid #ececea;

      h1 {
        margin-bottom: 0;
      }
      h2 {
        font-size: 25px;
        margin-top: 0;
      }
    }
  }

</style>
