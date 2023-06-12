<template>

  <div class="about">
    <section class="hero">
      <figure>
        <img src="~/assets/images/vtormarcal.svg" alt="Vítor Marçal, minha imagem de perfil"/>
        <a href="https://drive.proton.me/urls/5FTCH1P4E0#1sAIZBOTDwCA"
           target="_blank" rel="noopener noreferrer" title="meu currículo vitae">Visualize meu currículo formal</a>
        <figcaption>
          <em>By day, a simple software developer.<br/> By night, also a software developer.</em>
          <br/>
          <div class="emoji">
            <span>&#127773;</span><span>&#127770;</span><span>&#128187;</span>
          </div>
        </figcaption>
      </figure>
    </section>
    <section v-html="whoiam" class="whoiam"></section>
    <section v-html="professionalHistory" class="professionalHistory"></section>
    <section v-html="whatIdoToday" class="whatIdoToday"></section>
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

  .about {
    @extend .container;
    margin: 8rem 4rem 4rem;
    padding-top: 0;

    section {
      @extend .content;
      max-width: none;
      padding-top: 1px;
      margin-bottom: 1.8rem;
      padding-bottom: 1px;

      &:first-of-type {
        max-width: 400px;
        background-color: #fff;
        border: 0 solid rgba(0, 0, 0, .125);
        border-radius: .625rem;
        box-shadow: none;
        float: left;
        padding-top: 1rem;
      }

      figure {
        align-content: center;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;

        img {
          padding-top: 2px;
        }

        figcaption {
          text-align: center;

          .emoji {
            font-size: 18px;
          }
        }

        a {
          text-align: center;
          display: block;
        }
      }
    }

    .hero {
      margin: 0;
      padding: 0;
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

    @media (min-width: 1500px) {
      .hero, .whoiam {
        height: 50vh;
      }
    }

    @media (min-width: 1764px) {
      margin: 8rem 20rem 20rem;
    }
  }


</style>
