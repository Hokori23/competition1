<template>
  <main id='loginLayout' class='mdui-theme-accent-teal mdui-theme-primary-teal mdui-appbar-with-toolbar mdui-bottom-nav-fixed'
    :class="{'mdui-theme-layout-dark':darkMode}">
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: 'LoginLayout',
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //检查登陆状态
        if (vm.$store.state.User.login) {
          vm.$router.replace('/')
        }
      })
    },
    computed: {
      darkMode() {
        return this.$store.state.Setting.darkMode == 1
      }
    }
  }
</script>

<style>
  #loginLayout {
    height: 100%;
    width: 100%;
    position: relative;
  }
</style>
