import { DirectiveOptions } from 'vue'

const OutsideDirective: DirectiveOptions = {
  bind(el: Element, binding: any) {
    console.log('bind', el, binding)
  },
}

export default OutsideDirective
