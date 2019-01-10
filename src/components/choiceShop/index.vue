<template>
    <div class="content">
        <div class="left">
            <section>
                <van-icon name="shop-collect-o" />
            </section>
            <section>
                <h3>{{innerShop.name || '暂无门店'}}</h3>
                <p>{{innerShop.distance || '请选择城市'}}</p>
            </section>
        </div>
        <div class="right">
            <van-switch v-model="checked" />
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            checked: false
        }
    },
    mounted() {
        this.takeInit();
    },
    props: {
        innerShop: {
            type: Object,
        },
        innerSwitch: {
            type: Boolean
        }
    },
    methods: {
        ...mapMutations(['TAKEOUT']),
        /**
         * 外卖初始化
         */
        takeInit() {
            this.checked = this.innerSwitch;
            this['TAKEOUT'](this.checked);
        }
    },
    watch: {
        docked(e) {
            this['TAKEOUT'](e);
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    @include standard-padding;
    @include flex-half($basics);
    div.left {
        @include flex-half(auto);
        section {
            &:first-child {
                @include flex-center(center, center);
                max-width: 60px;
            }
            p {
                color: $color-gray-9;
            }
        }
    }
    div.right {
        @include flex-center(flex-end, center);
    }
}
</style>

