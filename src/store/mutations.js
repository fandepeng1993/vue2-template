
import {mutatonTypes as types} from './mutations-types'
const mutations = {
  [types.get('SET_TOKEN')] (state, token) {
    state.user.token = token
  },
  [types.get('SET_LOGIN')] (state, loginState) {
    state.user.loginState = loginState
  },
  [types.get('SET_USERINFO')] (state, userInfo) {
    state.user.userInfo = userInfo
  },
  [types.get('SET_OTHERUSERINFO')] (state, otheruserInfo) {
    state.other.userInfo = otheruserInfo
  }
}

export default mutations
