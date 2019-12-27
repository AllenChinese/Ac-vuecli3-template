const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  lintOnSave: false,
  productionSourceMap: process.env.NODE === 'development' ? true : false,
  /** 开启多进程处理 Babel 编译 */
  parallel: require('os').cpus().length > 1,
  chainWebpack: (config) => {
    // with an absolute path, it will only search in the given director.
    config.resolve.modules.store = new Set([
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ])

    // high frequency extension, it's best to be at the front of the array
    config.resolve.extensions.store = new Set(['.js', '.vue', '.json', '.mjs', '.jsx', '.wasm'])

    if (process.env.NODE_ENV === 'development') {
      // development
      // js is not compressed
      config.optimization.minimize(false)
      // css is not compressed
      config.plugins.delete('optimize-css')
    } else {
      // production
      // clean console.log
      config.optimization.minimizer([
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          terserOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log'],
            },
          },
        }),
      ])
    }
  },
  configureWebpack: {
    plugins: [new HardSourceWebpackPlugin()],
  },
}
