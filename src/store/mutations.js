import {
    GUANXIUFENG,
    USERINFO
} from './mutationsTypes'

export default {
    [GUANXIUFENG](state, v) {
        state.guanxiufeng = v;
    },
    [USERINFO](state, v) {
        state.userInfo = v;
    },
}