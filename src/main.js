// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// icon图标
import './font/iconfont.css'

// echart 官网6大主题
import echart from 'echarts'

// 自定义全局变量/函数
import global from './public/global/index'

Vue.use(global, {echart: echart})

// 主题自定义
import echartTheme from './public/echart-theme'

echartTheme.registerTheme(echart)

// element-ui
import ElementUI from 'element-ui'

import './assets/style/theme/element-variables.scss'

// 公共样式
import './assets/style/index.scss'

// 公共工具
import './libs/util'

// 全局自定义指令
import vdirective from './public/directive/index'

vdirective(Vue)

// filter
import vfilter from './public/filter'

vfilter.use(Vue)

// 多语言切换
import i18n from './i18n/i18n'

// cookie
import VueCookies from 'vue-cookie'

Vue.use(VueCookies)
Vue.use(ElementUI, {size: 'small'})

Vue.config.productionTip = true

// 取消Vue所以的日志与警告
Vue.config.silent = true

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  echart,
  components: {App},
  template: '<App/>'
})
