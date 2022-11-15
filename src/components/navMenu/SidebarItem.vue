<template>
  <div v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <!-- <i class="iconfont icon-dian"></i> -->
          <!-- <item
            :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />-->
          <i class="iconfont icon-dian"></i>
          <item :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
// import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  mounted() {
    // console.log(path)
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      if (!children) {
        children = []
      }
      const showingChildren = children.filter((item, index) => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          if (item.name == '首页') {
            children.slice(index, 1)
          }
          this.onlyOneChild = item
          // console.log(this.onlyOneChild, 'chiled')
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath(routePath) {
      // console.log(33,routePath)
      // console.log(isExternal(routePath))
      // if (isExternal(routePath)) {
      //   console.log(44,routePath)
      //   return routePath
      // }
      // if (isExternal(this.basePath)) {
      //   console.log(55,routePath)
      //   return this.basePath
      // }
      // console.log(this.basePath,routePath)
      return this.basePath + routePath
      // console.log(path.resolve(this.basePath, routePath))
      // return path.resolve(this.basePath, routePath)

    },
  },
}
</script>
<style scoped>
.iconfont {
  color: #64c4db;
  font-size: 16px;
}
</style>
