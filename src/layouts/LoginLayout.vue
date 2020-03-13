<template>
  <main id='loginLayout' :class="{'mdui-theme-layout-dark':darkMode}">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
  export default {
    name: 'LoginLayout',
    computed: {
      darkMode() {
        return this.$store.state.Setting.darkMode == 1
      }
    },
    data() {
      return {
        transitionName: '',
        user: localStorage.getItem('user')
      }
    },
    beforeRouteEnter(to, from, next) {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
      }
      next();
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
      },
      user(newValue) {
        if (newValue !== null) {
          localStorage.removeItem('user')
        }
      }
    },
    mounted() {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
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
