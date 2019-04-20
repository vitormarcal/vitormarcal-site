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

<style  lang="scss">
  .container {
    background-color: #ededf3;
    margin: 0 auto;
    padding: 3rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;

    h1, p {
      text-align: left;
    }

    h1 {
      span, strong {
        display: block;
      }
    }

    p {
      line-height: 2.2rem;
      font-size: 1.75rem;
    }

    @media (min-width: 1201px) {

        padding-left: 15rem;
        padding-right: 15rem;

    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      height: 100px;
      bottom: 0;
      clip-path: polygon(0 100%,100% 100%,100% 0);
      background-color: #4eaae6;
      background-image: linear-gradient(-270deg, #44a4e2, #2e7eb3);;
    }

  }
</style>
