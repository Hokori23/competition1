<template>
  <section id='setting'>
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple" @click='language()'>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe8e2;</i>
        <div class="mdui-list-item-content">{{$t('settings.language')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe40a;</i>
        <div class="mdui-list-item-content">{{$t('settings.theme')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe3a9;</i>
        <div class="mdui-list-item-content">{{$t('settings.darkMode')}}</div>
        <label class="mdui-switch">
          <input type="checkbox" checked />
          <i class="mdui-switch-icon"></i>
        </label>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'settings',
    methods:{
      language(){
        this.$router.push('/settings/language')
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('nav.settings'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)

        //关闭loading组件
        vm.$store.commit('Home/changeLoad', false)
      })
    },
  }
</script>

<style>
  .mdui-typo-subheading {
    overflow: visible !important;
    margin: 0 !important;
  }
</style>
