<template>
  <section id='home__post' v-if="post" class='page footer comment-footer'>
       <van-pull-refresh v-model="load" :head-height="0" @refresh="refresh" success-duration=0 pulling-text=" "
      loosing-text=" " loading-text=" " success-text=" ">
    <div class="post--card post--poster">
      <!-- 卡片头部，包含头像、标题、副标题 -->
      <div class="mdui-card-header">
        <img class="mdui-card-header-avatar" :src="post.avatarURL" @error="imgErr($event)" />
        <div class="mdui-card-header-title">{{post.nickName}}</div>
        <div class="mdui-card-header-subtitle">{{post.school}} {{post.majority}} {{post.grade}}级
        </div>
      </div>

      <!-- 卡片的内容 -->
      <div class="mdui-card-content post-content text mdui-ripple" @click.stop.self='commentFocus()'>{{post.postContent}}</div>
      <div class='mdui-card-content card-bottom mdui-text-color-theme' :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">
        <span>{{post.postTime}}
        </span>
      </div>
      <div class='mdui-divider'></div>
    </div>


    <!-- 卡片头部，包含头像、标题、副标题 -->
    <div class="post--card" v-for='(item,index1) of post.reply'>
      <!-- <div class='mdui-ripple'> -->
      <div class="mdui-card-header">
        <img class="mdui-card-header-avatar" :src="item.avatarURL" @error="imgErr($event)" />
        <div class="mdui-card-header-title">{{item.nickName}}</div>
        <div class="mdui-card-header-subtitle">{{item.school}} {{item.majority}} {{item.grade}}级
        </div>
      </div>


      <!-- 卡片的内容 -->
      <div class="mdui-card-content post-content text mdui-ripple" @click.stop.self='commentFocus(index1)'>{{item.postContent}}</div>
      <div class='mdui-card-content card-bottom mdui-text-color-theme' :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">
        <span>{{item.replyTime}}
        </span>
      </div>
      <!-- </div> -->
      <!-- children -->
      <div class='post--children mdui-ripple' v-for="(child,index2) of item.children" @click.stop='commentFocus(index1,index2)'>
        <!-- 卡片头部，包含头像、标题、副标题 -->
        <div class="mdui-card-header">
          <img class="mdui-card-header-avatar" :src="child.avatarURL" @error="imgErr($event)" />
          <div class="mdui-card-header-title">{{child.nickName}}
          </div>

          <span class='mdui-text-color-theme' :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">{{child.replyTime}}
          </span>
          <!--          <div class="mdui-card-header-subtitle">{{child.school}} {{child.majority}} {{child.grade}}级
          </div> -->
        </div>

        <!-- 卡片的内容 -->
        <div class="mdui-card-content post-content text" :id="`comment-${index1}-${index2}`"><a href='#' v-if="child.target"
            class='mdui-text-color-theme' :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}"
            @click.stop.prevent>@{{child.target}} : </a>{{child.postContent}}</div>
        <!-- 展开评论 -->
        <div class='mdui-card-content card-bottom mdui-text-color-theme' :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}"
          v-if="child.postContent.length>120">
          <span @click.stop.self='commentToggle(`comment-${index1}-${index2}`)' class='mdui-btn mdui-ripple'>{{toggleFold(`comment-${index1}-${index2}`)}}</span>
        </div>
        <div class='card-bottom--blank' v-else></div>

      </div>

      <div class='mdui-divider'></div>
    </div>
    <div class='post--comment mdui-color-theme-200'>
      <div class="mdui-textfield">
        <!-- <a class='mdui-btn mdui-btn-icon'> 发送评论按钮-->
        <i class="mdui-icon material-icons mdui-btn-icon mdui-ripple">&#xe163;</i>
        <!-- </a> -->
        <input id='comment-input' class="mdui-textfield-input mdui-text-color-theme" type="text" :placeholder="$t('post.message')" />
      </div>
    </div>
    </van-pull-refresh>

        <van-pagination v-model="currentPage" :total-items="totalReply" :show-page-size="5" force-ellipses class='mdui-text-color-theme' v-if="post" />
  </section>
</template>

