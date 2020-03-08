<template>
  <section id='user' class='list page'>
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple" @click='logOut()'>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe8e2;</i>
        <div class="mdui-list-item-content">{{$t('user.logout')}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default{
    name:'user',
    methods:{
      logOut(){
        let user = null
        this.$store.commit('User/changeUser',user)
        this.$router.go('/login')
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('drawer.user'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)

        // 关闭loading组件
        vm.$store.commit('Home/changeLoad', false)
      })
    },
  }
</script>

<style>
</style>
