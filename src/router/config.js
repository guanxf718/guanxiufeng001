const HOME = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'home');
const ORDER = r => require.ensure([], () => r(require('@/views/order/index.vue')), 'order');
const USER = r => require.ensure([], () => r(require('@/views/user/index.vue')), 'user');
const LOGIN = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login');

/**
 * 路由meta参数配置说明
 *  auth  是否需要用户登录验证
 *  title 改变浏览器标题名称
 *  template 使用模版名称
 *  menuTag 左侧栏菜单项激活
 */

export default [
    // 缺省页面重定向主页面
    {
        path: '/',
        redirect: { name: 'home' }
    },
    // 首页
    {
        path: '/home',
        name: 'home',
        meta: {
            auth: true,
            title: '首页',
            menuTag: 'home'
        },
        component: HOME
    },
    // 订单
    {
        path: '/order',
        name: 'order',
        meta: {
            auth: true,
            title: '订单',
            menuTag: 'order'
        },
        component: ORDER
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            auth: true,
            title: '我得',
            menuTag: 'user'
        },
        component: USER
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            auth: true,
            title: '登录',
            menuTag: 'login'
        },
        component: LOGIN
    },
];