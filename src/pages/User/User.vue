<template>
  <section id='user' class='list page'>
    <a v-if="editAvatar" class="mdui-btn mdui-btn-icon save-btn" @click='crop' :class="{'mdui-color-theme':!$store.state.Setting.darkMode}">
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
          <div class="mdui-list-item-avatar">
            <img v-real-img="tempUser.avatarURL" src='../../statics/icons/avatar-fill.png' />
          </div>
        </li>
      </van-uploader>


      <!-- 账号 -->
      <li class="mdui-list-item mdui-ripple">
        <div class="mdui-list-item-content">{{$t('login.account')}}</div>
        <div class="mdui-list-item-content list-item--right">
          {{tempUser.account}}
        </div>
      </li>

      <!-- 昵称 -->
      <li class="mdui-list-item mdui-ripple" @click='editName()'>
        <div class="mdui-list-item-content">{{$t('user.name')}}</div>
        <div class="mdui-list-item-content mdui-text-color-theme list-item--right" :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">
          {{tempUser.nickName}}
        </div>
      </li>

      <!-- 手机号 -->
      <li class="mdui-list-item mdui-ripple" mdui-dialog="{target: '#editPhoneNumberDialog'}">
        <div class="mdui-list-item-content">{{$t('login.phoneNumber')}}</div>
        <div class="mdui-list-item-content mdui-text-color-theme list-item--right" :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">
          {{tempUser.phoneNumber}}
        </div>
      </li>

      <!-- 学院 -->
      <li class="mdui-list-item mdui-ripple" @click.stop='verify()'>
        <div class="mdui-list-item-content">{{$t('user.school')}}</div>
        <div class="mdui-list-item-content list-item--right" :class="{'mdui-text-color-theme-accent':tempUser.verfication&&$store.state.Setting.darkMode,'mdui-text-color-theme':tempUser.verification}">
          {{tempUser.school||''}}
        </div>
      </li>

      <!-- 专业 -->
      <li class="mdui-list-item mdui-ripple" @click.stop='verify()'>
        <div class="mdui-list-item-content">{{$t('user.majority')}}</div>
        <div class="mdui-list-item-content list-item--right" :class="{'mdui-text-color-theme-accent':tempUser.verfication&&$store.state.Setting.darkMode,'mdui-text-color-theme':tempUser.verification}">
          {{tempUser.majority||''}}
        </div>
      </li>

      <!-- 年级 -->
      <li class="mdui-list-item mdui-ripple" @click.stop='verify()'>
        <div class="mdui-list-item-content">{{$t('user.grade')}}</div>
        <div class="mdui-list-item-content list-item--right" :class="{'mdui-text-color-theme-accent':tempUser.verfication&&$store.state.Setting.darkMode,'mdui-text-color-theme':tempUser.verification}">
          {{tempUser.grade||''}}
        </div>
      </li>

      <!-- 性别 -->
      <li class="mdui-list-item mdui-ripple" @click.stop='verify()'>
        <div class="mdui-list-item-content">{{$t('user.sex')}}</div>
        <div class="mdui-list-item-content list-item--right" :class="{'mdui-text-color-theme-accent':tempUser.verfication&&$store.state.Setting.darkMode,'mdui-text-color-theme':tempUser.verification}">
          {{sex(tempUser.sex)||''}}
        </div>
      </li>

      <!-- 验证状态 -->
      <li class="mdui-list-item mdui-ripple" @click.stop='verify()'>
        <div class="mdui-list-item-content">{{$t('user.verification')}}</div>
        <div class="mdui-list-item-content list-item--right" :class="{'mdui-text-color-theme-accent':tempUser.verfication&&$store.state.Setting.darkMode,'mdui-text-color-theme':tempUser.verification}">
          {{tempUser.verification ? $t('user.verified'):$t('user.unverified')}}
        </div>
      </li>

      <!-- 退出登录 -->
      <li class="mdui-list-item mdui-ripple" @click='logOut()'>
        <div class="mdui-list-item-content">{{$t('user.logout')}}</div>
        <i class="mdui-list-item-icon mdui-icon material-icons">&#xe879;</i>
      </li>
    </ul>


    <!-- 修改手机号 -->
    <div class="mdui-dialog mdui-dialog-prompt" id="editPhoneNumberDialog">
      <div class="mdui-dialog-content">
        <!-- 输入新手机号 -->
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">{{$t('user.editPhoneNumber')}}</label>
          <input class="mdui-textfield-input" type="tel" :value.once="user.phoneNumber" />
        </div>
        <!-- 输入验证码 -->
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">{{$t('login.checkCode')}}</label>
          <input class="mdui-textfield-input" type="number" />
        </div>
      </div>
      <!-- button框 -->
      <div class="mdui-dialog-actions">
        <button class="mdui-btn mdui-ripple" :disabled='sendCodeStat' @click='sendCheckCode()'>{{checkCodeText}}</button>
        <button class="mdui-btn mdui-ripple" mdui-dialog-close>{{$t('common.cancel')}}</button>
        <button class="mdui-btn mdui-ripple" @click='editPhoneNumber()'>{{$t('common.confirm')}}</button>
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
      /**
       * =============================================================================
       * ************   Upload Avatar   ************
       * =============================================================================
       */
      afterRead(file) {
        this.avatar = file.content;
        this.$store.commit('Display/editAvatar', true);
      },
      /**
       * =============================================================================
       * ************   Crop Avatar And Save   ************
       * =============================================================================
       */
      crop() {
        this.$refs.cropper.startCrop() //截图
        // 获取截图的base64 数据
        this.$refs.cropper.getCropData((data) => {
          this.user.avatarURL = data;
          this.$store.commit('Display/editAvatar', false);
        })
        //上传用户信息
      },
      /**
       * =============================================================================
       * ************   Log Out   ************
       * =============================================================================
       */
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
      },
      /**
       * =============================================================================
       * ************   Edit Name   ************
       * =============================================================================
       */
      editName() {
        let vm = this;
        let prompt = mdui.prompt(this.$t('user.editName'),
          function(value) {
            if (value.length < 5) {
              mdui.alert(vm.$t('user.editNameErr'));
              return;
            }
            vm.user.nickName = value;
          },
          () => {}, {
            confirmText: vm.$t('common.confirm'),
            cancelText: vm.$t('common.cancel'),
            confirmOnEnter: true,
            defaultValue: vm.user.nickName || ''
          }
        )
      },
      /**
       * =============================================================================
       * ************   Send CheckCode   ************
       * =============================================================================
       */
      sendCheckCode() {
        let vm = this;
        this.count = 60;
        this.timer = setInterval(function() {
          vm.count--;
        }, 1000);
        this.sendCodeStat = true;
      },
      /**
       * =============================================================================
       * ************   Edit Phone Number   ************
       * =============================================================================
       */
      editPhoneNumber() {
        let dialog = new mdui.Dialog('#editPhoneNumberDialog');
        dialog.close()
        let $input = dialog.$dialog.find('.mdui-textfield-input');
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test($input[0].value)) && this.editPhoneNumberInit) {
          mdui.alert(this.$t('user.editPhoneNumberErr'))
          this.editPhoneNumberInit = false;
          return;
        }
        if (this.editPhoneNumberInit && $input[1].value) {
          /****************验证码存在**************/
          /****************下面发送请求更改手机号**************/
          mdui.alert(this.$t('user.modifySuccess'))
        } else {
          mdui.alert(this.$t('login.checkCodeErr'))
        }

        this.editPhoneNumberInit = false;
      },
      /**
       * =============================================================================
       * ************   Verify   ************
       * =============================================================================
       */
      verify() {
        let vm = this;
        if (!this.tempUser.verification) {
          mdui.confirm(this.$t('user.verify'), () => {
            console.log(vm)
          }, () => {}, {
            confirmText: vm.$t('user.go'),
            cancelText: vm.$t('common.cancel')
          })
        }
      }
    },
    computed: {
      tempUser() {
        return this.$store.state.User.user || {}
      },
      editAvatar() {
        return this.$store.state.Display.editAvatar
      },
      checkCodeText() {
        if (this.sendCodeStat) {
          if (this.count < 1) {
            clearInterval(this.timer)
            this.sendCodeStat = false;
            this.count = 60;
            return this.$t('user.resend');
          }
          return this.count;
        } else {
          return this.$t('user.send');
        }
      },
      sex() {
        return (value) => {
          if (value === 1) {
            return this.$t('user.male')
          } else if(value === 2){
            return this.$t('user.female')
          }
          return null;
        }
      }
    },
    data() {
      return {
        user: {},
        avatar: null,
        init: false,
        sendCodeStat: false,
        count: 0,
        timer: null,
        editPhoneNumberInit: true,
      }
    },
    beforeRouteEnter(to, from, next) {
      next(async vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('drawer.user'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)

        //初始化用户信息
        vm.user = await vm.$store.dispatch('User/getUser', vm)
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
    },
    mounted() {
      let vm = this;
      let dialog = new mdui.Dialog('#editPhoneNumberDialog');
      document.getElementById('editPhoneNumberDialog').addEventListener('open.mdui.dialog', function() {
        vm.editPhoneNumberInit = true;
        dialog.handleUpdate();
        var $input = dialog.$dialog.find('.mdui-textfield-input');
        // 聚焦到输入框
        $input[0].focus();
      });
      document.getElementById('editPhoneNumberDialog').addEventListener('confirm.mdui.dialog', function() {
        var $input = dialog.$dialog.find('.mdui-textfield-input');
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test($input[0].value)) && vm.editPhoneNumberInit) {
          mdui.alert(vm.$t('user.editPhoneNumberErr'))
          vm.editPhoneNumberInit = false;
          return;
        }
        if (vm.editPhoneNumberInit && $input[1].value) {
          /****************验证码存在**************/
          /****************下面发送请求更改手机号**************/

        }

        vm.editPhoneNumberInit = false;
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
