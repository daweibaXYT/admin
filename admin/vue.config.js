const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const env = process.env.NODE_ENV
console.log(env)
let doMain = 'https://crs-manager-test.qianyuislands.com'
switch (env) {
  case 'production':
    doMain = 'https://crs-manager.qianyuislands.com'
    break
  case 'ptr':
    doMain = 'https://crs-manager-ptr.qianyuislands.com'
    break
  default:
    break
}
console.log(doMain)

module.exports = {
  publicPath: './',
  devServer: {
    port: 8877,
    open: true,
    // 代理多个地址
    proxy: {
      '/api': {
        target: doMain,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/v': {
        target: 'https://crs-manager-ptr.qianyuislands.com',
        changeOrigin: true,
        pathRewrite: {
          '^/v': ''
        }
      }
    }
  },
  configureWebpack: () => ({
    // devtool: 'source-map',
    resolve: {
      alias: {
        '~img': path.resolve('./src/assets/imgs'),
        '@': path.resolve('./src')
      }
    }
  }),
  chainWebpack: config => {
    // 不同环境对应不同的BASE_URL,方便axios请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
    if (process.env.NODE_ENV === 'production') {
      // 启用图片压缩
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .exclude.add(path.resolve('src/assets/icons/svg'))
        .end()
        .use('img-loader')
        .loader('img-loader')
        .options({
          plugin: [
            require('imagemin-jpegtran')(),
            require('imagemin-pngquant')({
              quality: [0.75, 0.85]
            })
          ]
        })

      // 启用gzip压缩,需要服务器做支持,判断浏览器是都支持gz文件,如果支持则返回gz文件即可
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        .tap(args => {})

      // 忽略生产环境打包文件
      var externals = {
        /* vue: 'Vue',
        axios: 'axios',
        'vue-router': 'VueRouter',
        'ant-design-vue': 'AntDesignVue',
        vuex: 'vueX',
        'element-ui': 'ELEMENT' */
      }
      config.externals(externals)
      // 这些第三方文件可以下载下来指定版本的包然后放到自己的cdn上去(如: 七牛)，引用地址改为自己的cdn地址即可(下面的地址只是举例有些无效)
      const cdn = {
        css: [
          /*  // ant-design-vue css
           '//cdn.staticfile.org/antDesinVue/1.3.13/antDesinVue.min.css',
           // element-ui css
           '//unpkg.com/element-ui/lib/theme-chalk/index.css' */
        ],
        js: [
          /*  // vue
           '//cdn.staticfile.org/vue/2.6.10/vue.min.js',
           // vue-router
           '//cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
           // vuex
           '//cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
           // axios
           '//cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
           // ant-design-vue
           '//cdn.staticfile.org/antDesinVue/1.3.13/antDesinVue.min.js',
           // element-ui js
           '//unpkg.com/element-ui/lib/index.js' */
        ]
      }

      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })

      // 生产环境清除掉警告,debugger,console,关闭sourceMap
      config
        .plugin('uglifyJs')
        .use(UglifyJsPlugin, {
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
        .tap(args => {})
    }
  }
}
