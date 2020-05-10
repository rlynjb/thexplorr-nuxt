import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      trips: []
    })
  })
}

export default createStore
