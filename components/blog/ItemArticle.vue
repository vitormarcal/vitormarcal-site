<template>
  <article class="card">
    <nuxt-link :to="{path: post.link}">
      <h3>{{post.title}}</h3>
      <div class="content__description">
        <p>{{post.description}}</p>
      </div>
      <div class="content__meta">
        <span>{{post.author}}</span>
        <span>{{post.created_at}}</span>
        <CTagArticle v-bind:tags="post.tags" v-bind:estilos="estiloTag"/>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
  export default {
    components: {
      CTagArticle: () => import('~/components/blog/TagArticle'),
    },
    props: ['post'],
    computed: {
      estiloTag() {
        this.$store.commit('keywords/color', this.post.tags)
        return this.$store.state.keywords.tagColor;
      }

    },
  }
</script>

<style scoped lang="scss">

  .card {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #ffffff;
    box-shadow: 1px 1px 1px 1px $blue-light;
    margin-bottom: 2rem;

    h3 {
      font-size: 25px;
      margin: 0 auto;
      color: $blue-light;
      font-weight: bold;
    }

    .content__description {
      font-size: 18px;

      p {
        margin: 0;
        font-family: Roboto Mono,sans-serif;
        font-size: 18px;
        color: $gray;
        font-weight: 500;
        line-height: 1.08;
      }
    }

    .content__meta {
      font-size: 15px;
      color: $gray;
      margin-top: 2rem;
    }

    @media (min-width: 768px) {

      h3 {
        font-size: 41px;
      }

      .content__description {
        p {
            font-family: Roboto Mono,sans-serif;
            font-size: 21px;
        }
      }

    }

    &:hover {
      box-shadow: 2px 2px 2px 2px $black;

      h3 {
        color: $black
      }
    }
  }

</style>
