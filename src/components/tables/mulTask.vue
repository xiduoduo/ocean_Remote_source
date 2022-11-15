<template>
  <div class="table-area">
    <div class="top">
      <img src="./../../assets/images/location.png" alt="">
      <div class="title">融合任务配置</div>
    </div>
    <div class="content">
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item>基本信息配置</el-breadcrumb-item>
        <el-breadcrumb-item>信息预览</el-breadcrumb-item>
        <el-breadcrumb-item>完成</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="first">
        <div>
          任务名称：
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            clearable
            size="small"
            style="width: 400px"
          />
        </div>
        <div>
          任务名称：
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            clearable
            size="small"
            style="width: 400px"
          />
        </div>
        <div>
          任务名称：
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            clearable
            size="small"
            style="width: 400px"
          />
        </div>
        <!-- <el-form-item label="状态" prop="status"> -->
        <div>
          执行策略：
          <el-select
            v-model="queryParams.status"
            placeholder="角色状态"
            clearable
            size="small"
            style="width: 400px"
          >
            <el-option
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </div>
        <div>
          优先级：
          <el-select
            v-model="queryParams.status"
            placeholder="角色状态"
            clearable
            size="small"
            style="width: 400px"
          >
            <el-option
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </div>
        <!-- </el-form-item> -->
      </div>
      <div class="second-title">融合设置</div>
      <div class="second">
        <div>
          任务名称：
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            clearable
            size="small"
            style="width: 400px"
          />
        </div>
        <div>
          任务名称：
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            clearable
            size="small"
            style="width: 400px"
          />
        </div>
        <div>
          任务名称：
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            clearable
            size="small"
            style="width: 400px"
          />
        </div>
        <!-- <el-form-item label="状态" prop="status"> -->
        <div>
          执行策略：
          <el-select
            v-model="queryParams.status"
            placeholder="角色状态"
            clearable
            size="small"
            style="width: 400px"
          >
            <el-option
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </div>
        <!-- </el-form-item> -->
      </div>
      <div class="second-title">数据源选择</div>
      <div class="third">
        <div>
          执行策略：
          <el-select
            v-model="queryParams.status"
            placeholder="角色状态"
            clearable
            size="small"
            style="width: 400px"
          >
            <el-option
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </div>
        <div>
          优先级：
          <el-select
            v-model="queryParams.status"
            placeholder="角色状态"
            clearable
            size="small"
            style="width: 400px"
          >
            <el-option
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </div>
        <div>
          时间范围：
          <el-date-picker
            v-model="dateRange"
            size="small"
            style="width: 240px"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </div>
      <div class="table-bottom">
        <div class="cancle">取消</div>
        <div class="preview">预览</div>
        <div class="doNow">立即执行</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskConfig',
  data(){
    return {
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roleName: undefined,
        roleKey: undefined,
        status: undefined
      },
      statusOptions: [],
      dateRange: [],
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
      padding: 0 50px;
      .breadcrumb {
        padding-top: 28px;
        // padding-left: 50px;
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
  .first, .second {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin-top: 30px;
    >div {
      margin-bottom: 30px;
      margin-right: 40px;
    }
  }
  .second-title {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
  }
  .third {
    text-align: left;
    >div {
      margin-bottom: 30px;
    }
    >div:first-child {
      margin-top: 30px;
    }
  }
  .table-bottom {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    div {
      padding: 0 25px;
    }
    .cancle {
      border: 1px solid #D9D9D9;
    }
    .doNow, .preview {
      background: #0079FF;
      margin-left: 28px;
    }
  }
</style>