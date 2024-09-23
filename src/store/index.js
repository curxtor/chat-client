import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    user: "",
    room: "",
    theme: true
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getRoom(state) {
      return state.room
    },
    getTheme(state) {
      return state.theme
    }
  },
  mutations: {
    setData(state, [user, room]) {
      state.user = user
      state.room = room
    },
    setTheme(state) {
      state.theme = !state.theme
    }
    
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
