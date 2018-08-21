/**
 * vue-router
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 按需加载
const Home = r => require.ensure([], () => r(require('../pages/Home')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/install',
      name: 'Install'
    }, {
      path: '/start',
      name: 'Start'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
