import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _83bfe362 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _5c6c93ce = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _629c771e = () => interopDefault(import('../pages/help.vue' /* webpackChunkName: "pages/help" */))
const _646b056e = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _fc1e44aa = () => interopDefault(import('../pages/Mailing.vue' /* webpackChunkName: "pages/Mailing" */))
const _011e6309 = () => interopDefault(import('../pages/Main.vue' /* webpackChunkName: "pages/Main" */))
const _74297a95 = () => interopDefault(import('../pages/manage.vue' /* webpackChunkName: "pages/manage" */))
const _0d56c4e7 = () => interopDefault(import('../pages/Maps.vue' /* webpackChunkName: "pages/Maps" */))
const _5bcad6f0 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
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
    path: "/admin",
    component: _83bfe362,
    name: "admin"
  }, {
    path: "/Category",
    component: _5c6c93ce,
    name: "Category"
  }, {
    path: "/help",
    component: _629c771e,
    name: "help"
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
    path: "/manage",
    component: _74297a95,
    name: "manage"
  }, {
    path: "/Maps",
    component: _0d56c4e7,
    name: "Maps"
  }, {
    path: "/users",
    component: _5bcad6f0,
    name: "users"
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
