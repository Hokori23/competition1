<template>
  <section id='home'>
    <div class="mdui-card" v-for='item of post' @click="to(item.id,item.title)">
      <!-- 卡片头部，包含头像、标题、副标题 -->
      <div class="mdui-card-header">
        <img class="mdui-card-header-avatar" :src="item.avatarURL" @error="$event.target.src = '/statics/avatar-fill.png';$event.onerror=null;" />
        <div class="mdui-card-header-title">{{item.nickName}}</div>
        <div class="mdui-card-header-subtitle">{{item.school}} {{item.majority}} {{item.grade}}级
        </div>
      </div>

      <!-- 卡片的标题 -->
      <div class="mdui-card-primary">
        <div class="mdui-card-primary-title mdui-text-color-theme">{{item.title}}</div>
      </div>

      <!-- 卡片的内容 -->
      <div class="mdui-card-content post-content">{{item.postContent}}</div>
      <div class='mdui-card-content card-bottom mdui-text-color-theme'>
        <span class='card-time'>{{$t('post.replyTime')}}: {{item.replyTime}}
        </span>
        <span class='card-time'>{{$t('post.postTime')}}: {{item.postTime}}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
  import mdui from 'mdui'
  export default {
    name: 'Home',
    computed: {
      post() {
        return this.$store.state.Home.post
      }
    },
    methods: {
      to(id, title) {

      },
      getPost() {
        this.$store.dispatch('Home/getPost', this)
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('nav.forum'))

        //获取帖子数据
        if (vm.$store.state.User.login) {
          vm.$store.dispatch('Home/getPost', vm)
        }

        //更新本页滚动位置
        {
          const scrollTop = vm.$route.meta.scrollTop;
          const $content = document.querySelector('html');
          if (scrollTop && $content) {
            $content.scrollTop = scrollTop;
          }
        }
      })
    },
    beforeRouteLeave(to, from, next) {
      //保存本页滚动位置
      {
        const $content = document.querySelector('html');
        const scrollTop = $content ? $content.scrollTop : 0;
        from.meta.scrollTop = scrollTop;
      }
      next()
    }
  }
</script>

<style scoped>
  .mdui-card:first-child {
    margin: 0;
    margin-bottom: 15px;
  }

  .mdui-card:last-child {
    margin: 0;
    margin-top: 15px;
  }

  .mdui-card {
    margin: 15px 0px;
  }

  .mdui-card-header {
    padding: 10px 16px;
    height: auto;
  }

  .mdui-card-primary {
    padding: 0px 16px 5px 16px;
  }

  .mdui-card-content {
    padding: 0px 17px;
    margin-bottom: 5px;
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
    margin: 8px 0;
    display: flex;
    justify-content: space-between
  }

  .card-bottom>span {
    align-self: center;
  }

  .post-content {
    white-space: pre-line;
  }
</style>
