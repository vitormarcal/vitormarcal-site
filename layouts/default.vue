<template>
  <div>
    <main>
      <c-header/>
      <nuxt />
      <c-footer/>
    </main>
  </div>
</template>
<script>
  export default {
    components: {
      CHeader: () => import('~/components/Header'),
      CFooter: () => import('~/components/Footer')
    }
  }
</script>
<style scoped lang="scss">
</style>
