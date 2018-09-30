import Deirective from './directive'

const vDeirective = new Deirective()
export default function (Vue) {
  for (let [key, value] of vDeirective.vDeirective) {
    Vue.directive(key, value)
  }
}
