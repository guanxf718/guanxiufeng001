<template>
    <div class="content">
        <section class="left">
            <section>
                <p>
                    <van-icon name="cart-o" info="9"/>
                </p>
            </section>
            <section>
                <p>¥1</p>
            </section>
        </section>
        <section class="right">
            <van-button type="primary">去下单</van-button>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
    $line-cart: $base-size;
    $cart-border: 10px;
    $base: 30px;
    @include flex-half(auto);
    border-top: $border solid $color-gray-e;
    background-color: $color-white;
    .left {
        @include flex-half(auto);
        & > section {
            &:nth-child(1) {
                min-width: $base-size * 2;
                max-width: $base-size * 2;
                padding-left: $spacing-xm;
                p {
                    width: $line-cart;
                    height: $line-cart;
                    line-height: $line-cart + ($cart-border * 4);
                    border-radius: $basics;
                    border: $cart-border solid $color-gray-e;
                    text-align: center;
                    background-color: $color-base;
                    position: relative;
                    margin-top: -$spacing-xm;
                    .van-icon {
                        font-size: $text-xxxl;
                        color: $color-white;
                    }
                    span {
                        position: absolute;
                        top: 0;
                        right: -$spacing-s;
                        width: $base;
                        height: $base;
                        line-height: $base;
                        border-radius: $basics;
                        background-color: $color-red;
                        color: $color-white;
                    }
                }
            }
            &:nth-child(2) {
                p {
                    height: $base-size;
                    line-height: $base-size;
                    color: $color-orange;
                    font-size: $text-xxl;
                }
            }
        }
    }
    .right {
        min-width: $base-size * 2;
        max-width: $base-size * 2;
        .van-button {
            width: 100%;
            height: 100%;
            border-radius: 0;
            box-shadow: 0 0 0;
            background-color: $color-base;
            border: 0;
        }
    }
}
</style>

