import Vue from 'vue';
import App from './App.vue';
import router from './router'; //router
import store from './store'; //vuex
import service from './service'; //项目接口
import 'lib-flexible/flexible.js'; //rem
import './worker'; //缓存
import { Tabbar, TabbarItem, Switch, Icon, Swipe, SwipeItem, Button, SubmitBar } from 'vant';

Vue.use(Tabbar)
    .use(TabbarItem)
    .use(Switch)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(Button)
    .use(SubmitBar);

Vue.prototype.$service = service;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');