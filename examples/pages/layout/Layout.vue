<!-- layout 布局 -->
<template>
  <div class="page">
   <div class="page-title">栅格化系统</div>
   <p class="page-title-des">使用BootStrap布局中栅格化理念。</p>

    <div class="page-floor">
      <div class="page-sub-title">使用媒体查询</div>
      <pre v-highlight>
        <code v-text="mediaStr" class="scss"></code>
      </pre>
    </div>

    <div class="page-floor">
      <div class="page-sub-title">栅格化使用实例</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      mediaStr: `
        /* 超小屏幕 （手机，小于768px，使用col-xs-*）*/\n
        @media (max-width: 768px) { ... }\n
        /* 小屏幕（平板，大于768px小于992px，使用col-sm-*）*/\n
        @media (min-width: 768px) and (max-width: 992px) { ... }\n
        /* 中等屏幕（一般显示器，大于992px小于1200px，使用col-md-*）*/\n
        @media (min-width: 992px) and (max-width: 1200px) { ... }\n
        /* 大屏幕（大显示器，大于1200px，使用col-lg-*）*/\n
        @media (min-width: 1200px) { ... }\n
      `
    }
  },
  methods: {

  }
}
</script>
