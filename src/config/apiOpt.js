/**
 * 配置线上、线下环境、mock
 * baseUrl: 域名前缀
 */
const PRODUCT_URL = ``
const DEVELOP_URL = ``
const MOCK_URL = `https://f2e.dxy.net/mock-api/client/`

let isMock = process.env.NODE_ENV === 'development'
let baseUrl = ''

if (isMock) {
  baseUrl = `${MOCK_URL}`
} else {
  // 建议使用 --mode 区分
  baseUrl = process.env.NODE_ENV === 'development' ? `${DEVELOP_URL}` : `${PRODUCT_URL}`
}

export { isMock, baseUrl }
