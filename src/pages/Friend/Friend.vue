<template>
  <section id='friend'>

  </section>
</template>

<script>
  export default {
    name: 'Friend',
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('nav.friend'))

        //更新本页滚动位置
        {
          const scrollTop = vm.$route.meta.scrollTop;
          const $content = document.querySelector('html');
          if (scrollTop && $content) {
            $content.scrollTop = scrollTop;
          }
        }

        //修改组件状态
        {
          vm.$store.commit('Display/fab', true)
          vm.$store.commit('Display/searchBar', true)
          vm.$store.commit('Display/refresh', true)
          vm.$store.commit('Display/nav', true)
          //关闭loading组件
          vm.$store.commit('Home/changeLoad', false)
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
