<template>
  <div class="mdui-fab-wrapper" v-show='this.$store.state.Display.fab' id='fab'>
    <!-- @touchstart.stop='touchstart($event)'
      @touchmove.stop.prevent='touchmove($event)' @touchend.stop='touchend()' @touchcancel.stop='touchcancel()' -->

      <!-- bug -->
    <!-- <div class="mdui-fab mdui-color-theme-accent mdui-ripple" @click='click()' @touchstart.stop='drag($event)'><i class="mdui-icon material-icons">add</i></div> -->
    <div class="mdui-fab mdui-color-theme-accent mdui-ripple mdui-fab-mini" @click='click()'><i class="mdui-icon material-icons">add</i></div>
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
      },
      drag(e) {
        if (e.length > 1) {
          return;
        }
        e = e.touches[0];
        let height;
        let width;
        if (!this.fab) {
          this.fab = document.getElementById('fab');
          this.app = document.getElementById('q-app');
        }
        let fab = this.fab;
        fab.style.willChange = 'transform'
        let style = getComputedStyle(this.app);
        height = Number(style.height.slice(0, style.height.length - 2)) - 135;
        width = Number(style.width.slice(0, style.width.length - 2)) - 72;
        style = null;
        let X = (e.clientX - (fab.offsetLeft + this.originX));
        let Y = (e.clientY - (fab.offsetTop + this.originY));
        let timer, tmpX, tmpY;
        let vm = this;
        fab.ontouchmove = function(e) {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            if (e.length > 1) {
              return;
            }
            if (e.preventBubble) {
              e.preventBubble()
            } else {
              e.stopPropagation();
            }
            e.preventDefault();
            e = e.touches[0]
            tmpX = e.clientX - X - width;
            tmpY = e.clientY - Y - height;
            if (tmpX > 0) {
              tmpX = 0;
            } else if (tmpX < -fab.offsetLeft + 16) {
              tmpX = -fab.offsetLeft + 16
            }
            if (tmpY > 0) {
              tmpY = 0;
            } else if (tmpY < -fab.offsetTop + 10) {
              tmpY = -fab.offsetTop + 10
            }
            fab.style.transform = `translate3d(${tmpX}px,${tmpY}px,0)`;
          }, 7);
        }
        fab.ontouchend = function() {
          vm.originX = tmpX || vm.originX
          vm.originY = tmpY || vm.originY;
          fab.ontouchmove = null;
          fab.ontouchend = null;
          fab.ontouchcancel = null;
          timer = null;
          tmpX = null;
          tmpY = null;
          width = null;
          height = null;
          fab.style.willChange = null;
        }
        fab.ontouchcancel = function() {
          vm.originX = tmpX || vm.originX
          vm.originY = tmpY || vm.originY;
          fab.ontouchmove = null;
          fab.ontouchend = null;
          fab.ontouchcancel = null;
          timer = null;
          tmpX = null;
          tmpY = null;
          width = null;
          height = null;
          fab.style.willChange = null;
        }
      },
    },
    data() {
      return {
        app: null,
        fab: null,
        originX: null,
        originY: null,
      }
    }
  }
</script>

<style>
  .mdui-fab-wrapper {
    /* margin-bottom: 62px; */
    margin-bottom: 54px;
    right: 10px;
    z-index: 35;
  }

  .fab--moved {
    left: 0 !important;
    top: 0 !important;
    bottom: auto;
    right: auto;
  }

  #fab {
    touch-action: none;
  }
</style>
