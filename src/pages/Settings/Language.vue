<template>
  <setion id='settings--language'>

  </setion>
</template>

<script>
  export default{
    name:'Language',
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('settings.language'))
      })
    },
  }
</script>

<style>
</style>
