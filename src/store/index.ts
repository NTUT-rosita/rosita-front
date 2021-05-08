import { createStore, createLogger } from 'vuex'

import charts from './modules/charts'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    charts
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
