<template>
    <mu-bottom-nav v-model="active">
        <mu-bottom-nav-item
            v-for="el in tabberList"
            :key="el.index"
            :title="el.title"
            :icon="el.icon"
            :to="el.menuTag"
        ></mu-bottom-nav-item>
    </mu-bottom-nav>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '@/router/config.js'
export default {
    data() {
        return {
            active: 0,
            tabberList: []
        }
    },
    mounted() {
        this.routerUrl();
    },
    methods: {
        routerUrl() {
            let array = [];
            // 从vuex中取选中页面
            this.active = this.tabbarActive;
            // 过滤路由主页面数据
            this.tabberList = router.filter(el => el.meta && el.meta.tabbar);
            // 过滤不必要的key
            this.tabberList.forEach(el => {
                for (const key in el) {
                    if (el.hasOwnProperty(key)) {
                        if (key == 'meta') {
                            el[key].menuTag = `/${el[key].menuTag}`;
                            array.push(el[key]);
                        }
                    }
                }
            });
            this.tabberList = array;
        }
    },
    computed: {
        ...mapGetters(['tabbarActive']),
    },
}
</script>

<style lang="scss" scoped>
.mu-bottom-nav {
    @include fiexd(auto, 0);
    height: auto;
    // border-top: $border solid $color-gray-e;
    a {
        padding: $spacing-x $spacing-s;
    }
}
</style>

