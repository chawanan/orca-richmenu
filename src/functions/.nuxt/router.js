import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d760b14 = () => interopDefault(import('..\\..\\pages\\donburi.vue' /* webpackChunkName: "pages_donburi" */))
const _13d2fd7a = () => interopDefault(import('..\\..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _0da3904b = () => interopDefault(import('..\\..\\pages\\jpfood.vue' /* webpackChunkName: "pages_jpfood" */))
const _07e44dc8 = () => interopDefault(import('..\\..\\pages\\lunchbox.vue' /* webpackChunkName: "pages_lunchbox" */))
const _3142b41c = () => interopDefault(import('..\\..\\pages\\shabudelivery.vue' /* webpackChunkName: "pages_shabudelivery" */))
const _7e78adbb = () => interopDefault(import('..\\..\\pages\\sushi.vue' /* webpackChunkName: "pages_sushi" */))
const _8249090a = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/donburi",
    component: _2d760b14,
    name: "donburi"
  }, {
    path: "/inspire",
    component: _13d2fd7a,
    name: "inspire"
  }, {
    path: "/jpfood",
    component: _0da3904b,
    name: "jpfood"
  }, {
    path: "/lunchbox",
    component: _07e44dc8,
    name: "lunchbox"
  }, {
    path: "/shabudelivery",
    component: _3142b41c,
    name: "shabudelivery"
  }, {
    path: "/sushi",
    component: _7e78adbb,
    name: "sushi"
  }, {
    path: "/",
    component: _8249090a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
