import Vue from 'vue'
import Vuex from 'vuex'
import players from './modules/players'
// import products from './modules/products'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    players
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
