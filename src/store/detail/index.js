import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import { getUUID } from "@/utils/uuid_token"

const state = {
    goodsInfo: {},
    // 设置一个游客的临时身份
    uuid_token: getUUID()
};
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    }
};
const actions = {
    async getGoodsInfo({commit}, skuId) {
        let result = await reqGoodsInfo(skuId);
        if(result.code==200){
            commit("GETGOODSINFO", result.data);
        }
    },

    // 将产品添加到购物车中
    // 前台将参数返回给服务器，服务器只需将对应的数据写入即可
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code==200) {
            return "Ok!!"
        }else{
            return Promise.reject(new Error("faile"));
        }
    }

};
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        return state.goodsInfo.categoryView || {};
    },

    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },

    // 简化产品的售卖属性
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}