/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-13 20:40:48
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-13 20:42:21
 */ 
module.exports = {
  devServer: {
    open: process.platform === 'darwin',

    host: '0.0.0.0',
    https: false,
    overlay: {
      warnings: false,
      errors: true
    },
    hotOnly: false, 
    proxy: {
      '/dev': {
        target: 'http://api_test.yingyingfu.com',
       // changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/dev': ''
        }
      },
    }, 
  }, 
}