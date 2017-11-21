import { bind, unbind } from 'focus-outside'

export default {
  bind (el, binding) {
    bind(el, binding.value)
  },

  unbind (el, binding) {
    unbind(el, binding.value)
  },

  update (el, binding) {
    if (binding.value === binding.oldValue) return
    bind(el, binding.value)
  }
}
