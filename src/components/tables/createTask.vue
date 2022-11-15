<template>
  <div class="table-area">
    <div class="top">
      <img src="./../../assets/images/location.png" alt="">
      <div class="title">创建真实性检验任务</div>
    </div>
    <div class="content1">
      <el-form :model="queryParams" ref="queryForm" class="breadcrumb" :inline="true">
        <el-form-item class="role" label="任务" prop="roleName">
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入"
            clearable
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="要素" prop="roleKey">
          <el-input
            v-model="queryParams.roleKey"
            placeholder="请选择"
            clearable
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="数据时间">
          <el-date-picker
            v-model="dateRange"
            size="small"
            style="width: 240px"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="-"
            start-placeholder="请选择日期"
            end-placeholder="请选择日期"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <div class="table">
      <div class="table-top">
        <div class="left-content content">
          <div class="name">质检产品</div>
          <div class="list">
            <div class="dem">海表温度</div>
            <div class="dem">海表温度</div>
            <div class="dem">海表温度</div>
            <div class="dem">海水透明度</div>
            <div class="dem">风场</div>
          </div>
        </div>
        <div class="right-content content">
          <div class="name">检验源</div>
          <div class="list">
            <div class="dem">NWP</div>
            <div class="dem">AQUA</div>
            <div class="dem">TERPA</div>
          </div>
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
  name: "CreateTask",
  data() {
    return {
      // 遮罩层
      loading: false,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 角色表格数据
      roleList: [
        {
          rowId: '1',
          fileName: '2022L3_DAY_NOAA_01KM',
          factor: '海表温度',
          satellite: 'NOAA-18',
          time: '2012年12月21日',
          cycle: '天',
          space: '4',
          fileSize: '488888KB'
        },
        {
          rowId: '2',
          fileName: '2022L3_DAY_NOAA_01KM',
          factor: '海表温度',
          satellite: 'NOAA-18',
          time: '2012年12月21日',
          cycle: '天',
          space: '4',
          fileSize: '488888KB'
        }
    ],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 是否显示弹出层（数据权限）
      openDataScope: false,
      menuExpand: false,
      menuNodeAll: false,
      deptExpand: true,
      deptNodeAll: false,
      // 日期范围
      dateRange: [],
      // 状态数据字典
      statusOptions: [],
      // 数据范围选项
      dataScopeOptions: [
        {
          value: "1",
          label: "全部数据权限"
        },
        {
          value: "2",
          label: "自定数据权限"
        },
        {
          value: "3",
          label: "本部门数据权限"
        },
        {
          value: "4",
          label: "本部门及以下数据权限"
        },
        {
          value: "5",
          label: "仅本人数据权限"
        }
      ],
      // 菜单列表
      menuOptions: [],
      // 部门列表
      deptOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roleName: undefined,
        roleKey: undefined,
        status: undefined
      },
      // 表单参数
      form: {},
      defaultProps: {
        children: "children",
        label: "label"
      },
      // 表单校验
      rules: {
        roleName: [
          { required: true, message: "角色名称不能为空", trigger: "blur" }
        ],
        roleKey: [
          { required: true, message: "权限字符不能为空", trigger: "blur" }
        ],
        roleSort: [
          { required: true, message: "角色顺序不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    
  },
  methods: {
    handleCheck(row){
      console.log(22,row)
    },
    handleUpdate(row) {
    },
    handleDelete(row) {
      const roleIds = row.roleId || this.ids;
      this.$confirm('是否确认删除角色编号为"' + roleIds + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function() {
      }).then(() => {
        
      })
    },
    // 表单重置
  }
};
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
    .content1 {
      background: #fff;
      // height: calc(100vh - 117px);
      margin-left: 25px;
      height: 67px;
      // text-align: center;
      .breadcrumb {
        padding-top: 28px;
        padding-left: 50px;
        height: 67px;
        .role {
          // margin-left: 50px;
        }
      }
    }
    .table {
      background: #fff;
      margin-top: 15px;
      margin-left: 25px;
      height: calc(100vh - 199px);
      .name {
        font-size: 22px;
        font-weight: bold;
        text-align: center;
      }
      .table-top {
        display: flex;
        .left-content {
          margin-left: 50px;
        }
        .right-content {
          margin-left: 25px;
        }
        .content {
          width: calc(100vw/2 - 180px);
          margin-top: 20px;
          .list {
            border: 1px solid #D0D0D0;
            height: 443px;
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-around;
            padding-top: 10px;
            align-content: flex-start;
            .dem {
              margin-left: 20px;
              width: 160px;
              height: 35px;
              line-height: 35px;
              border: 1px solid #1679FA;
              background: #E7F1FE;
              text-align: center;
              margin-bottom: 30px;
            }
          }
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
    }
  }
  .el-form--inline .el-form-item {
    margin-top: -14px;
  }
  </style>