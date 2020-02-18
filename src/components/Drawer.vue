<template>
  <aside class="mdui-drawer mdui-drawer-close" id='drawer'>
    <!--avatar-->
    <ul class="mdui-list" id='avatar'>
      <li class="mdui-list-item">
        <div class="mdui-list-item-avatar"><img :src="user.avatarURL" @error="$event.target.src = '/statics/icons/avatar-fill.png';$event.onerror=null;" /></div>
        <div class="mdui-list-item-content">{{user.nickName}}</div>
      </li>
    </ul>
    <!-- divider -->
    <div class="mdui-divider"></div>
    <!-- divider -->
    <ul class="mdui-list" id='drawer--list'>

      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe7fd;</i>
        <div class="mdui-list-item-content">{{$t('drawer.user')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe163;</i>
        <div class="mdui-list-item-content">{{$t('drawer.post')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe85a;</i>
        <div class="mdui-list-item-content">{{$t('drawer.reply')}}</div>
      </li>
      <!-- divider -->
      <div class="mdui-divider"></div>
      <!-- divider -->
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">settings</i>
        <div class="mdui-list-item-content">{{$t('drawer.settings')}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple">
        <i class="mdui-list-item-icon mdui-icon material-icons">error</i>
        <div class="mdui-list-item-content">{{$t('drawer.about')}}</div>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'Drawer',
    computed: {
      user() {
        return this.$store.state.User.user
      }
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

  #avatar {
    padding: 3% 0;
  }

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
