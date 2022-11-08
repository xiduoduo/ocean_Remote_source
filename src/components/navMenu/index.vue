<template>
  <div class="nav-menu">
    <div class="nav-title">导航菜单</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="(item,index) in menuData"
      :key="index"
      >
      <el-submenu v-if="item.children" :index="item.index">
        <template slot="title" :index="item.index">
          <img :src="item.image" class="rgt-img" alt="">
          <span class="h1">{{item.menuName}}</span>
        </template>
        <el-menu-item
          class="h2"
          v-for="(item2,index2) in item.children"
          :key="index2" :class="item2.index == activeIndex?'active-menu':''" @click="tabClick(item2.index)">{{item2.childName}}</el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="item.index">
        <img :src="item.image" class="rgt-img" alt="">
        <span class="h1 lon" slot="title" :class="item.index == activeIndex?'active-menu':''" @click="tabClick(item.index)">{{item.menuName}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      uni: true,
      menuData: [
        {
          menuName: '原始资料',
          index: "0",
          // children: ['原始资料管理', '标准化处理'],
          children: [
            {
              childName: '原始资料管理',
              index: '0'
            },
            {
              childName: '标准化处理',
              index: '1'
            },
          ],
          image: require('@/assets/images/yuanshiziliao.png')
        },
        {
          menuName: '数据融合',
          index: "1",
          // children: ['融合资料管理', '融合任务管理', '融合日志管理'],
          children: [
            {
              childName: '融合资料管理',
              index: '2'
            },
            {
              childName: '融合任务管理',
              index: '3'
            },
            {
              childName: '融合日志管理',
              index: '4'
            }
          ],
          image: require('@/assets/images/shujuronghe.png')
        },
        {
          menuName: '质量检查',
          index: "2",
          image: require('@/assets/images/zhiliangjiancha.png'),
          index: '5'
          // children: [{
          //   childName: '质量检查',
          //   index: 5
          // }]
        },
        {
          menuName: '用户管理',
          index: "3",
          // children: ['角色管理', '账号管理', '权限管理', '操作日志'],
          children: [
            {
              childName: '角色管理',
              index: '6'
            },
            {
              childName: '账号管理',
              index: '7'
            },
            {
              childName: '权限管理',
              index: '8'
            },
            {
              childName: '操作日志',
              index: '9'
            }
          ],
          image: require('@/assets/images/yonghuguanli.png')
        },
        {
          menuName: '系统运维',
          index: "4",
          // children: [{
          //   childName: '系统运维',
          //   index: 10
          // }],
          index: '10',
          image: require('@/assets/images/xitongyunwei.png')
        },
      ],
      activeIndex: '0',
    } 
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tabClick(index){
      console.log(11)
      console.log(index)
      this.activeIndex = index;
      console.log(this.activeIndex)
    },
  }
}
</script>

<style lang="less" scoped>
  .nav-menu {
    width: 210px;
    height: calc(100vh - 67px);
    background-color: #062D57;
    display: inline-block;
  }
  .nav-title {
    height: 48px;
    line-height: 48px;
    background: #1A4676;
    color: #fff;
    font-family: PingFangSC-Medium, PingFang SC;
    text-align: center;
  }
 .el-menu-vertical-demo {
    background-color: #062D57 !important;
  }
  .el-submenu__title {
    background-color: #062D57 !important;
  }
  .rgt-img {
    width: 20px;
    height: 20px;
  }
  .h1 {
    margin-left: 15px;
  }
  .lon {
    color: #fff;
  }
  .h2 {
    color: #A3B1C1 !important;
    padding-left: 55px !important;
  }
  .active-menu {
    background: linear-gradient(90deg, rgba(0,252,255,0.32) 0%, rgba(0,255,253,0.02) 100%);
    border-left: 3px solid #40DFF8;
  }
</style>