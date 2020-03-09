<template>
  <section id='profile' class='list page'>
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple">
        <div class="mdui-list-item-content">{{$t('user.profilePhoto')}}</div>
        <van-uploader>
        <div class="mdui-list-item-avatar" type="primary"><img :src="user.avatarURL" @error="imgErr($event)" /></div>
        </van-uploader>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'profile',
    methods: {
      imgErr(e) {
        e.target.src = './statics/icons/avatar-fill.png';
        e.onerror = null;
      }
    },
    computed: {
      user() {
        return this.$store.state.User.user || {}
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        //改变顶部title
        vm.$store.commit('changeTitle', vm.$t('user.profile'))

        //修改组件状态
        vm.$store.commit('Display/fab', false)
        vm.$store.commit('Display/searchBar', false)
        vm.$store.commit('Display/refresh', false)
        vm.$store.commit('Display/nav', false)
      })
    },
  }
</script>

<style>
</style>
