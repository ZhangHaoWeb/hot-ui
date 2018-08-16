/**
 * @author zhanghao
 * Date: 2018-08-15 16:38:31
 */
 import hotButton from './src/button.vue'

hotButton.install = function(Vue) {
    Vue.component(hotButton.name, hotButton);
}

export default hotButton;