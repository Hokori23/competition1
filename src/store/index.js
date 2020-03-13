import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import Home from './Home'
import Display from './Display'
import User from './User'
import Setting from './Setting'
Vue.use(Vuex)

Vue.directive('real-img', async function(el, binding) { //指令名称为：real-img
  let imgURL = binding.value; //获取图片地址
  if (imgURL) {
    let exist = await imageIsExist(imgURL);
    if (exist) {
      el.setAttribute('src', imgURL);
    }
  }
})

/**
 * 检测图片是否存在
 * @param url
 */
let imageIsExist = function(url) {
  return new Promise((resolve) => {
    var img = new Image();
    img.onload = function() {
      if (this.complete == true) {
        resolve(true);
        img = null;
      }
    }
    img.onerror = function() {
      resolve(false);
      img = null;
    }
    img.src = url;
  })
}




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
