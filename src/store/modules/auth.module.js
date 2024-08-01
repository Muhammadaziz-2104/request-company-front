import axios from "axios";
import {error} from "@/utils/error";

export default {
    namespaced:true,
    state(){
        return {
            token:  localStorage.getItem('jwt-token')
        }
    },
    mutations:{
          setToken(state,token) {
              state.token = token
              localStorage.setItem('jwt-token',token)
          },
          logout(state) {
              state.token = null
              localStorage.removeItem('jwt-token')
          }
    },
    actions:{
        async login({commit,dispatch},payload){
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
                const {data} = await axios.post(url,{...payload,returnSecureToken:true})
                commit('setToken', data.idToken)
                dispatch('setMessage',null ,{root: true})
                // console.log(data)
            }
            catch (e) {
                // throw new Error()
                dispatch('setMessage',{
                    status:'danger',
                    title: 'Xatolik',
                    text:error(e.response.data.error.message)
                },{root: true})
            }

        }
    },
    getters:{
        token(state){
            return state.token
        },
        isAuthtificated(_,getters){
            return !!getters.token
        }
    }
}