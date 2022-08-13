// 对axios进行二次封装，用到它的请求和响应拦截器
import axios from "axios"
import store from "@/store";
import nprogress from "nprogress"
import "nprogress/nprogress.css"


let instance = axios.create({
    baseURL: "/v1",
    timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use((config) => {
    // 在请求头添加一个字段（userTempId）
    if (store.state.detail.uuid_token) {
            config.headers.userTempId = store.state.detail.uuid_token;
    }
    // 进度条开始启动
    nprogress.start()
    return config;
});

// 响应拦截器
instance.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done()
    return res.data;
}, (error) => {
    return Promise.reject(new Error("Sorry, Response Failed!!"))
});

export default instance;

