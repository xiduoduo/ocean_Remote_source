<template>
  <div class="table-area">
    <div class="top">
      <img src="./../../assets/images/location.png" alt="">
      <div class="title">标准化任务配置</div>
    </div>
    <div class="content">
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item>基本信息配置</el-breadcrumb-item>
        <el-breadcrumb-item>信息预览</el-breadcrumb-item>
        <el-breadcrumb-item>完成</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="info-title">标准化信息预览</div>
      <div class="info-div">
        <el-table   style="width: 100%" :data="getValues" :show-header="false">
          <el-table-column
          stripe
            v-for="(item, index) in getHeaders"
            :key="index"
            :prop="item"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskConfig',
  data(){
    return {
       headers: [
        {
          prop: "date",
          label: "公司名称",
        },
        {
          prop: "name",
          label: "客户来源",
        },
        {
          prop: "address",
          label: "地址",
        },
        // {
        //   prop: "date",
        //   label: "电话",
        // },
        // {
        //   prop: "name",
        //   label: "企业规模",
        // },
        // {
        //   prop: "address",
        //   label: "备注",
        // },
      ],

      tableData: [
        {
          date: "2016-05-02123123",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2421423423",
          name: "111",
          address: "222",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ]
    }
  },
  computed: {
    getHeaders() {
      return this.tableData.reduce(
        (pre, cur, index) => pre.concat(`value${index}`),
        ["title"]
      );
    },
    getValues() {
      return this.headers.map((item) => {
        return this.tableData.reduce(
          (pre, cur, index) =>
            Object.assign(pre, { ["value" + index]: cur[item.prop] }),
          { title: item.label }
        );
      });
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
      .info-title {
        font-size: 22px;
        font-weight: bold;
      }
      .info-div {
        padding: 0 55px;
      }
    }
  }
</style>