<template>
  <section id='login'>
    <div id='login--container'>
      <div id='login--lang'>
        <button class="mdui-btn mdui-btn-icon mdui-color-theme mdui-ripple" mdui-menu="{target: '#login--lang--list'}">
          <i class="mdui-icon material-icons">&#xe8e2;
          </i>
        </button>
        <ul class="mdui-menu" id="login--lang--list">
          <li class="mdui-menu-item" @click="changeLang('zh')">
            <a class="mdui-ripple">中文简体</a>
          </li>
          <li class="mdui-menu-item" @click="changeLang('en-us')">
            <a class="mdui-ripple">English</a>
          </li>
        </ul>
      </div>
      <div class='flex-spacer'></div>
      <div id='login--input'>
        <!-- account -->
        <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.accountErr}">
          <i class="mdui-icon material-icons">account_circle</i>
          <label class="mdui-textfield-label">{{$t('login.accountOrEmail')}}</label>
          <input class="mdui-textfield-input" type="text" required v-model='user.account' />
          <div class="mdui-textfield-error">{{error.accountErrText}}</div>
        </div>
        <!-- password -->
        <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom password" :class="{'mdui-textfield-invalid-html5':error.passwordErr}">
          <i class="mdui-icon material-icons">lock</i>
          <label class="mdui-textfield-label">{{$t('login.password')}}</label>
          <input class="mdui-textfield-input" type="password" required v-model='user.password' />
          <div class="mdui-textfield-error">{{error.passwordErrText}}</div>
        </div>
        <div id='login--btn'>
          <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme" @click='login()'>{{$t('login.login')}}</button>
        </div>
      </div>
    </div>
    <div id='login--footer'>
      <button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple" @click='register()'>{{$t('login.register')}}</button>
      <button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple" @click='forgot()'>{{$t('login.forgot')}}</button>
    </div>
    </div>




  </section>
</template>

<script>
  //Vant
  import {
    Locale
  } from 'vant';
  import enUS from 'vant/lib/locale/lang/en-us';
  import zhCN from 'vant/lib/locale/lang/zh-CN';
  import mdui from 'mdui'
  export default {
    name: 'Login',
    data() {
      return {
        user: {
          account: null,
          password: null,
        },
        error: {
          accountErr: false,
          accountErrText: this.$t('login.accountOrEmailErr'), //default
          passwordErr: false,
          passwordErrText: this.$t('login.passwordErr'), //default
        },
        lang: this.$store.state.Setting.language
      }
    },
    methods: {
      login() {
        if (!this.user.account || !this.user.password) {
          if (!this.user.account) {
            this.error.accountErr = true
          }
          if (!this.user.password) {
            this.error.passwordErr = true
          }
        } else {
          this.$store.dispatch("User/login", this)
        }
      },
      register() {
        this.$router.push('/login/register')
      },
      forgot() {
        this.$router.push('/login/forgot')
      },
      changeLang(value) {
        this.lang = value;


        this.$store.commit('Setting/changeLanguage', this.lang);
        this.$i18n.locale = this.lang;
        if (this.lang === 'zh') {
          Locale.use('zh-cn', zhCN);
        } else {
          Locale.use('en-us', enUS);
        }
      }
    },
  }
</script>

<style scoped>
  #login {
    width: 100%;
    height: 100%;
  }

  #login--lang {
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px;
  }

  #login--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    /*    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 */

    padding: 0 65px;
    max-width: 500px;
    margin: 0 auto;
  }

  #login--input {
    flex-grow: 2;
  }

  #login--input>.mdui-textfield {
    transform: translateX(-20px);
  }

  #login--btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .flex-spacer {
    flex-grow: 1;
  }

  #login--btn>button {
    width: 150px;
    /* text-transform: unset; */
  }

  #login--footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
  }

  #login--footer>button {
    margin: 10px 15px;
  }

  .password input {
    letter-spacing: 5px;
  }

  @media (min-width: 600px) {

    #login--container,
    #login--footer,
    #login--input>.mdui-textfield {
      max-width: 600px;
    }

    #login--input {
      width: inherit;
    }

    #login--register--container,
    #login--register--container>.mdui-textfield {}

    #login--register--container>.mdui-textfield {
      padding-top: 0;
      width: 100%;
    }

    #login--register--container>.mdui-textfield {
      padding-top: 16px !important;
    }
  }
</style>
