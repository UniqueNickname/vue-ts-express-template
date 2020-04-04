export default {
  state: {
    userName: 'no name'
  },
  mutations: {
    setName (state, name) {
      state.userName = name
    },
  },
  actions: {
    SOCKET_User ({ commit }, data) {
      commit('setName', data.name)
    }
  },
  getters: {
    getName (state) {
      return state.userName
    }
  }
}