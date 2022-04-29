import { createStore } from 'vuex'
import Posts from './Modules/posts'
import Tasks from './Modules/tasks'
import Users from './Modules/Users'
import Comments from './Modules/comments'

export default createStore({

  modules: {
    Posts : Posts , 
    Tasks : Tasks , 
    Users : Users , 
    Comments : Comments , 
  }
  
})
