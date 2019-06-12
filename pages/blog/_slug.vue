<template>
  <div class="container">

    <div class="content">
      <div class="chamada">
        <h1>{{attr.title}}</h1>
        <p>{{attr.description}}</p>
        <span>Escrito por {{attr.author}} em {{attr.created_at}}</span>
      </div>
      <div v-html="post" class="content__post"></div>
    </div>
  </div>
</template>
<script>
  export default {
    async asyncData({params}) {
      const fileContent = await import(`~/static/blog/${params.slug}.md`);
      const post = fileContent.default.html;
      const attr = fileContent.default.attributes;
      return {
        post: post,
        attr: attr
      }
    },
    computed: {
      atributos() {
        this.$store.commit('headers/aplicaHead', this.attr);
        return this.$store.state.headers.head
      }
    },
    head() {
      return this.atributos
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

    .chamada {
      margin-top: 2rem;
      margin-bottom: 3rem;

      h1 {
        line-height: 1.2
      }

      h1, p, span {
        margin-top: 1rem;
      }

      h1, p {
        margin-bottom: 1px;
      }

      p, span {
        color: $gray-dark;
      }
    }

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

        .chamada {
          margin-top: 5rem;
          margin-bottom: 3rem;

          h1 {
            line-height: 0.5
          }

          h1, p, span {
            margin-top: 1rem;
          }

          h1, p {
            margin-bottom: 1px;
          }

          p, span {
            color: $gray-dark;
          }
        }

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

  }
</style>
