<template>
  <main id='mainLayout' class='mdui-theme-accent-teal mdui-theme-primary-teal mdui-appbar-with-toolbar mdui-bottom-nav-fixed'>
    <Header></Header>
    <Loading></Loading>

    <section :class="{'loading':this.$store.state.Home.load}" id='page'>
      <transition :name="transitionName">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </section>


      <Nav></Nav>
    <Drawer></Drawer>

    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <Fab></Fab>
    </transition>
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
    methods: {
      //初始化数据
      init() {}
    },
    computed: {
      user() {
        return this.$store.state.User.user
      }
    },
    data() {
      return {
        transitionName: ''
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //检查登陆状态
        if (!vm.$store.state.User.login) {
          vm.$router.replace('/login')
        } else {

          //进行初始化用户数据
          vm.$store.dispatch('User/getUser', vm);
        }
      })
    },
    watch: {
      $route(to, from) {
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-left'
        } else if (to.meta.index < from.meta.index) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = ''
        }
      }
    }
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
