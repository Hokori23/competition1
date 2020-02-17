<template>
  <main id='loginLayout' class='mdui-theme-accent-teal mdui-theme-primary-teal mdui-appbar-with-toolbar mdui-bottom-nav-fixed'>
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: 'LoginLayout',
    beforeRouteEnter(to, from, next) {
      next(vm=>{
        //检查登陆状态
        if(vm.$store.state.User.login){
          vm.$router.replace('/')
        }
      })
    },
  }
</script>

<style>
  #loginLayout{
    height: 100%;
    width: 100%;
    position: relative;
  }
</style>
