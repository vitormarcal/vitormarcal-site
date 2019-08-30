<template>
  <span>{{readingTime}} min de leitura</span>
</template>

<script>
  export default {
    name: "ReadingTime",
    props: ['post'],
    computed: {
      readingTime() {
        let wordsAmount = this.post.split(" ").filter(word => word.trim() !== '').length;
        const wordsPerMinute = 150;
        return Math.ceil(wordsAmount / wordsPerMinute);
      }
    }

  }
</script>

<style scoped>

</style>
