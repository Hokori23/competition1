import Vuex from 'vuex'
import Vue from 'vue'
import router from '@/router/router.js'
import mdui from 'mdui'

import statusCode from '@/state/statusCode'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		lang: 'en', //缓存在serviceWorker
		login: false, //缓存在serviceWorker
		loading: false,
		title: null,
		post: null, //缓存在serviceWorker
		menuBtn: null, //MenuBtn的icon
	},
	getters: {},
	mutations: {
		title(state, title) {
			state.title = title
		},
		loading(state, value) {
			state.loading = value
		},
		login(state, value) {
			state.login = value
		},
		menuBtn(state, value) {
			state.menuBtn = value
		}
	},
	actions: {
		//获取帖子数据
		getPost({
			commit
		}, event) {
			let that = this;
			if (!this.state.loading) {
				commit('loading', true)
				event.$axios({
					methods: 'get',
					url: '/public/post.json',
					timeout: 3000,
				}).then(function(res) {
					//把post数据放到state里
					//PS:看到时能不能缓存到ServiceWorker
					that.state.post = res.data
					mdui.snackbar({
						message: '刷新成功',
						timeout: '300',
					})
				}).catch(function(err) {
					let errText;
					if (that.state.lang === 'zh') {
						errText = statusCode(err.response.status);
					} else if (that.state.lang === 'en') {
						errText = err.response.text
					}
					mdui.snackbar({
						message: errText,
						timeout: '2000',
					})
				}).finally(() => {
					commit('loading', false)
				})
			}
		},
		//登录
		login({
			commit
		}, event) {
			commit('loading', true)
			event.$axios({
				methods: 'post',
				url: '/public/login.json',
				timeout: 3000,
				data: {
					account: event.user.account,
					password: event.user.password
				},
			}).then(function(res) {
				if (res.data.value) {
					//状态处理
					commit('login', true)
					//页面跳转
					event.$router.replace('/')
				} else {
					//处理登录失败情况
				}
				commit('loading', false)
			}).catch(function(err) {
				let errText = statusCode(err.response.status);
				mdui.snackbar({
					message: errText,
					timeout: '2000',
					position: 'top'
				})
				commit('loading', false)
			})
		},
		//注销
		logout({
			commit
		}, event) {
			commit('loading', true)
			event.$axios({
				methods: 'post',
				url: '/public/login.json',
				timeout: 3000,
			}).then(function(res) {
				if (res.data.value) {
					//状态处理
					commit('login', false)
					//页面跳转
					event.$router.replace('/login')
				} else {
					//处理注销失败情况
				}
				commit('loading', false)
			}).catch(function(err) {
				let errText = statusCode(err.response.status);
				mdui.snackbar({
					message: errText,
					timeout: '2000',
					position: 'top'
				})
				commit('loading', false)
			})
		}
	}
})
export default store
