import PlayerApi from '../../services/api/PlayerApi'

export default {
  namespaced: true,

  state: {
    all: []
  },

  mutations: {
    SET_PLAYERS (state, payload) {
      state.all = payload
    }
  },

  actions: {
    GET_PLAYERS (context, config) {
      return PlayerApi.getAllPlayers()
        .then(players => {
          context.commit('SET_PLAYERS', players)
        })
        .catch(err => console.error('Player Store Error: ', err))
        .finally(() => {
          this.loading = false
        })
    }
  }
}
