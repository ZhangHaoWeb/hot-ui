/**
 * @author zhanghao
 * Date: 2018-08-15 16:38:31
 */
import hotInput from './src/input.vue'

hotInput.install = function (Vue) {
    Vue.component(hotInput.name, hotInput);
}

export default hotInput;