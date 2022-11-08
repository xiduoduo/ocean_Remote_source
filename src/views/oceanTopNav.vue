<template>
  <div class="main-container">
    <div class="topNavImg">
      <div class="timer">123</div>
      <div class="title">遥感产品可视化平台</div>
      <div class="weather">456</div>
      <img src="./../assets/image/icons/toubu.png" alt="">
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
import { routes } from "../router/router.js";
export default {
  name: 'oceanTopNav', // 观测区域
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
    height: 61px;
    line-height: 61px;
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 5px;
    font-family: "Times New Roman", Georgia, Serif;
    color: rgba(59, 194, 235, 0.8);
    position: relative;
  }
  .topNavImg .timer {
    left: 20px;
  }
  .topNavImg .weather {
    right: 20px;
  }
  .topNavImg img {
    width: 100%;
    height: 100%;
    /* position: fixed;
    left: 0;
    top: 0; */
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
