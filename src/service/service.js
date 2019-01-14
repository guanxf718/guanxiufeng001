// 用户信息或关于用户操作的接口
export default (axios, config) => {
    return {
        toLogin(data = {}) {
            return axios.get('data/login.json');
        },
        orderList(data = {}) {
            return axios.get('data/order.json');
        }
    };
};