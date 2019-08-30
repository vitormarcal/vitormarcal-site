<template>

  <div class="pull-request">
    <span class="large">
      Contribua com este conteúdo!
    </span>
    <span class="large">Mande sua correção ou sugestão, via
    </span>
    <span class="large">
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
    max-width: 120px;
    margin: 2px;
    display: flex;
    position: fixed;
    flex-direction: column;
    background-color: #f0d1c4;
    right: 6px;
    bottom: 1%;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: .625rem;
    box-shadow: 0 2px 3px 0 rgba(75, 91, 108, 0.2);
    text-align: center;
    font-size: 15px;

    .large {
      display: none;

      &:last-of-type {
        display: unset;
      }
    }

    &:hover {
      font-weight: 600;
    }

  }

  @media (min-width: 900px) {
    .pull-request {
      font-size: 15px;
      max-width: 302px;
      bottom: 4%;
      right: 3.5rem;
      padding: 1rem;

      .large {
        display: unset;
      }

    }
  }


</style>
