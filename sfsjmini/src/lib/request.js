/*
 * @Author: wahrheit
 * @Date: 2021-06-24 17:42:22
 * @LastEditTime: 2021-06-25 15:43:26
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\lib\request.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */

/* global getApp */
import utils from '../utils'
const app = getApp()
const wepy = app.$wepy
console.log(app, wepy)
const APIHost = wepy.$options.globalData.BaseHost
// const APIHost = 'https://childapi40.qupeiyin.com/'
let defaultHeader = {
  'content-type': 'application/json;charset=UTF-8'
}
export default {
  post(requesturl, params, config) {
    params = params || {}
    if (utils.Store.$Get('auth_token')) {
      params.auth_token = utils.Store.$Get('auth_token')
    }
    if (utils.Store.$Get('uid')) {
      params.uid = utils.Store.$Get('uid')
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: typeof requesturl === 'string' ? `${APIHost}${requesturl}` : `${requesturl.host}${requesturl.url}`,
        data: params,
        method: 'post',
        header: {
          ...defaultHeader,
          ...config
        },
        success(res) {
          const {tatusCode, errMsg, data} = res
          if (tatusCode === 200) {
            resolve(data)
          } else {
            reject(new Error(errMsg))
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  get(requesturl, params, config) {
    params = params || {}
    if (utils.Store.$Get('auth_token')) {
      params.auth_token = utils.Store.$Get('auth_token')
    }
    if (utils.Store.$Get('uid')) {
      params.uid = utils.Store.$Get('uid')
    }

    return new Promise((resolve, reject) => {
      wx.request({
        url: typeof requesturl === 'string' ? `${APIHost}${requesturl}` : `${requesturl.host}${requesturl.url}`,
        data: params,
        method: 'get',
        header: {
          ...defaultHeader,
          ...config
        },
        success(res) {
          console.log(res)
          const {statusCode, errMsg, data} = res
          if (statusCode === 200) {
            resolve(data)
          } else {
            reject(new Error(errMsg))
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
}
