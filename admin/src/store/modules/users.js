import {
  loginFn
} from '@/api/api'

export default {
  namespaced: true,
  state: {},
  actions: {
    async doLogin ({
      commit
    }, data) {
      await loginFn.login(data)
      return true
    }
  }
}
