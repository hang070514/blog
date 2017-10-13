import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '@/components/home'
import picture from '@/components/picture'

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
   /*   {
      path: '/*',
      redirect:'/home'
    }*/
  ]
})