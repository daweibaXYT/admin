import axios from 'axios'
import Vue from 'vue'
import router from '../router/router'

let v = new Vue()
const service = axios.create({
  timeout: 6000
  // baseURL: process.env.VUE_APP_BASE_URL
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

service.interceptors.request.use((config) => {
  // 请求带上token
  const token = localStorage.getItem('token')
  if (token) {
    config.header['Authorization'] = token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const responseCode = response.status
  if (responseCode === 200) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}, error => {
  if (!error.response) {
    // 请求超时
    if (error.message.includes('timeout')) {
      v.$message.error('请求超时')
    } else {
      v.$message.error('请求失败,青检查网络是否连接')
    }
    return false
  }

  // 服务器返回不是 2 开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  const responseCode = error.response.status

  switch (responseCode) {
    // 401：未登录
    case 401:
      // 跳转登录页
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
      // 403: token过期
    case 403:
      // 弹出错误信息
      v.$message.error('登录信息过期，请重新登录')
      // 清除token
      localStorage.removeItem('token')
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1000)
      break
      // 404请求不存在
    case 404:
      v.$message.error('网络请求不存在')
      break
      // 其他错误，直接抛出错误提示
    default:
      v.$message.error(error.response.data.message)
      break
  }
  return Promise.reject(error)
})

export default service
