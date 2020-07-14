/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2019-12-09 17:22:12
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-06-13 02:17:41
 */ 
import Vue from 'vue'
import axios from 'axios'
import config from './config'
import { Message } from 'view-design'
import router from '../router/index'
// 全局配置baseURL
// 循环获取config对象的所有属性
// 将所有属性赋值给axios.defaults
// 自动挂载config的配置到axios默认配置中
for (const k in config) {
  axios.defaults[k] = config[k]
}
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 X-WWW-FORM-URLENCODED
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  if (config.method == "get") {
    config.data = true;
  }
  config.headers["Content-Type"] = "application/json";
  let token = localStorage.getItem('merchantToken') || ''
  let yy_task_id = localStorage.getItem('yy_merchant_task_id')||''
  config.headers.common['Authorization']=token
  config.headers.common['yytaskid']=yy_task_id
  //config.headers.Authorization = token
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  checkResponseCode(response)
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
const checkResponseCode = response => {
  switch (response.data.errcode) {
    case 0:
      return response.data
      break;
    case 500:
      Message.error({ content:response.data.errmsg, duration:3})
      return response.data
      break;
    case 404:
      Message.error({ content:response.data.errmsg, duration:3})
      return response.data
      break;
    //token失效
    case 40001:
      /*router.push({
        path:'/login'
      })*/
      Message.error({ content:response.data.errmsg, duration:3})
      localStorage.removeItem('merchantToken')
      location.href = '/#/'
      // 可以直接跳转到登录页面，重新登录获取 token
     // location.href = '/login'
      return  response.data
      break;
    case -1:
      return    Message.error({ content:response.data.errmsg, duration:3}),response.data
      break;
  }
}
export default axios
