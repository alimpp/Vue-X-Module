import axios from "axios"
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
        setTasks(state , tasks){
            return state.tasks = tasks
        }
    },
    actions: {
        async getTasks({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit('setTasks' , response.data)
        }
    },
}

export default Tasks 