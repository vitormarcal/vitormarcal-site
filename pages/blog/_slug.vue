<template>
  <div class="container">

    <div class="content">
      <div class="chamada">
        <h1>{{attr.title}}</h1>
        <p>{{attr.description}}</p>
        <div class="meta" style="margin-top: 2rem">Escrito por {{attr.author}} em {{attr.created_at}}</div>
        <div class="meta">
          <span class="tag" :style="estiloTag[tag]" v-for="(tag, index) in attr.tags"> #{{tag}} </span>
        </div>
        <br/>
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
    methods: {},
    computed: {
      atributos() {
        this.$store.commit('headers/aplicaHead', this.attr);
        return this.$store.state.headers.head
      },
      estiloTag() {
        this.$store.commit('keywords/color', this.attr.tags)
        //return this.$store.keywords.tagColor[tag]
        return this.$store.state.keywords.tagColor;
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

  .meta {
    margin-top: 5px;
  }

  .tag {
    margin: 3px;
    font-size: 13px;
    padding: 2px 5px 3px;
    border-radius: 2px
  }

  .content {
    max-width: 700px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;

    .chamada {
      margin-top: 2rem;

      h1 {
        line-height: 1.2
      }

      h1, p, .meta {
        margin-top: 5px;
      }

      h1, p {
        margin-bottom: 1px;
      }

      p, .meta {
        color: $gray-dark;
      }

      .tag__list {
        margin-top: 5px;
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

          h1, p, .meta {
            margin-top: 10px;
          }

          h1, p {
            margin-bottom: 1px;
          }

          p, .meta {
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
