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
    },
    head() {
      return {
        link: [
          {
            rel: 'canonical',
            href: 'https://www.vitormarcal.com.br' + this.$route.path
          }
        ]
      }
    }
  }
</script>
<style>
</style>
