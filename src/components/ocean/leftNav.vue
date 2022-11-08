<template>
  <div id="environmentDiolag">
    <div v-show="showDiolag" class="allDiolag">
      <el-aside class="diolagContAside" width="120px">
        <div class="diolagCont">
          <div v-for="(item, index) in leftData" :key="index" :index="item.path"
               class="diolagContItem"
               :class="item.className?item.className:''"
               @click="tabClick(index)">
            <img :src="item.img" alt="">
          </div>
        </div>
      </el-aside>
      <!-- <tabTimeSearch ref="tabSearchRef" v-show="showTabSearch" v-bind:content.sync="dataList" @closeEvent="closeTabSearch" /> -->
    </div>
    <div class="showIcon showIconMargin">
    </div>
  </div>
</template>
<script>
// import eventBool from '@/utils/eventBool'
// import tabTimeSearch from "@/views/tabTimeSearch/tabTimeSearch"
// import { clearViewer, clearOthers } from "@/assets/js/method"
import $ from "jquery";
export default {
  name: "leftNav",
  components: {
    // tabTimeSearch
  },
  data() {
    return {
      thisTitle: "",
      showTabSearch: false,
      showDiolag: true,
      // activeIndex: 0,
      activeIndex: '',
      leftData: [
        {
          name: "风场",
          img: require("./../../assets/images/xuanzhuan.png"),
          className: 'fullScreen',
        },
        {
          name: "温度",
          img: require("./../../assets/images/jia.png"),
        },
        {
          name: "波高",
          img: require("./../../assets/images/jian.png"),
        },
        {
          name: "水色",
          img: require("./../../assets/images/kongjian.png"),
        },
        {
          name: "水汽",
          img: require("./../../assets/images/kongjianbeifen.png"),
        }],
        dataList:'',
        isfullScreen: false,
    };
  },
  mounted() {
    $('.fullScreen').click( (e)=> {
      // console.log(this,e)
      this.intScreen()
    })
  },
  methods: {
    closeTabSearch(value){
      this.showTabSearch = value;
      this.activeIndex = '';
    },
    tabClick(index) {
      
    },
    intScreen() {
      if (!this.isfullScreen) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          //W3C
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          //FireFox
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          //Chrome等
          docElm.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          //IE11
          elem.msRequestFullscreen()
        }
        this.isfullScreen = true
        // this.activeIndex = ''
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isfullScreen = false
      }
    },
  }
};

</script>
<style scoped lang="less">
#environmentDiolag {
  position: absolute;
  // top: 60px;
  // left: 0;
  top: 80px;
  left: 26px;
  z-index: 999;
  overflow: hidden;
  height: calc(~"100vh - 90px");
}

#environmentDiolag .allDiolag {
  float: left;
  height: calc(~"100vh - 90px");
}

#environmentDiolag .allDiolag .diolagContAside {
  float: left;
  overflow: hidden;
}

#environmentDiolag .showIconMargin {
  margin-left: -24px;
}

#environmentDiolag .showIcon {
  float: left;
  height: 24px;
}
#environmentDiolag .showIcon img {
  width: 24px;
  height: 24px;
}

#environmentDiolag .showIcon:hover {
  cursor: pointer;
  transform: scale(1.5, 1.5);
}

#environmentDiolag .diolagCont {
  width: 120px;
  height: calc("100vh - 90px");
  border-right: 2px solid #0f538d;
  float: left;
}
#environmentDiolag .diolagCont .diolagContItem {
  width: 45px;
  height: 45px;
  display: flex;
  overflow: hidden;
  color: #fff;
  font-size: 16px;
  width: 150px;
}

#environmentDiolag .diolagCont .diolagContItem img {
  width: 30px;
  height: 30px;
}

#environmentDiolag .diolagCont .diolagContItem:hover {
  cursor: pointer;
}
</style>
