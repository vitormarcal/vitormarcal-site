<template>

  <div class="about">
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
    },
    head: {
      bodyAttrs: {
        class: "bg-color__about"
      }
    }
  }
</script>

<style scoped lang="scss">

  div {
    @extend .container;
    margin: 8rem 4rem 4rem;
    padding-top: 0;

    section {
      @extend .content;
      padding-top: 0;
    }

    @media (max-width: 765px) {
      margin: 8rem 1rem 1rem;
    }

    @media (min-width: 960px) {
      margin: 8rem 10rem 10rem;
    }

    @media (min-width: 1201px) {
      margin: 8rem 16rem 16rem;
    }

    @media (min-width: 1764px) {
      margin: 8rem 30rem 30rem;
    }
  }


</style>
