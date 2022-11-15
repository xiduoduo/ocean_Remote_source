import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
// import TopNav from '../views/topNav.vue' //应用平台首页
// import OceanIndex from '../views/oceanIndex/index.vue'
// import platformIndex from '../views/platformIndex/index.vue'
// import environmentDiolag from '../views/dialog/environmentDiolag.vue'
// import arithmeticDiolag from '../views/dialog/arithmeticDiolag.vue'
// import queryDiolag from '../views/dialog/queryDiolag.vue'

Vue.use(VueRouter)

export const routes = [
//   {
//   path: '/',
//   name: 'OceanIndex',
//   component: OceanIndex,
//   meta: {
//     title: "海洋卫星遥感应用平台"
//   },
//   redirect: "/platformIndex",
//   children: [{ //首页
//     path: '/platformIndex',
//     name: 'platformIndex',
//     component: platformIndex,
//     meta: {
//       title: '首页',
//       img: require('../assets/image/icons/home.png'),
//       activeMenu:'/platformIndex'
//     }
//   }
//   ]
// }
{
  path: '/',
  name: 'Login',
  component: Login,
  hidden: true,
  redirect: "/login",
  children: [{ //首页
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '首页',
      // img: require('../assets/image/icons/home.png'),
      activeMenu:'/login'
    }
  }
  ]
  // children: [
  //   {
  //     path: '/redirect/:path(.*)',
  //     component: (resolve) => require(['@/views/redirect'], resolve)
  //   }
  // ]
},
{
  path: '/login',
  component: (resolve) => require(['@/views/login'], resolve),
  hidden: true
},
{
  path: "/tables",
  name: "IntegratePage",
  title: "原始资料",
  hidden: false,
  image: require('@/assets/images/yuanshiziliao.png'),
  component: () =>
    // import("@/components/ocean/index.vue")
    import("@/components/homePage/index.vue"),
  children: [{
    path: 'homePage',
    component: (resolve) => require(['@/components/homePage/index.vue'], resolve),
    name: 'HomePage',
    hidden: false,
    meta: {
      title: '原始资料管理',
      icon: 'user'
    }
  },{
    path: 'homePage',
    component: (resolve) => require(['@/components/homePage/index.vue'], resolve),
    name: 'HomePage',
    hidden: false,
    meta: {
      title: '标准化处理',
      icon: 'user'
    }
  }]
},
{
    path: "/ocean",
    name: "ocean",
    title: "集成页面",
    hidden: true,
    component: () =>
      import("@/components/ocean/index.vue")
      // import("@/components/homePage/index.vue")
  },

  //tables
  {
    name: "Tool",
    path: "/tables",
    hidden: false,
    isTable: true,
    redirect: "/build",
    alwaysShow: true,
    meta: {
        title: "系统工具",
        icon: "tool",
        noCache: false
    },
    // component: () =>
    // import("@/components/ocean/index.vue")
    // import("@/components/homePage/index.vue"),
    children: [
        {
            name: "createTask",
            path: "/build",
            hidden: false,
            component: (resolve) => require(['@/components/tables/createTask.vue'], resolve),
            meta: {
                title: "表单构建",
                icon: "build",
                noCache: false,
            }
        },
        {
            name: "Gen",
            path: "/index",
            hidden: false,
            meta: {
                title: "代码生成",
                icon: "code",
                noCache: false
            }
        },
        {
            name: "Swagger",
            path: "/mulTask",
            hidden: false,
            meta: {
                title: "系统接口",
                icon: "swagger",
                noCache: false
            }
        }
    ]
  }
]
// export const inteRoutes = [
//   {
//     path: "/integratePage",
//     name: "IntegratePage",
//     title: "原始资料",
//     hidden: false,
//     image: require('@/assets/images/yuanshiziliao.png'),
//     component: () =>
//       // import("@/components/ocean/index.vue")
//       import("@/components/homePage/index.vue"),
//     children: [{
//       path: 'homePage',
//       component: (resolve) => require(['@/components/homePage/index.vue'], resolve),
//       name: 'HomePage',
//       hidden: false,
//       meta: {
//         title: '原始资料管理',
//         icon: 'user'
//       }
//     },{
//       path: 'homePage',
//       component: (resolve) => require(['@/components/homePage/index.vue'], resolve),
//       name: 'HomePage',
//       hidden: false,
//       meta: {
//         title: '标准化处理',
//         icon: 'user'
//       }
//     }]
//   }]

const router = new VueRouter({
  routes,
  // inteRoutes
})

export default router