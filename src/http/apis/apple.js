import $http from '../config'

// 获取所有苹果
export const getAppleList = (payload) => {
  return $http({
    method: 'get',
    url: 'https://f2e.dxy.net/mock-api/client/5a4c871dd1c5401981527d89',
    payload
  })
}