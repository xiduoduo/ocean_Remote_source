<!--
 * @Author: your name
 * @Date: 2021-10-21 10:24:35
 * @LastEditTime: 2021-11-12 10:48:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dlzh_web\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{

      }
    },
    methods:{

    },
    watch:{
      '$route.path':function(newVal){
        if(newVal.indexOf("/")!=-1) {//判断当前登录状态
          // if(!loginStatus.status){
          //   this.$router.replace("/"); //  路由跳转，不添加记录
          // }
        }
      }

    }
  }
</script>

<style>
  html, body {
    margin: 0 auto;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    height: 100%;
    width: 100%;
  }

  body {
    overflow-y: hidden;
    /* margin: 0; */
  }
  .nav-menu .el-menu-vertical-demo {
    /* background-color: #062D57 !important; */
  }
  .nav-menu .el-submenu__title {
    background-color: #062D57 !important;
  }
  .nav-menu .el-submenu .el-menu-item {
    background-color: #062D57 !important;
  }
  .nav-menu .el-menu-item-group__title {
    background-color: #062D57 !important;
  }
  .nav-menu .el-menu-item {
    background-color: #062D57 !important;
  }
  .right-nav .el-submenu__title {
    padding-left: 10px !important;
  }
  
  .right-nav .el-submenu__icon-arrow {
    display: none;
  }
  .right-nav .active-menu {
    border-left: none !important;
    background: none !important;
  }
  .right-nav h2 {
    padding-left: 0 !important;
  }
  .right-nav .el-submenu__title {
    height: 47px !important;
  }
  .right-nav .el-submenu__title:focus, .right-nav .el-submenu__title:hover {
    outline: 0;
    background-color: rgb(84, 92, 100) !important;
  }
  .right-nav .el-menu {
    border-right: none;
  }
  .progress .time .el-input--prefix .el-input__inner {
    /* padding: 0 10px; */
    color: #fff;
    border: none;
    background: linear-gradient(180deg, #21509F 0%, #214071 100%);
  }
  .time .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 170px;
  }
  /* .right-nav .el-popover {
    width: 100px !important;
  } */
  .el-popover {
    /* width: 200px !important; */
    background: #192663 !important;
    border: none !important;
    color: #fff !important;
    font-family: PingFangSC-Regular, PingFang SC !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 20px !important;
    width: 50px !important;
    padding: 10px !important;
    /* min-width: 120px !important; */
  }
</style>
