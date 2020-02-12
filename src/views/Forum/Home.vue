<template>
	<section id="home" :class='{"loading":this.$store.state.loading.value}' class='view'>
		<router-view></router-view>
	</section>
</template>

<script>
	export default {
		name: 'Home',
	}
</script>

<style scoped>
</style>
