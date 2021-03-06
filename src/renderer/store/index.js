import Vue from 'vue'
import Vuex from 'vuex'
import einsatzmittel from './einsatzmittel'
import alarme from './alarme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastTimeReceived: 0
  },
  mutations: {
    SET_LAST_TIME_RECEIVED(state, time) {
      state.lastTimeReceived = time
    }
  },
  actions: {
    updateLastTimeReceived(context, time) {
      context.commit('SET_LAST_TIME_RECEIVED', time)
    }
  },
  getters: {
    getLastTimeReceived(state) {
      return state.lastTimeReceived
    }
  },
  modules: {
    einsatzmittel: einsatzmittel,
    alarme: alarme
  }
})
