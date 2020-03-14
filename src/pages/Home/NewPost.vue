<template>
  <section id='home--newPost' class='page'>
    <header class='mdui-text-color-theme-text'><i class="mdui-icon material-icons">&#xe0cb;</i><span>{{$t('newPost.header')}}</span></header>
    <div class="mdui-divider"></div>
    <section>
      <!-- Title -->
      <!--      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.titleErr}">
        <i class="mdui-icon material-icons">create</i>
        <label class="mdui-textfield-label">{{$t('newPost.title')}}</label>
        <input class="mdui-textfield-input" type="text" maxlength="20" required v-model='post.title' />
        <div class="mdui-textfield-error">{{$t('newPost.titleErr')}}</div>
      </div> -->

      <div class="mdui-textfield mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.titleErr}">

        <input class="mdui-textfield-input" type="text" maxlength="20" required v-model='post.title' :placeholder="$t('newPost.title')" />
        <div class="mdui-textfield-error">{{$t('newPost.titleErr')}}</div>
      </div>

      <!-- Banner -->
      <!--      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.titleErr}">
        <i class="mdui-icon material-icons">create</i>
        <label class="mdui-textfield-label">{{$t('newPost.title')}}</label>
      </div>
      -->


      <!-- Content -->
      <!--      <div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom" :class="{'mdui-textfield-invalid-html5':error.contentErr}">
        <i class="mdui-icon material-icons">chat</i>
        <label class="mdui-textfield-label">{{$t('newPost.content')}}</label>
        <textarea class="mdui-textfield-input" maxlength="300" required v-model='post.content'></textarea>
        <div class="mdui-textfield-error">{{$t('newPost.contentErr')}}</div>
      </div> -->

      <div class="newPost--content" :class="{'mdui-textfield-invalid-html5':error.contentErr,'mdui-textfield-focus':post.contentFocus}">
        <!-- <i class="mdui-icon material-icons">chat</i> -->


        <quill-editor ref="myQuillEditor" v-model="post.content" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)" :options='editorOption' />
      </div>



      <footer>
        <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme" @click='confirm'>{{$t('common.confirm')}}</button>
      </footer>
    </section>



    <!-- Displayer -->
    <!--    <div class='ql-snow mdui-card-content'>
      <div v-html='post.content' class='ql-editor'></div>
    </div> -->
  </section>
</template>

<script>
  //富文本编辑器
  // import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  // import 'quill/dist/quill.bubble.css'
  import {
    quillEditor
  } from 'vue-quill-editor'


  import mdui from 'mdui';
  export default {
    name: 'NewPost',
    components: {
      quillEditor
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      },
    },
    data() {
      return {
        post: {
          title: null,
          content: null,
          contentFocus: false
        },
        error: {
          titleErr: false,
          contentErr: false,
        },
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'underline', 'strike', 'blockquote', 'code-block', {
                'header': 1
              }, {
                'header': 2
              }, {
                'list': 'ordered'
              }, {
                'list': 'bullet'
              }, {
                'indent': '-1'
              }, {
                'indent': '+1'
              }, {
                'size': ['small', false, 'large']
              }, {
                'align': []
              }, 'clean', 'link', 'image']
            ]
          },
          theme: 'snow',
          placeholder: this.$t('newPost.contentTip'),
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
          //发布帖子
        }
      },
      onEditorBlur(quill) {
        this.post.contentFocus = false;
        if (!this.post.content) {
          this.error.contentErr = true
        }
      },
      onEditorFocus(quill) {
        this.post.contentFocus = true;
      },
      onEditorReady(quill) {},
      onEditorChange({
        quill,
        html,
        text
      }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
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
    beforeRouteLeave(to, from, next) {
      let vm = this;
      if (this.post.content || this.post.title) {
        mdui.confirm(this.$t('newPost.missingConfirm'), this.$t('newPost.leaveConfirm'), () => {
          console.log('保存')
          next()
        }, () => {
          console.log('取消')
          vm.$destroy()
          next()
        }, {
          confirmText: this.$t('common.confirm'),
          cancelText: this.$t('common.cancel'),
          history: false
        })
      } else {
        vm.$destroy();
        next()
      }

    },
    watch: {
      post: {
        handler(newValue) {
          if (!this.error.contentErr) {
            return;
          }
          if (String(newValue.content).length > 0) {
            this.error.contentErr = false
          }
        },
        deep: true
      }
    },
    mounted() {
      mdui.mutation()
    },
  }
</script>

<style scoped>
  .mdui-textfield-invalid-html5 ::-webkit-input-placeholder {
    transition: color .2s;
    color: rgba(255, 23, 68, .35) !important;
    opacity: 1;
  }

  .mdui-textfield-counter {
    bottom: 0;
  }

  footer {
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
  }

  section>section>section {
    padding: 0 8%;
  }

  section>section {}

  header {
    margin: 15px auto;
    max-width: 80%;
    text-align: center;
    opacity: .5;
  }

  header .mdui-icon {
    margin-right: 5px;
  }

  #home--newPost>section>div {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .newPost--content {
    margin-top: 10px;
  }
</style>
