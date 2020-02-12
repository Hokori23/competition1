import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		setting: {
			dark: 0
		},
		location: { //当前title
			text: 'default title',
		},
		loading: {
			value: false
		}
	},
	getters: {
		fabDisplay: (state) => {
			if (state.location.text === 'Post' || state.location.text === 'Message') {
				return true;
			} else {
				return false;
			}
		},
		firstPage: (state) => {
			if (state.location.text === 'Home' || state.location.text === 'Friend' || state.location.text === 'Message' ||
				state.location.text === 'Post') {
				return true
			} else {
				return false
			}
		},
		menuIconText: (state, getters) => {
			if (getters.firstPage === true) {
				return 'menu'
			} else {
				return 'arrow_back'
			}
		},
		homePage: (state) => {
			if (state.location.text === 'Home') {
				return true
			} else {
				return false
			}
		}
	},
	mutations: {
		titleChange(state, text) { //title更换
			state.location.text = text
		},
		load(state, value) {
			state.loading.value = value;
		}
	},
	actions: {
		titleChange({
			commit
		}) {
			commit('titleChange')
		}
	}

})
export default store
