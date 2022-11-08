
author：tiantf
time：20200908
remarks：管理平台主页

<template>
<div>
    <IntegratePage class="top" />
    <NavMenu />
    <!-- <RealTest /> -->
    <RoleList />

  </div>
</template>
<script>
import IntegratePage from "./../integratePage/index"
import NavMenu from "./../navMenu/index"
import RealTest from "./../tables/index"
import RoleList from "./../tables/source.vue"
export default {
      name: "HomePage",  //组件名称
      components: {  //引入模板
            IntegratePage,
            NavMenu,
            RealTest,
            RoleList
      },
      data() {
            return {
                  //   定义数据
                  loading: false,
            };
      },
      computed: {
      },
};
</script>
<style lang="less" scoped>
</style>