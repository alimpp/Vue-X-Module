import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage'
import postsPage from '../views/postsPage'
import tasksPage from '../views/tasksPage'
import usersPage from '../views/usersPage'
import commentsPage from '../views/commentsPage'
import blogsPage from '../views/blogsPage'
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
  {
    path: '/BLOGS',
    name: 'blogsPage',
    component: blogsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
