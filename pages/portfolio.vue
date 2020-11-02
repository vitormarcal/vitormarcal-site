<template>
  <div class="container">

    <ul>
      <template v-for="project in projects">
        <li class="card">
          <a :href="project.link" rel="noopener noreferrer" target="_blank">
            <img :src="project.img" :alt="project.alt">
          </a>
          <h2>{{ project.name }}</h2>
          <p class="description">
            {{ project.description }}
          </p>
          <input type="button" value="Ver projeto">
        </li>
      </template>
    </ul>

  </div>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "portfolio",
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

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(219, 229, 230);
      overflow: hidden;
      padding-bottom: 1rem;
      box-shadow: 0 1rem 1.5rem -.3rem rgba(76, 114, 179, .2);

      img {
        cursor: pointer;
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease 0s;
        border-bottom: 1px solid rgb(219, 229, 230);
        box-shadow: 0 1rem 1.5rem -.3rem rgba(76, 114, 179, .2);

        &:hover {

          transform: scale(1.05);
        }

      }
      h1 {
        font-size: 25px;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        color: #000000;
        margin: 2rem 0 0;
      }

      p {
        padding: 0 1rem 0 1rem;
      }

      input {
        cursor: pointer;
        background-color: $blue-light;
        width: 240px;
        height: 40px;
        font-size: 16px;
        line-height: 16.34px;
        color: #ebfbff;
        text-align: center;
        font-weight: bold;
        border-radius: 30px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0.3rem 1rem;
        transition: all 0.3s ease 0s;
        text-transform: uppercase;

        &:hover {
          transform: scale(1.015);
        }
      }

    }

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
