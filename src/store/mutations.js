import {
    TAKEOUT,
    USERINFO
} from './mutationsTypes'

export default {
    [TAKEOUT](state, v) {
        state.takeOut = v;
    },
    [USERINFO](state, v) {
        state.userInfo = v;
    },
}