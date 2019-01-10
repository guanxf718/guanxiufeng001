import store from "@/store";
export default (vueRouter, to, from, next) => {
    let login = true, //是否登录
        toPass = v => ['login', 'home'].some(el => el == v), //判断是否可以直接访问的页面
        isActive = (v) => v.meta && v.meta.tabbar, //判断是不是主页面
        setActive = (v) => {
            store.commit('TABBARACTIVE', v.meta.active); //将所选页面保存到vuex
        };
    if (to.name) {
        if (toPass(to.name)) {
            if (isActive(to)) {
                setActive(to);
            }
            next();
        } else {
            if (login) {
                if (isActive(to)) {
                    setActive(to);
                }
                next();
            } else {
                vueRouter.push('/login');
            }
        }
    } else {
        vueRouter.push('/');
    }
};