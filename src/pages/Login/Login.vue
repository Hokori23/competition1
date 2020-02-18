<template>
  <section id='login'>
    <div id='login--container'>
      <div class='flex-spacer'></div>
      <div id='login--input'>
        <!-- account -->
        <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.accountErr}">
          <i class="mdui-icon material-icons">account_circle</i>
          <label class="mdui-textfield-label">{{$t('login.account')}}</label>
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
          accountErrText: this.$t('login.accountErr'), //default
          passwordErr: false,
          passwordErrText: this.$t('login.passwordErr'), //default
        }
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
    },
  }
</script>

<style scoped>
  #Login {
    width: 100%;
    height: 100%;
  }

  #login--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 15%;
  }

  #login--input {
    flex-grow: 2;
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
    display: flex;
    justify-content: space-between;
  }

  #login--footer>button {
    margin: 10px 15px;
  }

  .password input{
    font-size: 25px;
    letter-spacing: 2px;
  }
</style>
