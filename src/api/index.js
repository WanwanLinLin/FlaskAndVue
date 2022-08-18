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
export const reqGetSearchInfo = (data)=>instance({url: "/goods/list", method: "post", data})

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

// 获取验证码的接口
export const reqGetCode = (phone)=>instance({url: `/users/passport/sendCode/${phone}`, method: "get"})

// 注册的接口
export const reqUserRegister = (data)=>instance({url: '/users/passport/register', method: "post", data})

// 登录的接口
export const reqUserLogin = (data)=>instance({url: '/users/passport/login', method: "post", data})

// 获取用户信息
export const reqUserInfo = ()=>instance({url: '/users/passport/auth/getUserInfo', method: "get"})

// 退出登录
export const reqLogout = ()=>instance({url: '/users/passport/logout', method: "get"})

// 获取用户收货地址信息
export const reqAddressInfo = ()=>instance({url: "/trades/userAddress/auth/findUserAddressList", method: "get"})

// 获取商品清单
export const reqOrderInfo = ()=>instance({url: "/trades/auth/trade", method: "get"})

// 提交订单的接口
export const reqSubmitOrder = (tradeNo, data)=>instance({url: `/trades/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post"})

// 获取支付信息
export const reqPayInfo = (orderId)=>instance({url: `/trades/payment/weixin/createNative/${orderId}`, method: "get"})

// 获取订单支付状态的接口
export const reqPayStatus = (orderId)=>instance({url: `/trades/weixin/queryPayStatus/${orderId}`, method: "get"})

// 获取个人中心数据的接口
export const reqMyOrderList = (page, limit)=>instance({url: `/trades/order/auth/${page}/${limit}`, method: "get"})
