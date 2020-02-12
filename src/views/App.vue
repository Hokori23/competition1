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
	import mdui from 'mdui'
	import Loading from '@/components/static/Loading.vue'

	//modules
	
	export default {
		name: 'App',
		components: {
			Loading
		},
		computed: {
			loading() {
				return this.$store.state.loading.value
			}
		},
	}
</script>
<style scoped>
	#app{
		padding-bottom: 56px;
	}
	#container{
		position: relative;
	}

	#container,
	#app {
		min-width: 100%;
		max-width: 100%;
		width: 100%;
	}

	#container>div {
		width: 100%;
	}
	.view{
		transition: transform ease .3s;
	}
	.loading{
		/* padding-top: 60px; */
		transform: translate3D(0,100px,0)
	}
</style>
