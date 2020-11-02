<template>
  <div class="container">

    <ul>
      <template v-for="project in projects">
        <project-card :project="project"></project-card>
      </template>
    </ul>

  </div>

</template>

<script>
import {mapState} from 'vuex'
import ProjectCard from "~/components/portfolio/ProjectCard";

export default {
  name: "portfolio",
  components: {ProjectCard},
  comments: {
    ProjectCard: () => import('~/components/portfolio/ProjectCard')
  },
  created() {
    this.$store.dispatch('portfolio/setProject')
  },
  computed: {
    ...mapState({
      projects: state => state.portfolio.projects,
    })
  }
}
</script>

<style scoped lang="scss">

.container {
  margin: 8rem 1rem 1rem 1rem;
  padding-top: 0;
  min-width: 300px;

  ul {
    width: auto;
    margin: 0 0 10rem;
    display: grid;
    gap: 20px;
    list-style: none;
    padding: 0;
  }


  @media (max-width: 1050px) {
    ul {
      grid-template-columns: 1fr;
    }

  }

  @media (min-width: 1051px) {
    margin: 10rem;
    ul {
      grid-template-columns: 1fr 1fr;
    }

  }

  @media (min-width: 1351px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }

  }


}

</style>
