<template>
  <section id='login--register' class='mdui-appbar'>
    <div class="mdui-toolbar mdui-color-theme">
      <a class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons" @click='back()'>arrow_back</i></a>
      <span class="mdui-typo-subheading">{{$t('login.register')}}</span>
    </div>

    </div>
    <div id='login--register--box'>
      <div class="title">
        <div class="mdui-card">
          <div class="mdui-card-media">
            <div class="mdui-card-primary">
              <div class="mdui-card-primary-subtitle">{{$t('login.plzFill')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class='mdui-valign'>
        <div id='login--register--container'>

          <!-- account -->
          <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.accountErr}">
            <i class="mdui-icon material-icons">account_circle</i>
            <label class="mdui-textfield-label">{{$t('login.account')}}</label>
            <input class="mdui-textfield-input" type="text" required v-model='user.account' @click="clear('accountErr')" />
            <div class="mdui-textfield-error">{{$t('login.accountErr')}}</div>
          </div>
          <!-- password -->
          <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom password" :class="{'mdui-textfield-invalid-html5':error.passwordErr}">
            <i class="mdui-icon material-icons">lock</i>
            <label class="mdui-textfield-label">{{$t('login.password')}}</label>
            <input class="mdui-textfield-input" type="password" required v-model='user.password' @click="clear('passwordErr')" />
            <div class="mdui-textfield-error">{{$t('login.passwordErr')}}</div>
          </div>
          <!-- phoneNumber -->
          <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom password" :class="{'mdui-textfield-invalid-html5':error.phoneNumberErr}">
            <i class="mdui-icon material-icons">&#xe551;</i>
            <label class="mdui-textfield-label">{{$t('login.phoneNumber')}}</label>
            <input class="mdui-textfield-input" type="tel" required v-model='user.phoneNumber' @click="clear('phoneNumberErr')" />
            <div class="mdui-textfield-error">{{phoneNumberErrText}}</div>
          </div>
          <!-- checkCode -->
          <div id='login--register--checkCode' class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom password"
            :class="{'mdui-textfield-invalid-html5':error.checkCodeErr}">
            <i class="mdui-icon material-icons">&#xe0c9;</i>
            <!-- checkCode btn -->
            <button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple mdui-btn-raised" :disabled='sendCodeStat'
              @click='sendCheckCode()'>{{checkCodeText}}</button>

            <label class="mdui-textfield-label">{{$t('login.checkCode')}}</label>
            <input class="mdui-textfield-input" type="tel" required v-model='user.checkCode' @click="clear('checkCodeErr')" />
            <div class="mdui-textfield-error">{{$t('login.checkCodeErr')}}</div>
          </div>
          <!-- registerBtn -->
          <button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple" @click='register()'>{{$t('login.register')}}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Register',
    computed: {
      checkCodeText() {
        if (this.sendCodeStat) {
          if (this.count < 1) {
            clearInterval(this.timer)
            this.sendCodeStat = false;
            this.count = 60;
            return this.$t('login.resend');
          }
          return this.count;
        } else {
          return this.$t('login.send');
        }
      },
      phoneNumberErrText() {
        if (this.error.phoneNumberWrong) {
          return this.$t('login.phoneNumberWrong');
        } else {
          return this.$t('login.phoneNumberErr')
        }
      },
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      register() {
        if (!this.user.account || !this.user.password || !this.user.phoneNumber || !this.user.checkCode || !(
            /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.user.phoneNumber))) {
          if (!this.user.account) {
            this.error.accountErr = true;
          }
          if (!this.user.password) {
            this.error.passwordErr = true;
          }
          if (!this.user.phoneNumber) {
            this.error.phoneNumberErr = true;
            this.error.phoneNumberWrong = false;
          } else if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.user.phoneNumber))) {
            this.user.phoneNumber = null
            this.error.phoneNumberErr = true;
            this.error.phoneNumberWrong = true;
          }
          if (!this.user.checkCode) {
            this.error.checkCodeErr = true;
          }
        } else {
          this.$store.dispatch("User/register", this)
        }
      },
      sendCheckCode() {
        let that = this;
        this.count = 60;
        this.timer = setInterval(function() {
          that.count--;
        }, 1000);
        this.sendCodeStat = true;
      },
      clear(e) {
        if (e === 'phoneNumberErr') {
          this.error.phoneNumberWrong = false;
        }
        this.error[e] = false;
      }
    },
    data() {
      return {
        user: {
          account: null,
          password: null,
          phoneNumber: null,
          checkCode: null,
        },
        error: {
          accountErr: false,
          passwordErr: false,
          phoneNumberErr: false,
          phoneNumberWrong: false,
          checkCodeErr: false
        },
        sendCodeStat: false,
        count: 0,
        timer: null,
      }
    },
  }
</script>
<style scoped>
  .title {
    /*   position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    /* margin-top: 56px; */
    text-align: center;
  }


  #login--register {
    height: 100%;
    position: relative;
  }

  #login--register,
  #login--register>.mdui-toolbar {
    width: 100%;
  }

  #login--register--box {
    position: relative;
    width: 100%;
    height: calc(100% - 56px);
  }

  @media (min-width: 600px) {
    #login--register--box {
      height: calc(100% - 64px);
    }

    #login--register--container {
      padding: 0 65px;
    }

    #login--register--container,
    #login--register--container>.mdui-textfield {
      max-width: 600px;
    }

    #login--register--container>.mdui-textfield {
      padding-top: 0;
      width: 100%;
    }

    #login--register--container>.mdui-textfield {
      padding-top: 16px !important;
    }
  }

  #login--register--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    /*    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }

  #login--register--container>.mdui-textfield {
    padding-top: 0;
  }

  .mdui-card-primary-subtitle {
    font-size: 15px;
  }

  #login--register--checkCode .mdui-textfield-label,
  #login--register--checkCode .mdui-textfield-input {
    width: calc(100% - 56px - 60px);
  }

  #login--register--checkCode>button {
    position: absolute;
    right: 0;
    bottom: 28px;
    padding: 0 5px !important;
    min-width: 52px;
  }

  #login--register--container>button {
    margin-top: 20px;
  }

  .mdui-valign {
    height: 80%;
  }
</style>
