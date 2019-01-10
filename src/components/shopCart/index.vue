<template>
    <div class="content">
        <section class="left">
            <section>
                <p>
                    <mu-icon value="shopping_cart"></mu-icon>
                    <span>0</span>
                </p>
            </section>
            <section>
                <p>¥1</p>
            </section>
        </section>
        <section class="right">
            <mu-button color="primary">去下单</mu-button>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
    $line-cart: $base-size + $spacing-x;
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
                    line-height: $line-cart + ($cart-border * 2);
                    border-radius: $basics;
                    border: $cart-border solid $color-gray-e;
                    text-align: center;
                    background-color: $color-base;
                    position: relative;
                    margin-top: -$spacing-xm;
                    .mu-icon {
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
                    color: $color-base;
                    font-size: $text-xxl;
                }
            }
        }
    }
    .right {
        min-width: $base-size * 2;
        max-width: $base-size * 2;
        .mu-button {
            width: 100%;
            height: 100%;
            border-radius: 0;
            box-shadow: 0 0 0;
        }
    }
}
</style>

