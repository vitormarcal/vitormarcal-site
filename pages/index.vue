<template>
  <section class="container">
    <div>

      <h1>
        <span>Olá, eu me chamo</span> <strong>Vítor Marçal.</strong>
      </h1>

      <p>Sou um <strong>desenvolvedor full stack</strong>. Isso quer dizer que posso lhe ajudar a criar projetos
          digitais de alta qualidade. De vez em quando, sobra um tempinho para escrever em meu blog.
      </p>
      <c-social-icons />

    </div>
  </section>
</template>

<script>

  export default {
    components: {
      CSocialIcons: () => import('~/components/SocialIcons'),
    }
  }
</script>

<style scoped  lang="scss">
  .container {
    margin: 0 auto;
    padding: 3rem;
    padding-bottom: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    overflow: hidden;
    position: relative;

    div {
      z-index: 1;

      h1, p {
        text-align: left;
        line-height: 1.25;
        margin-bottom: 12px;
      }

      h1 {
        font-size: 50px;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        color: #000000;
        span, strong {
          display: block;
        }
      }
      p {
        font-size: 21px;
        font-family: 'Roboto Mono', sans-serif;
      }
    }



    @media (min-width: 1201px) {

        padding-left: 15rem;
        padding-right: 15rem;

    }

    @media (max-width: 768px) {
      div {
        h1 {
          font-size: 33px;
          letter-spacing: -.0625rem;
        }
        p {
          margin: 1.52px;
          line-height: 1.6rem;
          font-size: 18px;
          font-weight: 200;
        }

        h1, p {
          text-align: center;
        }
      }

    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      height: 17%;
      bottom: 0;
      clip-path: polygon(0 100%,100% 100%,100% 0);
      background-color: #4eaae6;
      background-image: linear-gradient(-270deg, #44a4e2, #2e7eb3);;
    }

  }
</style>
