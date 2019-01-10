<template>
    <div class="content">
        <section class="left">
            <p>
                <van-icon name="shopping-cart-o" info="0"/>
            </p>
        </section>
        <section class="right">
            <van-submit-bar :price="price" button-text="去下单" @submit="onSubmit"/>
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            price: 9999,
        }
    },
    methods: {
        onSubmit() {

        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    $line-cart: $base-size;
    $cart-border: 10px;
    .left {
        p {
            width: $line-cart;
            height: $line-cart;
            line-height: $line-cart + ($cart-border * 4);
            border-radius: $basics;
            border: $cart-border solid $color-gray-e;
            text-align: center;
            background-color: $color-base;
            position: relative;
            top: -$spacing-xm;
            left: $spacing-xm;
            z-index: 999;
            .van-icon {
                font-size: $text-xxxl;
                color: $color-white;
            }
        }
    }
    .right {
        .van-submit-bar {
            bottom: 100px;
        }
    }
}
</style>

