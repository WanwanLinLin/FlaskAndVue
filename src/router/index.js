// 该文件用于引入路由
import Vue from 'vue'
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
export default new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior (to, from, savePosition) {
        return { x: 0, y: 0 }
    }
});

