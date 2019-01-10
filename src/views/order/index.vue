<template>
    <div>
        <tab-nav :inner-list="tabList" @aaa="active">aaa</tab-nav>
    </div>
</template>

<script>
import { TabNav } from "@/components";

export default {
    data() {
        return {
            active: 0,
            tabList: [
                {
                    active: 0,
                    text: '全部',
                },
                {
                    active: 1,
                    text: '进行中',
                },
                {
                    active: 2,
                    text: '已完成',
                },
                {
                    active: 3,
                    text: '已取消',
                }
            ]
        }
    },
    methods: {
        aaa() {
            console.log();
        }
    },
    components: {
        TabNav
    }
}
</script>

<style>
</style>
