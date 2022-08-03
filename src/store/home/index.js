// home模块的小仓库
import { reqCategoryList, reqGetBannerList } from "@/api";

const state = {
    // 默认初始值为数组（根据接口返回值初始化）
    categoryList: [],
    bannerList: [],

};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },

    // 获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }

    }

};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}