import axios from "axios"

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
        setComments(state , comments){
            return state.comments = comments
        }
    },
    actions: {
       async getComments({commit}){
           const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
           commit('setComments' , response.data)
       }
    },
}

export default Comments