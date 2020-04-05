import Vue from 'vue'
import Vuex from 'vuex'
import example from './modules/example.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    example
  }
})