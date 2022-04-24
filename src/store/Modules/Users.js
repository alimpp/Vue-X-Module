import axios from "axios"
import { GET_DATA } from '../constans/actions_constans'
import { SET_DATA } from '../constans/mutation_constans'
import { DO_LOAD } from '../constans/actions_constans'
import { FILTER_DATA } from '../constans/actions_constans'

const Users = {

    namespaced : true ,

    state: {
        users : []
    },
    getters: {
        allUsers(state){
            return state.users
        }
    },
    mutations: {
        [SET_DATA](state , users){
            return state.users = users 
        }
    },
    actions: {
        async [GET_DATA]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit('SET_DATA' , response.data)
        } , 

        async [DO_LOAD]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit('SET_DATA' , response.data)
        } ,

        async [FILTER_DATA]({commit} , limit){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
            commit('SET_DATA' , response.data)
        }
    },
}

export default Users 