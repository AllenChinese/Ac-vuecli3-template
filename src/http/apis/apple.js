import $http from '../config'
import { isMock } from '../../config/apiOpt'
// 获取所有苹果
export const getAppleList = (payload) => {
  return $http({
    method: 'get',
    url: isMock ? '5a4c871dd1c5401981527d89' : '620002',
    payload,
  })
}
