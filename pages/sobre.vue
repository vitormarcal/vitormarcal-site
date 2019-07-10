<template>

  <div>
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
    background-color: #fff;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: .625rem;
    box-shadow: 0 2px 3px 0 rgba(75, 91, 108, .2);

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
      margin: 8rem 20rem 20rem;
    }
  }


</style>
