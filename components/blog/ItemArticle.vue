<template>
  <div class="card">
    <nuxt-link :to="{path: post.link}">
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
        props: ['post'],
    }
</script>

<style scoped lang="scss">

  .card {
    padding: 0 0 10px 20px;
    border-radius: 10px;
    border: 1px solid #d6d6d6;
    box-shadow: 1px 1px 0 #c2c2c2;

    h3 {
      font-size: 25px;
      margin-bottom: 4px;
      color: black;
      font-weight: bold
    }

    .content__description {
      font-size: 18px;

      p {
        margin: 0;
        font-size: 18px;
        color: $blue-dark;
        font-weight: bold
      }
    }

    .content__meta {
      font-size: 15px;
      color: $gray-dark;
    }

    @media (min-width: 768px) {

      h3 {
        font-size: 45px;
        font-weight: normal;
      }

      .content__description {
        p {
          font-size: 25px;
        }
      }

    }
  }

</style>
