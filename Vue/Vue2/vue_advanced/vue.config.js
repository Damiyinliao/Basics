const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   proxy: 'http://localhost:5000'
  // },
  // devServer:{
  //   proxy: {
  //     '/api1':{
  //       target: 'http://localhost:5000',
  //       pathRewrite:{'^/api1':''},
  //       ws: true,
  //       changeOrigin: false
  //     },
  //     '/api2':{
  //       target: 'http://localhost:5001',
  //       pathRewrite:{'^/api2':''},
  //       ws: true,
  //       changeOrigin: false
  //     },
  //   }
  // },
})
