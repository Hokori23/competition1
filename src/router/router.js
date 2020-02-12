import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/********************************/
import Home from '@/views/Forum/Home.vue'


const Post = resolve => {
	require.ensure(['@/views/Forum/Post.vue'], () => {
		resolve(require('@/views/Forum/Post.vue'))
	}) //按需加载
}
const detailPost = resolve => {
	require.ensure(['@/views/Forum/detailPost.vue'], () => {
		resolve(require('@/views/Forum/detailPost.vue'))
	}) //按需加载
}
const newPost = resolve => {
	require.ensure(['@/views/thirdViews/newPost.vue'], () => {
		resolve(require('@/views/thirdViews/newPost.vue'))
	}) //按需加载
}
/********************************/

import Friend from '@/views/Friend/Friend.vue'

import Message from '@/views/Message/Message.vue'

import DrawerPage from '@/views/secondViews/DrawerPage.vue'

import Start from '@/views/Start/Start.vue'
import Login from '@/views/Start/Login.vue'
let base = `${process.env.BASE_URL}`; // 动态获取二级目录
const router = new VueRouter({
	mode: 'history',
	base: base,
	routes: [{
			path: '/',
			name: 'Start',
			component: Start,
			children:[{
				path:'',
				name:'Login',
				component:Login
			}]
		}, {
			path: '/home',
			name: 'Home',
			component: Home,
			children: [{
				path: '',
				name: 'Post',
				component: Post
			}, {
				path: 'detail-post',
				name: 'detailPost',
				component: detailPost
			}, {
				path: 'new-post',
				name: 'newPost',
				component: newPost
			}]
		},
		{
			path: '/friend',
			name: 'Friend',
			component: Friend
		},
		{
			path: '/message',
			name: 'Message',
			component: Message
		},
		{
			path: '/drawer-page',
			name: 'DrawerPage',
			component: DrawerPage
		}
	]
})
export default router
