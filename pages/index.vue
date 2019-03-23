<template>
  <section class="container">
    <div>
      <title>Olá, eu sou Vítor Marçal.</title>
      <h2>Seja bem vindo!</h2>
      <img src="~/assets/images/vtormarcal.svg" title="Oi, eu sou Vítor!" alt="Vítor Marçal, page author, profile picture">
      <div class="follow-icons">
        <a href="https://github.com/vitormarcal" title="Meu Github" target="_blank">
          <img src="~/assets/images/github-logo.svg" alt="Github author"/>
        </a>
        <a href="https://www.linkedin.com/in/vitormarcal" title="Meu LinkedIn" target="_blank">
          <img src="~/assets/images/linkedin-logo.svg" alt="LinkedIn author"/>
        </a>
      </div>


    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
