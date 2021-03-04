const PrerenderSpaPlugin = require("prerender-spa-plugin");
const path = require('path')
const resolve = dir => path.join(__dirname, dir);
const isProduction = process.env.NODE_ENV === 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const needBundleAnalysis = process.argv.includes('--analyze')
const renderRoutes = (() => {
  const routes = [
    '/',
    '/about',
    '/affairs-info'
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack: config => {
    if (isProduction && needBundleAnalysis) {
      config.plugin('analyzer').use(new BundleAnalyzerPlugin())
    }
    config.performance
      .maxEntrypointSize(2000000)
      .maxAssetSize(1000000)
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include
      .add(resolve("src/assets/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "[name].svg" })
  },
  configureWebpack: config => {
    const plugins = []
    if (isProduction) {
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          maxSize: 40000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                return `${packageName.replace('@', '')}`
              }
            }
          }
        }
      };
      plugins.push(
        new PrerenderSpaPlugin({
          staticDir: resolve("dist"),
          routes: renderRoutes,
          registry: undefined,
          useRenderEvent: true,
          onlyProduction: true,
          postProcess(renderedRoute) {
            renderedRoute.route = renderedRoute.originalRoute
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
            }
            return renderedRoute
          },
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: "app-rendered",
            maxConcurrentRoutes: 20,
            headless: true,
          })
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins];
  }
}
