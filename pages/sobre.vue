<template>

  <main>
    <div v-html="whoiam"></div>
    <div v-html="professionalHistory"></div>
    <div v-html="whatIdoToday"></div>
  </main>


</template>

<script>
  import whoiam from '~/content/pages/about/whoiam.md'
  import whatIdoToday from '~/content/pages/about/what-ido-today.md'
  import professionalHistory from '~/content/pages/about/professional-history.md'

  export default {
    name: "sobre",
    computed: {
      whoiam: () => whoiam.html,
      whatIdoToday: () => whatIdoToday.html,
      professionalHistory: () => professionalHistory.html
    }
  }
</script>

<style scoped lang="scss">


</style>
