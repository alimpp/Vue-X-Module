import axios from "axios"

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
        setPosts(state , posts){
            return state.posts = posts
        }
    },
    actions: {
       async getPosts({commit}){
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
           commit('setPosts' , response.data)
       }
    },
}

export default Posts