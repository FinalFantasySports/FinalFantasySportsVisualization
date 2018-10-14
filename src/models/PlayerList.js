import { Collection } from 'vue-mc'
import Player from './Player'
import axios from 'axios'

export default class PlayerList extends Collection {
  model () {
    return Player
  }

  defaults () {
    return {
      orderBy: 'valueBaseDraftScore'
    }
  }

  routes () {
    return {
      fetch: axios.defaults.baseURL + '/players'
    }
  }
}
