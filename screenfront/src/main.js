import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import animated from 'animate.css'

import Index from './pages/index'

import Axios from "axios";

// 使用axios
Vue.prototype.$http = Axios;

Vue.use(ElementUI)
Vue.use(less)
Vue.use(animated)

new Vue({
    el: '#app',
    render: h => h(Index)
})
