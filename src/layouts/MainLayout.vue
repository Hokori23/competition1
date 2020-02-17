<template>
  <main id='mainLayout' class='mdui-theme-accent-teal mdui-theme-primary-teal mdui-appbar-with-toolbar mdui-bottom-nav-fixed'>
    <Header></Header>
    <Loading></Loading>

    <section :class="{'loading':this.$store.state.Home.load}" id='page'>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </section>

    <Nav></Nav>
    <Drawer></Drawer>
    <Fab></Fab>
  </main>
</template>

<script>
  import Loading from 'components/Loading.vue'
  import Header from 'components/Header.vue'
  import Nav from 'components/Nav.vue'
  import Drawer from 'components/Drawer.vue'
  import Fab from 'components/Fab.vue'
  export default {
    name: 'MainLayout',
    components: {
      Header,
      Loading,
      Nav,
      Drawer,
      Fab
    },
    computed: {
      user() {
        return this.$store.state.User.user
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //检查登陆状态
        if (!vm.$store.state.User.login) {
          vm.$router.replace('/login')
        } else {
          //进行初始化数据
          vm.$store.dispatch('User/getUser', vm);
        }
      })
    },
  }
</script>
<style scoped>
  main>section {
    transition: transform .3s;
  }

  .loading {
    transform: translate3d(0, 45px, 0);
  }
</style>
