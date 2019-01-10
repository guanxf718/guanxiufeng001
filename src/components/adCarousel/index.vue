<template>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in innerList" :key="item.index">
            <img :src="item">
        </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
    props: {
        innerList: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.van-swipe {
    height: 260px;
    img {
        width: 100%;
    }
}
</style>

