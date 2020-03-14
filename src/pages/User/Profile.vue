<template>
  <section id='user--profile' class='list page'>
    profile
    {{$route.params.nickName}}
  </section>
</template>

<script>
  export default{
    name:'profile',
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('profile.profile'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)

        //获取帖子数据
        // vm.$store.dispatch('Home/getSinglePost', vm)
      })
    },
  }
</script>

<style>
</style>
