<p align="center">
    <img width="200" src="https://img1.dxycdn.com/2019/1231/111/3388265118932096690-2.png">
</p>

<p align="center">
  <a href="#设计亮点">设计亮点</a>&nbsp;|&nbsp;<a href="#快速上手">快速上手</a>
</p>

**Ac-vuecli3-template** 是基于 [vue-cli3](https://cli.vuejs.org/) 以及 [vue](https://cn.vuejs.org/) 全家桶封装的最佳实践，助力前端进行快速产品开发。

![](https://img.shields.io/badge/版本-0.3.2-3963bc.svg)
![](https://img.shields.io/badge/node-8.11.0+-3963bc.svg)
![](https://img.shields.io/badge/脚手架-vuecli3-3963bc.svg)
![](https://img.shields.io/badge/license-MIT-3963bc.svg)
![](https://img.shields.io/badge/developer-@AllenChinese-3963bc.svg)

### 1. 技术栈方案

- Vue cli 3
- Vue
- Vuex
- Vue Router
- Webpack
- ElementUI

### 2. 设计亮点

- 重新封装了 Axios，API 管理、调用更加简单、优雅，并且预留了全局 Loading、错误处理。
- 结合 Vue-Router 和 Vuex 扩展了 start actions，可以集中管理各个页面初始化时需要发起的请求。
- 全局组件、通过组件、布局组件分类清晰。
- 默认使用路由懒加载，性能更好。

### 3. 兼容性

不支持 IE8 及以下版本

### 4. 快速上手

#### 开始

1.  `npm i` or `yarn install`
2.  `npm run serve` or `yarn run serve`
3.  `http://localhost:8081`

#### 调试

`watch` 指令配合 `Charles 代理`

### 5. 菜单配置

```js
/**
 * 菜单配置包含`头部菜单`和`侧边栏菜单`两种用法一致
 */
const headerMenuConfig = []
const asideMenuConfig = [
  {
    path: '/fruit',
    name: '水果',
    icon: 'el-icon-menu',
    children: [
      {
        path: '/apple',
        name: '苹果',
      },
    ],
  },
]
```

### 6. API 接口调用

```js
import $http from '../config' // axios 的封装
import { isMock } from '../../config/env' // 接口环境判断

// 获取所有苹果
export const getAppleList = (payload) => {
  return $http({
    method: 'get',
    url: isMock ? '5a4c871dd1c5401981527d89' : '620002',
    payload,
  })
}
```

### 7. 组件分配约定

\*所有单文件组件的文件名以大写字母开发

#### 通用组件

- 通用组件放置在 /src/components/Common 目录下，并且在 index.js 中进行聚合导出处理

#### 全局组件

- 全局组件放置在 /src/components/Base 目录下，全局组件的命名规则必须以 BaseXXX 开头或者 BaseXXX/index.vue 形式，已经在同目录下 global.js 编写了自动注册方法，无须手动操作。

```js
/**
 * 将查找到的 component/base 目录下的组件注册为全局组件
 * 组件命名规则 BaseXXX.vue or BaseXXX/index.vue
 * 组册全局的组件必须有 name 属性，该属性为注册组件的 name
 */
const context = require.context('@/components/Base', true, /Base[^/]*\.vue$|index\.vue$/)
context.keys().forEach((key) => {
  let component = context(key).default
  console.log(component)
  Vue.component(component.name, component)
})
```

当然你也可以扩展更多的组件分类。

#### 页面私有组件

- 私有组件放置在 /views/selfpage/components 目录下

### 8. 注释

```js
/** this is a single line JSDoc */
function todo() {}
```

```js
function todo() {
  // this is a inner single line JSDoc
  const a = 1
}
```

```js
/**
 * Create a point, this is a multi-line
 * @param {number} x - The x value.
 * @param {number} y - The y value.
 * @return {number} The x + y value.
 */
function todo(x = 0, y = 0) {
  return x + y
}
```

[参考文档 JSDoc](https://www.html.cn/doc/jsdoc/)

### 9. Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
