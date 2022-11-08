
author：tiantf
time：20200908
remarks：管理平台主页

<template>
<div>
    <IntegratePage class="top" />
    <NavMenu />
    <!-- <RealTest/> -->
  </div>
</template>
<script>
import IntegratePage from "./../integratePage/index"
import NavMenu from "./../navMenu/index"
// import RealTest from "./../tables/index"
export default {
      name: "HomePage",
      components: {
        IntegratePage,
        NavMenu,
        // RealTest
      },
      data() {
        return {
          loading: false,
        };
      },
      computed: {
      },
};
</script>
<style lang="less" scoped>
// @import "../../assets/css/oceanIndex.less";
</style>