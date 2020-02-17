<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
    }
  }
</script>
<style>
  main {
    min-height: 100%;
  }

  body,
  body a {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-user-select: none;
    user-select: none;
    touch-callout: none;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    overscroll-behavior: none;
  }

  body,
  html,
  #q-app, {
    height: 100%;
  }

  .mdui-snackbar-bottom {
    bottom: 56px !important;
    z-index: 40 !important;
  }
  /****************btn****************/
  .mdui-btn:hover {
    background-color: unset !important;
  }

  .mdui-toolbar[class*=mdui-color-]:not(.mdui-color-transparent) .mdui-btn:active {
    background-color: rgba(255, 255, 255, .165) !important;
  }

  .mdui-btn:not(.mdui-ripple):active,
  .mdui-fab:not(.mdui-ripple):active {
    background-color: rgba(0, 0, 0, .165) !important;
  }

  /****************list-item****************/
  .mdui-list-item:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .mdui-list-item:active:before {
    background-color: rgba(0, 0, 0, .1) !important;
  }

  .mdui-list-item:hover {
    background-color: unset !important;
  }
</style>
