import Vue from 'vue'
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
