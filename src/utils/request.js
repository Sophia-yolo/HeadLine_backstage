import axios from 'axios'
import JSONbig from 'json-bigint'
import router from '@/router'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net',
  transformResponse: [function (data) {
    try {
      return JSONbig.parse(data)
    } catch (err) {
      // 转换失败，输出错误
      console.log('转换失败', err)
      return data
    }
  }]
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
// 添加响应拦截器
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const status = error.response.status
  if (status === 400) {
    // 请求参数错误
  } else if (status === 401) {
    // 清除本地存储中的登录状态
    window.localStorage.removeItem('user')
    // 跳转到登录页面
    router.push('/')
    Message('登录状态无效，请重新登录')
  } else if (status === 403) {
    // 没有操作权限
  } else if (status >= 500) {
    // 服务器异常
  }
  return Promise.reject(error)
})

export default request
