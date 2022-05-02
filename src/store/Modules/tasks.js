import axios from "axios"
import { GET_DATA , UPDATE , DO_LOAD , FILTER_DATA , CREATE , DELETE } from '../constans/actions_constans'
import { NEW_DATA, SET_DATA , UPDATE_TASK , DELETE_TASK  } from '../constans/mutation_constans'

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
        [NEW_DATA](state , task){
            return state.tasks.unshift(task)
        } , 
        [UPDATE_TASK](state , task){
            const item = state.tasks.findIndex(index => index.id === task.id)
            if(item != -1){
                state.tasks.splice(item , 1 , task)
            }else{
                console.log("ERROR");
            }
        } , 
        [DELETE_TASK](state , id){
          state.tasks = state.tasks.filter(task => task.id != id)
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
            commit('NEW_DATA' , response.data)
        } , 

        async [UPDATE]({commit} , task){
             const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}` , {
                 id : task.id , 
                 title : task.title , 
                 completed : !task.completed
             })  
             commit('UPDATE_TASK' , response.data)
        } , 

        async [DELETE]({commit} , id){
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            commit('DELETE_TASK' , id)
        }

    },
}

export default Tasks 