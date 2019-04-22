const antdLessLoader = require("next-antd-aza-less")
const withTM = require('next-transpile-modules');
// const modifyVars = require("./your/custom/vars")
const withCSS = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
  require.extensions['.css'] = file => {} 
}

/* Without CSS Modules, with PostCSS */
module.exports =   withCSS(antdLessLoader({
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //     '/dashboard'
  //   }
  // },
    // transpileModules: ['antd'],
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    }
}));