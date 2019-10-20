import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/index'
import chart from '../components/chart'
// import code404 from '../components/code404'
import system from '../components/system'
import stystemInfo from '../components/ceair-stystem-info'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)


const router = new Router({
  mode: 'history',
  /* base: '/', */
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart,
      beforeEnter: (to, from, next) => {
        // 路由独享的守卫
        next()
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 全局路由守卫
  next()
  // next(false)
})
router.afterEach((to, from) => {
  // 全局后置守卫
})
export default router
