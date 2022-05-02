import axios from "axios"
import { CREATE, GET_DATA , DO_LOAD , FILTER_DATA , DELETE } from '../constans/actions_constans'
import { SET_DATA , NEW_DATA , DELETED } from '../constans/mutation_constans'

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
        } , 

        [NEW_DATA](state , user){
            return state.users.unshift(user)
        } , 

        [DELETED](state , id){
            state.users = state.users.filter(user => user.id != id)
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
        } , 

        async [CREATE]({commit} , newUser){
            const response = await axios.post('https://jsonplaceholder.typicode.com/users' , {
                name : newUser.name , 
                username : newUser.username , 
                email : newUser.email , 
            }) 
            commit('NEW_DATA' , response.data)
        } , 

        async [DELETE]({commit} , id){
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            commit('DELETED' , id)
        }
    },
}

export default Users 