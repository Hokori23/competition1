const routes = [{
    //Main
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '',
        meta: {
          index: 0,
          keepAlive: true,
          scrollTop: 0,
        },
        component: () => import('pages/Home/Home.vue'),
      }, {
        path: 'newpost',
        meta: {
          index: 1,
          keepAlive: true,
        },
        component: () => import('pages/Home/NewPost.vue'),
      },
      {
        path: 'friend',
        meta: {
          index: 0,
          keepAlive: true,
          scrollTop: 0,
        },
        component: () => import('pages/Friend/Friend.vue'),
      }, {
        path: 'message',
        meta: {
          index: 0,
          keepAlive: true,
          scrollTop: 0,
        },
        component: () => import('pages/Message/Message.vue'),
      },
      //Setting
      {
        path: '/settings',
        meta: {
          index: 999,
        },
        component: () => import('pages/Settings/Settings.vue'),
      }, {
        path: '/settings/language',
        meta: {
          index: 1000
        },
        component: () => import('pages/Settings/Language.vue')
      }
    ]
  },
  //Login
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{
      path: '',
      meta: {
        index: 0,
      },
      component: () => import('pages/Login/Login.vue')
    }, {
      path: 'register',
      meta: {
        index: 1,
        keepAlive: true,
      },
      component: () => import('pages/Login/Register.vue'),
    }]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes