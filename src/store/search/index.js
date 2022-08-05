// search模块的小仓库
import { reqGetSearchInfo } from "@/api";

const state = {
    searchList : {}
};

const mutations = {
    GETSEARCLIST(state, searchList) {
        state.searchList = searchList
    }
};

const actions = {
    async getSearchList({ commit }, params){
        // params 是当用户派发action的时候第二个参数传过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCLIST", result.data);
        }
    }
};

const getters = {
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}