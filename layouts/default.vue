<template>
  <div>
    <main>
        <c-header />
        <nuxt />
    </main>
  </div>
</template>
<script>
  export default {
    components: {
      CHeader: () => import('~/components/layout/Header'),
    }
  }
</script>
<style>
</style>
