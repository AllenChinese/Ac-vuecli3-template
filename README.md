## vue-cli-template

Vue 3.0 全家桶开发最佳实践

### 1. 技术栈方案

- Vue cli 3
- Vue
- Vuex
- Vue Router
- Webpack
- ElementUI

### 2. 兼容性

不支持 IE8 及以下版本

### 3. 项目开发

#### 开始

1.  `npm i`
2.  `npm run serve`
3.  `http://localhost:8081`

#### 调试

`watch` 指令配合 `Charles 代理`

### 4. 菜单配置

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

### 5. API 接口调用

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

### 6. 组件分配约定

\*所有单文件组件的文件名以大写字母开发

#### 通用组件

- 通用组件放置在 /src/components/Common 目录下，并且在 index.js 中进行聚合导出处理

#### 全局组件

- 全局组件放置在 /src/components/Base 目录下，全局组件的命名规则必须以 BaseXXX 开头或者 BaseXXX/index.vue 形式

#### 页面私有组件

- 私有组件放置在 /views/selfpage/components 目录下

```js
Vue.component('my-component-name', {
  /* ... */
})
```

同时，在该目录下的 `index.js` 中作聚合导出，`main.js` 已引入

#### 页面私有组件

- 私有组件放置在 /views/selfpage/components 目录下

### 7. 注释

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
