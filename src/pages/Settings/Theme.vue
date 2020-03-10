<template>
  <section id='setting--theme' class='list page'>
    <li class="mdui-list-item mdui-ripple" @click='themeColor()'>
      <div class="mdui-list-item-content">{{$t('settings.themeColor')}}</div>
    </li>
    <li class="mdui-list-item mdui-ripple" @click='accentColor()'>
      <div class="mdui-list-item-content">{{$t('settings.accentColor')}}</div>
    </li>
  </section>
</template>

<script>
  export default {
    name: 'theme',
    methods: {
      themeColor() {
        this.$router.push('/settings/theme/themecolor')
      },
      accentColor() {
        this.$router.push('/settings/theme/accentcolor')
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('settings.theme'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)
      })
    },
  }
</script>

<style>
</style>
