<template>
  <div class="main-container">
    <div class="topNavImg">
      <div class="timer">海洋遥感数据标准化系统</div>
      <!-- <div class="title">遥感产品可视化平台</div> -->
      <img class="left-png" src="./../../assets/images/bianzu.png" alt="">
      <div class="weather">
        <img src="@/assets/images/search.png" alt="">
        <img src="@/assets/images/setUp.png" alt="">
        <img src="@/assets/images/question.png" alt="">
        <img class="yonghu" src="@/assets/images/yonghu.png" alt="">
      </div>
    </div>
    <!-- <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
      
      >
       <el-menu-item
       v-for = "(item, index) in routes"
       :key = "index"
       :index = "item.path"
       >

        <img :src="item.meta.img" class="topNavItemIcon1">
        <span slot="title" class="topNavItemTitle">{{item.meta.title}}</span>

      </el-menu-item>
    </el-menu>
    <keep-alive>
        <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script type="text/javscript">
import { routes } from "../../router/router.js";
export default {
  name: 'IntegratePage', // 观测区域
  components: {  },
  data() {
    console.log(routes)
    return {
      menuData: [],
      activeIndex: '1',
      activeIndex2: '1',
      routes: routes[0].children,
    }
  },
  mounted() {
    
  },
  methods: {
    handleSelect(key,keyPath) {
      if(this.$router.history.current.path === keyPath[0]){
        return;
      }
      console.log(key,keyPath)
      if (key[0] === '/') {
        this.$router.push(key);
        return;
      }
      const pushPath = keyPath.join('/');
      this.$router.push(pushPath);
    }
  }
}
</script>

<style rel="stylesheet/scss" scoped>
  .main-container {
    /* display: flex; */
    width: 100%;
    height: 67px;
    position: relative;
    top: 0;
    left: 0;
  }
  .topNavImg {
    height: 67px;
    line-height: 67px;
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 5px;
    font-family: "Times New Roman", Georgia, Serif;
    color: rgba(59, 194, 235, 0.8);
    position: relative;
    background: #245585;
    display: flex;
  }
  .topNavImg .timer {
    left: 36px;
    font-family: YouSheBiaoTiHei;
    color: #ffffff;
    font-style: italic;
  }
  
  .topNavImg .left-png {
    width: 615px;
    height: 71px;
    /* position: fixed;
    left: 0;
    top: 0; */
  }
  .topNavImg .weather {
    right: 60px;
  }
  .topNavImg .weather img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    padding-right: 15px;
    border-right: 1px solid #ffffff;
  }
  .topNavImg .weather .yonghu {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 17px;
  }
  .topNavImg .weather img:last-child {
    border-right: none;
  }
  .topNavImg>div {
    position: absolute;
  }
  .topNavImg .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    width: 377px;
    height: 47px;
    font-size: 36px;
    font-family: YouSheBiaoTiHei;
    color: #09DDFF;
    line-height: 47px;
    text-shadow: 0px 3px 0px rgba(0,0,0,0.2400);
    /* background: linear-gradient(180deg, #96CCF7 0%, #FFFFFF 100%); */
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background: #0f538d !important;
  }
  .topNavItemIcon1 {
    width: 18px;
    height: 14px;
  } 
  .topNavItemTitle {
    margin-left: 9px;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #409EFF;
    background: #0f538d !important;;
  }
</style>
