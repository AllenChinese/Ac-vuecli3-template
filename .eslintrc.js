// eslint for vue project
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 设置 js 的解析器为 babel-eslint
    // https://github.com/mysticatea/vue-eslint-parser#-options
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
      experimentalObjectRestSpread: true,
      jsx: false,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    // 'plugin:vue/recommended'
  ],
  rules: {
    // overwrite/add rules setting here, such as:
    // 'vue/no-unused-vars': 'error'
    // 禁止使用 console // 暂时关闭
    'no-console': 'off',
    // 最佳实践
    // 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
    'vue/html-end-tags': 'off',
    // 构造函数首字母必须大写
    'new-cap': 'error'
  }
}