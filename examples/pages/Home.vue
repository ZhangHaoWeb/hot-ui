<!-- 首页 -->
<template>
   <div class="container">
      <div class="logo">
        <img :src="logo" alt="logo">
      </div>
      <div class="title">Hot-UI</div>
      <p class="des">This is a UI components for Vue.</p>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      logo: require('../assets/images/hot.jpeg')
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;
    width: 100%;
    .logo {
      text-align: center;
      margin-left: -20px;
    }
    .title {
      font-size: 28px;
    }
    .des {
      margin-top: 20px;
      font-size: 14px;
      color: rgb(172, 168, 168);
    }
  }
</style>
