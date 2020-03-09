<template>
  <section id='home' class='page footer'>
    <van-pull-refresh v-model="load" :head-height="0" @refresh="refresh" success-duration=0 pulling-text=" "
      loosing-text=" " loading-text=" " success-text=" ">

      <div class="post--card mdui-ripple" v-for='item of post'>
        <!-- 卡片头部，包含头像、标题、副标题 -->
        <div class="mdui-card-header">
          <img class="mdui-card-header-avatar" :src="item.avatarURL" @error="imgErr($event)" />
          <div class="mdui-card-header-title">{{item.nickName}}</div>
          <div class="mdui-card-header-subtitle">{{item.school}} {{item.majority}} {{item.grade}}级
          </div>
        </div>

        <!-- 卡片的标题 -->
        <div @click="to(item)">
          <div class="mdui-card-primary">
            <div class="mdui-card-primary-title mdui-text-color-theme" :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">{{item.postTitle}}</div>
          </div>

          <!-- 卡片的内容 -->
          <div class="mdui-card-content post-content">{{item.postContent}}</div>
          <div class='mdui-card-content card-bottom mdui-text-color-theme' :class="{'mdui-text-color-theme-accent':$store.state.Setting.darkMode}">
            <span>{{$t('post.replyTime')}}: {{item.replyTime}}
            </span>
            <span>{{$t('post.postTime')}}: {{item.postTime}}
            </span>
          </div>
        </div>
        <div class='mdui-divider'></div>
      </div>

    </van-pull-refresh>

<!--    <van-pagination v-model="currentPage" :total-items="totalPost" :items-per-page="10" class='mdui-text-color-theme'></van-pagination> -->
    <van-pagination v-model="currentPage" :total-items="totalPost" :show-page-size="5" force-ellipses class='mdui-text-color-theme' v-if="post" />
  </section>
</template>

<script>
  import mdui from 'mdui'
  export default {
    name: 'Home',
    computed: {
      post() {
        return this.$store.state.Home.post || false
      }
    },
    data() {
      return {
        load: false,
        currentPage: 1,
        totalPost: 100,
      }
    },
    methods: {
      to(item) {
        //跳转到帖子界面
        this.$router.push(`/post/${item.postID}/${item.postTitle}`);
      },
      refresh() {
        this.$store.dispatch('Home/getPost', this)
      },
      imgErr(e) { //错误图片处理
        e.target.src = './statics/icons/avatar-fill.png';
        e.onerror = null;
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('nav.forum'))

        //获取帖子数据
        if (vm.$store.state.User.user !== null && vm.$store.state.User.user.login) {
          vm.$store.dispatch('Home/getPost', vm)
        }



        //更新本页滚动位置
        const scrollTop = vm.$route.meta.scrollTop;
        const $content = document.querySelector('html');
        if (scrollTop && $content) {
          $content.scrollTop = scrollTop;
        }

        //修改组件状态
        vm.$store.commit('Display/fab', true)
        vm.$store.commit('Display/searchBar', true)
        vm.$store.commit('Display/refresh', true)
        vm.$store.commit('Display/nav', true)
      })
    },
    beforeRouteLeave(to, from, next) {
      //保存本页滚动位置
      const $content = document.querySelector('html');
      const scrollTop = $content ? $content.scrollTop : 0;
      from.meta.scrollTop = scrollTop;

      next()
    },
    watch: {
      currentPage(newValue) {
        this.refresh();
        const $content = document.querySelector('html');
        $content.scrollTop = 0;
      }
    }
  }
</script>

<style scoped>
  #home {
    box-sizing: border-box;
  }

  .mdui-card-primary-title {
    font-size: 18px;
    line-height: 40px;
    max-height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }

  /* @media (min-width: 1024px) { */
  .mdui-card:first-child {
    margin-top: 15px;
  }

  /* } */

  .post--card {
    max-width: 500px;
    /* margin: 0 auto 15px auto; */
    margin: 0 auto;
    position: relative;
  }

  .mdui-card-header {
    padding: 10px 16px 0 16px;
    height: auto;
  }

  .mdui-card-primary {
    padding: 0px 16px;
  }

  .mdui-card-content {
    padding: 0px 17px;
    line-height: 24px;
    max-height: 72px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }

  .card-bottom {
    margin: 5px 0;
    display: flex;
    justify-content: space-between
  }

  .card-bottom>span {
    font-size: 11px;
  }

  .card-bottom>span {
    align-self: center;
  }

  .post-content {
    white-space: pre-line;
  }
</style>
