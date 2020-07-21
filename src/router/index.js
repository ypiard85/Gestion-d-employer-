import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Editemployer from '@/components/Editemployer'
import Viewemployer from '@/components/Viewemployer'
import Newemployer from '@/components/Newemployer'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'new-employer',
    component: Newemployer
  },
  {
    path: '/edit/:employer_id',
    name: 'edit-employer',
    component: Editemployer
  },
  {
    path: '/:employer_id',
    name: 'view-employer',
    component: Viewemployer
  },
 ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
