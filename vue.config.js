const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '@/assets'),
      }
    }
  },
  transpileDependencies: true
}
