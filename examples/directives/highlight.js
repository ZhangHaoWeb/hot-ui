/**
 * directive highlight
 * 代码高亮
 */
import highLight from 'highlight.js'
import 'highlight.js/styles/sunburst.css'

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      highLight.highlightBlock(block)
    })
  })
}
export default Highlight
