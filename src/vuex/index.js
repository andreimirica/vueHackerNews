import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storiestype: null,
    page: 1,
    user: {},
    listStart: 1,
    items: {
      newest: [],
      news: [],
      show: [],
      ask: [],
      jobs: []
    },
    currentItem: {}
  },
  mutations,
  actions,
  getters: {
    activeStateItems (state) {
      const { storiestype, items } = state
      return storiestype ? items[storiestype] : []
    },
    selectedItem (state) {
      return state.currentItem
    },
    selectedUser (state) {
      return state.user
    }
  }
})
