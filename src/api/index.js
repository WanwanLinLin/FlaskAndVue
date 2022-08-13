// 该模块用于对API进行统一的管理
import instance from "./request";
import mockRequests from "./mockRequest"

// 获取三级分类的接口
export const reqCategoryList = ()=>instance({url: "/goods/getBaseCategoryList", method: 'get'})

// 获取首页轮播图的接口
export const reqGetBannerList = ()=>mockRequests.get("/banner");

// 获取 floor 数据
export const reqGetFloorList = ()=>mockRequests.get("/floor");

// 获取搜索模块数据
export const reqGetSearchInfo = (params)=>instance({url: "/goods/list", method: "post", data: params})

// 获取商品详情的接口
export const reqGoodsInfo = (skuId)=>instance({url: `/goods/item/${skuId}`, method: "get"})

// 添加商品到购物车的接口
export const reqAddOrUpdateShopCart = (skuId, skuNum)=>instance({url: `/trades/addToCart/${skuId}/${skuNum}`, method: "post"})

// 查询购物车中所有订单的接口
export const reqCartList = ()=>instance({url: "/trades/cartList", method: "get"})

// 删除购物车中订单的接口
export const reqDeleteCartById = (skuId)=>instance({url: `/trades/deleteCart/${skuId}`, method: "delete"})

// 修改购物车中选中的商品的接口
export const reqUpdateCheckedById = (skuId, isChecked)=>instance({url: `/trades/checkCart/${skuId}/${isChecked}`, method: "get"})