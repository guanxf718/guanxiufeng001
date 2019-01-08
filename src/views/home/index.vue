<template>
    <div>首页{{guanxiufeng}}</div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';

export default {
    mounted() {
        this['GUANXIUFENG']('aaa');
        this.textLogin();
    },
    methods: {
        ...mapMutations(['GUANXIUFENG']),
        textLogin() {
            let params = {
                aaa: 'aaa'
            }
            this.$service.commonCall('toLogin', params, {
                success(res) {
                    console.log(res.data);
                }, failMsg: "失败"
            });
        }
    },
    computed: {
        ...mapGetters(['guanxiufeng']),
    }
}
</script>

<style>
</style>
