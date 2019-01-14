<template>
    <div class="wrapper">
        <section class="date">
            <date-input></date-input>
            <tab-nav :inner-list="navList" @acitve="changeActive"></tab-nav>
        </section>
        <section class="list">
            <order-list></order-list>
        </section>
        <section class="tabbar"></section>
    </div>
</template>

<script>
import { TabNav, OrderList, DateInput } from "@/components";

export default {
    data() {
        return {
            active: 0,
            navList: [
                {
                    active: 0,
                    text: '全部'
                },
                {
                    active: 1,
                    text: '进行中'
                },
                {
                    active: 2,
                    text: '已完成'
                },
                {
                    active: 3,
                    text: '已取消'
                }
            ]
        }
    },
    methods: {
        changeActive(e) {
            console.log(e, '拿到了就好');
        }
    },
    components: {
        TabNav, OrderList, DateInput
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    @include flex-down;
    .date {
        max-height: $order-date;
    }
    .list {
        overflow-y: hidden;
        position: relative;
    }
    .tabbar {
        max-height: $tabbar-height;
    }
}
</style>

