const antdLessLoader = require("next-antd-aza-less")
// const modifyVars = require("./your/custom/vars")
const withCSS = require('@zeit/next-css')
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

/* Without CSS Modules, with PostCSS */
module.exports =  withCSS(antdLessLoader({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    }
}));