<template>
	<section>
		<!-- account -->
		<div id='login--container'>
			<div class="mdui-textfield mdui-textfield-floating-label">
				<i class="mdui-icon material-icons">account_circle</i>
				<label class="mdui-textfield-label">账号</label>
				<input class="mdui-textfield-input" type="text" required v-model='user.account' />
				<div class="mdui-textfield-error">账号不能为空</div>
			</div>
			<!-- password -->
			<div class="mdui-textfield mdui-textfield-floating-label">
				<i class="mdui-icon material-icons">lock</i>
				<label class="mdui-textfield-label">密码</label>
				<input class="mdui-textfield-input" type="password" required v-model='user.password' />
				<div class="mdui-textfield-error">密码不能为空</div>
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
				console.log(this.user.account);
				console.log(this.user.password)
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
		height: 100%;
		padding: 0 15% 40% 15%;
	}

	#login--btn {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 20px
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

	#login--footer > button {
		margin: 0 15px;
	}
</style>
