<template>
  <div
    class="has-logo nav-menu"
    :style="{ backgroundColor: settings.sideTheme === 'theme-dark' ? variables.menuBg : variables.menuLightBg }"
  >
    <div class="nav-title">导航菜单</div>
    <el-scrollbar
      :class="settings.sideTheme"
      wrap-class="scrollbar-wrapper"
    >
      <el-menu
        :collapse="isCollapse"
        :background-color="settings.sideTheme === 'theme-dark' ? variables.menuBg : variables.menuLightBg"
        :text-color="settings.sideTheme === 'theme-dark' ? variables.menuText : 'rgba(14, 26, 53, 1)'"
        :unique-opened="true"
        :active-text-color="settings.theme"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import { routes } from './../../router/router'
export default {
  components: { SidebarItem },
  data(){
    return {
      sidebarRouters: [],
      settings: {
        fixedHeader: false,
        showSettings: false,
        sideTheme: "theme-dark",    
        sidebarLogo: true,
        tagsView: true,
        theme: "#1890ff",
        topNav: false
      },
      
      variables: {
        menuText:"#64C4DB",
        menuActiveText:"#409EFF",
        subMenuActiveText:"#64C4DB",
        menuBg:"#0E1D40",
        menuHover:"#263445",
        menuLightBg:"#ffffff",
        menuLightHover:"#f0f1f5",
        subMenuBg:"#0E1D40",
        subMenuHover:"rgba(0, 0, 0, 0.06)",
        sideBarWidth:"1.042rem",
        sidebarTitle:"#ffffff",
        sidebarLightTitle:"#001529"
      },
      isCollapse: false
    }
  },
  computed: {
    
  },
  mounted() {
    console.log(routes)
    routes.forEach((item,i)=>{
      if(item.isTable){
        this.sidebarRouters.push(item)
      }
    })
    console.log(this.sidebarRouters)
    // this.sidebarRouters;
  },
}
</script>
<style  rel="stylesheet/scss" scoped>
.sidebar-container {
  background: #0a1630;
}
.el-menu-item.is-active {
  color: #0a1630;
}
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
</style>
