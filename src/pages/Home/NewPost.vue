<template>
  <section id='home--newPost' class='page'>
    <header class='mdui-text-color-theme-text'><i class="mdui-icon material-icons">&#xe0cb;</i><span>{{$t('newPost.header')}}</span></header>
    <div class="mdui-divider"></div>
    <section>
      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.titleErr}">
        <i class="mdui-icon material-icons">create</i>
        <label class="mdui-textfield-label">{{$t('newPost.title')}}</label>
        <input class="mdui-textfield-input" type="text" maxlength="20" required v-model='post.title' />
        <div class="mdui-textfield-error">{{$t('newPost.titleErr')}}</div>
      </div>

      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.contentErr}">
        <i class="mdui-icon material-icons">chat</i>
        <label class="mdui-textfield-label">{{$t('newPost.content')}}</label>
        <textarea class="mdui-textfield-input" maxlength="300" required v-model='post.content'></textarea>
        <div class="mdui-textfield-error">{{$t('newPost.contentErr')}}</div>
      </div>

      <footer>
        <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme" @click='confirm'>{{$t('common.confirm')}}</button>
      </footer>
    </section>
  </section>
</template>

<script>
  import mdui from 'mdui'
  export default {
    name: 'NewPost',
    data() {
      return {
        post: {
          title: null,
          content: null,
        },
        error: {
          titleErr: false,
          contentErr: false,
        }
      }
    },
    methods: {
      confirm() {
        if (!this.post.title || !this.post.content) {
          if (!this.post.title) {
            this.error.titleErr = true
          }
          if (!this.post.content) {
            this.error.contentErr = true
          }
        } else {
          //发送
        }
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('nav.newPost'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)
      })
    },
    mounted() {
      mdui.mutation()
    },
  }
</script>

<style scoped>
  .mdui-textfield-counter {
    bottom: 0;
  }

  footer {
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
  }

  section>section>section {
    padding: 0 10% 0 8%;
  }

  header {
    margin: 35px auto 25px auto;
    max-width: 80%;
    text-align: center;
    opacity: .5;
  }
  #home--newPost>section>div{
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
