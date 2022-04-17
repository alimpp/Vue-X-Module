import axios from "axios"

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
        setUsers(state , users){
            return state.users = users 
        }
    },
    actions: {
        async getUsers({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit('setUsers' , response.data)
        }
    },
}

export default Users 