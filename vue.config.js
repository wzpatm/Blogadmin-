const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    // 设置代理
    proxy: {
      '/api': {
        // target: 'http://localhost:8888/', // 开发环境下使用
        target: 'http://localhost:8888', // 生产环境下需要根据实际情况修改
        changeOrigin: true, //改变源
        // pathRewrite: {
        //   '^/api': '/' //路径重写
        // },//配置上诉代码 相当于 将/api 替换成 /
        // pathRequiresRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
})
