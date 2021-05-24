import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.sessionStorage
})

const store = createStore({
    state () {
      return {
        logged: false,
        user: null,
      }
    },
    mutations: {
      login(state, payload) {
        state.logged = true
        state.user = payload.user
        
        console.log("Store :", state.user);
      },
      logout(state) {       
        state.logged = false
        state.user = null
      }
    },    
    plugins: [vuexPersist.plugin],
  })
export default store
