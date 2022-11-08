<template>
  <div class="table-area">
    <div class="top">
      <img src="./../../assets/images/location.png" alt="">
      <div class="title">真实性检验</div>
    </div>
    <div class="content">
      <el-form :model="queryParams" ref="queryForm" class="breadcrumb" :inline="true">
        <el-form-item class="role" label="角色名称111" prop="roleName">
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入角色名称"
            clearable
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="权限字符" prop="roleKey">
          <el-input
            v-model="queryParams.roleKey"
            placeholder="请输入权限字符"
            clearable
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select
            v-model="queryParams.status"
            placeholder="角色状态"
            clearable
            size="small"
            style="width: 240px"
          >
            <el-option
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
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
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table class="table" v-loading="loading" :data="roleList" :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
      <el-table-column label="文件名称" prop="fileName" width="250" />
      <el-table-column label="要素" prop="factor" :show-overflow-tooltip="true" width="150" />
      <el-table-column label="卫星数据源" prop="satellite" :show-overflow-tooltip="true" width="150" />
      <el-table-column label="数据时间" prop="time" width="200" />
      <el-table-column label="时间周期" prop="cycle" width="100" />
      <el-table-column label="空间分辨率" prop="space" width="100" />
      <el-table-column label="文件大小" prop="fileSize" width="100" />
      
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleCheck(scope.row)"
          >查看</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-circle-check"
            @click="handleUpdate(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: "RoleList",
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
    .content {
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
      height: calc(100vh - 117px -82px);
    }
  }
  .el-form--inline .el-form-item {
    margin-top: -14px;
  }
  </style>