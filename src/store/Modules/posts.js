import axios from "axios"
import { GET_DATA , FILTER_DATA , DO_LOAD , CREATE , DELETE } from '../constans/actions_constans'
import { SET_DATA , NEW_DATA , DELETE_TASK } from '../constans/mutation_constans'

const Posts = {

    namespaced : true ,

    state: {
       posts : []
    },
    getters: {
        allPosts(state){
            return state.posts
        }
    },
    mutations: {

        [SET_DATA](state , posts){
            return state.posts = posts
        } , 

        [NEW_DATA](state , post){
            return state.posts.unshift(post)
        } , 
        [DELETE_TASK](state , id){
            state.posts = state.posts.filter(post => post.id != id)
        }

    },
    actions: {

       async [GET_DATA]({commit}){
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
           commit('SET_DATA' , response.data)
       } ,

       async [DO_LOAD]({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('SET_DATA' , response.data)
       } ,

       async [FILTER_DATA]({commit} , limit){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            commit('SET_DATA' , response.data)
       } , 

       async [CREATE]({commit} , newPost){
           const response = await axios.post('https://jsonplaceholder.typicode.com/posts' , {
               title : newPost.title , 
               body : newPost.body , 
           })
           commit('NEW_DATA' , response.data)
       } , 

       async [DELETE]({commit} , id){
           await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
           commit('DELETE_TASK' , id)
       }

    },
}

export default Posts