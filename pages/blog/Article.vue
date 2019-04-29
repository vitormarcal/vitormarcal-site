<template>
  <div>
    <div class="editor">
      <textarea v-model="markdown"></textarea>
    </div>
    <div v-html="compiledContent"></div>
  </div>
</template>

<script>
  export default {
    name: "Article"
  }
</script>

<style scoped>

</style>
