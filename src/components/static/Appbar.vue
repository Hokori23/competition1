<template>
	<header id='appbar' class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide" v-if="this.$store.state.login">
		<div class="mdui-toolbar mdui-color-theme">
			<!-- menuBtn -->
			<a class="mdui-btn mdui-btn-icon" @click='menuBtn()'><i class="mdui-icon material-icons">{{this.$store.state.menuBtn}}</i></a>

			<!-- Title -->
			<a class="mdui-typo-subheading">{{this.$store.state.title}}</a>
			<div class="mdui-toolbar-spacer"></div>

			<!-- searchBar -->
			<div class="mdui-textfield mdui-textfield-expandable mdui-float-right" id='searchBar' v-if="this.$router.currentRoute.name.en==='Friend'||this.$router.currentRoute.name.en==='Message'">
				<button class="mdui-textfield-icon mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></button>
				<input class="mdui-textfield-input mdui-color-theme" type="text" placeholder="Search" />
				<button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>
			</div>
			<!-- refresh -->
			<a class="mdui-btn mdui-btn-icon" @click='refresh()'><i class="mdui-icon material-icons" v-if="this.$router.currentRoute.meta.index===0">refresh</i></a>
			<!-- menu -->
			<!-- 			<a class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a> -->
		</div>
	</header>
</template>

<script>
	import mdui from 'mdui'
	export default {
		name: 'Appbar',
		methods: {
			menuBtn() {
				let location = this.$router.currentRoute.meta.index;
				if (location !== 0) {
					this.$router.go(-location)
				} else {
					let drawer = new mdui.Drawer('#drawer');
					drawer.toggle()
				}
			},
			refresh() {
				if (this.$router.currentRoute.name.en === 'Forum') {
					this.$store.dispatch('getPost', this)
				}
			}
		},
		watch: {
			$route: {
				handler() {
					//检查标题语言
					{
						if (this.$store.state.login === true) {
							if (this.$store.state.lang === 'zh') {
								this.$store.commit('title', this.$router.currentRoute.name.zh)
							} else if (this.$store.state.lang === 'en') {
								this.$store.commit('title', this.$router.currentRoute.name.en)
							}
						}
					}
					//修改MenuBtn的icon
					{
						let location = this.$router.currentRoute.name.en
						if (location == 'Forum' || location == 'Friend' || location == 'Message') {
							this.$store.commit('menuBtn', 'menu')
						} else {
							this.$store.commit('menuBtn', 'arrow_back')
						}
					}
				},
				deep: true
			}
		},
		updated(){
			mdui.mutation()
		}
	}
</script>

<style scoped>
	#searchBar {
		margin: 0;
		margin-left: 5px;
		padding: 0;
		min-width: 48px;
		max-width: 400px;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 48px;
	}

	#searchBar>button {
		width: 48px;
		min-width: 48px;
		height: 48px;
	}

	#searchBar>input {
		width: calc(100% - 48px);
		margin-left: 48px;
		height: 36px;
	}

	.mdui-typo-subheading {
		overflow: visible !important;
		text-overflow: unset !important;
		white-space: unset !important;
		margin: 0 !important;
	}
</style>
