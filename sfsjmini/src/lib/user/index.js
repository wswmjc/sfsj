/*
 * @Author: wahrheit
 * @Date: 2021-06-24 18:02:32
 * @LastEditTime: 2021-06-25 18:20:13
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\lib\user\index.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */
import request from '../../lib/request'

const GetUserInfo = ({
  uid
}) => {
  return request.get('api/user/info', {
    uid
  })
}
const GetCollectList = ({
  uid,
  type,
  start,
  rows
}) => {
  return request.get('api/collect/lists', {
    uid,
    type,
    start,
    rows
  })
}

const Collect = ({
  uid,
  type,
  copybookId
}) => {
  return request.post('api/collect/add', {
    uid,
    type,
    copybook_id: copybookId
  })
}

const Follow = ({
  uid,
  fansId
}) => {
  return request.post('api/fans/add', {
    uid,
    fans_uid: fansId
  })
}
const Unfollow = ({
  uid,
  fansId
}) => {
  return request.post('api/fans/delete', {
    uid,
    fans_uid: fansId
  })
}
const GetFollowList = ({
  uid,
  start,
  rows
}) => {
  return request.get('api/follows/lists', {
    uid,
    start,
    rows
  })
}
const GetFanList = ({
  uid,
  start,
  rows
}) => {
  return request.get('api/fans/lists', {
    uid,
    start,
    rows
  })
}

export default {
  GetUserInfo,
  GetCollectList,
  Collect,
  GetFanList,
  GetFollowList,
  Follow,
  Unfollow
}
