<template>
	<section id='forum'>
		<div class="mdui-card" v-for='item of post' @click="to(item.id,item.title)">
			<!-- 卡片头部，包含头像、标题、副标题 -->
			<div class="mdui-card-header">
				<img class="mdui-card-header-avatar" :src=item.profileURL />
				<div class="mdui-card-header-title">{{item.nickName}}</div>
				<div class="mdui-card-header-subtitle">{{item.school}} {{item.majority}} {{item.grade}}级
				</div>
			</div>

			<!-- 卡片的标题 -->
			<div class="mdui-card-primary">
				<div class="mdui-card-primary-title mdui-text-color-theme">{{item.title}}</div>
			</div>

			<!-- 卡片的内容 -->
			<div class="mdui-card-content">{{item.postContent}}</div>
			<div class='mdui-card-content card-bottom mdui-text-color-theme'>
				<span class='card-time'>{{text.replyTime}}: {{item.replyTime}}
				</span>
				<span class='card-time'>{{text.postTime}}: {{item.postTime}}
				</span>
			</div>
		</div>
	</section>
</template>

<script>
	import mdui from 'mdui'
	export default {
		name: 'Forum',
		computed: {
			post() {
				return this.$store.state.post
			},
			text() {
				let object = {}
				if (this.$store.state.lang === 'zh') {
					object.replyTime = '最新回复';
					object.postTime = '发帖时间';
					return object
				} else if (this.$store.state.lang === 'en') {
					object.replyTime = 'ReplyTime ';
					object.postTime = 'PostTime ';
					return object

				}
			}
		},
		methods: {
			to(id, title) {

			}
		},
		mounted() {
			//获取数据
			if (this.$store.state.login) {
				this.$store.dispatch('getPost', this)
			}
		},
	}
</script>

<style scoped>
	.mdui-card:first-child {
		margin: 0;
		margin-bottom: 15px;
	}

	.mdui-card:last-child {
		margin: 0;
		margin-top: 15px;
	}

	.mdui-card {
		margin: 15px 0px;
	}

	.mdui-card-header {
		padding: 10px 16px;
		height: auto;
	}

	.mdui-card-primary {
		padding: 0px 16px 5px 16px;
	}

	.mdui-card-content {
		padding: 0px 17px;
		margin-bottom: 5px;
		line-height: 24px;
		max-height: 48px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		box-sizing: border-box;
	}

	.card-bottom {
		margin: 8px 0;
		display: flex;
		justify-content: space-between
	}

	.card-bottom>span {
		align-self: center;
	}
</style>
