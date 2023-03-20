import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c6c93ce = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _646b056e = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _fc1e44aa = () => interopDefault(import('../pages/Mailing.vue' /* webpackChunkName: "pages/Mailing" */))
const _011e6309 = () => interopDefault(import('../pages/Main.vue' /* webpackChunkName: "pages/Main" */))
const _0d56c4e7 = () => interopDefault(import('../pages/Maps.vue' /* webpackChunkName: "pages/Maps" */))
const _e69e8b5c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _5c6c93ce,
    name: "Category"
  }, {
    path: "/Login",
    component: _646b056e,
    name: "Login"
  }, {
    path: "/Mailing",
    component: _fc1e44aa,
    name: "Mailing"
  }, {
    path: "/Main",
    component: _011e6309,
    name: "Main"
  }, {
    path: "/Maps",
    component: _0d56c4e7,
    name: "Maps"
  }, {
    path: "/",
    component: _e69e8b5c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
