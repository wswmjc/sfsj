/*
 * @Author: wahrheit
 * @Date: 2021-06-25 10:30:34
 * @LastEditTime: 2021-06-25 18:18:45
 * @LastEditors: wahrheit
 * @Description:
 * @FilePath: \sfsjmini\src\lib\common\index.js
 * 一往无前的唯一动力就是热爱你所做的一切
 */
import request from '../../lib/request'

const GetSearchConfig = () => {
  return request.get('api/basic/searchConfig')
}

export default {
  GetSearchConfig
}
