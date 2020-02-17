<template>
  <div class="mdui-fab-wrapper" v-show='this.$store.state.Display.fab'>
    <button class="mdui-fab mdui-color-theme-accent mdui-ripple" @click='click()'><i class="mdui-icon material-icons">add</i></button>
  </div>
</template>

<script>
  export default {
    name: 'fab',
    methods: {
      click() {
        let path = this.$router.currentRoute.path
        if (path !== '/newPost' && path === '/') {
          this.$router.push('/newPost')
        }
      }
    },
  }
</script>

<style scoped>
  .mdui-fab-wrapper {
    margin-bottom: 62px;
    z-index: 35;
  }
</style>
