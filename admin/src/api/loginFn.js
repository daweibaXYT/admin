import axios from '.'
/*
 *两种输出方式
 *第一种export 对应的引入方式import {name} from '路径'
 *第二种export default  对应的引入方式import name from name
 */
/* export const login = (data) => {
  return axios.request({
    url: '/api/operator/auth/login',
    data,
    method: 'post'
  })
} */

export default {
  login (data) {
    return axios.request({
      url: '/api/operator/auth/login',
      data,
      method: 'post'
    })
  }
}
