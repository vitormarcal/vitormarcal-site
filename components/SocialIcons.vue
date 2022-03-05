<template>
  <div class="social_icons">
    <a href="mailto:hi+meajuda@vitormarcal.com.br" title="Email me" target="_blank" rel="noopener noreferrer">
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
    padding-top: 1.5px;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }



</style>
