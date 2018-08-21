<!-- page nav -->
<template>
   <div class="nav">
     <div class="nav-cell">
      <div class="nav-title">开发指南</div>
      <ul>
        <li><a href="" class="nav-link">安装</a></li>
        <li><a href="" class="nav-link">快速上手</a></li>
      </ul>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  methods: {
    initNav (data) {
      console.log(data)
    }
  },
  mounted () {
    this.initNav(this.$router.options.routes)
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    line-height: 40px;
  }
  .nav-title {
    font-size: 18px;
    color: #FFB200;
  }
  .nav-link {
    text-decoration: none;
    color: #333;
    font-size: 12px;
    &:hover {
      color: #FFB200;
    }
  }
</style>
