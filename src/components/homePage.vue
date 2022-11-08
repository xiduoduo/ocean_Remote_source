
author：tiantf
time：20200908
remarks：管理平台主页

<template>
<div class="wijg">
    11111111
    <div>333333333</div>
    <!-- 标题栏 -->
    <IntegratePage class="top" />
    <!-- <environmentDiolag> </environmentDiolag> -->
  </div>
</template>
<script>
import IntegratePage from "./../components/integratePage"
// import environmentDiolag from './../dialog/environmentDiolag.vue'
// import tianMap from "../tianMap/tianMap"
// import bottomNav from "../others/bottomNav";
// import cesium from "../cesium/cesium"
// import { mapGetters } from 'vuex'
export default {
      name: "HomePage",  //组件名称
      components: {  //引入模板
            IntegratePage,
            // environmentDiolag
            // tianMap,
            // bottomNav,
            // cesium
      },
      data() {
            return {
                  //   定义数据
                  loading: false,
            };
      },
      computed: {
            // ...mapGetters([
            //       'patternState',
            // ]),
      },
};
</script>
<style lang="less" scoped>
// @import "../../assets/css/oceanIndex.less";
</style>