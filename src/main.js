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
    Button,
    Tabs,
    ExpansionPanel,
    DateInput
} from 'muse-ui';

Vue.use(BottomNav)
    .use(Grid)
    .use(Icon)
    .use(Switch)
    .use(Carousel)
    .use(Button)
    .use(Tabs)
    .use(ExpansionPanel)
    .use(DateInput);
Vue.prototype.$service = service;
Vue.config.productionTip = false;

theme.add('orange', {
    primary: '#f9a825',
    secondary: '#ff4081',
    success: '#4caf50',
    warning: '#ffeb3b',
}, 'light');
theme.use('orange');

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');