<template>
    <van-tabs v-model="active">
        <van-tab v-for="el in innerList" :key="el.index" :title="el.text">
            <slot></slot>
        </van-tab>
    </van-tabs>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    props: {
        innerList: {
            type: Array
        }
    },
    watch: {
        active(e){
            this.$emit('aaa',e);
            console.log(this);
        }
    }
}
</script>

<style>
</style>
