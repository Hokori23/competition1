<template>
	<header id='appbar' class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-toolbar-hide">
		<div class="mdui-toolbar mdui-color-theme">
			<!-- menuBtn -->
			<a class="mdui-btn mdui-btn-icon" @click.stop='click()'><i class="mdui-icon material-icons">{{this.$store.getters.menuIconText}}</i></a>

			<!-- Title -->
			<a class="mdui-typo-title">{{this.$store.state.location.text}}</a>
			<div class="mdui-toolbar-spacer"></div>
			<!-- 			<a class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a> -->
			<div class="mdui-textfield mdui-textfield-expandable mdui-float-right" id='searchBar' v-if ='notHomePage'>
				<button class="mdui-textfield-icon mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></button>
				<input class="mdui-textfield-input mdui-color-theme" type="text" placeholder="Search" />
				<button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>
			</div>
			<a class="mdui-btn mdui-btn-icon" style='margin: 0px;'><i class="mdui-icon material-icons">refresh</i></a>
			<a class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
		</div>
	</header>
</template>

<script>
	import mdui from 'mdui'
	export default {
		name: 'Appbar',
		computed: {
			firstPage() {
				return this.$store.getters.firstPage;
			},
			notHomePage(){
				return !this.$store.getters.homePage;
			}
		},
		methods: {
			click() {
				if (this.firstPage) {
					let inst = new mdui.Drawer('#drawer');
					inst.toggle()
				} else {
					this.$router.go(-1)
				}
			},
		}
	}
</script>

<style>
	#searchBar {
		margin-right: 0;
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

	/* 	.mdui-toolbar {
		height: auto !important;
		line-height: unset !important;
	} */

	.mdui-typo-title {
		overflow: visible !important;
		text-overflow: unset !important;
		white-space: unset !important;
		margin-right: 0 !important;
	}
</style>
