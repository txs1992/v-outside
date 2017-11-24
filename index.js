import { bind, unbind } from 'focus-outside'

export default {
  bind (el, binding) {
    bind(el, binding.value)
  },

  unbind (el) {
    unbind(el)
  },

  update (el, binding) {
    if (binding.value === binding.oldValue) {
      unbind(el)
    } else {
      bind(el, binding.value)
    }
  }
}
