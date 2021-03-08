import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
// import VueRouter from 'vue-router'
import router from "./router/router"
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store/index'
import './assets/css/main.css'
import VCharts from 'v-charts'
import 'babel-polyfill'
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VCharts)
    // Vue.use(VueRouter)
Vue.use(Element, { size: 'small', zIndex: 3000 });
//创建路由
// let router = new VueRouter()

new Vue({
    render: h => h(App),
    store,
    //将路由挂载到Vue实例上
    router
}).$mount('#app')