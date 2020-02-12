<template>
	<body class='mdui-theme-accent-red mdui-theme-primary-indigo mdui-appbar-with-toolbar mdui-bottom-nav-fixed'>
		<noscript>
			<strong>仅允许支持JavaScript的浏览器访问，抱歉！</strong>
		</noscript>
		<div v-if='this.$store.state.login.value'>
			<Drawer></Drawer>
			<Appbar></Appbar>
			<App></App>
			<BottomNav :navItem="navItem"></BottomNav>
			<FAB></FAB>
		</div>
		<router-view v-if='!this.$store.state.login.value'></router-view>
	</body>
</template>

<script>
	//modules

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
			Appbar,
			Drawer,
			App,
			BottomNav,
			FAB
		},
		data: function() {
			return {
				navItem: [{ //底部导航栏
					text: '',
					icon: 'home',
					path: ''
				}, {
					text: '',
					icon: 'history',
					path: ''

				}, {
					text: '',
					icon: 'location_on',
					path: ''
				}],
			}
		},
		mounted: function() {
			//init router path
			{
				this.navItem.forEach((i, index) => {
					i.path = router.options.routes[index].path;
					i.text = router.options.routes[index].name;
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

	html,body {
		height: 100%;
	}

	body::-webkit-scrollbar {
		display: none;
	}
	body{
		box-sizing: border-box;
	}

	.mdui-snackbar-bottom {
		bottom: 56px !important;
		z-index: -1 !important;
	}
</style>
