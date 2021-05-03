import { defineConfig } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgSprite'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import legacy from '@vitejs/plugin-legacy'
import { minifyHtml } from 'vite-plugin-html'

const renderRoutes = (() => {
  const routes = [
    '/',
    '/about',
    '/affairs-info',
    '/chart-info'
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

export default defineConfig({
  resolve: {
    alias: {
      '@': `${join(__dirname, 'src')}`
    }
  },
  plugins: [
    vue(),
    svgBuilder('./src/assets/svg/'),
    Components({
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: 'icon'
      })
    }),
    ViteIcons(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'dead', '> 1%', 'ie 10', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'ie 11', 'since 2002', 'unreleased versions']
    }),
    minifyHtml({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true
    })
  ],
  build: {
    minify: 'terser',
    brotliSize: true,
    cssCodeSplit: true,
    terserOptions: {
      sourceMap: false,
      ecma: 5,
      ie8: true,
      safari10: true,
      keep_classnames: false,
      keep_fnames: false,
      compress: true
    }
  },
  esbuild: {
    include: './src/**/*.{js,ts,jsx,tsx,css,json,text,base64,dataurl,file,binary}'
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes () {
      return renderRoutes
    },
    onPageRendered: (r, html) => {
      return html
    }
  }
})
