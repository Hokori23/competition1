<template>
  <section id='profile' class='list page'>
    <ul class="mdui-list">

      <van-uploader class='mdui-ripple' :after-read="afterRead" accept="image/*">
        <li class="mdui-list-item mdui-ripple" type="primary">
          <div class="mdui-list-item-content">{{$t('user.profilePhoto')}}</div>
          <div class="mdui-list-item-avatar"><img :src="tempUser.avatarURL" @error="imgErr($event)" /></div>
        </li>
      </van-uploader>

      <li class="mdui-list-item mdui-ripple" mdui-dialog="{target:'#profile-dialog'}">
        <div class="mdui-list-item-content">{{$t('user.name')}}</div>
        <div class="mdui-list-item-content mdui-text-color-theme list-item--right" :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">{{tempUser.nickName}}</div>
      </li>
    </ul>
    <div class="mdui-dialog" id="profile-dialog">
      <div class="mdui-dialog-content">
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">{{$t('user.editName')}}</label>
          <input class="mdui-textfield-input" type="text" v-model="user.nickName" id="profile-dialog--input">
        </div>
      </div>
      <div class="mdui-dialog-actions">
        <button class="mdui-btn mdui-ripple" mdui-dialog-close>{{$t('common.cancel')}}</button>
        <button class="mdui-btn mdui-ripple" mdui-dialog-confirm>{{$t('common.confirm')}}</button>
      </div>
    </div>
  </section>
</template>

<script>
  import mdui from 'mdui'
  export default {
    name: 'profile',
    methods: {
      afterRead(file) {
        console.log(file)
      },
      imgErr(e) {
        e.target.src = './statics/icons/avatar-fill.png';
        e.onerror = null;
      }
    },
    computed: {
      tempUser() {
        return this.$store.state.User.user || {}
      },
    },
    data() {
      return {
        user: {},
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('user.profile'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)

        //初始化用户信息
        let temp = Object.assign({}, vm.$store.state.User.user);
        vm.user = temp;


        //解构
        // let {nickName,account} = vm.user;
        //  console.log(nickName)
        //  console.log(account)
      })
    },
    mounted() {
      document.getElementById('profile-dialog').addEventListener('open.mdui.dialog', function() {
        document.getElementById('profile-dialog--input').focus();
      })
    }
  }
</script>

<style>
  .van-uploader,
  .van-uploader__wrapper,
  .van-uploader__input-wrapper {
    width: 100%;
  }

  .list-item--right {
    flex-grow: 0;
    font-weight: 500;
  }
</style>
