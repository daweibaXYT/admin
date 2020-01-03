import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 以下按照模块引入
import users from './modules/users'

Vue.use(Vuex)

const state = {
  login: null,
  menu: [],
  addRouters: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    users
  }
})
window.store = store

export default store
