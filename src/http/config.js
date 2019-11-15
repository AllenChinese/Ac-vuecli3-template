/**
 * axios 封装
 * 功能：
 * 1、统一调用方式
 * 2、错误异常统一处理 & 重定向
 * 3、鉴权（可选）
 * 4、抽离通用配置项
 * 5、全局 Loading 动画
 */
import axios from 'axios'
// import qs from 'qs'
import defaultOpt from '../config/httpDefaultOpt'

const dataConfig = function(method) {
  return ['POST', 'PATCH'].indexOf(method) > -1
}

// 方式一 (易扩展)
export default function $http(opt) {
  return new Promise((resolve, reject) => {
    const instance = axios.create(defaultOpt)
    // 所有请求都会等待 10 秒
    instance.defaults.timeout = 10000

    // request 拦截器
    instance.interceptors.request.use(
      (config) => {
        // Loading 动画
        // 鉴权
        // request 数据处理
        // 判断请求方式
        if (config.method.toUpperCase() === 'GET' || config.method.toUpperCase() === 'PUT') {
          config.params = config.payload || ''
        } else if (dataConfig(config.method.toUpperCase())) {
          config.data = config.payload || ''
        }
        return config
      },
      (error) => {
        //  1.判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          // console.log('根据你设置的timeout/真的请求超时 判断请求现在超时')
          // return service.request(originalRequest);//例如再重复请求一次
        }
        //  2.需要重定向到错误页面
        return Promise.reject(error)
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      (response) => {
        let data
        // 兼容IE9
        if (response.data == undefined) {
          data = response.request.responseText
        } else {
          data = response.data
        }
        return data
      },
      (error) => {
        if (error & error.response) {
          // 根据返回的错误状态码处理
          // console.log(error.response.status)
          return Promise.reject(error) // 返回接口返回的错误信息
        }
      }
    )

    //请求处理
    instance(opt)
      .then((res) => {
        resolve(res)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}
