import Vue from 'vue'
import axios from 'axios'
require("promise.prototype.finally").shim();

//dev
axios.defaults.baseURL = '/api';

Vue.prototype.$axios = axios
