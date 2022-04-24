import axios from "axios"
import { GET_DATA } from '../constans/actions_constans'
import { SET_DATA } from '../constans/mutation_constans'
import { NEW_TASK } from '../constans/mutation_constans'
import { DO_LOAD } from '../constans/actions_constans'
import { FILTER_DATA } from "../constans/actions_constans"
import { CREATE } from '../constans/actions_constans'

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
        } , 
        [NEW_TASK](state , task){
            return state.tasks.unshift(task)
        }
    },
    actions: {
        async [GET_DATA]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit('SET_DATA' , response.data)
        } ,

        async [DO_LOAD]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit('SET_DATA', response.data)
        } ,

        async [FILTER_DATA]({commit} , limit){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            commit('SET_DATA' , response.data)
        } ,

        async [CREATE]({commit} , newTask){
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos' , {
                title : newTask , 
                completed : false 
            })
            commit('NEW_TASK' , response.data)
        }

    },
}

export default Tasks 