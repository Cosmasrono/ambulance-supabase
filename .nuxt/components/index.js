export const Cords = () => import('../../components/Cords.vue' /* webpackChunkName: "components/cords" */).then(c => wrapFunctional(c.default || c))
export const DisplayMaps = () => import('../../components/DisplayMaps.vue' /* webpackChunkName: "components/display-maps" */).then(c => wrapFunctional(c.default || c))
export const GeoMap = () => import('../../components/Geo-map.vue' /* webpackChunkName: "components/geo-map" */).then(c => wrapFunctional(c.default || c))
export const Loader = () => import('../../components/Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const SendMail = () => import('../../components/SendMail.vue' /* webpackChunkName: "components/send-mail" */).then(c => wrapFunctional(c.default || c))
export const Signup = () => import('../../components/Signup.vue' /* webpackChunkName: "components/signup" */).then(c => wrapFunctional(c.default || c))
export const CurrentPlace = () => import('../../components/currentPlace.vue' /* webpackChunkName: "components/current-place" */).then(c => wrapFunctional(c.default || c))
export const Test = () => import('../../components/test.vue' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
