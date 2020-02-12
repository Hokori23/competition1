import Vue from 'vue'
import VueRouter from 'vue-router'
/********************************/
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const Post = resolve => {
	require.ensure(['@/views/secondViews/Post.vue'], () => {
		resolve(require('@/views/secondViews/Post.vue'))
	}) //按需加载
}
const detailPost = resolve => {
	require.ensure(['@/views/thirdViews/detailPost.vue'], () => {
		resolve(require('@/views/thirdViews/detailPost.vue'))
	}) //按需加载
}
const newPost = resolve => {
	require.ensure(['@/views/thirdViews/newPost.vue'], () => {
		resolve(require('@/views/thirdViews/newPost.vue'))
	}) //按需加载
}
/********************************/

import Friend from '@/views/Friend.vue'


import Message from '@/views/Message.vue'

import DrawerPage from '@/views/secondViews/DrawerPage.vue'

let base = `${process.env.BASE_URL}`; // 动态获取二级目录
const router = new VueRouter({
	mode: 'history',
	base: base,
	routes: [{
			path: '/',
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
			},{
				path:'new-post',
				name:'newPost',
				component:newPost
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
			path:'/drawer-page',
			name:'DrawerPage',
			component:DrawerPage
		}
	]
})
export default router
