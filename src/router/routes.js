// 路由配置信息
// 引入一级路由组件
// import Home from '@/pages/Home';
// import Search from '@/pages/Search';
// import Login from '@/pages/Login';
// import Register from '@/pages/Register';
// import Detail from "@/pages/Detail";
// import AddCartSuccess from "@/pages/AddCartSuccess";
// import ShopCart from "@/pages/ShopCart";
// import Trade from "@/pages/Trade";
// import Pay from "@/pages/Pay";
// import PaySuccess from "@/pages/PaySuccess";
// import Center from "@/pages/Center";
// import MyOrder from "@/pages/Center/myOrder";
// import GroupOrder from "@/pages/Center/groupOrder";

// 引入二级路由组件


export default [
    {
        path: "/detail/:skuid",
        component: ()=>import("@/pages/Detail"),
        meta: { show: true }
    },

    {
        path: "/home",
        component: ()=>import('@/pages/Home'),
        meta: { show: true }
    },

    {
        path: "/search/:keyword?",
        component: ()=>import('@/pages/Search'),
        meta: { show: true },
        name: "search"

    },

    {
        path: "/login",
        component: ()=>import('@/pages/Login'),
        meta: { show: false }

    },

    {
        path: "/register",
        component: ()=>import('@/pages/Register'),
        meta: { show: false }

    },

    // 重定向
    {
        path: "*",
        redirect: "/home"
    },

    // 购物车下单成功的路由
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: ()=>import("@/pages/AddCartSuccess"),
        meta: { show: true }
    },

    {
        path: "/shopcart",
        component: ()=>import("@/pages/ShopCart"),
        meta: { show: true }
    },

    {
        path: "/trade",
        component: ()=>import("@/pages/Trade"),
        meta: { show: true },
        // 尝试使用路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == "/shopcart") {
                next();
            } else {
                next(false);
            }
        }
    },

    {
        path: "/pay",
        component: ()=>import("@/pages/Pay"),
        meta: { show: true },
        // 尝试使用路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == "/trade") {
                next();
            } else {
                next(false);
            }
        }
    },

    {
        path: "/paysuccess",
        component: ()=>import("@/pages/PaySuccess"),
        meta: { show: true }
    },

    {
        path: "/center",
        component: ()=>import("@/pages/Center"),
        meta: { show: true },
        // 二级路由组件
        children: [
            {
                path: "myorder",
                component: ()=>import("@/pages/Center/myOrder"),
            },
            {
                path: "grouporder",
                component: ()=>import("@/pages/Center/groupOrder"),
            },
            {
                path: "/center",
                redirect: "/center/myorder"
            }
        ]
    },
]