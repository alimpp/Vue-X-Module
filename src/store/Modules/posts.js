import axios from "axios"
import { GET_DATA } from '../constans/actions_constans'
import { SET_DATA } from '../constans/mutation_constans'

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
        }
    },
    actions: {
       async [GET_DATA]({commit}){
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
           commit('SET_DATA' , response.data)
       }
    },
}

export default Posts