<template>
  <div class="card">
    <nuxt-link to="/blog/post.name">
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
</template>

<script>
    export default {
        name: "ItemArticle",
        props: [post],
    }
</script>

<style scoped lang="scss">

  .card {

    padding: auto;

    h3 {
      font-size: x-large;
      margin-bottom: 4px;
    }

    .content__description {
      font-size: 18px;
      color: $gray-dark;

      p {
        margin: 0;
      }
    }

    .content__meta {
      font-size: 15px;
      color: $gray-dark;
    }
  }

</style>
