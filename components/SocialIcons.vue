<template>
  <div class="social_icons">
    <a href="mailto:vitormarcal8@gmail.com" title="Email me" target="_blank" rel="noopener noreferrer">
      <img src="~/assets/images/mailme.svg" alt="Email me "/>
    </a>
    <a href="https://github.com/vitormarcal" title="Meu github" target="_blank" rel="noopener noreferrer">
      <img src="~/assets/images/github-logo.svg" alt="Meu github"/>
    </a>
    <a href="https://www.linkedin.com/in/vitormarcal/" title="Meu Linkedin" target="_blank" rel="noopener noreferrer">
      <img src="~/assets/images/linkedin-logo.svg" alt="Meu Linkedin" />
    </a>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped lang="scss">

  .social_icons {
    position: fixed;
    z-index: 10000;
    width: auto;
    border: none;
    margin: 0;
    padding: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

</style>
