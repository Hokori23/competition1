<template>
	<div class="mdui-fab-wrapper" id="fab" v-if="display">
		<button class="mdui-fab mdui-color-theme-accent mdui-ripple" @click='newPost()'><i class="mdui-icon material-icons">add</i></button>
	</div>
</template>

<script>
	export default {
		name: 'fab',
		methods: {
			newPost() {
				if (this.$router.currentRoute.path !== 'home/new-post') {
					this.$router.push('home/new-post')
				}
			}
		},
		computed: {
			display: function() {
				return this.$store.getters.fabDisplay;
			}
		}
	}
</script>

<style>
	#fab {
		margin-bottom: 62px;
	}
</style>
