const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '',
        meta: {
          index: 0,
          keepAlive: true,
          scrollTop: 0,
        },
        component: () => import('pages/Home.vue'),
      }, {
        path: 'newpost',
        meta: {
          index: 1,
          keepAlive: true,
        },
        component: () => import('pages/NewPost.vue'),
      },
      {
        path: 'friend',
        meta: {
          index: 0,
          keepAlive: true,
          scrollTop: 0,
        },
        component: () => import('pages/Friend.vue'),
      }, {
        path: 'message',
        meta: {
          index: 0,
          keepAlive: true,
          scrollTop: 0,
        },
        component: () => import('pages/Message.vue'),
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{
      path: '',
      meta: {
        index: 0,
      },
      component: () => import('pages/Login.vue')
    }, {
      path: 'register',
      meta: {
        index: 1,
        keepAlive: true,
      },
      component: () => import('pages/Register.vue'),
    }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
