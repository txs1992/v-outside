import { VNodeDirective } from 'vue'

export function callback(target?: Element): void

interface OutsideBindingValue {
  key?: string | any
  className?: string
  callback(target?: Element): void
}

/** Outside directive definition */
export interface VOutsideDirective extends VNodeDirective {
  name: 'outside'
  value: any | OutsideBindingValue
}
