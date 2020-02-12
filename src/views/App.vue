<template>
	<div id="app">
		<main id='container'>
			<Loading v-show='$store.state.loading.value'></Loading>
			<router-view></router-view>
		</main>
	</div>
</template>
<script>
	//views
	import Home from '@/views/Home.vue'
	import Friend from '@/views/Friend.vue'
	import Message from '@/views/Message.vue'
	import DrawerPage from'@/views/secondViews/DrawerPage.vue'
	//components
	import Loading from '@/components/static/Loading.vue'
	
	//modules
	export default {
		name: 'App',
		components: {
			Home,
			Friend,
			Message,
			DrawerPage,
			Loading
		},
		computed:{
			loading(){
				return this.$store.state.loading.value
			}
		},
		watch: {
			$route: {
				handler: function() {
					this.$store.commit('titleChange', this.$router.currentRoute.name);
				},
				deep: true
			}
		}
	}
</script>
<style>
	#app {}

	#container,
	#app {
		min-width: 100%;
		max-width: 100%;
		width: 100%;
	}

	#container>div {
		width: 100%;
	}
</style>
