<template>
    <div class="content">
        <ul class="order-list">
            <li>
                <div class="title">
                    <section class="left">
                        <p>#081</p>
                    </section>
                    <section class="right">
                        <p>外卖订单</p>
                        <p>已接单待配送</p>
                    </section>
                </div>
                <div class="details">
                    <ul>
                        <li class="address">
                            <section>
                                <p class="user">官官</p>
                                <p>
                                    <mu-icon value="room"></mu-icon>
                                    <mu-icon value="call"></mu-icon>
                                </p>
                            </section>
                            <section>
                                <p>上海市浦东新区6号楼203</p>
                                <p>距离3.99km</p>
                            </section>
                        </li>
                        <li class="delivery">
                            <h3>等待门店呼叫配送</h3>
                            <mu-expansion-panel :zDepth="0">
                                <div slot="header">展开进度</div>
                                <div>
                                    <ul>
                                        <li>国定路320弄附近</li>
                                        <li>五角场附近</li>
                                        <li>百联附近</li>
                                        <li>军工路隧道附近</li>
                                        <li>金桥附近</li>
                                    </ul>
                                </div>
                            </mu-expansion-panel>
                            <mu-expansion-panel :zDepth="0">
                                <div slot="header">商品</div>
                                <div>
                                    <ul>
                                        <li>爱马仕包包 *1 200000</li>
                                        <li>劳力士 *1 200000</li>
                                        <li>比亚迪 *1 200000</li>
                                    </ul>
                                </div>
                            </mu-expansion-panel>
                        </li>
                        <li class="price">
                            <section>达达实收快递费：¥12.00</section>
                            <section>本单预计收入：¥999</section>
                        </li>
                    </ul>
                </div>
                <div class>
                    <section>
                        <h4>用餐人数：1人</h4>
                        <ul>
                            <li>
                                <label>订单号：</label>
                                <span>10005003</span>
                            </li>
                            <li>
                                <label>创建时间：</label>
                                <span>2019-01-04 18:14:22</span>
                            </li>
                            <li>
                                <label>更新时间：</label>
                                <span>2019-01-04 18:55:31</span>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <ul>
                            <li>呼叫配送</li>
                            <li>完成订单</li>
                            <li>打印订单</li>
                            <li>打印标签</li>
                        </ul>
                    </section>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
.content {
    @include standard-padding;
    @include absolute(100%, 100%, 0, auto, auto, 0);
    overflow-y: scroll;
    & > ul {
        & > li {
            @include card($base-radius, $base-radius);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: $spacing-x;
            & > div {
                @include standard-padding;
                background-color: $color-white;
                margin-bottom: $spacing-s;
                &:first-child {
                    @include card($base-radius, 0);
                }
                &:last-child {
                    @include card(0, $base-radius);
                }
                &.title {
                    @include flex-half(50%);
                    .left {
                        font-size: $text-xxxl;
                        line-height: 80px;
                    }
                    .right {
                        text-align: right;
                        color: $color-base;
                    }
                }
                &.details {
                    ul {
                        li {
                            margin-bottom: $spacing-x;
                            &.address {
                                padding-bottom: $spacing-x;
                                & > section {
                                    padding: $spacing-s 0;
                                    @include flex-half(50%);
                                    & > p.user {
                                        font-size: $text-m;
                                    }
                                    & > p:last-child {
                                        text-align: right;
                                        .mu-icon{
                                            margin-left: $spacing-s;
                                            color: $color-base;
                                        }
                                    }
                                }
                                & > section:last-child {
                                    color: $color-gray-9;
                                }
                                border-bottom: $border solid $color-gray-e;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

