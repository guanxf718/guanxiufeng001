import {
    TAKEOUT,
    USERINFO,
    TABBARACTIVE
} from './mutationsTypes'

export default {
    [TAKEOUT](state, v) {
        state.takeOut = v;
    },
    [USERINFO](state, v) {
        state.userInfo = v;
    },
    [TABBARACTIVE](state, v) {
        state.tabbarActive = v;
    },
}