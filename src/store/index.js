import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    idCounter: 0 // needed to fix 'randomuser.me' bug
  },
  mutations: {
    SET_STATE(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    async fetchUsers({ state, commit }, url) {
      axios.get(url)
        .then(({data: {results: value}}) => {
          value = value.map(user => {
            user.id = state.idCounter
            commit('SET_STATE', {key: 'idCounter', value: state.idCounter + 1})
            return user
          })
          commit('SET_STATE', {key: 'users', value})
        })
      
    }
  },
  modules: {
  }
})
