import axios from "axios"
import { GET_DATA } from '../constans/actions_constans'
import { SET_DATA } from '../constans/mutation_constans'

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
        }
    },
}

export default Users 