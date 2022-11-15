
author：tiantf
time：20200908
remarks：管理平台主页

<template>
<div>
    <IntegratePage class="top" />
    <NavMenu />
    <!-- <RealTest /> -->
    <!-- <RoleList /> -->
    <!-- <CreateTask /> -->
    <!-- <TaskConfig /> -->
    <!-- <MulTask /> -->
    <div>
      <router-view :key="key" />
    </div>
  </div>
</template>
<script>
import IntegratePage from "./../integratePage/index"
import NavMenu from "./../navMenu/index"
import RealTest from "./../tables/index"
import RoleList from "./../tables/source.vue"
import CreateTask from "./../tables/createTask.vue"
import TaskConfig from "./../tables/taskConfig.vue"
import MulTask from "./../tables/mulTask.vue"
export default {
      name: "HomePage",  //组件名称
      components: {  //引入模板
            IntegratePage,
            NavMenu,
            RealTest,
            RoleList,
            CreateTask,
            TaskConfig,
            MulTask
      },
      data() {
            return {
                  //   定义数据
                  loading: false,
            };
      },
      mounted(){
            console.log(333,this.key)
      },
      computed: {
            key() {
                  // console.log(this.$route.path, 'route3333')
                  return this.$route.path
            }
      },
};
</script>
<style lang="less" scoped>
</style>