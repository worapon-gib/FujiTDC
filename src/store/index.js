import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tap_appbar_value : "/dashboard"
  },
  mutations: {
    mu_tap_appbar_value(state,n) {
      state.tap_appbar_value = n
    },
  },
  actions: {
  },
  modules: {
  }
})
