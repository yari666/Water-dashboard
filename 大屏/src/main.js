import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Home from './pages/home.vue'
import less from 'less'

Vue.use(ElementUI)
Vue.use(less)

new Vue({
    el: '#app',
    render: h => h(Home)
})
