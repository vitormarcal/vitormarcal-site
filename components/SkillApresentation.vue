<template>
  <div>
    <div class="apresentation">
      <p id="dev-text">
        <span id="dev-text-content-1"></span>
        <span id="dev-text-content-2"></span>
      </p>
    </div>
  </div>
    
</template>

<script>
  import theaterJS from 'theaterjs'
  export default {
    mounted: function()  {
      const theater = theaterJS();
      theater
        .on('type:start, erase:start', function () {
          theater.getCurrentActor().$element.classList.add('dev-text--typing')
        })
        .on('type:end, erase:end', function () {
          theater.getCurrentActor().$element.classList.remove('dev-text--typing')
        });

      theater
        .addActor('dev-text-content-1', { speed: .9, accuracy: 1 })
        .addActor('dev-text-content-2', { speed: .9, accuracy: 1 });

      theater
        .addScene('dev-text-content-1:Estou pronto para lhe ajudar', 100)
        .addScene('dev-text-content-2:Seja um site', 200, '.', 200, '.', 200, '. ')
        .addScene('dev-text-content-2:Um app', 200, '.', 200, '.', 200, '. ' )
        .addScene('dev-text-content-2:Um blog', 200, '.', 200, '.', 200, '. ')
        .addScene('dev-text-content-2:Vamos tirar sua ideia do papel!', 400)
        .addScene(theater.replay.bind(theater))
    }

  }
</script>

<style scoped lang="scss">

  .apresentation {
    position: absolute;
    span {
      display: block;
    }
  }

</style>
