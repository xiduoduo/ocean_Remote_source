<template>
  <div>
    <div class="login-header">
      <div class="timer">{{nowTime}}</div>
      <div class="date-day">
        <div class="date">{{nowDate}}</div>
        <div class="day">{{nowDay}}</div>
      </div>
      <div class="header-title">
        <img src="@/assets/images/weitu.png" alt />
        <p>海洋遥感数据标准化系统</p>
      </div>
      <div class="right">
        <img class="yonghu" src="@/assets/images/yonghu.png" alt="">
        <div class="user">管理员</div>
        <img class="duoxuan" @click="toIntegrate()" src="@/assets/images/duoxuan.png" alt="">
        <img class="guanbi" src="@/assets/images/guanbi.png" alt="">
      </div>
    </div>
    <div class="left-nav">
      
    </div>
    <div id="map"></div>
  </div>
</template>
<script>
import "ol/ol.css";
import ol from "ol";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import Defaults from "ol/control/defaults"
export default {
  name: 'OceanHeader',
  components: {},
  data() {
    return {
      nowDate: '',
      nowTime: '',
      nowDay: '',
      refreshData: null,
    }
  },
  mounted() {
    this.getDate();
    this.refreshData=setInterval(()=>{
      this.getDate()
    },1000);
    //返回Date的总毫秒数
    //方法一通过valueOf getTime()
    // this.judgeRoute()
    // setInterval(() => {
    //   this.nowTime = showCurrentDate()
    // }, 1000)
    const map = new Map({
      target: "map",
      layers:[
            new TileLayer({
                source: new XYZ({
                    url:'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d'
                }),
                projection: "EPSG:4326",
                id:"影像"
            })
        ],
      view: new View({
          center: [0, 0],
          zoom: 0,
      }),
      
    });

    // const map = new Map({
    //       layers: [
    //         new TileLayer({
    //           visible: true,
    //           source: new XYZ({
    //             visible: true,
    //             url: 'http://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=2&scale=1&style=8',
    //           })
    //         })
    //       ],
    //       target: 'map',
    //       view: new View({
    //         center: [116.403218, 39.92372],
    //         zoom:12,
    //         maxZoom: 18,
    //         projection: 'EPSG:4326',
    //         constrainResolution: true,  // 设置缩放级别为整数 
    //         smoothResolutionConstraint: false,  // 关闭无级缩放地图
    //       }),
    //     });
    //  map = new ol.Map({
    //     layers: [googleLayer],
    //     target: 'map', //地图容器div的ID
    //     view: new ol.View({
    //         center: [106.51, 29.55],
    //         projection: 'EPSG:4326',
    //         zoom: 10
    //     }),
    //     //加载控件到地图容器中
    //     controls: ol.control.defaults({
    //         zoom: false,
    //         rotate: false,
    //         attribution: false
    //     }).extend([
    //         scaleLine,
    //         mousePosition
    //     ])
    // });

  },
  beforeDestroy(){
    clearInterval(this.refreshData);
    this.refreshData=null;
  },
  methods: {
    getDate() {
      let date = new Date();
      let year = date.getFullYear();
      //返回月份小1，需要加1
      let month = date.getMonth()+1;
      let date1 = date.getDate()+5;
      this.nowDate = year + '-' + month + '-' + date1;

      let date2 = new Date();
      let hour = date2.getHours();
      let min = date2.getMinutes();
      let sec = date2.getSeconds();
      this.nowTime = hour +":"+min+":"+sec;
      this.nowDay = '星期'+'日一二三四五六'.charAt(new Date().getDay())
    },
    // 判断当前路由
    judgeRoute() {
      if (this.$route.path == '/integratePage') {
        this.isShowTime = true
      }
    },
    toIntegrate() {
      console.log(123)
      this.$router.push({ path: '/integratePage' })
    }
  },
}
</script>
<style  lang="less" scoped >
.right {
  right: 20px;
  position: absolute;
  height: 50px;
  line-height: 50px;
  display: flex;
}
.right .yonghu {
  width: 38px;
  height: 38px;
  margin-top: 6px;
 
}
.right .user {
  height: 50px;
  line-height: 50px;
   color: #fff;
  font-size: 16px;
  margin-left: 10px;
}
.right .guanbi, .right .duoxuan {
  width: 36px;
  height: 36px;
  margin-left: 15px;
  padding-right: 15px;
  margin-top: 7px;
  // border-right: 1px solid #ffffff;
}
.timer {
  float: left;
  margin-left: 20px;
  color: #8EE0EF;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  position: absolute;
}
.date-day {
  float: left;
  color: #fff;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  margin-left: 127px;
  margin-top: 5px;
  position: absolute;
  div {
    height: 20px;
    line-height: 20px;
  }
}
.login-header {
  background: url('~@/assets/images/topBac.png') no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  display: flex;
  z-index: 999;
  position: relative;
 
  .header-title {
    display: flex;
    // border: 1px solid red;
    background-size: 100% 100%;
    margin: 0 auto;
    text-align: center;
    p {
      margin: 5px 0;
      margin-left: 20px;
      font-size: 30px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      font-style: italic;
    }
    img {
      margin-top: 10px;
      height: 30px;
      width: 35px;
    }
  }
}
#map {
  margin-top: -4px;
  height: calc(100vh - 46px);
}

</style>