<script>
  export default {
    name: 'post',
    computed: {
      post() {
        return this.$store.state.Home.singlePost || false
      },
      toggleFold() {
        return (target) => {
          if (this.fold) {}
          const TARGET = document.getElementById(target);
          if (TARGET) {
            if (TARGET.classList.contains('content-unfold')) {
              return '收起'
            } else {
              return '展开'
            }
          }
          return '展开'
        }
      },
      input() {
        return document.getElementById('comment-input');
      }
    },
    methods: {
      imgErr(e) { //错误图片处理
        e.target.src = './statics/icons/avatar-fill.png';
        e.onerror = null;
      },
      commentToggle(target) {
        this.fold = Math.random();
        document.getElementById(target).classList.toggle('content-unfold')
      },
      commentFocus() {
        if (arguments.length === 1) {
          /*************NOW************/
        }
        this.input.focus();
      },
      refresh() {
        this.$store.dispatch('Home/getSinglePost', this)
      }
    },
    data() {
      return {
        fold: null,
        load: false,
        currentPage:1,
        totalReply:100,
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$route.params.postTitle)

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', true)
        vm.$store.commit('Display/nav', false)

        //获取帖子数据
        if (vm.$store.state.User.user !== null && vm.$store.state.User.user.login) {
          vm.$store.dispatch('Home/getSinglePost', vm)
        }

        //更新本页滚动位置
        const scrollTop = vm.$route.meta.scrollTop;
        const $content = document.querySelector('html');
        if (scrollTop && $content) {
          $content.scrollTop = scrollTop;
        }

      })
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave(to, from, next) {
      //保存本页滚动位置
      const $content = document.querySelector('html');
      const scrollTop = $content ? $content.scrollTop : 0;
      from.meta.scrollTop = scrollTop;
      next()
    },
  }
</script>

<style scoped>
  ::selection {
    background-color: #009688;
    color: #fff;
  }

  .mdui-card-content {
    padding: 0px 17px;
    margin-bottom: 5px;
    line-height: 24px;
  }

  .card-bottom {
    display: flex !important;
    justify-content: flex-end
  }

  .post--card {
    max-width: 500px;
    /* margin: 0 auto 15px auto; */
    margin: 0 auto;
    position: relative;
  }


  .card-bottom {
    margin: 5px 0;
    display: flex;
    justify-content: flex-end;
    font-size: 11px;
  }

  /*  .mdui-card-content{
    padding:0px calc(1em + 17px)
  } */
  .post--children {
    box-sizing: border-box;
    padding: 3px 0 0 2rem;
  }

  .post--children>.mdui-card-header {
    padding: 3px 16px;
    height: 36px;
  }

  .post--children>.mdui-card-header>.mdui-card-header-title {
    line-height: 30px;
    /* margin-left: 35px; */

    margin-left: 5px;
    display: inline-block;
  }

  .post--children>.mdui-card-header>span {
    opacity: 1;
    float: right;
    font-size: 11px;
    line-height: 30px;
  }

  .post--children>.mdui-card-header>.mdui-card-header-avatar {
    width: 30px;
    height: 30px;
  }

  .post-content {
    cursor: text !important;
  }

  .post--children .post-content {
    margin: 5px 0;
    line-height: 24px;
    overflow: hidden;
    /*    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    box-sizing: border-box; */
    transition: max-height ease .2s;
    max-height: 48px;
  }

  .content-unfold {
    max-height: 168px !important;
  }

  .post--children .mdui-btn {
    min-width: auto;
    height: auto;
    line-height: auto;
  }

  .comment-footer.footer {
    padding-bottom: calc(40px + 60px);
  }

  .comment-footer.footer:after {
    bottom: 60px;
    line-height: 40px;
    height: 40px;
  }

  .mdui-theme-layout-dark .post--comment {
    color: #fff !important;
    background-color: #212121 !important;
  }

  .post--comment {
    z-index: 999;
    position: fixed;
    bottom: 0px;
    height: 60px;
    box-sizing: border-box;
    padding: 10px 0;
    width: 100%;
  }

  .post--comment .mdui-textfield {
    padding-top: 0;
    display: flex;
    justify-content: flex-end;
  }

  .post--comment .mdui-icon {
    right: 8px;
  }

  .post--comment .mdui-textfield-input {
    margin-right: 56px;
  }

  .card-bottom--blank {
    padding: 5px 0;
  }

  a {
    text-decoration: none;
  }
</style>
