import axios from 'axios';
import qs from 'qs';
import config from '@/config';
import store from '@/store';

// axios 配置
axios.defaults.timeout = 15000;
axios.defaults.baseURL = config.apiHost;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

// 默认附带参数
let getDefaultParam = config.getDefaultParam = () => {
    let defaultParam = {};
    if (store.getters.userInfo) {
        defaultParam = {

        };
    }
    return {
        param: defaultParam,
        paramStr: qs.stringify(defaultParam)
    };
};

// POST传参序列化
axios.interceptors.request.use(config => {
    let isPost = config.method === 'post';
    let configKey = isPost ? 'data' : 'params';
    config.params = {...(config.params || {}), ...getDefaultParam().param }
    config[configKey] = {...(config[configKey] || {}) };
    // 当post提交时候，config 可配置 requestType => payload 或者 formData，默认 formData
    if (isPost) {
        if (config.requestType == 'payload') {
            config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        } else {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
            config.data = qs.stringify(config.data)
        }
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use(res => {
    if (!res.data || typeof(res.data) == 'string') {
        res.data = {
            status: 'failed'
        };
    }
    if (res.data && (res.data.status == 200 || res.data.status == 'success')) {
        res.success = true;
    }
    return res;
}, error => {
    return Promise.reject(error);
});


import service from './service';

export default {
    ...service(axios, config),
};