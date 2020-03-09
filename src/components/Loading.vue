<template>
	<div id='loading' v-show='this.$store.state.Home.load'>
		<div class="mdui-spinner mdui-text-color-theme-accent"></div>
	</div>
</template>

<script>
	export default{
		name:'Loading'
	}
</script>

<style scoped>
	#loading{
		position: absolute;
		/* margin-top: calc(56px + 28px + 7.5px); */
    margin-top: 7.5px;
		display: flex;
    left: 50%;
    transform: translateX(-50%);
		z-index: 51;
	}
</style>
