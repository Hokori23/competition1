<template>
  <section id='settings--language' class='list page'>
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple" @click.self="changeLang('zh')">
        <div class="mdui-list-item-content">简体中文</div>
        <label class="mdui-radio">
          <input type="radio" v-model='lang' value='zh' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      <li class="mdui-list-item mdui-ripple" @click.self="changeLang('en-us')">
        <div class="mdui-list-item-content">English</div>
        <label class="mdui-radio">
          <input type="radio" v-model='lang' value='en-us' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
    </ul>
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
    name: 'Language',
    data() {
      return {
        lang: this.$store.state.Setting.language,
      }
    },
    methods: {
      changeLang(value) {
        this.lang = value;
        this.$i18n.locale = this.lang;
      }
    },
    beforeRouteLeave(to, from, next) {
      let oldLang = this.$store.state.Setting.language;
      if (oldLang !== this.lang) {
        this.$store.commit('Setting/changeLanguage', this.lang);
        this.$i18n.locale = this.lang;



        //Vant
        if (this.lang === 'zh') {
          Locale.use('zh-cn', zhCN);
        } else {
          Locale.use('en-us', enUS);
        }
      }
      next()
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('settings.language'))
      })
    },
  }
</script>

<style>
</style>
