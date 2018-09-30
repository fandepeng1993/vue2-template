import {mutatonTypes as types} from './mutations-types'

let actions = new Map()

actions = {
  setToken: ({commit}, token) => {
    commit(types.get('SET_TOKEN'), token)
  },
  setLoginState: ({commit}, loginState) => {
    commit(types.get('SET_LOGIN'), loginState)
  },
  setUserInfo: ({commit}, userInfo) => {
    commit(types.get('SET_USERINFO'), userInfo)
  },
  setOtherUserInfo: ({commit}, otheruserInfo) => {
    commit(types.get('SET_OTHERUSERINFO'), otheruserInfo)
  }
}
export default actions
