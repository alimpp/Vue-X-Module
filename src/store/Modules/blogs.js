import axios from "axios"
import { GET_DATA } from "../constans/actions_constans"
import { SET_DATA } from "../constans/mutation_constans"

const Blogs = {

    namespaced : true ,

    state: {
        blogs : []
    } , 

    getters: {
        allBlogs(state){
            return state.blogs
        }
    } , 

    mutations: {
        [SET_DATA](state , blogs){
            return state.blogs = blogs
        }
    } , 
    
    actions: {
        async [GET_DATA]({commit}){
            const response = await axios.get('https://fakestoreapi.com/products')
            commit('SET_DATA' , response.data)
        }
    } ,
}

export default Blogs