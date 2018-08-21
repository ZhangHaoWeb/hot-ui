<template>
  <div id="app" class="container">
    <page-header>Hot</page-header>
    <div class="warpper">
       <div class="nav">
         <page-nav></page-nav>
       </div>
       <div class="router">
         <router-view/>
       </div>
     </div>
  </div>
</template>

<script>
import pageHeader from './components/pageHead'
import pageNav from './components/PageNav'

export default {
  name: 'App',
  components: {
    pageHeader,
    pageNav
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;

    .warpper {
      position: relative;
      width: 1200px;
      margin: 20px auto;
      .nav {
        position: fixed;
        top: 100px;
        bottom: 5px;
        width: 240px;
      }
      .router {
        padding-left: 270px;
      }
    }
  }
</style>
