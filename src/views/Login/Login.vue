<template>
	<section id='Login'>
		<!-- account -->
		<div id='login--container' v-if="this.$store.state.lang === 'zh'">
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
				<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme" @click='login()'>登录</button>
			</div>
		</div>
		<div id='login--footer' v-if="this.$store.state.lang === 'zh'">
			<button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple" @click='register()'>新用户注册</button>
			<button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple" @click='forgot()'>无法登录?</button>
		</div>

		<div id='login--container' v-if="this.$store.state.lang === 'en'">
			<div class='flex-spacer'></div>
			<div id='login--input'>
				<div class="mdui-textfield mdui-textfield-floating-label">
					<i class="mdui-icon material-icons">account_circle</i>
					<label class="mdui-textfield-label">Account or Email</label>
					<input class="mdui-textfield-input" type="text" required v-model='user.account' />
					<div class="mdui-textfield-error">Account or Email required</div>
				</div>
				<!-- password -->
				<div class="mdui-textfield mdui-textfield-floating-label">
					<i class="mdui-icon material-icons">lock</i>
					<label class="mdui-textfield-label">Password</label>
					<input class="mdui-textfield-input" type="password" required v-model='user.password' />
					<div class="mdui-textfield-error">Password required</div>
				</div>
			</div>
			<div id='login--btn'>
				<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme" @click='login()'>Login in</button>
			</div>
		</div>
		<div id='login--footer' v-if="this.$store.state.lang === 'en'">
			<button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple" @click='register()'>Register</button>
			<button class="mdui-btn mdui-btn-dense mdui-color-theme mdui-ripple" @click='forgot()'>Forgot Password?</button>
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
					account: null,
					password: null
				},
			}
		},
		methods: {
			login() {
				this.$store.dispatch("login", this)
			},
			register() {
				this.$router.push('/login/register')
			},
			forgot() {
				this.$router.push('/login/forgot')
			},
		},
		mounted() {
			//强制跳转
			if (this.$store.state.login) {
				this.$router.replace('/')
			}
		},
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
		text-transform: unset;
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
