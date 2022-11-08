
author：tiantf
time：20200908
remarks：管理平台主页

<template>
      <div id="WorldMap" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
            <!-- 标题栏 -->
            <oceanTopNav ref="oceanTopNav" />

            <environmentDiolag> </environmentDiolag>

            <!-- <div v-if="!patternState">
                  <tianMap ref="tianMap" />
            </div> -->

            <!-- cesium -->
            <!-- <div v-if="patternState">
                  <cesium ref="cesium" />
            </div> -->

            <!--底部显示信息-->
            <!-- <bottomNav ref="bottomNav" /> -->

      </div>
</template>
<script>
import oceanTopNav from "../oceanTopNav"
import environmentDiolag from './../dialog/environmentDiolag.vue'
// import tianMap from "../tianMap/tianMap"
// import bottomNav from "../others/bottomNav";
// import cesium from "../cesium/cesium"
import { mapGetters } from 'vuex'
export default {
      name: "oceanIndex",  //组件名称
      components: {  //引入模板
            oceanTopNav,
            environmentDiolag
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
            ...mapGetters([
                  'patternState',
            ]),
      },
};
</script>
<style lang="less" scoped>
// @import "../../assets/css/oceanIndex.less";
</style>