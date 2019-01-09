<template>
    <div class="wrapper">
        <section>
            <choice-shop></choice-shop>
        </section>
        <section></section>
        <section></section>
        <section></section>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';
import { ChoiceShop } from "@/components";

export default {
    mounted() {

    },
    methods: {
        // textLogin() {
        //     let params = {
        //         aaa: 'aaa11'
        //     }
        //     this.$service.commonCall('toLogin', params, {
        //         success(res) {
        //             console.log(res.data);
        //         }, failMsg: "失败"
        //     });
        // }
    },
    computed: {

    },
    components: {
        ChoiceShop
    }
}
</script>

<style lang="scss" scoped>
    
</style>

