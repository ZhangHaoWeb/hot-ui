<!--  -->
<template>
  <div class="page">
    <div class="hot-h1">快速上手</div>
    <p class="text">本章节教你如何在项目中快速的使用hot-ui。</p>
    <div class="code">
      <pre v-highlight>
        <code v-html="jsTemplate"></code>
      </pre>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      jsTemplate: `\nimport Vue form 'vue' \nimport hotUI from 'hot-ui'\n\nVue.use(hotUI)
      `
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .text {
    padding: 20px 0;
  }
  .code {
    margin-top: 10px;
  }
</style>
