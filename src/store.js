import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

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
        console.log("Update", payload);

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
    plugins: [createPersistedState({      
      key: 'my-app',
      storage: window.sessionStorage
    })],
  })
export default store
