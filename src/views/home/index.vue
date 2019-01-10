<template>
    <div class="wrapper">
        <section class="choice">
            <choice-shop :inner-shop="currentShop" :inner-switch="iTakeOut"></choice-shop>
        </section>
        <section class="carousel">
            <ad-carousel :inner-list="imgList"></ad-carousel>
        </section>
        <section class="product">
            <!-- <product-queue></product-queue> -->
        </section>
        <section class="cart">
            <shop-cart></shop-cart>
        </section>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';
import { ChoiceShop, AdCarousel, ProductQueue, ShopCart } from "@/components";

export default {
    data() {
        return {
            currentShop: {
                name: '官十九',
                distance: '距离您60km'
            },
            iTakeOut: true,
            imgList: ['images/carousel/img1.jpg', 'images/carousel/img2.jpg', 'images/carousel/img3.jpg'],
            productList: {}
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
        ChoiceShop, AdCarousel, ProductQueue, ShopCart
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    overflow: hidden;
    @include flex-down;
    .choice {
        @include flex-fixed(auto, $home-choice);
    }
    .carousel {
        @include flex-fixed(auto, $home-carousel);
    }
    .product {
        @include flex-fixed(auto, $home-product);
    }
    .cart {
        @include flex-fixed(auto, $home-cart);
    }
}
</style>

