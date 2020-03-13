<template>
  <aside class="mdui-drawer mdui-drawer-close mdui-color-theme-50" id='drawer'>
    <!--avatar-->
    <ul class="mdui-list" id='avatar'>
      <li class="mdui-list-item mdui-ripple" mdui-drawer-close @click.stop='userCenter'>
        <div class="mdui-list-item-avatar"><img v-real-img="user.avatarURL" src='../statics/icons/avatar-fill.png' /></div>
        <div class="mdui-list-item-content">{{user.nickName}}</div>
      </li>
    </ul>
    <!-- divider -->
    <div class="mdui-divider"></div>
    <!-- divider -->
    <ul class="mdui-list" id='drawer--list'>
      <li class="mdui-list-item mdui-ripple" mdui-drawer-close @click.stop="userCenter">
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe7fd;</i>
        <div class="mdui-list-item-content">{{$t('drawer.user')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple" mdui-drawer-close>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe163;</i>
        <div class="mdui-list-item-content">{{$t('drawer.post')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple" mdui-drawer-close>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe85a;</i>
        <div class="mdui-list-item-content">{{$t('drawer.notification')}}</div>

        <q-badge color="red" label="2" />
      </li>
      <!-- divider -->
      <div class="mdui-divider"></div>
      <!-- divider -->
      <li class="mdui-list-item mdui-ripple" mdui-drawer-close @click.stop="setting">
        <i class="mdui-list-item-icon mdui-icon material-icons">settings</i>
        <div class="mdui-list-item-content">{{$t('drawer.settings')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple" mdui-drawer-close>
        <i class="mdui-list-item-icon mdui-icon material-icons">error</i>
        <div class="mdui-list-item-content">{{$t('drawer.about')}}</div>
      </li>
    </ul>
  </aside>
</template>

<script>
  import mdui from 'mdui'
  export default {
    name: 'Drawer',
    computed: {
      user() {
        return this.$store.state.User.user || {}
      },
    },
    methods: {
      userCenter() {
        if (this.$router.currentRoute.path !== '/user') {
          this.$router.push('/user')
        }
      },
      setting() {
        if (this.$router.currentRoute.path !== '/settings') {
          this.$router.push('/settings')
        }
      },
    },
    mounted() {
      let drawer = new mdui.Drawer('#drawer', {
        swipe: true
      });
    }
  }
</script>

<style>
  #avatar>li:hover {
    background-color: unset !important;
  }

  #avatar>li:before {
    content: none
  }

  #avatar .mdui-list-item-avatar {
    min-width: 50px;
    max-width: 50px;
    height: 50px;
    line-height: 50px;
    margin: 10px 0;
  }

  #avatar::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    top: 0;
    border-top: 1px solid rgba(0, 0, 0, .12);
  }

  #avatar {
    position: relative;
    padding: 3% 0;
  }

  /*  #drawer{
    border-right: 1px solid rgba(0,0,0,.12);
  } */
  #drawer>.mdui-divider {
    margin: 0 5% 5% 5%;
  }

  #drawer--list>.mdui-divider {
    margin: 5%;
  }

  #drawer--list>li {
    padding: 0 16px 0 25px
  }
</style>
