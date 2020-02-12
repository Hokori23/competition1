//modules
import Vue from 'vue'
import router from '@/router/router.js'
import mdui from 'mdui'
import store from '@/state/store.js'
import './registerServiceWorker'
import axios from 'axios'
//views
import Body from '@/body.vue'

//src
import '@/assets/css/mdui.min.css'
import '@/assets/css/addition.css'


Vue.config.productionTip = false

//init axios
axios.defaults.baseURL = '/api';
Vue.prototype.$axios = axios;

new Vue({
	router,
	store, //注入状态管理
	render: h => h(Body)
}).$mount('#body')


//how to use Vuex
//
//Change State
//store.commit(String functionName)
//
//Get State
//store.state.[stateName]