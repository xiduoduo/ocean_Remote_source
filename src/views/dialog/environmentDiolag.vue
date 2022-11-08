<template>
      <div id="environmentDiolag">

            <div v-show="showDiolag" class="allDiolag">
                  <el-aside class="diolagContAside" width="120px">
                        <div class="diolagCont">
                              <div class="diolagContItem" v-for = "(item, index) in leftData" :key = "index" :index = "item.path" @click="tabClick(index)">
                                    <img :src="activeIndex === index ? item.activeImg : item.img" alt="">
                                    <span>{{item.name}}</span>
                              </div>
                        </div>
                  </el-aside>
                  <!-- <tabTimeSearch ref="tabSearchRef" v-show="showTabSearch" /> -->

            </div>

            <div class="showIcon showIconMargin">
                  <!-- <img src="@/assets/image/icon/left.png" alt="" @click="closePage" v-if="showDiolag"> -->
                  <!-- <img src="@/assets/image/icon/right.png" alt="" @click="showPage" v-else> -->
            </div>
      </div>
</template>
<script>
// import tabTimeSearch from "@/views/tabTimeSearch/tabTimeSearch"
// import { clearViewer, clearOthers } from "@/assets/js/method"
import $ from 'jquery'
export default {
      name: "environmentDiolag",//海洋环境
      components: {
            // tabTimeSearch,
      },
      data() {
            return {
                  thisTitle: "",
                  showTabSearch: false,
                  showDiolag: true,
                  envirData: [],
                  activeIndex: 0,
                  leftData:[
                        {
                              name: '风场',
                              img: require('./../../assets/image/icons/icon_left_p7@2x.png'),
                              activeImg: require('./../../assets/image/icons/icon_left7@2x.png')
                        },
                        {
                              name: '温度',
                              img: require('./../../assets/image/icons/icon_left_p6@2x.png'),
                              activeImg: require('./../../assets/image/icons/icon_left6@2x.png')
                        },
                        {
                              name: '波高',
                              img: require('./../../assets/image/icons/icon_left_p5@2x.png'),
                              activeImg: require('./../../assets/image/icons/icon_left5@2x.png')
                        },
                        {
                              name: '水色',
                              img: require('./../../assets/image/icons/icon_left_p4@2x.png'),
                              activeImg: require('./../../assets/image/icons/icon_left4@2x.png')
                        },
                        {
                              name: '水汽',
                              img: require('./../../assets/image/icons/icon_left_p3@2x.png'),
                              activeImg: require('./../../assets/image/icons/icon_left7@2x.png')
                        },
                        {
                              name: '液水',
                              img: require('./../../assets/image/icons/icon_left_p2@2x.png'),
                              activeImg: require('./../../assets/image/icons/icon_left7@2x.png')
                        },
                        {
                              name: '专题图',
                              img: require('./../../assets/image/icons/icon_left_p1@2x.png'),
                              activeImg: require('./../../assets/image/icons/icon_left7@2x.png')
                        },
                  ]
            };
      },
      mounted() {
      },
      methods: {
            tabClick(index){
                  this.activeIndex = index;
            },
            switchChange(i) {
                  let that = this;

                  that.$refs.tabSearchRef.getData(i);

                  // clearOthers(that, i);
            },
            //打开关闭页面
            showPage() {
                  let that = this;
                  that.showDiolag = true;
                  $(".showIcon").addClass("showIconMargin")
            },
            closePage() {
                  let that = this;
                  that.showDiolag = false;
                  $(".showIcon").removeClass("showIconMargin")
            },
      },
};

</script>
<style scoped lang="less">
#environmentDiolag,
#arithmeticDiolag {
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 999;
    overflow: hidden;
    height: calc(~"100vh - 90px");

    .allDiolag {
        float: left;
        height: calc(~"100vh - 90px");

        .diolagContAside {
            float: left;
        }
    }

    .showIconMargin {
        margin-left: -24px;
    }

    .showIcon {
        float: left;
        height: 24px;

        img {
            width: 24px;
            height: 24px;
        }
    }

    .showIcon:hover {
        cursor: pointer;
        transform: scale(1.5, 1.5);
    }

    .diolagCont {
        width: 120px;
        height: calc(~"100vh - 90px");
        border-right: 2px solid #0f538d;
        float: left;

        .diolagContItem {
            width: 120px;
            height: 83px;
            display: flex;

            overflow: hidden;

            img {
                width: 66px;
                height: 62px;
            }

            span {
                  height: 62px;
                  line-height: 62px;
                  margin-left: 8px;
            }
        }

        .diolagContItem:hover {
            cursor: pointer;
        }

      
    }
}
</style>
