<template>

  <div class="container">
    <section v-html="whoiam"></section>
    <section v-html="professionalHistory"></section>
    <section v-html="whatIdoToday"></section>
  </div>


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

  div {
    section {
      @extend .content
    }
  }



</style>
