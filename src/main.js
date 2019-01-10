import Vue from 'vue';
import App from './App.vue';
import router from './router'; //router
import store from './store'; //vuex
import service from './service'; //项目接口
import 'lib-flexible/flexible.js'; //rem
import './worker'; //缓存
import theme from 'muse-ui/lib/theme'; //muse-ui主题
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import 'material-icons/iconfont/material-icons.scss';
import {
    BottomNav,
    Grid,
    Icon,
    Switch,
    Carousel,
    Button
} from 'muse-ui';

theme.add('orange', {
    primary: '#f9a825',
    secondary: '#ff4081',
    success: '#4caf50',
    warning: '#ffeb3b',
}, 'light');

Vue.prototype.$service = service;

theme.use('orange');
Vue.use(BottomNav);
Vue.use(Grid);
Vue.use(Icon);
Vue.use(Switch);
Vue.use(Carousel);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');