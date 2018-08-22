<template>
  <div id="app" class="container">
    <!-- header -->
    <page-header>Hot</page-header>
    <div class="warpper">
        <!-- nav -->
        <page-nav></page-nav>
        <!-- main view -->
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
      margin: 35px auto;
      .router {
        padding-left: 270px;
      }
    }
  }
</style>
