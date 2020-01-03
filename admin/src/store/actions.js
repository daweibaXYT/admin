import {
  loginFn
} from '../api/api'
// import loginFn from '../api/loginFn'

export default {
  async doLogin ({
    commit
  }, data) {
    var res = await loginFn.login(data)
    console.log(res)
    return true
  }
}
