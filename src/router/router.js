import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/************************Login--START************************/
const LoginContainer = resolve => {
	require.ensure(['@/views/Login/LoginContainer.vue'], () => {
		resolve(require('@/views/Login/LoginContainer.vue'))
	}) //按需加载
}
const Register = resolve => {
	require.ensure(['@/views/Login/Register.vue'], () => {
		resolve(require('@/views/Login/Register.vue'))
	}) //按需加载
}
const Login = resolve => {
	require.ensure(['@/views/Login/Login.vue'], () => {
		resolve(require('@/views/Login/Login.vue'))
	}) //按需加载
}
const Forgot = resolve => {
	require.ensure(['@/views/Login/Forgot.vue'], () => {
		resolve(require('@/views/Login/Forgot.vue'))
	}) //按需加载
}
/************************Login--END************************/












/************************Forum--START************************/
import ForumContainer from '@/views/Forum/ForumContainer.vue'
import Forum from '@/views/Forum/Forum.vue'
const Post = resolve => {
	require.ensure(['@/views/Forum/Post.vue'], () => {
		resolve(require('@/views/Forum/Post.vue'))
	})
}
const NewPost = resolve => {
	require.ensure(['@/views/Forum/NewPost.vue'], () => {
		resolve(require('@/views/Forum/NewPost.vue'))
	})
}
/************************Forum--END************************/












/************************Friend--START************************/
import FriendContainer from '@/views/Friend/FriendContainer.vue'
import Friend from '@/views/Friend/Friend.vue'
/************************Friend--END************************/












/************************Message--START************************/
import MessageContainer from '@/views/Message/MessageContainer.vue'
import Message from '@/views/Message/Message.vue'
const ChatRoom = resove => {
	require.ensure(['@/views/Message/ChatRoom.vue'], () => {
		resolve(require('@/views/Message/ChatRoom.vue'))
	})
}
/************************Message--END************************/












let base = `${process.env.BASE_URL}`; // 动态获取二级目录
// let base = '/vue-cli'
const router = new VueRouter({
	mode: 'history',
	base: base,
	routes: [{
			path: '/login', //登陆模块
			component: LoginContainer,
			name: {
				zh: '登录模块',
				en: 'LoginContainer'
			},
			children: [{
				path: '',
				name: {
					zh: '登录',
					en: 'Login'
				},
				component: Login //登录
			}, {
				path: 'register',
				name: {
					zh: '注册',
					en: 'Register'
				},
				component: Register //注册
			}, {
				path: 'forgot',
				name: {
					zh: '忘记密码',
					en: 'Forgot'
				},
				component: Forgot //忘记密码
			}]
		}, {
			path: '/', //导航栏1
			component: ForumContainer,
			name: {
				zh: '论坛模块',
				en: 'ForumContainer'
			},
			children: [{
				path: '',
				name: {
					zh: '论坛',
					en: 'Forum'
				},
				meta: {
					index: 0
				},
				component: Forum //论坛首页
			}, {
				path: 'post/:id/:title',
				name: {
					zh: '帖子页面',
					en: 'Post'
				},
				meta: {
					index: 1
				},
				component: Post //帖子详细页
			}, {
				path: 'newPost',
				name: {
					zh: '发布帖子',
					en: 'New Post'
				},
				meta: {
					index: 1
				},
				component: NewPost //发表帖子
			}]
		}, {
			path: '/friend', //导航栏2
			component: FriendContainer,
			name: {
				zh: '好友模块',
				en: 'FriendContainer'
			},
			children: [{
				path: '',
				name: {
					zh: '好友',
					en: 'Friend'
				},
				meta: {
					index: 0
				},
				component: Friend
			}]
		}, {
			path: '/message', //导航栏3
			component: MessageContainer,
			name: {
				zh: '消息模块',
				en: 'MessageContainer'
			},
			children: [{
				path: '', //消息列表
				name: {
					zh: '消息',
					en: 'Message'
				},
				meta: {
					index: 0
				},
				component: Message
			}, {
				path: 'chatRoom',
				name: {
					zh: '聊天室',
					en: 'CharRoom'
				},
				meta: {
					index: 1
				},
				component: ChatRoom
			}]
		},
		// {
		// 	path: '/user/:id', //用户信息版面
		// 	component: User,
		// },
	]
})



export default router
