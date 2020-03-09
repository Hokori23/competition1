<template>
  <!-- mdui-appbar-scroll-hide -->
  <header id='header' class="mdui-appbar mdui-appbar-fixed ">
    <div class="mdui-toolbar mdui-color-theme">
      <!-- menuBtn -->
      <a class="mdui-btn mdui-btn-icon" @click='click()'><i class="mdui-icon material-icons">{{backArrow}}</i></a>

      <!-- Title -->
      <a class="mdui-typo-subheading" :class="{'header-icon':$store.state.Display.refersh,'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">{{title}}</a>
      <div class="mdui-toolbar-spacer"></div>

      <!-- searchBar -->
      <div class="mdui-textfield mdui-textfield-expandable mdui-float-right mdui-text-color-theme-accent" id='searchBar'
        v-show='this.$store.state.Display.searchBar'>
        <button class="mdui-textfield-icon mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></button>
        <input class="mdui-textfield-input" type="text" placeholder="Search" />
        <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>
      </div>
      <!-- refresh -->
      <a class="mdui-btn mdui-btn-icon" @click='refresh' v-show='this.$store.state.Display.refresh'><i class="mdui-icon material-icons">refresh</i></a>
    </div>
  </header>
</template>

<script>
  import mdui from 'mdui'
  export default {
    name: 'Header',
    methods: {
      click() {
        if (this.backArrow !== 'arrow_back') {
          let drawer = new mdui.Drawer('#drawer', {
            swipe: true
          });
          drawer.toggle()
        } else {
          this.$router.go(-1);
        }
      },
      refresh() {
        let path = this.$router.currentRoute.name
        if (path === 'Home') {
          this.$store.dispatch('Home/getPost', this)
        } else if (path === 'Post') {
          this.$store.dispatch('Home/getSinglePost', this)
        }
      }
    },
    computed: {
      title() {
        return this.$store.state.title
      },
      backArrow() {
        return this.$store.state.navIcon
      },
    },
    mounted() {
      mdui.mutation()
    },
    watch: {
      $route: {
        handler() {
          if (this.$router.currentRoute.meta.index > 0) {
            this.$store.commit('changeIcon', 'arrow_back')
          } else {
            this.$store.commit('changeIcon', 'menu')
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  #searchBar {
    margin: 0;
    margin-left: 5px;
    padding: 0;
    min-width: 48px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 48px;
  }

  #searchBar>button {
    width: 48px;
    min-width: 48px;
    height: 48px;
  }

  #searchBar>input {
    width: calc(100% - 48px);
    margin-left: 48px;
    height: 36px;
  }

  .header-icon.mdui-typo-subheading {
    overflow: visible !important;
    margin: 0 !important;
  }

  .mdui-typo-subheading {
    padding-right: 16px !important;
  }
</style>
