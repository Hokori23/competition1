<template>
	<div id="app">
		<main id='container'>
			<Loading></Loading>
			<router-view></router-view>
		</main>
	</div>
</template>
<script>
	//views
	import Forum from '@/views/Forum/Forum.vue'

	//components
	import Loading from '@/components/static/Loading.vue'

	//modules
	export default {
		name: 'App',
		components: {
			Loading,
			Forum
		},
	}
</script>
<style scoped>
	#app {
		height: calc(100% + 56px);
	}

	#container {
		position: relative;
		height: 100%;
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

	.view {
		transition: transform ease .3s;
		padding-bottom: 56px;
	}

	.loading {
		transform: translate3D(0, 40px, 0)
	}
</style>
