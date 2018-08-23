<!--  -->
<template>
  <div class="page">
    <div class="page-title">快速上手</div>
    <p class="page-title-des">本章节教你如何在项目中快速的使用hot-ui。</p>

    <div class="page-floor">
      <div class="page-sub-title">在已有项目中使用 <a href="https://github.com/ZhangHaoWeb/hot-ui">hou-ui</a></div>
      <div class="code">
        <pre v-highlight>
          <code v-text="hotUi"></code>
        </pre>
      </div>
    </div>

    <div class="page-floor">
      <div class="page-sub-title">创建 webpack模板的vue项目时可以使用 <a href="https://github.com/ZhangHaoWeb/hot-ui-cli">hot-ui-cli</a></div>
      <div class="code">
        <pre v-highlight>
          <code v-text="hotUiCli" class="shell"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      hotUi: `\nimport Vue form 'vue' \nimport hotUI from 'hot-ui'\n\nVue.use(hotUI)`,
      hotUiCli: `$ npm install hot-ui-cli -g\n\n$ hot init <project name>`
    }
  },
  methods: {

  }
}
</script>
