<template>
  <nav id='nav' class="mdui-bottom-nav mdui-color-theme">

    <a class="mdui-ripple mdui-bottom-nav-active" @click='toHome'>
      <i class="mdui-icon material-icons">&#xe88a;</i>
      <label>{{$t('nav.forum')}}</label>
    </a>
    <a class="mdui-ripple" @click='toFriend'>
      <i class="mdui-icon material-icons">&#xe7fb;</i>
      <label>{{$t('nav.friend')}}</label>
    </a>
    <a class="mdui-ripple" @click='toMessage'>
      <i class="mdui-icon material-icons">&#xe8af;</i>
      <label>{{$t('nav.message')}}</label>
    </a>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {
      toHome() {
        if (this.$router.currentRoute.path !== '/') {
          this.$router.replace('/')
        }
      },
      toFriend() {
        if (this.$router.currentRoute.path !== '/friend') {
          this.$router.replace('/friend')
        }
      },
      toMessage() {
        if (this.$router.currentRoute.path !== '/message') {
          this.$router.replace('/message')
        }
      }
    },
  }
</script>

<style scoped>
  nav>a {
    font-size: 10px;
    padding: 0;
  }

  nav>a>i {
    font-size: 20px;
  }

  nav {
    z-index: 999;
  }
</style>
