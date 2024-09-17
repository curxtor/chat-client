import { createStore } from 'vuex'

export default createStore({
  state: {
    user: "",
    room: ""
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getRoom(state) {
      return state.room
    }
  },
  mutations: {
    setData(state, [user, room]) {
      state.user = user
      state.room = room
    }
    
  },
  actions: {
  },
  modules: {
  }
})
