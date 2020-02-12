import Vuex from 'vuex'
import Vue from 'vue'
import mdui from 'mdui'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		setting: {
			dark: 0
		},
		location: { //当前title
			text: '',
		},
		loading: {
			value: false
		},
		start: {
			// firstPage: true,
			login: false //edit
		}
	},
	getters: {
		//FAB按钮显示
		fabDisplay: (state) => {
			if (state.location.text === 'Post' || state.location.text === 'Message') {
				return true;
			} else {
				return false;
			}
		},
		//判断导航栏页面
		firstPage: (state) => {
			if (state.location.text === 'Home' || state.location.text === 'Friend' || state.location.text === 'Message' ||
				state.location.text === 'Post') {
				return true
			} else {
				return false
			}
		},
		//判断是否首页,改变左上角按钮
		menuIconText: (state, getters) => {
			if (getters.firstPage === true) {
				return 'menu'
			} else {
				return 'arrow_back'
			}
		},
		//搜索栏
		searchBarDisplay: (state) => {
			if (state.location.text === 'Friend' || state.location.text === 'Message') {
				return true
			} else {
				return false
			}
		},

	},
	mutations: { //title更换
		titleChange(state, text) {
			state.location.text = text
		},
		//load状态
		load(state, value) {
			state.loading.value = value;
		},
		//登录状态
		login(state, value) {
			state.start.login = value;
		},
		//是否是Start Module第一页
		// startFirstPage(state, value) {
		// 	state.start.firstPage = value
		// }
	},
	actions: {
		getPost({
			commit
		}, event) {
			mdui.mutation()
			if (!this.state.loading.value) {
				commit('load', true)
				event.$axios({
					methods: 'get',
					url: '/public/post.json',
				}).then(function(res) {
					event.post = res.data
				}).catch(function(err) {
					console.log(err.message)
					mdui.snackbar({
						message: '请求失败',
						timeout: '2000',
					})
				}).finally(() => {
					commit('load', false)
				})
			}
		}
	}

})
export default store
