<template>

  <div class="pull-request">
    <span>
      Contribua com este conteúdo! &#128151;
    </span>
    <span>Mande sua correção/sugestão, diretamente atravês de um
      <a v-bind:href="href" title="Mande um Pull Request!" target="_blank" rel="noopener noreferrer"> Pull Request!</a>
    </span>
  </div>

</template>

<script>
  export default {
    props: ['href'],
  }
</script>

<style scoped lang="scss">

  .pull-request {
    display: flex;
    max-width: 302px;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: .625rem;
    box-shadow: 0 2px 3px 0 rgba(75, 91, 108, 0.2);
    position: fixed;
    left: 4rem;
    bottom: 11%;
    flex-direction: column;
    padding: 1rem;
    background-color: #f0d1c4;
  }


</style>
