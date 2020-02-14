<template>
	<div id='loading' v-show='this.$store.state.loading'>
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
		margin-top: 5px;
		display: flex;
		justify-content: center;
		z-index: 7000;
	}
</style>
