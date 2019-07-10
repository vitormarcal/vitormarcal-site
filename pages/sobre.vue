<template>

  <main>
    <div v-html="howiam"></div>
    <div v-html="professionalHistory"></div>
    <div v-html="whatIdoToday"></div>
  </main>


</template>

<script>

  export default {
    name: "sobre",
    async asyncData({params, error}) {

      try {
        const howiam = await import(`~/content/pages/about/howiam.md`);
        const whatIdoToday = await import(`~/content/pages/about/what-ido-today.md`);
        const professionalHistory = await import(`~/content/pages/about/professional-history.md`);

        return {
          howiam: howiam.default.html,
          whatIdoToday: whatIdoToday.default.html,
          professionalHistory: professionalHistory.default.html
        }

      } catch (e) {
        let message = 'Ops, algo estranho e inexperado ocorreu';
        let statusCode = 400;
        if (e.code.startsWith("MODULE_NOT_FOUND")) {
          message = 'Post não encontrado';
          statusCode = 404;
        }
        error({statusCode: statusCode, message: message})
      }

    },
  }
</script>

<style scoped lang="scss">


</style>
