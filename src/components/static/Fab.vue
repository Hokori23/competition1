<template>
	<div class="mdui-fab-wrapper" id="fab" v-if="display">
		<button class="mdui-fab mdui-color-theme-accent mdui-ripple" @click='click()'><i class="mdui-icon material-icons">add</i></button>
	</div>
</template>

<script>
	export default {
		name: 'fab',
		data() {
			return {
				display: null //控制FAB按钮显示
			}
		},
		methods: {
			click() {
				if (this.$router.currentRoute.path !== '/newPost') {
					this.$router.push('/newPost')
				}
			}
		},
		watch: {
			$route: {
				handler() {
					let location = this.$router.currentRoute.name.en;
					if (this.$store.state.login !== true) {
						this.display = false
					} else if (location === 'Forum' || location === 'Friend' || location === 'Message') {
						this.display = true
					} else {
						this.display = false
					}

				},
				deep: true
			}
		}
	}
</script>

<style>
	#fab {
		margin-bottom: 62px;
	}
</style>
