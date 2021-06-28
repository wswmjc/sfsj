/*
 * @Author: wahrheit
 * @Date: 2021-06-24 18:02:32
 * @LastEditTime: 2021-06-25 18:19:40
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\lib\friend\index.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */
import request from '../../lib/request'

const Add = ({
  uid,
  content,
  pic,
   typefaceId,
   authorId
}) => {
  return request.post('api/invitation/add', {
    uid,
    content,
    pic,
    typeface_id: typefaceId,
    author_id: authorId
  })
}
const GetDetailInfo = ({
  invitationId
}) => {
  return request.get('api/invitation/detail', {
    invitation_id: invitationId
  })
}

const GetList = ({
  type,
  start,
  rows
}) => {
  return request.get('api/invitation/lists', {
    type,
    start,
    rows
  })
}

export default {
  Add,
  GetList,
  GetDetailInfo
}
