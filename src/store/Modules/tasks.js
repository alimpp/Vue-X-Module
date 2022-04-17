import axios from "axios"
import { GET_DATA } from '../constans/actions_constans'
import { SET_DATA } from '../constans/mutation_constans'

const Tasks = {

    namespaced : true ,

    state: {
        tasks : []
    },
    getters: {
        allTasks(state){
            return state.tasks
        }
    },
    mutations: {
        [SET_DATA](state , tasks){
            return state.tasks = tasks
        }
    },
    actions: {
        async [GET_DATA]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit('SET_DATA' , response.data)
        }
    },
}

export default Tasks 