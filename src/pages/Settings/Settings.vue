<template>
  <section id='setting' class='list page'>
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple" @click='language()'>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe8e2;</i>
        <div class="mdui-list-item-content">{{$t('settings.language')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe40a;</i>
        <div class="mdui-list-item-content">{{$t('settings.theme')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple" @click.self='darkMode()'>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe3a9;</i>
        <div class="mdui-list-item-content">{{$t('settings.darkMode')}}</div>
        <label class="mdui-switch">
          <input type="checkbox" v-model='checked' />
          <i class="mdui-switch-icon"></i>
        </label>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'settings',
    methods: {
      language() {
        this.$router.push('/settings/language')
      },
      darkMode() {
        this.checked = !this.checked;
      }
    },
    data() {
      return {
        checked: Boolean(Number(this.$store.state.Setting.darkMode))
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('drawer.settings'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)
      })
    },
    watch: {
      checked(newValue) {
        this.$store.commit('Setting/changeDarkMode', Number(newValue))
      }
    }
  }
</script>

<style>
  .list,.list ul,.list ul li{
    width: inherit;
  }
  .list .mdui-typo-subheading {
    overflow: visible !important;
    margin: 0 !important;
  }

  .list ul.mdui-list {
    margin: 0 auto;
    max-width: 500px;
    position: relative;
    /* border-bottom: 1px solid rgba(0, 0, 0, .085); */
  }

  .list ul.mdui-list:before,
  .list ul.mdui-list:after {
    position: absolute;
    top: 0px;
    content: '';
    height: 100%;
    width: 1px;
  }

  .list ul.mdui-list:before {
    border-left: 1px solid rgba(0, 0, 0, .12);
    left: 0;
    transform: translateX(-100%);
  }

  .list ul.mdui-list:after {
    right: 0;
    transform: translateX(100%);
    border-right: 1px solid rgba(0, 0, 0, .12);
  }
</style>
