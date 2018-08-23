/**
 * vue-router
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 按需加载
const Home = r => require.ensure([], () => r(require('../pages/Home')))
const Install = r => require.ensure([], () => r(require('../pages/guide/Install')))
const QuickStart = r => require.ensure([], () => r(require('../pages/guide/QuickStart')))
const Layout = r => require.ensure([], () => r(require('../pages/layout/Layout')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/install',
      name: 'Install',
      component: Install,
      data: {
        title: '安装',
        sort: 1,
        group: '开发指南'
      }
    },
    {
      path: '/start',
      name: 'Start',
      component: QuickStart,
      data: {
        title: '快速上手',
        sort: 1,
        group: '开发指南'
      }
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      data: {
        title: 'layout 布局',
        sort: 2,
        group: '基础'
      }
    },
    {
      path: '/container',
      name: 'Container',
      data: {
        title: 'container 容器',
        sort: 2,
        group: '基础'
      }
    },
    {
      path: '/button',
      name: 'Button',
      data: {
        title: 'Input 输入框',
        sort: 3,
        group: '组件'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
