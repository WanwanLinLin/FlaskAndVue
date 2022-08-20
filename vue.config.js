const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false,

  //代理跨域
  devServer: {
    host: '0.0.0.0',
    // https:true,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/v1': {
        target: 'http://127.0.0.1:8000',
        // target: 'http://39.98.123.211',
      },

    },
  },
},
)


// module.exports = {
//   //关闭eslint
//   lintOnSave: false,
//   //代理跨域
//   devServer: {
//     host: "localhost",
//     port: 8080,
//     https: false,
//     proxy: {
//       '/v1': {
//         target: 'http://127.0.0.1:8000',
//       },
//     },
//   },
// }