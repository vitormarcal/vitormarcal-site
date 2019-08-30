<template>
  <div>
    <main>
        <c-header />
        <c-day-mode />
        <nuxt />
    </main>
  </div>
</template>
<script>
  export default {
    components: {
      CHeader: () => import('~/components/layout/Header'),
      CDayMode: () => import('~/components/DayMode'),
    }
  }
</script>
<style>
</style>
