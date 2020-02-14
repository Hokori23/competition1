<template>
	<!--设置:class="{'mdui-color-theme':dark}"-->
	<nav class="mdui-bottom-nav mdui-color-theme" :class="{'mdui-invisible':!this.$store.state.login}">
		<a class='mdui-ripple' :class="{'mdui-bottom-nav-active':module===index}" v-for="(i,index) of navItem" @click='to(i.path)'>
			<i class="mdui-icon material-icons">{{i.icon}}</i>
			<label>{{i.text}}</label>
		</a>
	</nav>
</template>

<script>
	export default {
		name: 'BottomNav',
		methods: {
			to(path) {
				let router = this.$router.currentRoute
				if (router.path !== path&&router.meta.index===0) {
					this.$router.replace(path)
				}else{
					this.$router.go(-router.meta.index)
				}
			},
			lang(index) {
				if (this.$store.state.lang === 'zh') {
					if (index === 0) {
						return '论坛'
					} else if (index === 1) {
						return '好友'
					} else if (index === 2) {
						return '消息'
					}
				} else if (this.$store.state.lang === 'en') {
					if (index === 0) {
						return 'Forum'
					} else if (index === 1) {
						return 'Friend'
					} else if (index === 2) {
						return 'Message'
					}
				}
			}
		},
		data() {
			return {
				navItem: [{
					text: this.lang(0),
					path: '/',
					icon: 'forum'
				}, {
					text: this.lang(1),
					path: '/friend',
					icon: 'contacts'
				}, {
					text: this.lang(2),
					path: '/message',
					icon: 'message'
				}],
				module: 0
			}
		},
		watch: {
			$route: {
				handler: function() {
					let name = this.$router.currentRoute.name.en
					if (name === 'Forum') {
						this.module = 0
					} else if (name === 'Friend') {
						this.module = 1
					} else if (name === 'Message') {
						this.module = 2
					}
				},
				deep: true
			}
		},
		mounted(){
		}
	}
</script>

<style scoped>
	nav {
		z-index: 999;
	}
</style>
