import axios from "axios"
import { GET_DATA } from '../constans/actions_constans'
import { SET_DATA } from '../constans/mutation_constans'

const Comments = {

    namespaced : true ,

    state: {
        comments : []
    },
    getters: {
        allComments(state){
            return state.comments
        }
    },
    mutations: {
        [SET_DATA](state , comments){
            return state.comments = comments
        }
    },
    actions: {
       async [GET_DATA]({commit}){
           const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
           commit('SET_DATA' , response.data)
       }
    },
}

export default Comments