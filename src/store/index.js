import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user/user'
import other from './modules/other/other'
// 查看vuex日志
import createLogger from 'vuex/dist/logger'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
// webpack  npm run dev 就是dev环境
// webpack  npm run build 就是production环境

export default new Vuex.Store({
  modules: {
    user,
    other
  },
  getters,
  actions,
  mutations,
  // 严格模式，debug为true 开启严格模式
  strict: debug,
  plugins: debug ? [createLogger()] : []

})
