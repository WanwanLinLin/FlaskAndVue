import Vue from 'vue'
import App from './App.vue'

// 注册三级联动的全局组件
import TypeNav from "@/components/TypeNav"

// 注册轮播图的全局组件
import Carousel from "@/components/Carousel";

// 注册分页的全局组件
import Pagination from "@/components/Pagination"

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false


import router from '@/router'
import store from "@/store"

// 引入mock，传递虚拟数据
import "@/mock/mockServe"

// 引入swiper的样式
import "swiper/css/swiper.css";
new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },

  // 注册路由
  router,
  // 注册仓库，组件实例身上会多一个 $store 属性
  store
}).$mount('#app')

