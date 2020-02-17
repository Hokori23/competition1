<template>
  <section>

  </section>
</template>

<script>
  export default {
    name: 'Friend',
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('changeTitle', vm.$t('nav.friend'))
        //更新本页滚动位置
        {
          const scrollTop = vm.$route.meta.scrollTop;
          const $content = document.querySelector('html');
          if (scrollTop && $content) {
            $content.scrollTop = scrollTop;
          }
        }
      })
    },
    beforeRouteLeave(to, from, next) {
      //保存本页滚动位置
      {
        const $content = document.querySelector('html');
        const scrollTop = $content ? $content.scrollTop : 0;
        from.meta.scrollTop = scrollTop;
      }
      next()
    }
  }
</script>

<style>
</style>
