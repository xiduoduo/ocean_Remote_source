import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueWechatTitle from "vue-wechat-title"
// import 'leaflet/dist/leaflet.css'
// import 'leaflet.pm'
// import 'leaflet.pm/dist/leaflet.pm.css'
// import 'proj4'
// import './assets/js/Leaflet.ImageOverlay.Rotated.js'
// import './assets/js/proj4leaflet.js'
// import './assets/js/tileLayer.baidu.js'

console.log(11,router)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueWechatTitle);
// import cesiumDrawViewer from 'cesium-draw'
// Vue.use(cesiumDrawViewer)

// import {
//   mapData
// } from './assets/data/mapData'
// Vue.prototype.mapData = mapData;

// import api from "@/api/index" //引入api接口
// Vue.prototype.$api = api; //定义全局api

// Vue.prototype.timer = null;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
