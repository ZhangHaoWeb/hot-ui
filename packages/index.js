/**
 * @author zhanghao
 * Date: 2018-08-15 16:38:31
 */
import hotInput from './input/index'
import hotButton from './button/index'

const components = [
  hotInput,
  hotButton
]

const install = function(Vue) {
  if (install.installed) return

  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
  install,
  hotInput,
  hotButton
}
