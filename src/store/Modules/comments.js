import axios from "axios"
import { GET_DATA , CREATE , FILTER_DATA , DO_LOAD } from '../constans/actions_constans'
import { SET_DATA , NEW_DATA } from '../constans/mutation_constans'

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
        } , 

        [NEW_DATA](state , comment){
            return state.comments.unshift(comment)
        }

    },
    actions: {
       async [GET_DATA]({commit}){
           const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
           commit('SET_DATA' , response.data)
       } , 

       async [DO_LOAD]({commit}){
           const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
           commit('SET_DATA' , response.data)
       } , 

       async [FILTER_DATA]({commit} , limit){
           const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
           commit('SET_DATA' , response.data)
       } , 

       async [CREATE]({commit} , newComment){
           const response = await axios.post('https://jsonplaceholder.typicode.com/comments' , {
               name : newComment.name , 
               body : newComment.body , 
               email : newComment.email , 
           })
           commit('NEW_DATA' , response.data)
       }

    },
}

export default Comments