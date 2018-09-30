let mapgettings = {
  token: state => state.user.token,
  loginState: state => state.user.loginState,
  userInfo: state => state.user.userInfo,
  otherInfo: state => state.other.userInfo
}

export default mapgettings
