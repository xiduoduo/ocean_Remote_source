<template>
  <div class="table-area">
    /
    <div class="content">
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item>基本信息配置</el-breadcrumb-item>
        <el-breadcrumb-item>信息预览</el-breadcrumb-item>
        <el-breadcrumb-item>完成</el-breadcrumb-item>
      </el-breadcrumb>
      <img src="./../../assets/images/finish.png" alt="">
      <p>真实性检验任务已创建完成，并自动返回质真</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealTest',
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .table-area {
    display: inline-block;
    // margin-left: 210px;
    // margin-top: 67px;
    position: fixed;
    height: calc(100vh - 67px);
    width: calc(100vw - 210px);
    background: #E9F0F9;
    .top {
      display: flex;
      height: 50px;
      line-height: 50px;
      margin-left: 25px;
      img {
        width: 12px;
        height: 12px;
        margin-top: 19px;
      }
    }
    .title {
      color: #1679FA;
      font-size: 14px;
    }
    .content {
      background: #fff;
      height: calc(100vh - 117px);
      margin-left: 25px;
      text-align: center;
      .breadcrumb {
        padding-top: 28px;
        padding-left: 50px;
      }
      img {
        width: 1036px;
        margin-top: 117px;
      }
      p {
        margin-top: -109px;
        font-size: 30px;
      }
    }
  }
</style>