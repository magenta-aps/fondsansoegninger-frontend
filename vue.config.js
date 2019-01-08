const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true, // allows the template option in components
  chainWebpack: config => {
    // disable eslinting for now...
    config.module.rules.delete('eslint')
  },
  configureWebpack: {
    plugins: [
      new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // ignore locales and import in main.js instead
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 250000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  pluginOptions: {
    i18n: {
      locale: 'da',
      fallbackLocale: 'da',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
