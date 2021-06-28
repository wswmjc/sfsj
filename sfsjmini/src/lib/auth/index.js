/*
 * @Author: wahrheit
 * @Date: 2021-06-24 18:02:32
 * @LastEditTime: 2021-06-25 18:19:05
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\lib\auth\index.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */
import request from '../../lib/request'

const GetDetailInfo = ({
  copybookId
}) => {
  return request.get('api/author/detail', {
    copybook_id: copybookId
  })
}

const GetList = ({
  dynastyId,
  typefaceId,
  type,
  start,
  rows
}) => {
  return request.get('api/author/lists', {
    dynasty_id: dynastyId,
    typeface_id: typefaceId,
    type,
    start,
    rows
  })
}

export default {
  GetList,
  GetDetailInfo
}
