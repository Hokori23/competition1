<template>
	<!--设置:class="{'mdui-color-theme':dark}"-->
	<nav class="mdui-bottom-nav mdui-color-theme">
		<router-link v-for="(page,index) of navItem" class="mdui-ripple" :class="{'mdui-bottom-nav-active':index===0}" :to='page.path'
		 :key='index'>
			<i class="mdui-icon material-icons">{{page.icon}}</i>
			<label>{{page.text}}</label>
		</router-link>
	</nav>
</template>

<script>
	export default {
		name: 'BottomNav',
		props: {
			navItem: Array
		},
	}
</script>

<style scoped>
	nav{
		z-index: 999;
	}
</style>
