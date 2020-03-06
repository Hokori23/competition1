import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import Home from './Home'
import Display from './Display'
import User from './User'
import Setting from './Setting'
Vue.use(Vuex)





//drag
import VueDragResize from 'vue-drag-resize'

Vue.component('vue-drag-resize', VueDragResize)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function( /* { ssrContext } */ ) {
  const Store = new Vuex.Store({
    modules: {
      Home,
      Display,
      User,
      Setting
    },
    state: {
      title: null,
      navIcon: 'menu',
    },
    mutations: {
      changeTitle(state, value) {
        state.title = value
      },
      changeIcon(state, value) {
        state.navIcon = value
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
