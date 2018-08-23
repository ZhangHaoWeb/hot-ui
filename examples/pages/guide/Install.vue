<!-- 安装 -->
<template>
  <div class="page">
    <div class="page-title">安装</div>
    <div class="page-title-des">使用npm的方式安装，它能更好地和 <a href="http://webpack.github.io/">webpack</a> 打包工具配合使用。</div>
    <div class="page-floor">
      <pre v-highlight>
        <code v-text="install" class="shell"></code>
      </pre>
    </div>
    <div class="page-tip">这里的内容假设你已经掌握了vue，了解 webpack 和 npm 的简单使用。</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      install: `$ npm install hot-ui -D`
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  code {
    padding: 20px;
  }
</style>
