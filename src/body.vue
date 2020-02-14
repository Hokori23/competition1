<template>
	<body class='mdui-theme-accent-green mdui-theme-primary-deep-purple mdui-appbar-with-toolbar mdui-bottom-nav-fixed'>
		<noscript>
			<strong>仅允许支持JavaScript的浏览器访问，抱歉！</strong>
		</noscript>
		<Appbar></Appbar>
		<App></App>
		<BottomNav></BottomNav>
		<Drawer></Drawer>
		<FAB></FAB>
	</body>
</template>

<script>
	//modules
	import mdui from 'mdui'

	//views
	import App from '@/views/App.vue'

	//components
	import Appbar from '@/components/static/Appbar.vue'
	import Drawer from '@/components/static/Drawer.vue'
	import FAB from '@/components/static/Fab.vue'
	import BottomNav from '@/components/static/BottomNav.vue'
	import router from '@/router/router.js'

	export default {
		name: 'Body',
		components: {
			App,
			Appbar,
			Drawer,
			BottomNav,
			FAB,
		},
		mounted() {
			//跳转登录{
			let path = this.$router.currentRoute.path
			if (this.$store.state.login !== true && path !== '/login/register' && path !== '/login/forgot' && path !== '/login') {
				let that = this;
				mdui.snackbar({
					message: '未登录',
					position:'top',
					timeout:'2000',
					onOpen: function() {
						that.$router.replace('/login')
					}
				})
			}
		}
	}
</script>

<style>
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

	html,
	body {
		height: 100%;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	body {
		box-sizing: border-box;
		overscroll-behavior: none;
	}

	.mdui-snackbar-bottom {
		bottom: 56px !important;
		z-index: 998 !important;
	}

	img {
		position: relative !important;
	}

	img:after {
		content: "";
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background: url(assets/avatar.jpg);
		background-size: 100% 100%;
	}
</style>
