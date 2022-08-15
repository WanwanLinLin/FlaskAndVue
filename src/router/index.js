// 该文件用于引入路由
import Vue from 'vue'
import store from '@/store';
import routes from './routes';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

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
let router =  new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior (to, from, savePosition) {
        return { x: 0, y: 0 }
    }
});

// 全局守卫：前置守卫->用于在路由跳转之前进行判断
router.beforeEach(async (to, from , next)=>{
    // next为放行函数
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.path=="/login"){
            next("/home");
        }else{
            if (name) {
                next();
            }else{
                try {
                    // 没有用户信息
                    // 获取用户信息并在首页展示
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    // 此时token失效了获取不到用户信息，
                    // 那就清除token
                    await store.dispatch("userLogout");
                    next("/login");
                }
            }
        }
    }else{
        next();
    }
});

export default router;

