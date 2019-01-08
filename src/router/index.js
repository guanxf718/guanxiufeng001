import Vue from 'vue';
import Router from 'vue-router';

import Config from './config';
import Guard from './guard';

Vue.use(Router);

let vueRouter = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...Config]
});


vueRouter.beforeEach((to, from, next) => {
    Guard(vueRouter, to, from, next);
});

vueRouter.afterEach((to, from, next) => {});

export default vueRouter;