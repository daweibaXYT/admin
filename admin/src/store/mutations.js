export default {
  updateState (state, data) {
    Object.assign(state, data)
  },
  SET_LOGIN (state, data) {
    state.login = data
  },
  SET_MENU (state, data) {
    state.menu = data
  }
}
