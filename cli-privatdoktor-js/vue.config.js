const { VuetifyPlugin } = require( 'webpack-plugin-vuetify' )
process.env.VUE_APP_CLIENTVERSION = require( './package.json' ).version
process.env.VUE_APP_APIVERSION = require( './package.json' ).apiVersion

module.exports = {
  publicPath : process.env.VUE_APP_PUBLICROOTPATH,
  outputDir : 'dist/web',
  assetsDir : 'static',
  indexPath : 'index.html',
  filenameHashing : true,
  productionSourceMap : true,

  devServer : {
    headers : {
      'Access-Control-Allow-Origin' : '*'
    },
    client : {
      overlay : {
        warnings : false,
        errors : true
      }
    },
    allowedHosts : 'all'
  },

  pluginOptions : {
    i18n : {
      locale : 'hu',
      fallbackLocale : 'en',
      localeDir : 'localization',
      enableInSFC : false
    }
  },

  // transpileDependencies : [ 'vuetify' ],

  chainWebpack : config => {
    config.resolve.alias.set( 'vue', '@vue/compat' )

    config.module.rule( 'vue' ).use( 'vue-loader' ).tap( options => {
      return {
        ...options,
        compilerOptions : {
          compatConfig : {
            MODE : 2
          }
        }
      }
    } )
  },

  pages : { index : { entry : 'src/main-vue3.js' } },

  configureWebpack : {
    plugins : [
      new VuetifyPlugin( { autoImport : true } )
    ]
  }
}
