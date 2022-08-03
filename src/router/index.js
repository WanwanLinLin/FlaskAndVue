// 该文件用于引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'


// 重写 push 与 replace 方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, resolve, reject) {
    if(resolve && reject)
    {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}

VueRouter.prototype.replace = function() {
    if(resolve && reject)
    {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, ()=>{}, ()=>{});
    }
}

// 此处用于配置路由
export default new VueRouter({
    routes:[
        {
            path: "/home",
            component: Home,
            meta: {show: true}
        },

        {
            path: "/search/:keyword?",
            component: Search,
            meta: {show: true},
            name: "search"

        },

        {
            path: "/login",
            component: Login,
            meta: {show: false}

        },

        {
            path: "/register",
            component: Register,
            meta: {show: false}

        },

        // 重定向
        {
            path: "*",
            redirect: "/home"
        },
    ]
})

