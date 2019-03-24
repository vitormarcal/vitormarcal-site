<template>
  <div>
    <main>
      <c-header/>
      <transition name="layout" mode="out-in">
        <nuxt />
      </transition>
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
<style lang="scss">
</style>
