import axios from "../../axios/request";
import {error} from "@/utils/error";
import store from "@/store";

export default {
    namespaced:true,
    state(){
        return {
            requests: []
        }
    },
    mutations:{
        setRequests(state,requests) {
            state.requests = requests
        },
        addRequest(state,requests){
            state.requests.push(requests)
        }
    },
    actions:{
        async create({commit,dispatch},payload){
            try {
                const token = store.getters['auth/token']
                console.log(token)
                const {data} = await axios.post(`/requests.json?auth=${token}`,payload)
                commit('addRequest',{...payload,id:data.name})
                dispatch('setMessage',{
                    status:'primary',
                    text:'Ariza Muvaffaqiyatli qo\'shildi!'
                },{root: true})
                console.log(data)
            }
            catch (e) {
                // throw new Error()
                dispatch('setMessage',{
                    status:'danger',
                    text:error(e )
                },{root: true})
            }

        },
        async load({commit,dispatch}){
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.get(`/requests.json?auth=${token}`)
                const requests = Object.keys(data).map(id =>({...data[id],id}))
                commit('setRequests',requests)
            }
            catch (e) {
                dispatch('setMessage',{
                    status:'danger',
                    text:error(e)
                },{root: true})
            }

        },
        async loadById({dispatch},id){
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.get(`/requests/${id}.json?auth=${token}`)
                // console.log(data)
                return data
            }
            catch (e) {
                dispatch('setMessage',{
                    status:'danger',
                    text:error(e)
                },{root: true})
            }

        },
        async updateById({dispatch},request){
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.put(`/requests/${request.id}.json?auth=${token}`,request)
                // console.log(data)
                console.log('ishlamadi anqayman ')

                return data

            }
            catch (e) {
                dispatch('setMessage',{
                    status:'danger',
                    text:error(e),

                },{root: true})
                console.log('ishlamadi  ')

            }

        },
        async delete({dispatch},id){
            try {
                const token = store.getters['auth/token']
                const {data} = await axios.delete(`/requests/${id}.json?auth=${token}`)
                dispatch('setMessage',{
                    status:'primary',
                    text:'Ariza Muvaffaqiyatli o`chirildi'
                },{root: true})
                return data
            }
            catch (e) {

                dispatch('setMessage',{
                    status:'danger',
                    text:error(e)
                },{root: true})
                console.log('catch ishlayabti deleta')
            }

        }
    },
    getters:{
        requests(state) {
            return state.requests
        }
    }
}