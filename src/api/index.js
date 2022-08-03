// 该模块用于对API进行统一的管理
import instance from "./request";
import mockRequests from "./mockRequest"

// 获取三级分类的接口
export const reqCategoryList = ()=>instance({url: "/goods/getBaseCategoryList", method: 'get'})

// 获取首页轮播图的接口
export const reqGetBannerList = ()=>mockRequests.get("/banner");