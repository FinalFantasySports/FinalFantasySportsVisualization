import PlayerList from '../../models/PlayerList'

const state = {
  all: []
}

const getters = {}

const actions = {
  getAllPlayers () {
    let players = new PlayerList()
    players.fetch().then((response) => {
      state.all = response
    })
  }
}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
