<template>
	<section>
		<!-- account -->
		<div id='login--container'>
			<div class='flex-spacer'></div>
			<div id='login--input'>
				<div class="mdui-textfield mdui-textfield-floating-label">
					<i class="mdui-icon material-icons">account_circle</i>
					<label class="mdui-textfield-label">账号或邮箱</label>
					<input class="mdui-textfield-input" type="text" required v-model='user.account' />
					<div class="mdui-textfield-error">不能为空，填写账号或邮箱</div>
				</div>
				<!-- password -->
				<div class="mdui-textfield mdui-textfield-floating-label">
					<i class="mdui-icon material-icons">lock</i>
					<label class="mdui-textfield-label">密码</label>
					<input class="mdui-textfield-input" type="password" required v-model='user.password' />
					<div class="mdui-textfield-error">密码不能为空</div>
				</div>
			</div>
			<div id='login--btn'>
				<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click='login()'>登录</button>
			</div>
		</div>
		<div id='login--footer'><button class="mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-ripple">新用户注册</button><button
			 class="mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-ripple">无法登录?</button>
		</div>

	</section>
</template>

<script>
	import mdui from 'mdui'
	export default {
		name: 'Login--login',
		data() {
			return {
				user: {
					account: '',
					password: ''
				}
			}
		},
		methods: {
			login() {
				let that = this;
				this.$axios({
					methods: 'post',
					url: '/public/post.json',
					data: {
						account: that.user.account,
						password: that.user.password
					}
				}).then(function(res) {
					console.log(res.data)
					that.$router.push('/home')
					that.$store.commit('login', true);
				}).catch(function(err) {
					console.log(err)
					mdui.snackbar({
						message: '请求失败',
						timeout: '2000',
						position:'top'
					})
				})
			}
		},
		mounted() {
			//强制跳转
			if (this.$store.state.start.login) {
				this.$router.push('/home')
			}
		}
	}
</script>

<style scoped>
	section {
		width: 100%;
		height: 100%;
	}

	#login--container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		width: 100%;
		height: calc(100% - 30%);
		transform: translateY(-10%);
		padding: 0 15%;
	}

	#login--input {
		flex-grow: 0;
	}

	#login--btn {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-grow: 1;
		margin-top: 20px;
	}

	.flex-spacer {
		flex-grow: 2;
	}

	#login--btn>button {
		width: 150px;
	}

	#login--footer {
		position: absolute;
		bottom: 0;
		height: 40px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	#login--footer>button {
		margin: 0 15px;
	}
</style>
