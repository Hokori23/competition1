<template>
	<section id='forumContainer' class='view' :class='{"loading":this.$store.state.loading}'>
		<router-view></router-view>
	</section>
</template>

<script>
	export default{
		name:'ForumContainer'
	}
</script>

<style>
</style>
