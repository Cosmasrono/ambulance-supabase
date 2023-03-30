export { default as Cords } from '../../components/Cords.vue'
export { default as DisplayMaps } from '../../components/DisplayMaps.vue'
export { default as GeoMap } from '../../components/Geo-map.vue'
export { default as Loader } from '../../components/Loader.vue'
export { default as SendMail } from '../../components/SendMail.vue'
export { default as Signup } from '../../components/Signup.vue'
export { default as CurrentPlace } from '../../components/currentPlace.vue'
export { default as Page } from '../../components/page.vue'
export { default as Test } from '../../components/test.vue'

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
