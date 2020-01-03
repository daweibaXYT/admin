import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import breadCrumb from './components/breadCrumb'
import myTable from './components/myTable'
import myForm from './components/myForm'
Vue.use(ElementUI)
// 这种方式引入第三方库会造成vendor文件过大,可以利用cdn引入,具体请看vue.config文件

// 注册全局组件
// 面包屑组件
Vue.component('breadCrumb', breadCrumb)
// table组件
Vue.component('myTable', myTable)
// 注册form表单组件
Vue.component('myForm', myForm)

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
