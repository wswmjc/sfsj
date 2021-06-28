/*
 * @Author: wahrheit
 * @Date: 2021-06-24 17:53:20
 * @LastEditTime: 2021-06-25 15:31:24
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\utils\store.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */

/* global getApp */
const globalData = getApp().$wepy.$options.globalData
const $Set = (key, value) => {
  globalData[key] = value
}

const $Get = key => {
  return globalData[key]
}

const $CacheSet = (key, value) => {
  wx.setStorageSync(key, value)
}

const $CacheGet = key => {
  return wx.getStorageSync(key)
}

const $CacheRemove = key => {
  wx.removeStorageSync(key)
}

export default {
  $CacheGet,
  $CacheRemove,
  $CacheSet,
  $Get,
  $Set
}
