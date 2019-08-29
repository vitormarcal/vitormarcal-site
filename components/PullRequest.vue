<template>

  <div class="pull-request">
    <span>
      Contribua com este conteúdo!
    </span>
    <span>Mande sua correção ou sugestão, via
    </span>
    <span>
      <a v-bind:href="href" title="Mande um Pull Request!" target="_blank" rel="noopener noreferrer"> Pull Request no Github!&#128151;</a>
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
    @extend .texto;
    font-size: 15px;
    display: flex;
    max-width: 302px;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: .625rem;
    box-shadow: 0 2px 3px 0 rgba(75, 91, 108, 0.2);
    position: fixed;
    bottom: 4%;
    right: 3.5rem;
    flex-direction: column;
    padding: 1rem;
    background-color: #f0d1c4;
  }


</style>
