<template>
	<div id='start'>
		<div class="mdui-toolbar mdui-color-theme" v-if='!firstPage'>
			<a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
			<span class="mdui-typo-title">{{this.$router.currentRoute.name}}</span>
			<div class="mdui-toolbar-spacer"></div>
		</div>
		<div id='start--container'>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		computed:{
			firstPage(){
				return this.$router.currentRoute.name ==='Login'
			}
		}
	}
</script>

<style scoped>
	.mdui-toolbar {
		position: absolute;
		top: 0;
	}

	#start--container {
		position: relative;
		top: 0;
		height: 100%;
		width: 100%;
	}

	#start {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		/* padding: 56px 0; */
		padding-top: 56px;
	}

</style>
