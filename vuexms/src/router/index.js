import Vue from 'vue'
import Router from 'vue-router'
const login = () => import('@/components/login')
const index = () => import('@/components/index')
const vipusers = () => import('@/components/vipusers')
const userlist = () => import('@/components/userlist')
const home = () => import('@/components/home')
const passwordedit = () => import('@/components/passwordedit')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    } ,{
      path: '/',
      name: 'index',
      component: index,
      children:[
       {
	      path: '',
	      name: 'home',
	      component: home
	    },
       {
	      path: '/userlist',
	      name: 'userlist',
	      component: userlist
	    }, {
	      path: '/vipusers',
	      name: 'vipusers',
	      component: vipusers
	    }, {
	      path: '/passwordedit',
	      name: 'passwordedit',
	      component: passwordedit
	    }
      ]
    }
  ]
})
