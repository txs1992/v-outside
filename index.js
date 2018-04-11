import {
  bind as focusBind,
  unbind as focusUnbind
} from 'focus-outside'

export default {
  bind (el, binding) {
    focusBind(el, binding.value)
  },

  unbind (el, binding) {
    focusUnbind(el, binding.value)
  },

  update (el, binding) {
    if (binding.value === binding.oldValue) {
      focusUnbind(el, binding.value)
    } else {
      focusBind(el, binding.value)
    }
  }
}
