<template>
  <section id='login--forgot' class='mdui-appbar'>
    <div class="mdui-toolbar mdui-color-theme">
      <a class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons" @click='back()'>arrow_back</i></a>
      <span class="mdui-typo-subheading">{{$t('login.forgot')}}</span>
    </div>
    
    <div class='mdui-valign mdui-typo' style='width: 100%;height: 100%;position: absolute;top: 0;z-index: -999;'>
      <h1 class='mdui-center'>Developing</h1>
    </div>
    
  </section>
</template>

<script>
  export default {
    name: 'forgot',
    methods: {
      back() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style>
  #login--forgot,
  #login--forgot>.mdui-toolbar {
    width: 100%;
  }
  #login--forgot{
    height: 100%;
  }
</style>
