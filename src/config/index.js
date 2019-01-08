const CONFIG = {
    // 测试环境
    development: {
        host: '',
    },
    // 模拟环境
    staging: {
        host: '',
    },
    // 正式环境
    production: {
        host: '',
    }
};

module.exports = CONFIG[process.env.NODE_ENV];