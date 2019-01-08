import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import theme from 'muse-ui/lib/theme';
import service from './service';
import './worker';
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import 'material-icons/iconfont/material-icons.scss';
import { BottomNav, Select } from 'muse-ui';

theme.add('orange', {
    primary: '#f9a825',
    secondary: '#ff4081',
    success: '#4caf50',
    warning: '#ffeb3b',
}, 'light');

Vue.prototype.$service = service;

theme.use('orange');
Vue.use(BottomNav);
Vue.use(Select);



Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');