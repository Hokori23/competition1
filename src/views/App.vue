<template>
	<div id="app">
		<main id='container'>
			<Loading v-show='$store.state.loading.value'></Loading>
			<router-view></router-view>
		</main>
	</div>
</template>
<script>
	//components
	import Loading from '@/components/static/Loading.vue'
	
	//modules
	export default {
		name: 'App',
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
