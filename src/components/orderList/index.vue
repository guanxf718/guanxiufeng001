<template>
    <div class="content">
        <ul class="order-list">
            <li v-for="el in dataList" :key="el.index">
                <div class="title">
                    <section class="left">
                        <p>#{{el.no}}</p>
                    </section>
                    <section class="right">
                        <p>{{el._orderType}}</p>
                        <p>{{el._orderState}}</p>
                    </section>
                </div>
                <div class="details">
                    <ul>
                        <li class="address">
                            <section>
                                <p class="user">{{el.orderAddressInfo.contacterName}}</p>
                                <p>
                                    <mu-icon
                                        v-for="item in buttonList.icon"
                                        :key="item.index"
                                        :value="item.icon"
                                        @click="toOperate(item.fun)"
                                    ></mu-icon>
                                </p>
                            </section>
                            <section>
                                <p>{{el.orderAddressInfo.addres}}</p>
                                <p>距离{{el.orderAddressInfo.distance}}</p>
                            </section>
                        </li>
                        <li class="delivery">
                            <h3>等待门店呼叫配送</h3>
                            <mu-expansion-panel :zDepth="0">
                                <div slot="header">展开进度</div>
                                <div class="mark">
                                    <ul>
                                        <li v-for="_el in el.amountList" :key="_el.index">
                                            <section>{{_el.time}}</section>
                                            <section>{{_el.address}}</section>
                                        </li>
                                    </ul>
                                </div>
                            </mu-expansion-panel>
                            <mu-expansion-panel :zDepth="0">
                                <div slot="header">{{el.goodsNumber}}件商品</div>
                                <div class="goods">
                                    <ul>
                                        <li v-for="_el in el.detailList" :key="_el.index">
                                            <section>
                                                <h4>{{_el.goodsName}}</h4>
                                                <p>
                                                    <span
                                                        v-for="(__el,i) in _el.specList"
                                                        :key="__el.index"
                                                    >{{__el.specDetailDesc}}</span>
                                                </p>
                                            </section>
                                            <section>X{{_el.goodsNumber}}</section>
                                            <section>¥{{_el.goodsBasePrice}}</section>
                                        </li>
                                    </ul>
                                </div>
                            </mu-expansion-panel>
                        </li>
                        <li class="price">
                            <section v-if="el.orderType && el.expressPrice">
                                达达实收快递费：
                                <span>¥{{el.expressPrice}}</span>
                            </section>
                            <section>
                                <i>已支付</i>本单预计收入：
                                <span>¥{{el.payAmt}}</span>
                            </section>
                            <section>
                                <mu-button
                                    :color="buttonList.refund.color"
                                    @click="toOperate(buttonList.refund.fun)"
                                >{{buttonList.refund.label}}</mu-button>
                            </section>
                        </li>
                    </ul>
                </div>
                <div class="operation">
                    <section class="list">
                        <h4>用餐人数：{{el.customerNum}}人</h4>
                        <ul>
                            <li v-for="_el in el.info">
                                <label>{{_el.label}}：</label>
                                <span>{{_el.value}}</span>
                            </li>
                        </ul>
                    </section>
                    <section class="button">
                        <ul>
                            <li v-for="el in buttonList.operate" :key="el.index">
                                <mu-button :color="el.color" @click="toOperate(el.fun)">{{el.label}}</mu-button>
                            </li>
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
            dataList: [],
            buttonList: {
                operate: [
                    {
                        color: 'primary',
                        label: '呼叫配送',
                        fun: 'call'
                    },
                    {
                        color: 'success',
                        label: '完成订单',
                        fun: 'done'
                    },
                    {
                        color: 'info',
                        label: '打印订单',
                        fun: 'order',

                    },
                    {
                        color: 'secondary',
                        label: '打印标签',
                        fun: 'label'
                    }
                ],
                refund: {
                    color: 'error',
                    label: '申请退款',
                    fun: 'apply'
                },
                icon: [
                    {
                        icon: 'call',
                        fun: 'user'
                    }, {
                        icon: 'room',
                        fun: 'mark'
                    },
                ]
            }
        }
    },
    mounted() {
        this.orderList();
    },
    methods: {
        orderList() {
            let vm = this;
            let params = {};
            let data = '';
            this.$service.commonCall('orderList', params, {
                success(res) {
                    vm.dataFormat(res.data.data);
                }, failMsg: "失败"
            });
        },
        dataFormat(data) {
            let vm = this;
            data.forEach(el => {
                el.orderType = el.orderType == '1' ? false : true;
                el._orderType = el.orderType ? '外卖订单' : '堂吃订单';
                el._orderState = vm.getState(el.orderState, el.orderType);
                el.expressPrice = vm.getPrice(el.expressPrice);
                el.goodsNumber = el.detailList.length;
                el.detailList.forEach(_el => {
                    _el.specList.forEach((__el, i, self) => {
                        if (i != self.length - 1) {
                            __el.specDetailDesc = `${__el.specDetailDesc}/`;
                        }
                    });
                    _el.goodsBasePrice = vm.getPrice(_el.goodsBasePrice);
                });
                el.payAmt = vm.getPrice(el.payAmt);
                el.info = [
                    {
                        label: '订单号',
                        value: el.orderNo
                    },
                    {
                        label: '创建时间',
                        value: el.crtTm
                    },
                    {
                        label: '更新时间',
                        value: el.recUpdTm
                    }
                ]
            });
            vm.dataList = data;
        },
        getState(state, type) {
            let res = '';
            switch (state) {
                case '01':
                    res = '已接单待配送'
                    break;
                case '02':
                    res = '已收货待评价'
                    break;
                default:
                    break;
            }
            return res;
        },
        getPrice(data) {
            return (data / 100 * 1).toFixed(2);
        },
        // 按键管理中心
        toOperate(e) {
            switch (e) {
                case 'call':
                    this.callExpress();
                    break;
                case 'done':
                    this.doneOrder();
                    break;
                case 'order':
                    this.printingOrder();
                    break;
                case 'label':
                    this.printingLabel();
                    break;
                case 'user':
                    this.callUser();
                    break;
                case 'mark':
                    this.postionUser();
                    break;
                case 'apply':
                    this.applyRefund();
                    break;
                default:
                    break;
            }
        },
        callUser() {
            console.log('打电话给用户啦');
        },
        postionUser() {
            console.log('用户坐标呀');
        },
        applyRefund() {
            console.log('赶紧退我钱');
        },
        callExpress() {
            console.log('呼叫快递了呀');
        },
        doneOrder() {
            console.log('订单完成了呀');
        },
        printingOrder() {
            console.log('打印订单');
        },
        printingLabel() {
            console.log('打印标签');
        }
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
                                border-bottom: $border solid $color-gray-e;
                                & > section {
                                    @include flex-half(50%);
                                    margin-bottom: $spacing-x;
                                    & > p.user {
                                        font-size: $text-m;
                                    }
                                    & > p:last-child {
                                        text-align: right;
                                        @include float-clear;
                                        .mu-icon {
                                            margin-left: $spacing-s;
                                            color: $color-green;
                                            font-size: 40px;
                                            display: block;
                                            float: right;
                                        }
                                    }
                                }
                                & > section:last-child {
                                    color: $color-gray-9;
                                    & > p:last-child {
                                        max-width: 200px;
                                    }
                                }
                            }
                            &.delivery {
                                h3 {
                                    margin-bottom: $spacing-x;
                                }
                                .mark {
                                    ul {
                                        li {
                                            @include flex-half(50%);
                                            & > section:last-child {
                                                text-align: right;
                                            }
                                        }
                                    }
                                }
                                .goods {
                                    ul {
                                        li {
                                            @include flex-half(auto);
                                            & > section:nth-child(2) {
                                                max-width: 80px;
                                                min-width: 80px;
                                            }
                                            & > section:nth-child(3) {
                                                max-width: 160px;
                                                min-width: 160px;
                                                color: $color-base;
                                            }
                                            & > section:nth-child(2),
                                            & > section:nth-child(3) {
                                                text-align: right;
                                            }
                                            section {
                                                h4 {
                                                    font-size: $text-x;
                                                }
                                                p {
                                                    span {
                                                        color: $color-gray-9;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            &.price {
                                text-align: right;
                                section {
                                    margin-bottom: $spacing-x;
                                    font-weight: bold;
                                    span {
                                        color: $color-base;
                                    }
                                    i {
                                        @include label-i($color-green);
                                    }
                                }
                            }
                        }
                    }
                }
                &.operation {
                    & > section {
                        &.list {
                            h4 {
                                margin-bottom: $spacing-x;
                                color: $color-base;
                            }
                            ul {
                                li {
                                    color: $color-gray-9;
                                    margin-bottom: $spacing-x;
                                }
                                border-bottom: $border solid $color-gray-e;
                                margin-bottom: $spacing-x;
                            }
                        }
                        &.button {
                            ul {
                                @include flex-half(auto);
                                .mu-button {
                                    min-width: 100% !important;
                                }
                                li {
                                    margin-right: 20px;
                                    &:last-child {
                                        margin-right: 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

