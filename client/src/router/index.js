import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/views/Login')
const Register = () => import('@/views/Register')
const Index = () => import('@/views/Index')
const TodoCreate = () => import('@/views/TodoCreate')
const EditTodo = () => import('@/views/TodoEdit')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/add',
      name: 'TodoCreate',
      component: TodoCreate,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/edit',
      name: 'editTodo',
      component: EditTodo,
      meta: {
        requireAuth: true
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     const token = window.localStorage.getItem('token')
//     if (token) {
//       Vue.prototype.$http.defaults.headers.common.Authorization = token
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router