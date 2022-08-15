import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

// 引入小仓库
import home from "./home";
import detail from "./detail";
import search from "./search";
import shopcart from "./shopcart";
import user from "./user";

// 对外暴露store类的实例
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        user
    }
})