<!-- head -->
<template>
   <div class="page-header">
     <img :src="logo" alt="logo" class="logo">
     <div class="logo-name">
       <slot></slot>
     </div>
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
  .page-header {
    padding: 10px 20px;
    font-size: 24px;
    font-weight: bold;
    box-sizing: border-box;
    background: #fff ;
    color: #333;
    box-shadow: 0 0 15px 1px rgb(177, 175, 175);
    overflow: hidden;

    .logo {
      width: 60px;
      display: block;
      float: left;
    }
    .logo-name {
      float: left;
      line-height: 60px;
    }
    p {
      font-size: 12px;
      color: #eee;
    }
  }
</style>
