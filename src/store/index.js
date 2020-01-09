import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    increment (state) {
      state.count++
    },
  },
  actions: {
    incrementAsync({ commit }){
      setTimeout(() => commit('increment'), 2000)
    }
  }
})

export default store