<!-- page nav -->
<template>
   <div class="nav">
     <div class="nav-cell" v-for="(list, key) in navData" v-bind:key="key">
       <div class="nav-title">{{key}}</div>
       <ul>
          <li v-for="(item, index) in list" v-bind:key="index">
            <router-link :to="item.path" class="nav-link">{{item.title}}</router-link>
          </li>
       </ul>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      navData: {}
    }
  },
  methods: {
    /**
     * init nav form $router
     */
    initNav (data) {
      let nav = {}
      for (var i in data) {
        if (data[i].data) {
          if (!nav[data[i].data.group]) {
            nav[data[i].data.group] = []
          }
          data[i].data.path = data[i].path
          data[i].data.active = false
          nav[data[i].data.group].push(data[i].data)
        }
      }
      this.navData = nav
    },
    /**
     * nav item selected event
     */
    navSelectHandler (item) {
      item.active = true
      console.log(item.active + 'aa')
    }
  },
  mounted () {
    this.initNav(this.$router.options.routes)
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 115px;
    bottom: 5px;
    width: 240px;
  }
  .nav-cell {
    padding-bottom: 10px;
    li {
      padding-bottom: 15px;
    }
  }
  .nav-title {
    font-size: 18px;
    color: #FFB200;
    cursor: default;;
    padding-bottom: 15px;
  }
  .nav-link {
    text-decoration: none;
    color: rgb(100, 100, 100);
    font-size: 12px;
    cursor: default;
    &:hover {
      color: rgb(155, 152, 152);
    }
  }

</style>
