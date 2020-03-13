import Vue from 'vue'
import axios from 'axios'
require("promise.prototype.finally").shim();

//dev
if (process.env.DEV) {
  axios.defaults.baseURL = '/api';
}
Vue.prototype.$axios = axios



axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.token = localStorage.getItem('Authorization');
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  });

//异步请求后，判断token是否过期
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization');
          this.$router.push('/login');
      }
    }
  })
