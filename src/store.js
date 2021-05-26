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
        admin: false,
        user: null
      }
    },
    mutations: {
      login(state, payload) {
        state.logged = true
        state.user = payload.user
        
        if (payload.user.admin == 1){
          state.admin = true  
        }
        else{          
          state.admin = false  
        }
      },
      logout(state) {       
        state.logged = false
        state.admin = false     
        state.user = null   
      }
    },    
    plugins: [vuexPersist.plugin],
  })
export default store
