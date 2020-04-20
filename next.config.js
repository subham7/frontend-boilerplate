const antdLessLoader = require("next-antd-aza-less")
const withTM = require("next-transpile-modules")
// const modifyVars = require("./your/custom/vars")
const withCSS = require("@zeit/next-css")
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {}
  //  require.extensions['.css'] = file => {}
}

/* Without CSS Modules, with PostCSS */
module.exports = withCSS(
  antdLessLoader({
    // exportPathMap: async function() {
    //   const paths = {
    //     "/": { page: "/" },
    //     "/create": { page: "/create" }
    //   }
    //   return paths
    // },
    // transpileModules: ["antd"],
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    webpack: (config, { isServer }) => {
      config.plugins.push(
        new FilterWarningsPlugin({
          // ignore ANTD chunk styles [mini-css-extract-plugin] warning
          exclude: /Conflicting order/
        })
      )

      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals)
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader"
        })
      }

      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      }

      return config
    }
  })
)
