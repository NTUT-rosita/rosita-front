import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routerOptions } from '@/router'
import 'virtual:windi.css'

import Icon from '@/plugins/fontAwesome'

export const createApp = ViteSSG(
  App,
  routerOptions,
  ({ app, router, isClient }) => {
    app.component('Icon', Icon)
  }
)
