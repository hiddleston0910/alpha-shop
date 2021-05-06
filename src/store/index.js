import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      salutaion: 'Mr.',
      username: '',
      phone: '',
      email: '',
      city: '',
      addr: '',
      shoppingFee: '',
      ccname: '',
      cardnumber: '',
      expadte: '',
      ccv: ''
    }
  },
  mutations: {
    setInfo(state, info) {
      state.info = {
        ...state.info,
        ...info
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
