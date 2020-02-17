import Vue from 'vue'
import axios from 'axios'
require("promise.prototype.finally").shim();

Vue.prototype.$axios = axios
