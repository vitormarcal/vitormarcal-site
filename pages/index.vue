<template>
  <section class="container">
    <div>

      <h1>
        <span>Olá, eu me chamo</span> <strong>Vítor Marçal.</strong>
      </h1>

      <h2>Sou um <strong>desenvolvedor full stack</strong>. Isso quer dizer que ajudo empresas, ONGs e pessoas a criar projetos
          digitais de alta qualidade. De vez em quando, sobra um tempinho para escrever em meu blog.
      </h2>
      <v-skill-apresentation/>

    </div>
  </section>
</template>

<script>

  export default {
    components: {
      VSkillApresentation: () => import('~/components/SkillApresentation')
    }
  }
</script>

<style  lang="scss">
  .container {
    margin: 0 auto;
    padding: 3rem;
    min-height: 71.3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;

    h1, h2 {
      text-align: left;
    }

    h1 {
      span, strong {
        display: block;
      }
    }

    @media (min-width: 1201px) {

        padding-left: 15rem;
        padding-right: 15rem;

    }

  }
</style>
