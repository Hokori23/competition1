<template>
  <main id='mainLayout' class='mdui-appbar-with-toolbar' :class="{'mdui-bottom-nav-fixed':$store.state.Display.nav,'comment-fixed':!$store.state.Display.nav}">
    <Header></Header>
    <Loading></Loading>

    <section :class="{'loading':this.$store.state.Home.load}" id='page'>
      <transition :name="transitionName" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
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
    computed: {
      user() {
        return this.$store.state.User.user
      }
    },
    data() {
      return {
        transitionName: '',
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.dispatch('User/getUser', vm)
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
        //关闭loading组件
        this.$store.commit('Home/changeLoad', false)
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

  #page {
    width: 100%;
  }

  .page {
    width: inherit;
    /* min-height: 100%; */
    min-height: calc(100vh - 56px);
    box-sizing: border-box;
    padding-bottom: 60px;
    position: relative;
  }

  .footer:after {
    content: 'Developed By Hokori';
    position: absolute;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    text-align: center;
  }
</style>
