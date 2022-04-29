import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage'
import postsPage from '../views/postsPage'
import tasksPage from '../views/tasksPage'
import usersPage from '../views/usersPage'
import commentsPage from '../views/commentsPage'

const routes = [
  
   {
     path: '/',
     name: 'homePage',
     component: homePage
   },
   {
    path: '/POSTS',
    name: 'postsPage',
    component: postsPage
  },
  {
    path: '/TASKS',
    name: 'tasksPage',
    component: tasksPage
  },
  {
    path: '/USERS',
    name: 'usersPage',
    component: usersPage
  },
  {
    path: '/COMMENTS',
    name: 'commentsPage',
    component: commentsPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
