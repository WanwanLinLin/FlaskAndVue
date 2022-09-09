import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
};
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        // console.log(result);
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },

    // 删除购物车某个商品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "Ok";
        } else {
            return Promise.reject(new Error("failed!!"));
        }
    },

    // 修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return "OK";
        } else {
            return Promise.reject(new Error("failed!!"));
        }
    },

    // 删除全部勾选到的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        // context: 是一个类似于store的小仓库
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.connect_goods_se_sku_id) : "";
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },

    // 修改全部产品的isChecked
    async updateAllCartIsChecked({ dispatch, state }, isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach((item) => {
        let promise = dispatch("updateCheckedById",
                {
                    skuId: item.connect_goods_se_sku_id,
                    isChecked
                });
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    },

};
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}