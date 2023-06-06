<template>

  <div class="curriculo">
    <section v-html="head" id="curriculo-head"></section>
    <section v-html="skills" id="curriculo-skills"></section>
    <section v-html="education" id="curriculo-education"></section>
    <section v-html="experience" id="curriculo-experience"></section>
    <section v-html="otherInfo" id="curriculo-otherInfo" v-if="otherInfo"></section>
  </div>

</template>

<script>
import head from '@/content/pages/curriculo/head.md'
import skills from '@/content/pages/curriculo/skills.md'
import education from '@/content/pages/curriculo/education.md'
import experience from '@/content/pages/curriculo/experience.md'
import otherInfo from '@/content/pages/curriculo/other-info.md'

export default {
  name: "curriculo",
  computed: {
    head: () => head.html,
    skills: () => skills.html,
    education: () => education.html,
    experience: () => experience.html,
    otherInfo: () => otherInfo.html,
  }
}
</script>

<style scoped lang="scss">

.curriculo {
  @extend .container;
  margin: 8rem 4rem 4rem;
  padding-top: 0;

  section {
    @extend .content;
    max-width: none;
    padding-top: 1px;
    margin-bottom: 1.8rem;
    padding-bottom: 1px;

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
    margin: 8rem 20rem 20rem;
  }

  @media print {
    margin-top: 0;
  }

}


</style>
