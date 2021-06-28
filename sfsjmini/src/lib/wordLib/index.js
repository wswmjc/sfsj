/*
 * @Author: wahrheit
 * @Date: 2021-06-24 18:02:32
 * @LastEditTime: 2021-06-28 17:01:00
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\lib\wordLib\index.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */
import request from '../../lib/request'

const GetDetailInfo = ({
  copybookId
}) => {
  return request.get('api/copybook/detail', {
    copybook_id: copybookId
  })
}

const GetList = ({
  dynastyId,
  typefaceId,
  type,
  start,
  rows,
  keyword = ''
}) => {
  return request.get('api/copybook/lists', {
    dynasty_id: dynastyId,
    typeface_id: typefaceId,
    type,
    start,
    rows,
    word: keyword
  })
}

export default {
  GetList,
  GetDetailInfo
}
