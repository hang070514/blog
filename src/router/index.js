import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '@/components/home'
import picture from '@/components/picture'
import project from '../components/project'
import introduce from '../components/introduce'
import contact from '../components/contact'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
      {
      path: '/picture',
      name: 'picture',
      component: picture
    },
     {
      path: '/project',
      name: 'project',
      component: project
    },
     {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
     {
      path: '/contact',
      name: 'contact',
      component: contact
    }
   /*   {
      path: '/*',
      redirect:'/home'
    }*/
  ]
})
