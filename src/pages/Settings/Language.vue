<template>
  <section id='settings--language' class='list page'>

    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple" @click.self="language('zh')">
        <div class="mdui-list-item-content">简体中文</div>
        <label class="mdui-radio">
          <input type="radio" v-model='lang' value='zh' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
      <li class="mdui-list-item mdui-ripple" @click.self="language('en-us')">
        <div class="mdui-list-item-content">English</div>
        <label class="mdui-radio">
          <input type="radio" v-model='lang' value='en-us' />
          <i class="mdui-radio-icon"></i>
        </label>
      </li>
    </ul>
    <div class="mdui-dialog" id='langConfirm'>
      <div class="mdui-dialog-content">Discard draft?</div>
      <div class="mdui-dialog-actions">
        <button class="mdui-btn mdui-ripple">cancel</button>
        <button class="mdui-btn mdui-ripple">discard</button>
      </div>
    </div>
  </section>
</template>

<script>
  import mdui from 'mdui'
  export default {
    name: 'Language',
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('settings.language'))
      })
    },
    data() {
      return {
        lang: this.$store.state.Setting.language,
      }
    },
    methods: {
      language(value) {
        this.lang = value;
      }
    },
    beforeRouteLeave(to, from, next) {
      let oldLang = this.$store.state.Setting.language;
      if (oldLang !== this.lang) {
        this.$store.commit('Setting/changeLanguage', this.lang);
        mdui.dialog({
          content: this.$t('settings.reboot'),
          buttons: [
            {
              text: this.$t('common.confirm')
            },
          ]
        });
      }
      next()
    }
  }
</script>

<style>
</style>
