import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Resources from '@/components/Resources'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    }
  ]
})
