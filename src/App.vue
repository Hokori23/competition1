<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      //初始化数据
      init() {
        //初始化语言设置-----------------------
        let language = localStorage.getItem('language');
        if (language == null || language.length === 0) { //第一次初始化
          localStorage.setItem('language', 'zh');
          language = localStorage.getItem('language');
        }
        this.$store.commit('Setting/changeLanguage', language)
        //-----------------------------------



        //初始化主题色-----------------------
        let body = document.getElementsByTagName('body')[0];

        let themeColor = localStorage.getItem('themeColor');
        let accentColor = localStorage.getItem('accentColor');
        if (themeColor == null || themeColor.length === 0) { //第一次初始化
          localStorage.setItem('themeColor', 'teal')
          themeColor = localStorage.getItem('themeColor');
        }
        if (accentColor == null || accentColor.length === 0) { //第一次初始化
          localStorage.setItem('accentColor', 'teal')
          accentColor = localStorage.getItem('accentColor');
        }

          body.classList.add(`mdui-theme-primary-${themeColor}`);
          body.classList.add(`mdui-theme-accent-${accentColor}`);

        this.$store.commit('Setting/changeThemeColor', themeColor)
        this.$store.commit('Setting/changeAccentColor', accentColor)
        //-----------------------------------



        //初始化夜间模式-----------------------
        let darkMode = localStorage.getItem('darkMode');
        if (darkMode == null || darkMode.length === 0) { //第一次初始化
          localStorage.setItem('darkMode', 0)
          darkMode = localStorage.getItem('darkMode');
        }
        this.$store.commit('Setting/changeDarkMode', Number(darkMode))
        //-----------------------------------



        //初始化用户信息-----------------------
        let user = JSON.parse(localStorage.getItem('user'));
        if (user == null || user.length === 0) { //第一次初始化
          localStorage.setItem('user', null)
          user = JSON.parse(localStorage.getItem('user'));
        }
        this.$store.commit('User/changeUser', user)
        //-----------------------------------
      }
    },
    mounted() {
      this.init()
    }
  }
</script>
