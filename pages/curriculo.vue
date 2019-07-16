<template>
  <div class="curriculo">
    <section>
      <h1>Vítor Marçal</h1>
      <h2>Desenvolvedor Java Sênior</h2>

      <article>
        <h3>Formação</h3>
        <span>Análise e Desenvolvimento de Sistemas</span>
        <span>Concluído em 2015</span>
        <span>Universidade Católica de Brasília</span>
      </article>

      <article>
        <h3>Contato</h3>
        <span>Expansão do Setor O, Ceilândia Norte</span>
        <span>61 9 95117545</span>
        <span>vitormarcal8@gmail.com</span>
        <span>Linkedin: /in/vitormarcal</span>
        <span>Github: /vitormarcal</span>
      </article>

      <article>
        <h3>Experiência Profissional</h3>
      </article>


      <article>
        <h3>Principais Habilidades</h3>
      </article>

      <article>
        <h3>Outras Habilidades</h3>
      </article>
    </section>
  </div>
</template>

<script>

  export default {
    name: "curriculo",
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
  }

</style>
