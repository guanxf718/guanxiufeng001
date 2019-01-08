import service from "./config";

export default {
    commonCall(serviceName, params, callback, isLoading = true) {
        return new Promise((resolve, reject) => {
            service[serviceName](params)
                .then(
                    res => {
                        if (res.status == 200 && res.data) {
                            callback && callback.success && callback.success(res);
                            resolve();
                        } else {
                            if (callback && callback.fail) {
                                callback.fail(res);
                            } else {
                                console.log(res.data.message ||
                                    (callback ? callback.failMsg : null) ||
                                    "获取数据失败！");
                            }
                            reject();
                        }
                    },
                    err => {
                        if (callback && callback.error) {
                            callback.error(err);
                        } else {
                            console.log((callback ? callback.errorMsg : null) || "服务器错误！");
                        }
                        reject();
                    }
                )
                .finally(() => {
                    // console.log('结束');
                });
        });
    }
}