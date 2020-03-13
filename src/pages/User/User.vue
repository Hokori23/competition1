<template>
  <section id='user' class='list page'>
    <a v-if="editAvatar" class="mdui-btn mdui-btn-icon save-btn" @click='crop'>
      <i class="mdui-icon material-icons">&#xe161;</i>
    </a>
    <div v-if="editAvatar" class='avatar--cropper'>


      <vueCropper ref="cropper" :img="avatar" :outputSize="1" :info="false" :canScale="true" :autoCrop="true" :fixed="true"
        :centerBox="true"></vueCropper>
    </div>
    <ul class="mdui-list">
      <van-uploader class='mdui-ripple' :after-read="afterRead" accept="image/jpg,image/jpeg,image/png">
        <li class="mdui-list-item mdui-ripple" type="primary">
          <div class="mdui-list-item-content">{{$t('user.profilePhoto')}}</div>
          <div class="mdui-list-item-avatar"><img :src="tempUser.avatarURL" @error="imgErr($event)" /></div>
        </li>
      </van-uploader>
      <li class="mdui-list-item mdui-ripple" mdui-dialog="{target:'#profile-dialog'}">
        <div class="mdui-list-item-content">{{$t('user.name')}}</div>
        <div class="mdui-list-item-content mdui-text-color-theme list-item--right" :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">{{tempUser.nickName}}</div>
      </li>
      <li class="mdui-list-item mdui-ripple" @click='logOut()'>
        <div class="mdui-list-item-content">{{$t('user.logout')}}</div>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe879;</i>
      </li>
    </ul>
    <div class="mdui-dialog" id="profile-dialog">
      <div class="mdui-dialog-content">
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">{{$t('user.editName')}}</label>
          <input class="mdui-textfield-input" type="text" :value="user.nickName" id="profile-dialog--input">
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
  import {
    VueCropper
  } from 'vue-cropper'
  import mdui from 'mdui'
  export default {
    name: 'user',
    components: {
      VueCropper,
    },
    methods: {
      afterRead(file) {
        this.avatar = file.content;
        this.$store.commit('Display/editAvatar', true);
      },
      crop() {
        this.$refs.cropper.startCrop() //截图
        // 获取截图的base64 数据
        this.$refs.cropper.getCropData((data) => {
          this.user.avatarURL = data;
          this.$store.commit('Display/editAvatar', false);
        })
        //上传用户信息
      },
      imgErr(e) {
        e.target.src = './statics/icons/avatar-fill.png';
        e.onerror = null;
      },
      logOut() {
        let vm = this;
        mdui.confirm(this.$t('user.logoutText'), function() {
          let user = null
          vm.$store.commit('User/changeUser', user)
          localStorage.removeItem('Authorization');
          vm.$router.go(-1)
        }, () => {}, {
          confirmText: this.$t('common.confirm'),
          cancelText: this.$t('common.cancel')
        })
      }
    },
    computed: {
      tempUser() {
        return this.$store.state.User.user || {}
      },
      editAvatar() {
        return this.$store.state.Display.editAvatar
      },
    },
    data() {
      return {
        user: {},
        avatar: null,
        init: false
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('drawer.user'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)

        //初始化用户信息
        let temp = Object.assign({}, vm.$store.state.User.user);
        vm.user = temp;
      })
    },
    mounted() {
      let vm = this;
      document.getElementById('profile-dialog').addEventListener('open.mdui.dialog', function() {
        let input = document.getElementById('profile-dialog--input');
        input.focus();
        input.value = vm.user.nickName;
      })

      document.getElementById('profile-dialog').addEventListener('confirm.mdui.dialog', function() {
        let input = document.getElementById('profile-dialog--input');
        vm.user.nickName = input.value;
      })
    },
    watch: {
      user: {
        handler() {
          if (this.user.nickName) {
            if (this.init) {
              this.$store.dispatch('User/changeUser', this);
            } else {
              this.init = true;
            }
          }
        },
        deep: true
      }
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

  .avatar--cropper {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
    height: calc(100vh - 56px) !important;
  }

  .save-btn {
    position: absolute;
    right: 0;
    top: -56px;
    z-index: 1001 !important;
    width: 48px;
    min-width: 48px;
    height: 48px;
    margin: 4px;
  }

  @media (min-width: 600px) {
    .save-btn {
      top: -64px;
      margin: 8px;
    }
  }
</style>
