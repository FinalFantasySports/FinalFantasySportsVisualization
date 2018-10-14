import Vue from 'vue'
import Vuex from 'vuex'
import PlayerStore from './modules/PlayerStore'
// import products from './modules/products'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    PlayerStore
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
