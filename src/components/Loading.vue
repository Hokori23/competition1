<template>
	<div id='loading' v-show='this.$store.state.Home.load'>
		<div class="mdui-spinner"></div>
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
		margin-top: 7.5px;
		display: flex;
    left: 50%;
    transform: translateX(-50%);
		z-index: 51;
	}
</style>
