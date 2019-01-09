<template>
    <div class="wrapper">
        <section>
            <choice-shop :inner-shop="currentShop" :inner-switch="iTakeOut"></choice-shop>
        </section>
        <section>
            <ad-carousel :inner-list="imgList"></ad-carousel>
        </section>
        <section>
            <product-queue></product-queue>
        </section>
        <section>
            
        </section>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';
import { ChoiceShop, AdCarousel, ProductQueue } from "@/components";

export default {
    data() {
        return {
            currentShop: {
                name: '官十九',
                distance: '距离您60km'
            },
            iTakeOut: true,
            imgList: ['images/carousel/img1.jpg', 'images/carousel/img2.jpg', 'images/carousel/img3.jpg']
        }
    },
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
        ...mapGetters(['takeOut']),
    },
    components: {
        ChoiceShop, AdCarousel, ProductQueue
    }
}
</script>

<style lang="scss" scoped>
</style>

