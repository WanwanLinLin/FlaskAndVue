import Vue from 'vue'
import App from './App.vue'

// 注册三级联动的全局组件
import TypeNav from "@/components/TypeNav"

// 注册轮播图的全局组件
import Carousel from "@/components/Carousel";

// 注册分页的全局组件
import Pagination from "@/components/Pagination"

// 引入饿了么ui
import {Button, MessageBox} from "element-ui"

import VueLazyload from 'vue-lazyload'

// 使用图片懒加载
import erha from '@/assets/images/1.gif';
Vue.use(VueLazyload, {
  loading: erha,
});

// 引入插件
import "@/plugins/validate";
import myPlugins from "@/plugins/myPlugins";
Vue.use(myPlugins);

// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false


import router from '@/router'
import store from "@/store"

// 引入mock，传递虚拟数据
import "@/mock/mockServe"

// 一次性引入api文件夹里面全部的请求函数，方便以后直接调用
import * as API from "@/api";

// 引入swiper的样式
import "swiper/css/swiper.css";
new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },

  // 注册路由
  router,
  // 注册仓库，组件实例身上会多一个 $store 属性
  store
}).$mount('#app')

