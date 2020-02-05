<template>
  <div class="comments">
    <vue-disqus :shortname="shortname" :identifier="page_id" :url="url" :title="title"></vue-disqus>
  </div>
</template>

<script>
  export default {
    name: "Comments",
    props: ['shortname', 'page_id', 'url', 'title']
  }
</script>

<style scoped>

</style>
