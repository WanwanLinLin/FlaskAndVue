// 这里是登录与注册的小仓库
import { reqGetCode, reqUserRegister, reqUserLogin
, reqUserInfo, reqLogout } from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";

const state = {
    code: "",
    token: getToken(),
    userInfo: {},
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    }, 

    USERLOGIN(state, token) {
        state.token = token;
    },

    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },

    CLEAR(state) {
        state.token = "";
        state.userInfo = {};
        removeToken();
    },
};
const actions = {
    // 获取注册所需的验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        console.log(result);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "ok"
        } else {
            return Promise.reject(new Error("failed"));
        }
    },

    // 用户注册
    async userRegister({ commit }, username, phone, code, password) {
        let result = await reqUserRegister(username, phone, code, password);
        // console.log(result);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("failed"));
        }
    },

    // 用户登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            setToken(result.data.token);
            return "Ok"
        } else {
            return Promise.reject(new Error("failed!"));
        }
    },

    // 获取用户信息
    async getUserInfo({commit}) {
        let result = await reqUserInfo();
        console.log(result);
        if (result.code==200) {
            commit("GETUSERINFO", result.data);
            return "ok"
        }else{
            return Promise.reject(new Error("failed!"));
        }

        // else{
        //     return Promise.reject(new Error("failed!"));
        // }
    },

    // 退出登录
    async userLogout({commit}) {
        let result = await reqLogout();
        // 切记action里面不能操作state，只能提交由mutation处理
        if (result.code==200){
            commit("CLEAR");
            return "Ok";
        }else{
            return Promise.reject(new Error("failed!"));
        }
    },

};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}