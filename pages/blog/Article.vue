<template>
  <div class="container">
    <h1>Novo post</h1>
    <div class="md">
      <h2>Entre com o texto em markdown</h2>
      <textarea rows="16" v-model='md_text'></textarea>
    </div>
    <div class="preview">
      <h2>Preview</h2>
      <div class="preview-text" v-html="$md.render(this.md_text)"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Article",
    data () {
      return {
        md_text: '# Title',
      }
    }
  }
</script>

<style scoped lang="scss">

  .container {
    margin-top: 8vh;
    .md {
      textarea {
        width: 100%;
      }
    }

    .preview {
      .preview-text {
        border: 1px solid #e3e3e3;
        padding: 15px;
      }
    }
    
    @media (min-width: 996px) {
      .md,
      .preview {
        width: 50%;
        float: left;
        padding-left: 15px;
        padding-right: 15px;
      }
    }

  }

</style>
