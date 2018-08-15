/**
 * @author zhanghao
 * Date: 2018-08-15 16:38:31
 */
 import Button from './src/button.vue'

Button.install = function(Vue) {
    Vue.component(Button.name, Button);
}

export default Button;